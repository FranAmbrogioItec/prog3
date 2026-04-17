import Link from 'next/link';

export default async function DetallePropiedad({ params }) {
  const { id } = await params;

  // Base de datos simulada (coincide con los IDs de propiedades/page.js)
  const baseDeDatos = {
    '101': {
      nombre: 'Torre Libertad',
      ubicacion: 'Barrio General Paz',
      precio: 'Desde USD 85.000',
      descripcion: 'Exclusivo desarrollo inmobiliario que combina diseño vanguardista con funcionalidad. Ideal tanto para inversores como para primera vivienda. Cuenta con terminaciones de primera calidad, aberturas DVH y pisos de porcelanato.',
      amenities: ['Piscina infinita', 'SUM equipado', 'Gimnasio', 'Seguridad 24hs'],
      estado: 'Terminado'
    },
    '102': {
      nombre: 'Edificio Los Álamos',
      ubicacion: 'Nueva Córdoba',
      precio: 'Desde USD 60.000',
      descripcion: 'Proyecto en pozo con excelente rentabilidad proyectada. Ubicado estratégicamente a metros de Ciudad Universitaria, pensado específicamente para el público estudiantil y joven profesional.',
      amenities: ['Terraza con asadores', 'Bicicletero', 'Coworking space'],
      estado: 'En pozo'
    }
  };

  const propiedad = baseDeDatos[id] || {
    nombre: 'Propiedad no encontrada',
    descripcion: 'Lo sentimos, no pudimos cargar los datos de este inmueble.',
    amenities: []
  };

  return (
    <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
      <Link href="/propiedades" className="text-blue-600 hover:text-blue-800 font-medium text-sm mb-6 inline-block flex items-center gap-2">
        &larr; Volver al catálogo
      </Link>

      {/* Hero del Detalle */}
      <div className="w-full h-64 md:h-96 bg-slate-200 rounded-2xl mb-8 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent flex items-end p-8">
          <div>
            <span className="bg-blue-600 text-white text-xs px-3 py-1 rounded-full font-bold uppercase tracking-wide mb-2 inline-block">
              {propiedad.estado || 'Consulta'}
            </span>
            <h1 className="text-4xl md:text-5xl font-extrabold text-white">{propiedad.nombre}</h1>
            <p className="text-slate-200 mt-2 text-lg">{propiedad.ubicacion}</p>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6">
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Descripción</h2>
            <p className="text-slate-600 leading-relaxed">{propiedad.descripcion}</p>
          </div>
          
          <div>
            <h2 className="text-2xl font-bold text-slate-800 mb-3">Características</h2>
            <ul className="grid grid-cols-2 gap-3">
              {propiedad.amenities.map((item, index) => (
                <li key={index} className="flex items-center gap-2 text-slate-600">
                  <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 h-fit">
          <h3 className="text-lg font-bold text-slate-800 mb-2">Valor de Inversión</h3>
          <p className="text-3xl font-extrabold text-blue-600 mb-6">{propiedad.precio || 'Consultar'}</p>
          <Link href="/contacto" className="block text-center bg-slate-800 text-white font-bold py-3 rounded-xl hover:bg-slate-700 transition-colors">
            Contactar Asesor
          </Link>
        </div>
      </div>
    </div>
  );
}