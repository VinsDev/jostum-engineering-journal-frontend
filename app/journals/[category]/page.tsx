import CategoryPage from "@/app/ui/landing/journals/CategoryPage";
import FloatingHeader from "@/app/ui/landing/global/floating-header";
import { categories } from "@/app/data/data";

export default function Page() {
    return <div>
        <FloatingHeader />
        <div className="mx-auto px-12 py-4">
            <CategoryPage categories={categories} />
        </div>
    </div>;
}