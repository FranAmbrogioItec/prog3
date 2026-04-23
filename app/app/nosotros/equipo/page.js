import Link from 'next/link';

export default function Equipo() {
  return (
    <div>
      <h1 className="text-3xl font-bold text-slate-400 mb-4">Nuestro Equipo de Ventas</h1>
      <p className="mb-4">Contamos con los mejores asesores inmobiliarios de la región.</p>


      <div className='grid grid-cols-4 gap-4 '>
        <div className=' w-50 bg-slate-900 text-slate-400 p-3'>
          <img src="https://peru.amiasistencia.com/wp-content/uploads/2016/11/daniel-rueda-silva-fotocarnet2-200x200.jpg" alt="gerente"/>
          <p>Carlos Palandri - Gerente</p>
        </div>

        <div className=' w-50 bg-slate-900 text-slate-400 p-3'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQnQ09xYHavaobUfkkla4fjFOkyulUzUb9utQ&s" alt="asesor"/>
          <p>Nicolas Figeras - Asesor</p>
        </div>

        <div className=' w-50 bg-slate-900 text-slate-400 p-3'>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTr3viRldBybZrY9VxaAMux4_7HnRcbGcm80A&s" alt="asesora"/>
          <p>Micaela Losada - Asesora</p>
        </div>


        <div className=' w-50 bg-slate-900 text-slate-400 p-3'>
          <img src="https://15f8034cdff6595cbfa1-1dd67c28d3aade9d3442ee99310d18bd.ssl.cf3.rackcdn.com/uploaded_thumb_big/a20a8b7a06b5a726408f68df59ba9c3d/fotografia_de_carnet_y_pasaporte_yenes_fotografos.png" alt="ascesora"/>
          <p>Veronica Billalva - Contaduria</p>
        </div>

        


      </div>
      <div className=''>
      <Link href="/nosotros" className="text-blue-600 underline ">
        Volver a Nosotros
      </Link>
      </div>
    </div>
  );
}