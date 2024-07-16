import JournalPage from "@/app/ui/landing/journals/JournalPage";
import FloatingHeader from "@/app/ui/landing/global/FloatingHeader";

export default function Page() {
    return <div>
        <FloatingHeader />
        <div className="mx-auto px-4 md:px-12 py-4">
            <JournalPage />
        </div>
    </div>;
}