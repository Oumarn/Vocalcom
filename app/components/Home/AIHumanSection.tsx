"use client";
import Icon from '@mdi/react';
import { mdiAccountGroup, mdiRobotHappy, mdiHandshake, mdiTrendingUp } from '@mdi/js';
import Image from 'next/image';

export default function AIHumanSection() {
    return (
        <>
            <section className="py-12 lg:py-16 bg-gradient-to-b from-white via-cyan-50/30 to-white">
                <div className="max-w-7xl mx-auto px-6">
                    <div className="grid lg:grid-cols-2 gap-12 items-center">
                        {/* Image Side */}
                        <div className="relative animate-fade-up order-2 lg:order-1">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl max-w-md mx-auto">
                                <Image 
                                    src="/assets/AIHumanAgent.jpg" 
                                    alt="AI Agents collaborating with humans" 
                                    width={500} 
                                    height={350}
                                    className="w-full h-auto object-contain bg-white"
                                    unoptimized
                                />
                            </div>
                            
                            {/* Floating stats */}
                            <div className="absolute -bottom-6 -right-6 bg-white rounded-xl shadow-xl p-4 border-2 border-cyan-200">
                                <div className="flex items-center gap-3">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center">
                                        <Icon path={mdiTrendingUp} size={1} className="text-white" />
                                    </div>
                                    <div>
                                        <div className="text-2xl font-bold text-cyan-600">301%</div>
                                        <div className="text-xs text-gray-600">ROI sur 3 ans</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content Side */}
                        <div className="space-y-6 animate-fade-up order-1 lg:order-2">
                            <div className="inline-flex items-center gap-2 bg-violet-50 text-violet-700 rounded-full px-4 py-2 text-sm font-medium">
                                <Icon path={mdiHandshake} size={0.6} />
                                Humain + IA
                            </div>
                            
                            <h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-gray-900 leading-tight">
                                Des agents IA au service de l'humain
                            </h2>
                            
                            <p className="text-lg text-gray-600 leading-relaxed">
                                La plateforme de centre de contact AI-first de Vocalcom permet aux équipes de se focaliser sur les cas complexes et les conversations à forte valeur.
                            </p>

                            <div className="space-y-4 pt-4">
                                <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-cyan-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-cyan-500 to-blue-500 flex items-center justify-center flex-shrink-0">
                                        <Icon path={mdiRobotHappy} size={1} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">L'IA au service de l'humain</h3>
                                        <p className="text-sm text-gray-600">Du suivi instantané des leads à un service client expert accessible 24/7, la collaboration entre agents humains et agents IA maximise l'efficacité opérationnelle et génère un retour sur investissement tangible.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-purple-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center flex-shrink-0">
                                        <Icon path={mdiAccountGroup} size={1} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">Équipes renforcées</h3>
                                        <p className="text-sm text-gray-600">Vos agents humains deviennent plus performants grâce à l'assistance IA en temps réel et aux insights prédictifs.</p>
                                    </div>
                                </div>

                                <div className="flex gap-4 items-start p-4 bg-white rounded-xl border border-gray-200 hover:border-orange-300 hover:shadow-lg transition-all">
                                    <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-orange-500 to-red-500 flex items-center justify-center flex-shrink-0">
                                        <Icon path={mdiTrendingUp} size={1} className="text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-bold text-gray-900 mb-1">ROI mesurable</h3>
                                        <p className="text-sm text-gray-600">Réduction des temps de traitement, augmentation de la satisfaction client et meilleure rétention des talents.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}
