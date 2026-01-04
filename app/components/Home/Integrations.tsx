"use client";

export default function Integrations() {
    const integrations = [
        { name: "Salesforce", logo: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Salesforce.com_logo.svg" },
        { name: "Microsoft Dynamics", logo: "https://companieslogo.com/img/orig/MSFT-a203b22d.png?t=1720244492" },
        { name: "Zendesk", logo: "https://upload.wikimedia.org/wikipedia/commons/c/c8/Zendesk_logo.svg" },
        { name: "HubSpot", logo: "https://upload.wikimedia.org/wikipedia/commons/3/3f/HubSpot_Logo.svg" },
        { name: "Oracle", logo: "https://upload.wikimedia.org/wikipedia/commons/5/50/Oracle_logo.svg" }
    ];

    return (
        <section className="py-16 lg:py-20 bg-gradient-to-b from-white to-gray-50/50">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-20">
                    <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-gray-100 border border-gray-200 mb-6">
                        <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 animate-pulse"></div>
                        <p className="text-xs text-gray-700 font-medium uppercase tracking-wider">Intégrations</p>
                    </div>
                    <h2 className="text-4xl lg:text-5xl font-semibold text-gray-900 mb-6 tracking-tight">
                        Connectez votre CRM<br className="hidden sm:block" /> en quelques clics
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto leading-relaxed">
                        Bénéficiez d'une intégration native avec les principaux CRM<br className="hidden sm:block" /> pour des workflows automatisés.
                    </p>
                </div>

                {/* Integration logos grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 mb-16">
                    {integrations.map((integration, index) => (
                        <div
                            key={index}
                            className="group relative flex items-center justify-center h-28 bg-white rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg hover:-translate-y-1 transition-all duration-300 overflow-hidden"
                        >
                            {/* Subtle gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-cyan-50/0 via-blue-50/0 to-purple-50/0 group-hover:from-cyan-50/50 group-hover:via-blue-50/30 group-hover:to-purple-50/50 transition-all duration-300"></div>
                            <img 
                                src={integration.logo} 
                                alt={integration.name}
                                className="relative z-10 max-h-10 max-w-[75%] object-contain opacity-60 group-hover:opacity-100 transition-opacity duration-300"
                            />
                        </div>
                    ))}
                </div>

                {/* +200 integrations with enhanced styling */}
                <div className="text-center">
                    <div className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-r from-gray-50 to-gray-100 border border-gray-200 rounded-full">
                        <span className="text-2xl font-bold bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">+200</span>
                        <span className="text-sm text-gray-600">intégrations disponibles</span>
                    </div>
                </div>
            </div>
        </section>
    );
}
