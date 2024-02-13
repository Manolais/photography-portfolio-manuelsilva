// components
import { Navbar, Footer } from "@/components";

// sections
import Hero from "./hero";
import ContactForm from "./contact-form";
import MasonryGridGallery from "./mansory-grid-galery";

export default function Portfolio() {
  return (
    <>
      <Navbar />
      <Hero />
      <MasonryGridGallery />
      {/* <Clients /> */}
      {/* <Skills /> */}
      {/* <Projects /> */}
      {/* <Resume /> */}
      {/* <Testimonial /> */}
      {/* <PopularClients /> */}
      <ContactForm />
      <Footer />
    </>
  );
}
