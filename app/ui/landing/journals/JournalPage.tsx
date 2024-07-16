"use client";

import { DocumentIcon } from "@heroicons/react/24/outline";
import { useParams, usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';
import { deslugify, formatDate, handleUpdateDownloads } from "@/app/lib/utils";
import { useEffect, useState } from "react";
import { Publication } from "@/app/lib/definitions";
import api from "@/app/services/api";

export default function JournalPage() {
    const pathname = usePathname();

    const { id } = useParams();
    const [publication, setPublication] = useState<Publication | null>(null);

    const fetchPublication = async () => {
        try {
            const response = await api.get<Publication>(`/get-publication/${id}`);
            setPublication(response.data);
        } catch (error) {
            console.error('Error fetching publication:', error);
        }
    };

    useEffect(() => {
        fetchPublication();
    }, [id]);

    const handleDownloadClick = async (publicationId: string) => {
        try {
            await handleUpdateDownloads(publicationId);
            await fetchPublication();
        } catch (error) {
            console.error('Error updating downloads:', error);
        }
    };

    if (!publication) {
        return <div>Loading...</div>;
    }

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
                        href: pathname.split('/').slice(0, 3).join('/'),
                    },
                    {
                        title: publication.title,

                    }
                ]}
                className="mb-6"
            />
            <div className="border border-gray-300 rounded-xl p-4 md:p-8">
                <h2 className="text-2xl font-bold mb-4">
                    {publication.title}
                </h2>
                <div className="h-[0.7px] w-16 bg-gray-800 mb-6 mt-2"></div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <p><span className='font-semibold'>Volume:</span> {publication.volume}, <span className='font-semibold'>Issue:</span> {publication.issue}, <span className='font-semibold'>Publish date:</span> {formatDate(publication.publishDate)}</p>
                        <p className="my-1"><span className='font-semibold'>Publisher name: </span>JOSTUM JOURNAL OF ENGINEERING</p>
                        <p className="my-1"><span className='font-semibold'>Views:</span> <span className='text-blue-500'>{publication.views}</span>, <span className='font-semibold'>Downloads:</span> <span className='text-blue-500'>{publication.downloads}</span></p>
                    </div>
                    <a onClick={((e) => { handleDownloadClick(publication.id) })}
                        className="flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white text-sm font-semibold transition-colors duration-300 ease-in-out shadow-md my-4 md:my-0" href={`${'http://localhost:3001'}/download-publication/${publication.id}`}
                    >
                        <DocumentIcon className="h-5 w-5 mr-2" />
                        <span>Download PDF</span>
                    </a>

                </div>
                <h3 className="text-xl font-bold mt-4 mb-1">Authors</h3>
                <p>{publication.author}</p>
                <h3 className="text-xl font-bold my-1">Abstract</h3>
                <p>{publication.abstract}</p>
                <h3 className="text-xl font-bold my-1">Keywords</h3>
                <p>{publication.keywords}</p>
            </div>
        </div>

    );
}