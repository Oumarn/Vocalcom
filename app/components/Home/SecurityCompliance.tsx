"use client";

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

    return (
        <section className="py-16 lg:py-20 bg-white border-y border-gray-100">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-12">
                    <h2 className="text-3xl lg:text-4xl font-semibold text-gray-900 mb-4 tracking-tight">
                        Sécurité et conformité
                    </h2>
                </div>

                {/* Certifications grid */}
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
                    {certifications.map((cert, index) => (
                        <div
                            key={index}
                            className="group flex flex-col items-center justify-center p-4 bg-gray-50 rounded-lg border border-gray-200 hover:border-gray-300 hover:bg-white hover:shadow-lg transition-all duration-300"
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
            </div>
        </section>
    );
}
