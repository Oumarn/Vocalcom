"use client";

import Icon from '@mdi/react';
import { mdiShieldCheckOutline, mdiLockOutline, mdiEarth } from '@mdi/js';

export default function SecurityCompliance() {
    const certifications = [
        { 
            name: "SOC 2", 
            logo: "/assets/Zv6rlbVsGrYSwV2s_AICPASOC2TYPEIICertified1.avif",
            description: "AICPA SOC 2 Type II"
        },
        { 
            name: "GDPR", 
            logo: "/assets/GDPR-compliant_logo@2x.webp",
            description: "GDPR Compliant"
        },
        { 
            name: "CCPA", 
            logo: "/assets/logo-pci-dss-500.png",
            description: "CCPA Ready"
        },
        { 
            name: "Cyber Essentials", 
            logo: "/assets/dora-hero-image.webp",
            description: "Cyber Essentials Certified"
        },
        { 
            name: "ISO 27001", 
            logo: "/assets/ISO-1024x1024.png",
            description: "ISO/IEC 27001:2022"
        },
        { 
            name: "EcoVadis", 
            logo: "/assets/silver-ecovadis-white-border.png",
            description: "EcoVadis Silver Rating"
        }
    ];

    const securityFeatures = [
        {
            icon: mdiShieldCheckOutline,
            color: "#24B7C3",
            bgColor: "from-cyan-100 to-cyan-50",
            borderColor: "border-cyan-200 hover:border-cyan-300",
            title: "Vos données ne servent pas à l'entraînement des IA",
            description: "Nous et nos sous-traitants (ex. OpenAI) n'utilisons jamais vos données pour entraîner les modèles IA. C'est garanti contractuellement."
        },
        {
            icon: mdiLockOutline,
            color: "#934292",
            bgColor: "from-purple-100 to-purple-50",
            borderColor: "border-purple-200 hover:border-purple-300",
            title: "Sécurisé de bout en bout",
            description: "Vos données sont chiffrées au repos et en transit. Seuls vos bots y ont accès — jamais des humains, jamais d'autres clients."
        },
        {
            icon: mdiEarth,
            color: "#F6A02E",
            bgColor: "from-orange-100 to-orange-50",
            borderColor: "border-orange-200 hover:border-orange-300",
            title: "Respect de la vie privée et conformité",
            description: "Nous suivons les programmes RGPD et CCPA et offrons la résidence des données dans l'UE afin que vos données ne quittent jamais la région."
        }
    ];

    return (
        <section className="py-12 lg:py-16 bg-gradient-to-br from-slate-50 to-white">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <h2 className="text-3xl lg:text-5xl font-bold text-gray-900 mb-4 tracking-tight">
                        Sécurité et conformité
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Sécurisé dès la conception. Approuvé par les entreprises.
                    </p>
                </div>

                {/* Certifications grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-16">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-4 bg-white rounded-lg border border-gray-200 hover:border-gray-300 hover:shadow-lg transition-all duration-300"
                        >
                            <div className="h-16 flex items-center justify-center mb-2">
                                <img 
                                    src={cert.logo} 
                                    alt={cert.name}
                                    className="max-h-full max-w-full object-contain opacity-80 group-hover:opacity-100 transition-opacity duration-300"
                                />
                            </div>
                            <p className="text-[10px] text-center text-gray-600 font-medium">{cert.description}</p>
                        </div>
                    ))}
                </div>

                {/* Security Features */}
                <div className="grid md:grid-cols-3 gap-8">
                    {securityFeatures.map((feature, index) => (
                        <div
                            key={index}
                            className={`bg-white rounded-2xl p-8 border-2 ${feature.borderColor} hover:shadow-xl transition-all duration-300`}
                        >
                            <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.bgColor} flex items-center justify-center mb-6`}>
                                <Icon path={feature.icon} size={1.5} style={{ color: feature.color }} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">
                                {feature.title}
                            </h3>
                            <p className="text-sm text-gray-600 leading-relaxed">
                                {feature.description}
                            </p>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
