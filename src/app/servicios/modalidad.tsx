"use client";

import { Typography, Button } from "@material-tailwind/react";
import {
  ChartBarIcon,
  PuzzlePieceIcon,
  CursorArrowRaysIcon,
  ArrowRightIcon,
  PhoneIcon,
  BookOpenIcon,
  TruckIcon,
  ClockIcon,
  PencilIcon
} from "@heroicons/react/24/solid";
import { ResumeItem } from "@/components";

const RESUME_ITEMS = [
  {
    icon: PhoneIcon,
    children: "COMUNICACIÓN CON EL CLIENTE: Discutir locación, conceptos, maquillaje y outfits. (1-2 horas)",
  },
  {
    icon: BookOpenIcon,
    children: "CREACIÓN DE UN MOODBOARD: Buscar inspiración y referencias con ejemplos claros de lo que queremos lograr el día de la sesión. (1-2 horas) ",
  },
  {
    icon: TruckIcon,
    children: "TRANSPORTACIÓN A LA LOCACIÓN: En la mayoría de los casos, las locaciones para la sesión están situadas en zonas concurridas o túristicas a las que toma tiempo llegar, especialmente en ciudades grandes",
  },
  {
    icon: ClockIcon,
    children: "TIEMPO DE LA SESIÓN: El tiempo mínimo de una sesión regular es 1 hora",
  },
  {
    icon: PencilIcon,
    children: "SELECCIÓN Y EDICIÓN DE FOTOS: Este proceso incluye retoque de piel, corrección de luz y color y re encuadre de cada una de las fotografias, puede durar entre 3-6 horas, incluso más, dependiendo del tipo de fotografía y la cantidad",
  },
];

export function Resume() {
  return (
    <section className="px-8 py-24">
      <div className="container mx-auto grid w-full grid-cols-1  gap-16 lg:grid-cols-2">
        <div className="col-span-1">
          <Typography variant="h2" color="blue-gray">
            Mi modalidad de trabajo
          </Typography>
          <Typography className="mb-4 mt-3 w-9/12 font-normal !text-gray-500">
            Esta es la modalidad con la que trabajo, donde vamos a
            poder discutir una orientacion y una guia de la sesion,
            así yo puedo comprender lo que esperás de la sesion y vos
            podés entender como va a ser llevada a cabo.
          </Typography>
        </div>
        <div className="col-span-1 grid gap-y-6 lg:ml-auto pr-0 lg:pr-12 xl:pr-32">
          {RESUME_ITEMS.map((props, idx) => (
            <ResumeItem key={idx} {...props} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Resume;
