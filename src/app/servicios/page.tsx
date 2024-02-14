import { Navbar, Footer } from "@/components";
import Resume from "./modalidad";
import ServiciosGrid from "./servicios-grid";
import ContactForm from "../contact-form";
//sections
export default function Page() {
  return (
    <>
      <Navbar />
      <Resume />
      <ServiciosGrid />
      <ContactForm />
      <Footer />
    </>
  )
}