import FloatingHeader from "@/app/ui/landing/global/FloatingHeader";
import VolumePage from "@/app/ui/landing/archives/VolumePage";

export default function Page() {
    return <div>
        <FloatingHeader />
        <div className="mx-auto p-8 md:px-12 py-4">
            <VolumePage />
        </div>
    </div>;
}