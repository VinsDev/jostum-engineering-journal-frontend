"use client";

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { publications } from '@/app/data/data';
import { VolumePageProps } from '@/app/lib/definitions';
import { Breadcrumb } from 'antd';


const VolumePage: React.FC<VolumePageProps> = ({ volumes }) => {
    const pathname = usePathname();

    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: 'Archives',
                        href: '/archives'
                    },
                    {
                        title: (volumes.find(volume => volume.link === pathname) || { name: '' }).name,
                    },
                ]}
                className="mb-3"
            />
            <h2 className="text-2xl font-bold mb-4">
                {(volumes.find(volume => volume.link === pathname) || { name: '' }).name} Publications
            </h2>
            <div className="border border-gray-300 rounded-xl flex flex-col md:flex-row">
                {/* Sidebar with volumes */}
                <div className="w-full md:w-1/4 border-r border-gray-300">
                    <h2 className="text-lg font-semibold mx-6 mt-6 mb-4">Volumes</h2>
                    <ul>
                        {volumes.map((volume, index) => (
                            <li key={index} className="border-b ">
                                <Link href={volume.link}>
                                    <div className={`px-6 py-2 block hover:bg-blue-300 ${volume.link === pathname ? 'bg-blue-500 text-white' : 'text-gray-800'}`}>
                                        {volume.name}
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
                            {publications.map((publication, index) => (
                                <li key={index} className="pb-6 mt-4 border-b border-gray-300">
                                    <Link href={publication.link}>
                                        <div className="text-blue-800 font-bold text-lg">{publication.title}</div>
                                    </Link>
                                    <p>Publish date: {publication.publishDate}</p>
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

export default VolumePage;
