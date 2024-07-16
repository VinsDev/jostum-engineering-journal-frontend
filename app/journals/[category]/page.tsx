"use client"

import CategoryPage from "@/app/ui/landing/journals/CategoryPage";
import FloatingHeader from "@/app/ui/landing/global/floating-header";
import { useEffect, useState } from "react";
import { Category } from "@/app/lib/definitions";
import api from "@/app/services/api";

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
        <div className="mx-auto px-12 py-4">
            <CategoryPage categories={categories} />
        </div>
    </div>;
}