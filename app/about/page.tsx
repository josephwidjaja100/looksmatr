"use client"

import React from 'react';
import Link from 'next/link';
import Footer from '@/components/Footer';

export default function About() {
  return (
    <>
      <link 
        href="https://fonts.googleapis.com/css2?family=Merriweather:wght@400;700&display=swap" 
        rel="stylesheet" 
      />
      {/* Fixed gradient background */}
      <div className="fixed inset-0 bg-gradient-animated -z-10"></div>
      
      {/* Scrollable content */}
      <div className="relative min-h-screen">
        {/* Header */}
        <div className="relative py-8 flex flex-col items-center justify-center overflow-hidden" 
          style={{ paddingTop: 'max(5rem, calc(2rem + env(safe-area-inset-top)))', 
                  paddingLeft: 'max(0px, env(safe-area-inset-left))', 
                  paddingRight: 'max(0px, env(safe-area-inset-right))' }}>
          <div className="max-w-4xl mx-auto px-6">
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 tracking-tight mb-6 text-center"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              about likely.one
            </h1>
            <p 
              className="text-lg sm:text-xl md:text-2xl text-gray-700 text-center max-w-2xl mx-auto"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              we believe looks matter. not in a shallow way, but because physical attraction is a real part of dating.
            </p>
          </div>
        </div>

        {/* Our Mission */}
        <section className="py-8 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-10 md:p-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                our mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                we built likely.one because we truly believe the best relationships stem from not only mutual attraction, but equal attraction. we've heard too many horror stories of relationships getting destroyed because one partner believes they can do better, and we've had enough. we're realistic: we know that romantic feelings always come from some amount of physical attraction no matter how much we want to deny it, so why not face it head on? we want to create a strong base of physical attraction for a relationship, and whether your personalities are compatible is up to you to figure out.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                we wanted to create something different. no endless swiping, no algorithm trying to keep you on the app, just real matches you actually have a chance with.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                likely.one is built for college students, by people who understand the dating scene. we use ai to analyze photos and match people based on genuine visual compatibility, not just arbitrary personality metrics. every thursday at midnight, if you opt in, you get an email with your match. what happens next is up to you.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Merriweather, serif' }}>
              ready to find your likely one?
            </h2>
            <Link
              href="/"
              className="inline-block px-10 py-5 font-bold rounded-full transition-all duration-300 shadow-lg text-lg bg-gray-800 text-white hover:bg-gray-700 hover:shadow-xl hover:scale-105"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              get started
            </Link>
          </div>
        </section>

        {/* Footer */}
        <Footer />
      </div>

      <style>{`
        @keyframes gradientShift {
          0% {
            background-position: 0% 50%;
          }
          50% {
            background-position: 100% 50%;
          }
          100% {
            background-position: 0% 50%;
          }
        }
        
        .bg-gradient-animated {
          background: linear-gradient(135deg, #dbeafe, #e9d5ff, #fae8ff, #ddd6fe, #bfdbfe);
          background-size: 400% 400%;
          animation: gradientShift 15s ease infinite;
        }
        
        .shadow-onboarding {
          box-shadow: 0 0 15px rgba(196, 181, 253, 0.15);
        }
      `}</style>
    </>
  );
}