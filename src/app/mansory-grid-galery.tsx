"use client";

import { Typography } from "@material-tailwind/react";

export default function MasonryGridGallery() {
  const data = [
    {
      imageLink:
        "https://img.playbook.com/V90zfvzhRRlAGw5hy9FfmsrXKNbW14wPNhVylFZKFZI/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzZmYWY3YTRm/LThjMTUtNGRmYy05/ZjM1LWNkMGI4YWFj/NWI0Mw",
      alt: ""
    },
    {
      imageLink:
        "https://img.playbook.com/1bnakeWUorVfx91K6DVpjkr8yMQjoLKeSuBGJ3uh-pY/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2MwZDQ2ZDU5/LTFlY2MtNDg4NC1h/OTU0LWI2MjIzZTNl/Y2Y0Zg",
      alt: "Chica 15 años en el Jardín japones de Buenos Aires"
    },
    {
      imageLink:
        "https://img.playbook.com/CNLcwfNfVFVqtkncznivAYrVA3DLTD7R4ixVq3Uds_U/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzAwYTdlZDA1/LWQyZTUtNGRiZC1h/NjkwLTY5OTc3MzU2/YTYyYQ",
      alt: "Pez Koi en Buenos Aires"
    },
  ];

  return (
    <>
      <section className="text-center">
        <Typography
          variant="h1"
          color="blue-gray"
          className="mb-4 lg:text-5xl !leading-tight text-3xl"
          >
            Album
          </Typography>
      </section>
      <section className="container mx-auto overflow-y-scroll max'h-screen">
        <div className="columns-1 gap-4 sm:columns-2 sm:gap-4 md:columns-3 lg:columns-4 [&>img:not(:first-child)]:mt-8">
          {data.map(({ imageLink, alt }, index) => (
            <img
              key={index}
              className="h-auto max-w-full rounded-lg"
              src={imageLink}
              alt={alt || ""}
            />
          ))}
        </div>
      </section>
    </>
  );
}