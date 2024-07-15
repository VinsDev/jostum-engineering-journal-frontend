import Link from 'next/link';
import React from 'react';
import { publications } from '@/app/data/data'; // Adjust the path based on your project structure

const RecentPublications = () => {
    // Slice the publications array to display only the first 6 items
    const recentPublications = publications.slice(0, 6);

    return (
        <div className="container mx-auto p-6">
            <h1 className="text-4xl font-semibold text-center text-gray-800 mb-12">Recent Publications</h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                {recentPublications.map((publication, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 p-6">
                        <h2 className="text-2xl font-semibold mb-2">{publication.title}</h2>
                        <p className="text-gray-600 mb-4">by {publication.author} on {publication.publishDate}</p>
                        <p className="text-gray-800 mb-6">{publication.abstract}</p>
                        <Link href={publication.link}>
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
