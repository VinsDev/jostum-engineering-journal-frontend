import FloatingHeader from '../ui/landing/global/floating-header';
import RecentPublications from '../ui/landing/home/recent-publications';
import Hero from '../ui/landing/home/Hero';
import CollaborativePlatform from '../ui/landing/home/CollaborativePlatform';
import SeamlessSubmission from '../ui/landing/home/SeamlessSubmission';
import EditorialTeam from '../ui/landing/home/EditorialTeam';
import { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'JOSTUM JOURNAL OF ENGINEERING',
};

export default function Page() {

  return (
    <main className="flex min-h-screen flex-col">
      <div className='bg-gradient-to-br from-white via-gold-300 to-blue-500'>
        <FloatingHeader />
        <Hero />
      </div>
      <RecentPublications />
      <CollaborativePlatform />
      <SeamlessSubmission />
      <EditorialTeam />
    </main>
  );
}
