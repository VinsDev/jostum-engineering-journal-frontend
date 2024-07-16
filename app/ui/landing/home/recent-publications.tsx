"use client";

import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import { Publication } from '@/app/lib/definitions';
import api from '@/app/services/api';
import { formatDate, slugify } from '@/app/lib/utils';

const RecentPublications = () => {
    const [publications, setPublications] = useState<Publication[]>([]);


    useEffect(() => {
        const fetchPublications = async () => {
            try {
                const publicationsResponse = await api.get<Publication[]>(`/get-publications`);
                setPublications(publicationsResponse.data);

            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        fetchPublications();
    }, []);

    if (!publications) {
        return <div>Loading...</div>;
    }

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">Recent Publications</h1>
            <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-4 gap-4">
                {publications.map((publication, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                        <h2 className="text-lg font-bold">
                            {publication.title}
                        </h2>
                        <div>
                            <p>Author(s): {publication.author}</p>
                            <p><span className='font-medium'>Volume:</span> Volume {publication.volume_number}, <span className='font-medium'>Issue:</span> {publication.issue}, <span className='font-medium'>Publish date:</span> {formatDate(publication.publishDate)}</p>
                            <p className=""><span className='font-medium'>Views:</span> <span className='text-blue-500'>{publication.views}</span>, <span className='font-medium'>Downloads:</span> <span className='text-blue-500'>{publication.downloads}</span></p>
                        </div>
                        <Link href={`/journals/${slugify(publication.category_name)}/${publication.id}`}>
                            <div className="text-blue-500 hover:text-blue-700 font-medium">
                                Open &gt;&gt;
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
            <div className="container mx-auto p-6">
                <div className="flex justify-center">
                    <Link
                        href="/journals"
                        className="inline-flex items-center justify-center rounded-full bg-white border border-blue-500 hover:bg-blue-100 px-6 py-3 text-blue-500 text-sm font-medium transition-colors duration-300 ease-in-out shadow-md"
                    >
                        <span>Explore Journals</span>
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default RecentPublications;
