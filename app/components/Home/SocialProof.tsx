import { mdiFormatQuoteCloseOutline } from '@mdi/js';
import Icon from '@mdi/react';

export default function SocialProof() {
    return (
        <>
            <section className="py-16 lg:pt-14 lg:pb-18 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center max-w-2xl mx-auto mb-16 lg:mb-10 animate-fade-up">
                        <h2 className="text-3xl font-semibold tracking-tight text-[#0f172a] mb-4">L'impact de l'IA sur la relation client</h2>
                        <p className="text-gray-600">Découvrez ce que les leaders du secteur disent de notre plateforme omnicanale.</p>
                    </div>

                    <div className="grid md:grid-cols-3 gap-6 animate-fade-up">
                        <div className="social-card bg-white p-8 rounded-xl shadow-sm border flex flex-col justify-between border-gray-100 hover:shadow-md transition-shadow">
                            <div className="flex flex-col">
                                <div className="mb-4 text-[#24B7C3]">
                                    <Icon path={mdiFormatQuoteCloseOutline} size={1.5} />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">"Vocalcom a transformé notre centre d'appels. L'intégration de l'IA a réduit notre temps de traitement de 30% dès le premier mois."</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">SD</div>
                                <div>
                                    <div className="text-sm font-semibold text-vocal-dark">Sophie Dubois</div>
                                    <div className="text-xs text-gray-500">Directrice Service Client, AXA</div>
                                </div>
                            </div>
                        </div>

                        <div className="social-card bg-white p-8 rounded-xl shadow-sm border flex flex-col justify-between border-gray-100 hover:shadow-md transition-shadow delay-100">
                            <div className="flex flex-col">
                                <div className="mb-4 text-[#24B7C3]">
                                    <Icon path={mdiFormatQuoteCloseOutline} size={1.5} />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">"La flexibilité de la plateforme est incroyable. Nous avons configuré nos flux omnicanaux en quelques clics sans équipe technique."</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">TM</div>
                                <div>
                                    <div className="text-sm font-semibold text-vocal-dark">Thomas Martin</div>
                                    <div className="text-xs text-gray-500">CTO, TechFlow</div>
                                </div>
                            </div>
                        </div>

                        <div className="social-card bg-white p-8 rounded-xl shadow-sm border flex flex-col justify-between border-gray-100 hover:shadow-md transition-shadow delay-200">
                            <div className="flex flex-col">
                                <div className="mb-4 text-[#24B7C3]">
                                    <Icon path={mdiFormatQuoteCloseOutline} size={1.5} />
                                </div>
                                <p className="text-gray-600 text-sm leading-relaxed mb-6">"Un outil puissant qui allie robustesse et innovation. Le reporting avancé nous donne une visibilité totale."</p>
                            </div>
                            <div className="flex items-center gap-3">
                                <div className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">JL</div>
                                <div>
                                    <div className="text-sm font-semibold text-vocal-dark">Julie Lefebvre</div>
                                    <div className="text-xs text-gray-500">COO, Retail Connect</div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </>
    );
}