"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Category, Publication } from '@/app/lib/definitions';
import { Breadcrumb } from 'antd';
import { deslugify, formatDate, slugify } from '@/app/lib/utils';
import api from '@/app/services/api';

const CategoryPage = () => {
    const pathname = usePathname();
    const [categories, setCategories] = useState<Category[]>([]);
    const [publications, setPublications] = useState<Publication[]>([]);

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const categoriesResponse = await api.get<Category[]>('/categories');
                setCategories(categoriesResponse.data);
            } catch (error) {
                console.error('Error fetching categories:', error);
            }
        };

        fetchCategories();
    }, []);

    // Fetch publications whenever the pathname changes
    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const categoryName = deslugify(pathname.split('/')[2] || 'category');
                const category = categories.find(category => category.name === categoryName);

                if (category) {
                    const publicationsResponse = await api.get<Publication[]>(`/get-publications?category=${category.id}`);
                    setPublications(publicationsResponse.data);
                } else {
                    console.error(`Category '${categoryName}' not found.`);
                }
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        if (categories.length > 0) {
            fetchPublications();
        }
    }, [pathname, categories]);

    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: 'Journals',
                        href: '/journals'
                    },
                    {
                        title: deslugify(pathname.split('/')[2] || 'category'),
                    },
                ]}
                className="mb-3"
            />
            <h2 className="text-2xl font-bold mb-4">
                {deslugify(pathname.split('/')[2] || 'category')} Publications
            </h2>
            <div className="border border-gray-300 rounded-xl flex flex-col md:flex-row">
                {/* Sidebar with categories */}
                <div className="w-full md:w-1/4 border-r border-gray-300">
                    <h2 className="text-lg font-semibold mx-6 mt-6 mb-4">Categories</h2>
                    <ul>
                        {categories.map((category) => (
                            <li key={category.id} className="border-b">
                                <Link href={`/journals/${slugify(category.name)}`}>
                                    <div className={`px-6 py-2 block hover:bg-blue-300 ${(`/journals/${slugify(category.name)}`) === pathname ? 'bg-blue-500 text-white' : 'text-gray-800'}`}>
                                        {category.name}
                                    </div>
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Content area with publications */}
                <div className="w-full md:w-3/4 p-4">
                    <div>
                        <ul>
                            {publications.map((publication) => (
                                <li key={publication.id} className="pb-6 mt-4 border-b border-gray-300">
                                    <Link href={`${pathname}/${publication.id}`}>
                                        <div className="text-blue-800 font-bold text-lg">{publication.title}</div>
                                    </Link>
                                    <p>Publish date: {formatDate(publication.publishDate)}</p>
                                    <p>Views: <span className='text-blue-500'>{publication.views}</span>, Downloads: <span className='text-blue-500'>{publication.downloads}</span>, Volume: <span className='text-blue-500'>{publication.volume}</span>, Issue: <span className='text-blue-500'>{publication.issue}</span></p>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default CategoryPage;
