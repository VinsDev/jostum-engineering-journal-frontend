import CategoryPage from "@/app/ui/landing/journals/CategoryPage";
import FloatingHeader from "@/app/ui/landing/global/FloatingHeader";

export default function Page() {

    return <div>
        <FloatingHeader />
        <div className="mx-auto p-8 md:px-12 py-4">
            <CategoryPage />
        </div>
    </div>;
} 