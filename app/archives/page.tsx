import Link from 'next/link';
import FloatingHeader from "../ui/landing/global/floating-header";
import { volumes } from '../data/data';


export default function Page() {
    return <div>
        <FloatingHeader />
        <div className="mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Volumes</h1>
            <div className="border border-gray-300 rounded grid grid-cols-1 md:grid-cols-3 gap-2">
                {volumes.map((volume, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <Link href={volume.link}>
                            <div className="block p-4 hover:bg-gray-100 transition">
                                {volume.name}
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>;
}