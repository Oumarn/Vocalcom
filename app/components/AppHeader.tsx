export default function AppHeader() {
    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-white/95 backdrop-blur-xl border-b border-gray-100 transition-all duration-300 shadow-sm">
                <div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        <img src="/assets/logo-vocalcom.svg" alt="logo_vocalcom" className='w-44 lg:w-52 transition-transform group-hover:scale-105' />
                    </div>

                    <div className="hidden md:flex items-center gap-6">
                        <a href="#demo" className="group inline-flex items-center justify-center px-7 py-3.5 text-sm font-bold text-white bg-gradient-to-r from-[#1E75D9] to-[#24B7C3] rounded-full hover:shadow-xl hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 hover:scale-105">
                            <span className="relative">
                                Demander une démo
                                <span className="absolute bottom-0 left-0 w-full h-0.5 bg-white transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
                            </span>
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <a href="#demo" className="inline-flex items-center justify-center p-2.5 bg-gradient-to-r from-[#1E75D9] to-[#24B7C3] text-sm text-white font-bold rounded-full px-6 py-3 hover:shadow-lg transition-all transform hover:-translate-y-0.5">
                            Démo
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}