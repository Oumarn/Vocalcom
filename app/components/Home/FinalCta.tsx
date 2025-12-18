"use client";
import Icon from '@mdi/react';
import { mdiArrowRight } from '@mdi/js';

export default function FinalCta() {
    return (
        <>
            <section className="py-16 bg-linear relative overflow-hidden">
                <div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-5 rounded-full -translate-x-1/2 -translate-y-1/2"></div>
                <div className="absolute bottom-0 right-0 w-96 h-96 bg-[#1E75D9] opacity-20 rounded-full translate-x-1/3 translate-y-1/3"></div>

                <div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-up">
                    <h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-6">Découvrez la Plateforme IA de Centre de Contact la plus complète.</h2>
                    <p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">Rejoignez les leaders de l'industrie et offrez une expérience exceptionnelle à vos clients dès aujourd'hui.</p>

                    <a href="#demo" className="ring-hover inline-flex items-center gap-x-2 justify-center px-8 py-4 text-base font-semibold bg-white text-[#24B7C3] rounded-full shadow-lg hover:bg-[#24B7C3] hover:text-white hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1">
                        Demander une Démo
                        <Icon path={mdiArrowRight} size={1} className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </a>
                </div>
            </section>
        </>
    );
}