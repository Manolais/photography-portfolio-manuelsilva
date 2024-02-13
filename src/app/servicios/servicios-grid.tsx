"use client";

export default function ServiciosGrid() {
  return (
    <>
    <div className="grid grid-cols-1 gap-4 container mx-auto pl-5 pr-5 lg:pl-0 lg:pr-0">
      <div className="grid grid-cols-1 lg:grid-cols-55/45 mb-10 gap-8  align-center">
        <div className="rounded-lg imgWrapper">
          <img 
            className="rounded-lg" 
            src="https://img.playbook.com/OaGCMiVG01KK9eGXmzPnAUoQC5qZTdfi12iWPRxRgyM/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljL2ZkYmIyYjFi/LWE3NGEtNGJiMi05/ZDY5LWM3MGY0MjM5/YzM5Mg" 
            alt="" 
          />
        </div>
        <div>
          <h1 className="text-3xl font-bold">En locación</h1>
          <h2>Fotografía</h2>
          <p className="pt-6 pb-6 text-lg">
            ¿Querés fotos profesionales en lugares que te importan en el Área Metropolitana de Buenos Aires? Con movilidad incluida, puedo adaptarme a tu locación preferida para capturar momentos auténticos y memorables. Contáctame para reservar tu sesión.
          </p>
        </div>
      </div>
      <div>
      <div className="grid grid-cols-1 lg:grid-cols-45/55 h-30vh gap-8 align-center overflow-hidden">
        <div className="lg:order-2 imgWrapper">
          <img
            className="rounded-lg"
            src="https://img.playbook.com/fYemKDZefIRgr1M5cX4W577N5nQhpuGywh4eneadxqU/Z3M6Ly9wbGF5Ym9v/ay1hc3NldHMtcHVi/bGljLzhlYTljZjNm/LTg5YjUtNDY4OC04/MmI1LTZlYTI2NGJk/ZTAxOQ" 
            alt="" 
          />
        </div>
        <div className="lg:text-right">
          <h1 className="text-3xl font-bold">En estudio</h1>
          <h2>Fotografía</h2>
          <p className="pt-6 pb-6 text-lg">
          ¡Obtén retratos profesionales en estudio ubicado en La Plata! Con un ambiente controlado y equipos de calidad, capturaremos tus momentos con claridad y estilo. Agenda tu sesión hoy para obtener imágenes impresionantes que resalten tu mejor versión.
          </p>
        </div>
      </div>
      </div>
    </div>
    </>
  )
}