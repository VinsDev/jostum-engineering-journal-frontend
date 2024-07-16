"use client";

import Link from 'next/link';
import FloatingHeader from "../../ui/landing/global/FloatingHeader";
import { useEffect, useState } from 'react';
import { Volume } from '../../lib/definitions';
import api from '../../services/api';


export default function Page() {
    const [volumes, setVolumes] = useState<Volume[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get('/volumes');
                setVolumes(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    }, []);
    return <div>
        <FloatingHeader />
        <div className="mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Volumes</h1>
            <div className="border border-gray-300 rounded grid grid-cols-1 md:grid-cols-3 gap-2">
                {volumes.map((volume, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <Link href={`/archives/volume-${volume.number}`}>
                            <div className="block p-4 hover:bg-gray-100 transition">
                                Volume {volume.number} ({volume.year})
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>;
}