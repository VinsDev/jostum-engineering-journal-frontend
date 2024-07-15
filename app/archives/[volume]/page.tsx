import FloatingHeader from "@/app/ui/landing/global/floating-header";
import { volumes } from "@/app/data/data";
import VolumePage from "@/app/ui/landing/archives/VolumePage";

export default function Page() {
    return <div>
        <FloatingHeader />
        <div className="mx-auto px-12 py-4">
            <VolumePage volumes={volumes} />
        </div>
    </div>;
}