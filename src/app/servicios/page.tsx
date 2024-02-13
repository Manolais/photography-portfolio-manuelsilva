import { Navbar, Footer } from "@/components";
import Resume from "./modalidad";
import ServiciosGrid from "./servicios-grid";

//sections
export default function Page() {
  return (
    <>
      <Navbar />
      <Resume />
      <ServiciosGrid />
      <Footer />
    </>
  )
}