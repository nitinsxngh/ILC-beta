import About from "@/components/About";
import Hero from "@/components/Hero";
import Companies from '@/components/Companies';
import Services from '@/components/Services';
import Reports from "@/components/Reports";
import LenisScroll from '@/components/ui/LenisScroll';
import Works from "@/components/Works";
import Testimonial from "@/components/Testimonial";
import Steps from "@/components/Steps";
import Abroad from "@/components/Abroad";
import Founder from "@/components/Founder/Founder";



export default function Home() {
  return (
    <main className='flex relative min-h-screen flex-col items-center justify-between overflow-x-hidden'>
      <LenisScroll />
      <Hero />
      {/* <Companies /> */}
      <About />
      <Founder />
      <Reports />
      {/* <Services /> */}
      {/* <Abroad /> */}
      <Steps />
      <Testimonial />
    </main>
  );
}
