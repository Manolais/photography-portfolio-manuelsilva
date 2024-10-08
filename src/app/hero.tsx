"use client";

import Image from "next/image";
import { Input, Button, Typography } from "@material-tailwind/react";

function Hero() {
  return (
    <header className="bg-white p-8">
      <div className="container mx-auto grid h-full gap-10 min-h-[60vh] w-full grid-cols-1 items-center lg:grid-cols-2">
        <div className="row-start-2 lg:row-auto">
          <Typography
            variant="h1"
            color="blue-gray"
            className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Bienvenido a mi <br /> Portafolio de Fotografía!
          </Typography>
          <Typography
            variant="lead"
            className="mb-4 !text-gray-500 md:pr-16 xl:pr-28"
          >
            Me llamo Manuel Silva y soy un fotógrafo argentino, acá podrás
            ver una parte de mi trabajo y mi trayecto en el sector,
            donde podés ver mi parte creativa o contratar mi servicio.
          </Typography>
        </div>
        <Image
          width={1024}
          height={1024}
          alt="team work"
          src="https://img.playbook.com/OCdIC1c9zxKprLPHobvVPt0TG_V5Ieobg1ARMCa9quE/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzNiMGJmNTMx/LWYxMmMtNGM2MC05/ZmI0LWQzZmE4ODhl/MzVlYg"
          className="max-h-full max-w-auto rounded-xl object-cover"
        />
      </div>
    </header>
  );
}

export default Hero;
