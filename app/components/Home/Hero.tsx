import Icon from '@mdi/react';
import { mdiArrowRight, mdiCheck } from '@mdi/js';
import DemoForm from '../forms/DemoForm';

export default function HeroHome() {
    return (
        <>
            <section className="relative pt-32 pb-20 lg:pt-40 lg:pb-26 xl:pb-24 overflow-hidden">
                <div className="absolute inset-0 bg-linear skew-y-0 transform origin-top-left z-0"></div>

                <div className="relative z-10 max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

                    <div className="text-white space-y-8 animate-fade-up">
                        <div className="flex flex-col gap-2">
                            <h1 className="text-4xl lg:text-6xl font-semibold tracking-tight leading-tight">
                                La Plateforme de Centre de Contact IA Conçue pour l'Échelle
                            </h1>
                            <p className="text-[17px] lg:text-lg">Vocalcom.ai unifie chaque canal, client et agent dans une plateforme IA native pour une CX plus rapide et humaine.</p>
                        </div>

                        <ul className="space-y-4">
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 bg-blue-500/30 p-1 rounded-full w-6 h-6 flex items-center justify-center">
                                    <Icon path={mdiCheck} size={1} className="w-2 h-2 text-white"></Icon>
                                </div>
                                <span className="text-md lg:text-lg text-blue-50 font-light">Résolvez les problèmes instantanément avec les agents IA</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 bg-blue-500/30 p-1 rounded-full w-6 h-6 flex items-center justify-center">
                                    <Icon path={mdiCheck} size={1} className="w-2 h-2 text-white"></Icon>
                                </div>
                                <span className="text-md lg:text-lg text-blue-50 font-light">Réduisez les coûts opérationnels</span>
                            </li>
                            <li className="flex items-start gap-3">
                                <div className="mt-0.5 bg-blue-500/30 p-1 rounded-full w-6 h-6 flex items-center justify-center">
                                    <Icon path={mdiCheck} size={1} className="w-2 h-2 text-white"></Icon>
                                </div>
                                <span className="text-md lg:text-lg text-blue-50 font-light">Boostez la performance des agents</span>
                            </li>
                        </ul>
                    </div>

                    <div className="bg-white rounded-2xl p-6 md:p-8 shadow-2xl animate-slide-in w-full max-w-md mx-auto lg:mr-0 border border-gray-100/50" id="demo">
                        <div className="mb-6">
                            <h3 className="text-xl font-semibold tracking-tight text-center">Demander une Démo Personnalisée</h3>
                            <p className="hidden lg:block text-sm text-center text-gray-500 mt-2">Réponse sous 2h ouvrées. Sans engagement.</p>
                        </div>

                        <DemoForm />
                    </div>
                </div>
            </section>

        </>
    );
}