import { Navbar, Footer } from "@/components";
import Hero from "../hero";
import Clients from "../clients";
import Skills from "../skills";
import Projects from "../projects";
import Resume from "../resume";
import Testimonial from "../testimonial";
import PopularClients from "../popular-clients";
import ContactForm from "../contact-form";
import FeaturedImageGallery from "../featured-galery";
import MasonryGridGallery from "../mansory-grid-galery";

//sections
export default function Page() {
  return (
    <>
      <Navbar />
      <Resume />
      <Footer />
    </>
  )
}