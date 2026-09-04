import Hero from '../components/Hero';
import RecentWork from '../components/RecentWork';
import WhyAtey from '../components/WhyAtey';
import CommissionProcess from '../components/CommissionProcess';
import AboutPreview from '../components/AboutPreview';
import Testimonials from '../components/Testimonials';
import FinalCTA from '../components/FinalCTA';

export default function HomePage() {
  return (
    <>
      <Hero />
      <RecentWork />
      <WhyAtey />
      <CommissionProcess />
      <AboutPreview />
      <Testimonials />
      <FinalCTA />
    </>
  );
}
