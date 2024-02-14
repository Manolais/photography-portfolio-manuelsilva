"use client";

import {
  Typography,
  Card,
  CardBody,
  Radio,
  Input,
  Textarea,
  Button,
  IconButton,
} from "@material-tailwind/react";
import Link from "next/link";
import { EnvelopeIcon, PhoneIcon, TicketIcon, UserPlusIcon} from "@heroicons/react/24/solid";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram, faSquareInstagram, faFacebook, faGithub } from "@fortawesome/free-brands-svg-icons";

export function ContactForm() {
  return (
    <section className="px-8 py-16">
      <div className="container mx-auto mb-20 text-center">
        <Typography variant="h1" color="blue-gray" className="mb-4">
          Contáctame
        </Typography>
        <Typography
          variant="lead"
          className="mx-auto w-full lg:w-5/12 !text-gray-500"
        >
          ¿Listo para empezar? Puedes contactarme a través de este formulario,
          empecemos a trabajar juntos y cumplamos nuestros objetivos.
        </Typography>
      </div>
      <div>
        <Card shadow={true} className="container mx-auto border border-gray/50">
          <CardBody className="grid grid-cols-1 lg:grid-cols-7 md:gap-10">
            <div className="w-full col-span-3 rounded-lg h-full py-8 p-5 md:p-16 bg-gray-900">
              <Typography variant="h4" color="white" className="mb-2">
                Información de contacto
              </Typography>
              <Typography
                variant="lead"
                className="mx-auto mb-8 text-base !text-gray-500"
              >
                Llena el formulario para ponernos en contacto.
              </Typography>
              <div className="flex gap-5">
                <PhoneIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  +54 9 (221) 364-6990
                </Typography>
              </div>
              <div className="flex my-2 gap-5">
                <EnvelopeIcon className="h-6 w-6 text-white" />
                <Typography variant="h6" color="white" className="mb-2">
                  bsasmanuelsilva@gmail.com
                </Typography>
              </div>
              <div className="flex gap-5">
                <Link target="_blank" href="https://www.instagram.com/manus.ph/" className="flex gap-5">
                  <FontAwesomeIcon icon={faSquareInstagram} className="h-6 w-6 text-2xl text-white"/>
                  <Typography variant="h6" color="white" className="mb-2">
                    @manus.ph
                  </Typography>
                </Link>
              </div>
            </div>
            <div className="w-full mt-8 md:mt-0 md:px-10 col-span-4 h-full p-5">
              <form action="mailto:bsasmanuelsilva@gmail.com" method="post" encType="text/plain">
                <div className="mb-8 grid gap-4 lg:grid-cols-2">
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Nombre"
                    name="first-name"
                    placeholder="ej. Lucas"
                    containerProps={{
                      className: "!min-w-full mb-3 md:mb-0",
                    }}
                  />
                  <Input
                    color="gray"
                    size="lg"
                    variant="static"
                    label="Apellido"
                    name="last-name"
                    placeholder="ej. Gonzáles"
                    containerProps={{
                      className: "!min-w-full",
                    }}
                  />
                </div>
                <Input
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Email"
                  name="first-name"
                  placeholder="ej. lucas@mail.com"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <Textarea
                  color="gray"
                  size="lg"
                  variant="static"
                  label="Tu Mensaje"
                  name="first-name"
                  containerProps={{
                    className: "!min-w-full mb-8",
                  }}
                />
                <div className="w-full flex justify-end">
                  <Button className="w-full md:w-fit" color="gray" size="md" type="submit">
                    Enviar Mensaje
                  </Button>
                </div>
              </form>
            </div>
          </CardBody>
        </Card>
      </div>
    </section>
  );
}

export default ContactForm;
