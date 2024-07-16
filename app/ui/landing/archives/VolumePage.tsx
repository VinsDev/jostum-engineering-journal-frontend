"use client";

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';
import { Publication, Volume } from '@/app/lib/definitions';
import api from '@/app/services/api';
import { deslugify, formatDate, handleUpdateViews } from '@/app/lib/utils';


const VolumePage = () => {
    const pathname = usePathname();
    const [volumes, setVolumes] = useState<Volume[]>([]);
    const [publications, setPublications] = useState<Publication[]>([]);

    // Fetch categories on component mount
    useEffect(() => {
        const fetchCategories = async () => {
            try {
                const volumesResponse = await api.get<Volume[]>('/volumes');
                setVolumes(volumesResponse.data);
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
                const volumeNumber: number = Number(deslugify(pathname.split('/')[2].split('-')[1] || '1'));
                const volume = volumes.find(volume => volume.number === volumeNumber);

                if (volume) {
                    const publicationsResponse = await api.get<Publication[]>(`/get-publications?volume=${volume.number}`);
                    setPublications(publicationsResponse.data);
                } else {
                    console.error(`Volume '${volumeNumber}' not found.`);
                }
            } catch (error) {
                console.error('Error fetching publications:', error);
            }
        };

        if (volumes.length > 0) {
            fetchPublications();
        }
    }, [pathname, volumes]);

    return (
        <div>
            <Breadcrumb
                items={[
                    {
                        title: 'Archives',
                        href: '/archives'
                    },
                    {
                        title: deslugify(pathname.split('/')[2] || 'volume'),
                    },
                ]}
                className="mb-3"
            />
            <h2 className="text-2xl font-bold mb-4">
                {deslugify(pathname.split('/')[2] || 'volume')} Publications
            </h2>
            <div className="border border-gray-300 rounded-xl flex flex-col md:flex-row">
                {/* Sidebar with volumes */}
                <div className="w-full md:w-1/4 border-r border-gray-300">
                    <h2 className="text-lg font-semibold mx-6 mt-6 mb-4">Volumes</h2>
                    <ul>
                        {volumes.map((volume, index) => (
                            <li key={index} className="border-b ">
                                <Link href={`/journals/volume-${volume.number}`}>
                                    <div className={`px-6 py-2 block hover:bg-blue-300 ${(`/archives/volume-${volume.number}`) === pathname ? 'bg-blue-500 text-white' : 'text-gray-800'}`}>
                                        Volume {volume.number} ({volume.year})
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
                                    <Link onClick={(e) => handleUpdateViews(publication.id)} href={`${pathname}/${publication.id}`}>
                                        <div className="text-blue-800 font-bold text-lg">{publication.title}</div>
                                    </Link>
                                    <p>Publish date: {formatDate(publication.publishDate)}</p>
                                    <p>Views: <span className='text-blue-500'>{publication.views}</span>, Downloads: <span className='text-blue-500'>{publication.downloads}</span>, Volume: <span className='text-blue-500'>Volume {publication.volume_number}</span>, Issue: <span className='text-blue-500'>{publication.issue}</span></p>
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
