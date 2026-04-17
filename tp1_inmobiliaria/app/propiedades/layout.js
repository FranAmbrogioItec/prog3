import Link from 'next/link';

export default function PropiedadesLayout({ children }) {
  return (
    <div className="flex flex-col md:flex-row gap-8 py-6">
      
      {/* Sidebar de Filtros Modernizado */}
      <aside className="w-full md:w-1/4">
        <div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm sticky top-24">
          <h3 className="font-bold text-lg mb-4 text-slate-800 flex items-center gap-2">
            <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2.586a1 1 0 01-.293.707l-6.414 6.414a1 1 0 00-.293.707V17l-4 4v-6.586a1 1 0 00-.293-.707L3.293 7.293A1 1 0 013 6.586V4z"></path></svg>
            Filtros
          </h3>
          
          <div className="space-y-6">
            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Categorías</h4>
              <ul className="space-y-2">
                <li><button className="text-slate-600 hover:text-blue-600 font-medium transition-colors w-full text-left">Departamentos</button></li>
                <li><button className="text-slate-600 hover:text-blue-600 font-medium transition-colors w-full text-left">Edificios en Pozo</button></li>
                <li><button className="text-slate-600 hover:text-blue-600 font-medium transition-colors w-full text-left">Locales Comerciales</button></li>
              </ul>
            </div>
            
            <div>
              <h4 className="text-sm font-semibold text-slate-500 uppercase tracking-wider mb-3">Ubicación</h4>
              <ul className="space-y-2">
                <li><button className="text-slate-600 hover:text-blue-600 font-medium transition-colors w-full text-left">Nueva Córdoba</button></li>
                <li><button className="text-slate-600 hover:text-blue-600 font-medium transition-colors w-full text-left">General Paz</button></li>
                <li><button className="text-slate-600 hover:text-blue-600 font-medium transition-colors w-full text-left">Cerro de las Rosas</button></li>
              </ul>
            </div>
          </div>
        </div>
      </aside>

      {/* Contenido Principal (Catálogo o Detalle) */}
      <section className="w-full md:w-3/4">
        {children}
      </section>
      
    </div>
  );
}