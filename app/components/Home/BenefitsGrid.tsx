"use client";
import { mdiMessageTextOutline, mdiMemory, mdiTrendingDown, mdiHeadphones, mdiChartBar, mdiLayers } from '@mdi/js';
import Icon from '@mdi/react';

export default function BenefitsGrid() {
    return (
        <>
            <section className="py-16 lg:pt-14 lg:pb-18 bg-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="text-center mb-16 lg:mb-10 animate-fade-up">
                        <h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-vocal-dark">Tout pour exceller dans l'engagement client</h2>
                    </div>

                    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 animate-fade-up">
                        <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-soft hover:scale-[1.02] transition-all duration-300 bg-white">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#24B7C3] flex items-center justify-center mb-4 group-hover:bg-[#24B7C3] group-hover:text-white transition-colors">
                                <Icon path={mdiMessageTextOutline } size={1} className="fill-[#24B7C3] w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-vocal-dark mb-2">Service Omnicanal</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Unifiez voix, email, chat et réseaux sociaux dans une interface unique pour une expérience fluide.</p>
                        </div>

                        <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-soft hover:scale-[1.02] transition-all duration-300 bg-white">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#24B7C3] flex items-center justify-center mb-4 group-hover:bg-[#24B7C3] group-hover:text-white transition-colors">
                                <Icon path={mdiMemory} size={1} className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-vocal-dark mb-2">Automatisation intelligente</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Déployez des bots intelligents et automatisez les tâches répétitives pour libérer vos agents.</p>
                        </div>

                        <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-soft hover:scale-[1.02] transition-all duration-300 bg-white">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#24B7C3] flex items-center justify-center mb-4 group-hover:bg-[#24B7C3] group-hover:text-white transition-colors">
                                <Icon path={mdiTrendingDown} size={1} className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-vocal-dark mb-2">Optimisation des coûts</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Réduisez le coût par contact grâce à un routage intelligent et une allocation optimale des ressources.</p>
                        </div>

                        <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-soft hover:scale-[1.02] transition-all duration-300 bg-white">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#24B7C3] flex items-center justify-center mb-4 group-hover:bg-[#24B7C3] group-hover:text-white transition-colors">
                                <Icon path={mdiHeadphones} size={1} className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-vocal-dark mb-2">Support contextuel</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Fournissez à vos agents le contexte client en temps réel pour une résolution plus rapide.</p>
                        </div>

                        <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-soft hover:scale-[1.02] transition-all duration-300 bg-white">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#24B7C3] flex items-center justify-center mb-4 group-hover:bg-[#24B7C3] group-hover:text-white transition-colors">
                                <Icon path={mdiChartBar} size={1} className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-vocal-dark mb-2">Tableaux de bord avancés</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Tableaux de bord personnalisables pour suivre les KPI et la performance en temps réel.</p>
                        </div>

                        <div className="group p-6 rounded-2xl border border-gray-100 hover:border-blue-100 shadow-soft hover:scale-[1.02] transition-all duration-300 bg-white">
                            <div className="w-12 h-12 rounded-lg bg-blue-50 text-[#24B7C3] flex items-center justify-center mb-4 group-hover:bg-[#24B7C3] group-hover:text-white transition-colors">
                                <Icon path={mdiLayers} size={1} className="w-6 h-6" />
                            </div>
                            <h3 className="text-lg font-semibold text-vocal-dark mb-2">Intégrations CRM</h3>
                            <p className="text-sm text-gray-500 leading-relaxed">Connectez-vous à Salesforce, Zendesk, Microsoft Dynamics et vos outils CRM favoris.</p>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}