"use client";

import { publications } from "@/app/data/data";
import { DocumentIcon } from "@heroicons/react/24/outline";
import { usePathname } from 'next/navigation';
import { Breadcrumb } from 'antd';
import { deslugify } from "@/app/lib/utils";

export default function JournalPage() {
    const pathname = usePathname();

    const journal = publications.find(publication => publication.link === pathname);

    if (!journal) {
        return <div className="border border-gray-300 rounded-xl">
            <h2 className="text-2xl font-bold mb-4">
                Journal Not Found
            </h2>
        </div>;
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
                        title: journal.title,

                    }
                ]}
                className="mb-3"
            />
            <div className="border border-gray-300 rounded-xl p-4 md:p-8">
                <h2 className="text-2xl font-bold mb-4">
                    {journal.title}
                </h2>
                <div className="h-[0.7px] w-16 bg-gray-800 mb-8"></div>
                <div className="flex flex-col md:flex-row justify-between items-center">
                    <div>
                        <p><span className='font-semibold'>Volume:</span> {journal.volume}, <span className='font-semibold'>Issue:</span> {journal.issue}, <span className='font-semibold'>Publish date:</span> {journal.publishDate}</p>
                        <p className="my-1"><span className='font-semibold'>Publisher name: </span>JOSTUM JOURNAL OF ENGINEERING</p>
                        <p className="my-1"><span className='font-semibold'>Views:</span> <span className='text-blue-500'>{journal.views}</span>, <span className='font-semibold'>Downloads:</span> <span className='text-blue-500'>{journal.downloads}</span></p>
                    </div>
                    <button
                        className="flex items-center justify-center rounded-lg bg-blue-500 hover:bg-blue-600 px-6 py-3 text-white text-sm font-semibold transition-colors duration-300 ease-in-out shadow-md my-4 md:my-0"
                    >

                        <DocumentIcon className="h-5 w-5 mr-2" />
                        <span>Download PDF</span>
                    </button>
                </div>
                <h3 className="text-xl font-bold mt-4 mb-1">Authors</h3>
                <p>{journal.author}</p>
                <h3 className="text-xl font-bold my-1">Abstract</h3>
                <p>{journal.abstract}</p>
                <h3 className="text-xl font-bold my-1">Keywords</h3>
                <p>{journal.keywords}</p>
            </div>
        </div>

    );
}