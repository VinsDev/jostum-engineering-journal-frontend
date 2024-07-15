import Link from 'next/link';
import FloatingHeader from "../ui/landing/global/floating-header";
import { categories } from '../data/data';


export default function Page() {
    return <div>
        <FloatingHeader />
        <div className="mx-auto p-8">
            <h1 className="text-2xl font-bold mb-4">Journal Categories</h1>
            <div className="border border-gray-300 rounded grid grid-cols-1 md:grid-cols-3 gap-2">
                {categories.map((category, index) => (
                    <div key={index} className="border-b border-gray-300">
                        <Link href={category.link}>
                            <div className="block p-4 hover:bg-gray-100 transition">
                                {category.name} ({category.count})
                            </div>
                        </Link>
                    </div>
                ))}
            </div>
        </div>
    </div>;
}





