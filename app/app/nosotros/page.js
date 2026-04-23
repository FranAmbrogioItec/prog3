import Link from 'next/link';

export default function Nosotros() {
    return (
        <div className="py-8 max-w-5xl mx-auto">
            <div className="text-center mb-16">
                <h1 className="text-4xl font-extrabold text-slate-800 mb-4">Construimos Confianza</h1>
                <p className="text-xl text-slate-500 max-w-2xl mx-auto">
                    Más de 10 años desarrollando proyectos inmobiliarios y conectando familias con su lugar ideal.
                </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mb-16">
                <div className="space-y-6">
                    <h2 className="text-3xl font-bold text-slate-800">Nuestra Filosofía</h2>
                    <p className="text-slate-600 leading-relaxed text-lg">
                        Creemos que una inversión inmobiliaria no es solo un movimiento financiero, es el resguardo de un proyecto de vida. Por eso, seleccionamos cuidadosamente cada edificio y desarrollo en pozo que sumamos a nuestro catálogo, asegurando la viabilidad y calidad constructiva.
                    </p>
                    <ul className="space-y-3 mt-4">
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="bg-blue-100 text-blue-600 p-1 rounded-md">✓</span> Transparencia comercial
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="bg-blue-100 text-blue-600 p-1 rounded-md">✓</span> Asesoramiento legal integral
                        </li>
                        <li className="flex items-center gap-3 text-slate-700 font-medium">
                            <span className="bg-blue-100 text-blue-600 p-1 rounded-md">✓</span> Foco en rentabilidad segura
                        </li>
                    </ul>
                </div>

                {/* Banner simulado hacia la ruta anidada */}
                <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-10 rounded-3xl text-white shadow-xl relative overflow-hidden">
                    <div className="absolute -right-10 -top-10 w-40 h-40 bg-white opacity-5 rounded-full blur-3xl"></div>
                    <h3 className="text-2xl font-bold mb-4">El equipo detrás del éxito</h3>
                    <p className="text-slate-300 mb-8">
                        Conocé a los arquitectos, martilleros y asesores financieros que hacen posible cada operación.
                    </p>
                    <Link
                        href="/nosotros/equipo"
                        className="inline-block bg-blue-600 text-white font-semibold px-6 py-3 rounded-xl hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20"
                    >
                        Conocer al Equipo &rarr;
                    </Link>
                </div>
            </div>
        </div>
    );
}