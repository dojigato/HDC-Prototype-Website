import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import PromoBanners from "@/components/PromoBanners";
import Insurance from "@/components/Insurance";
import Services from "@/components/Services";
import About from "@/components/About";
import Team from "@/components/Team";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import BookingCTA from "@/components/BookingCTA";
import FAQ from "@/components/FAQ";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <PromoBanners />
        <Insurance />
        <Services />
        <About />
        <Team />
        <Testimonials />
        <Contact />
        <BookingCTA />
        <FAQ />
      </main>
      <Footer />
    </>
  );
}
