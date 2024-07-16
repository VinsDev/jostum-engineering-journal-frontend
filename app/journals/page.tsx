"use client";

import Link from 'next/link';
import FloatingHeader from "../ui/landing/global/floating-header";
import { useEffect, useState } from 'react';
import api from '../services/api';
import { Category } from '../lib/definitions';
import { slugify } from '../lib/utils';


export default function Page() {
    const [categories, setCategories] = useState<Category[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/categories');
                setCategories(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);

    return <div>
        <FloatingHeader />
        <div className="mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Journal Categories</h1>
            <div className="border border-gray-300 rounded grid grid-cols-1 md:grid-cols-3 gap-2">
                {categories.map((category, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <Link href={`/journals/${slugify(category.name)}`}>
                            <div className="block p-4 hover:bg-gray-100 transition">
                                {category.name}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>;
}





