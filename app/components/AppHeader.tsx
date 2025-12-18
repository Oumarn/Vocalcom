export default function AppHeader() {
    return (
        <>
            <header className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-xl border-b border-slate-100 transition-all duration-300">
                <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
                    <div className="flex items-center gap-2 cursor-pointer group">
                        
                        <img src="/assets/logo-vocalcom.svg" alt="logo_vocalcom" className='w-40 lg:w-48' />
                    </div>

                    <div className="hidden md:flex items-center gap-4">
                        <a href="#demo" className="hidden sm:inline-flex items-center justify-center px-4 py-2 text-sm font-medium text-white bg-[#24B7C3] rounded-lg lg:rounded-full lg:px-6 lg:py-2.5 hover:bg-white hover:text-[#24B7C3] hover:border-[#24B7C3] hover:border-1 hover:duration-300 hover:ease-linear transition-all shadow-sm hover:shadow-glow hover:-translate-y-px">
                            Demander une démo
                        </a>
                    </div>

                    <div className="md:hidden flex items-center">
                        <a href="#demo" className="p-2 bg-[#24B7C3] text-sm text-white rounded-full px-5 hover:bg-[#0A4D9F]/90 transition-all shadow-sm hover:shadow-glow hover:-translate-y-px">
                            Commencer
                        </a>
                    </div>
                </div>
            </header>
        </>
    );
}