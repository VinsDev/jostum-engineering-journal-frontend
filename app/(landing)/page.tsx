import FloatingHeader from '../ui/landing/global/FloatingHeader';
import RecentPublications from '../ui/landing/home/RecentPublications';
import Hero from '../ui/landing/home/Hero';
import CollaborativePlatform from '../ui/landing/home/CollaborativePlatform';
import SeamlessSubmission from '../ui/landing/home/SeamlessSubmission';
import EditorialTeam from '../ui/landing/home/EditorialTeam';
import { Metadata } from 'next';
import RichCollection from '../ui/landing/home/RichCollection';
import Spotlight from '../ui/landing/home/Spotlight';
 
export const metadata: Metadata = {
  title: 'JOSTUM JOURNAL OF ENGINEERING',
};

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col">
      <Spotlight>
      <div className='relative bg-gradient-to-br from-white via-gold-300 to-blue-600'>
        <FloatingHeader />
        <Hero />
      </div>
    </Spotlight>
      <RecentPublications />
      <RichCollection />
      <CollaborativePlatform />
      <SeamlessSubmission />
      <EditorialTeam />
    </main>
  );
}
