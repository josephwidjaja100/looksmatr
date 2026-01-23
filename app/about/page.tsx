"use client"

import React from 'react';
import Link from 'next/link';

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
        <div className="relative py-10 flex flex-col items-center justify-center overflow-hidden" 
          style={{ paddingTop: 'max(5rem, calc(2rem + env(safe-area-inset-top)))', 
                  paddingLeft: 'max(0px, env(safe-area-inset-left))', 
                  paddingRight: 'max(0px, env(safe-area-inset-right))' }}>
          <div className="max-w-4xl mx-auto px-8">
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
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-10 md:p-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                our mission
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                we built likely.one to solve a simple problem: finding someone who's attracted to you is hard. dating apps have become a numbers game, and most people end up swiping through hundreds of profiles just to find a handful of matches they're actually interested in.
              </p>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                we wanted to create something different. something where your college community comes together once a week to get matched with someone they're genuinely attracted to. no endless swiping, no algorithm trying to keep you on the app—just real matches with real potential.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                likely.one is built for college students, by people who understand the dating scene. we use ai to analyze photos and match people based on genuine visual compatibility, not just metrics. every thursday at midnight, if you opt in, you get an email with your match. what happens next is up to you.
              </p>
            </div>
          </div>
        </section>

        {/* How We Do It */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-10 md:p-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                how we match
              </h2>
              <p className="text-lg text-gray-700 mb-6 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                our algorithm is designed to find matches based on visual compatibility. we analyze profile photos to understand what makes you attractive, then find someone at a similar level of attractiveness to you. we also factor in your gender and ethnicity preferences to make sure the match makes sense.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                the result? you get matched with someone who's genuinely attractive to you, and who finds you attractive too. it's not perfect, but it's a hell of a lot better than endless swiping.
              </p>
            </div>
          </div>
        </section>

        {/* Privacy & Safety */}
        <section className="py-12 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-10 md:p-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6" style={{ fontFamily: 'Merriweather, serif' }}>
                privacy & safety
              </h2>
              <p className="text-lg text-gray-700 mb-4 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                your information is only shared with your match. we verify you through your school email and never sell or share your data with third parties. your safety and privacy are our top priorities.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed" style={{ fontFamily: 'Merriweather, serif' }}>
                for more details, check out our <Link href="/legal/privacy" className="underline hover:text-gray-900">privacy policy</Link> and <Link href="/legal/tos" className="underline hover:text-gray-900">terms of service</Link>.
              </p>
            </div>
          </div>
        </section>

        {/* Why Us */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-10 md:p-14">
              <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-12" style={{ fontFamily: 'Merriweather, serif' }}>
                why likely.one
              </h2>
              
              <div className="grid md:grid-cols-2 gap-8">
                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
                    college community first
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Merriweather, serif' }}>
                    we focus on building genuine connections within your college. everyone's verified through their school email, so you know you're matching with real students.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
                    one match per week
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Merriweather, serif' }}>
                    no endless swiping. quality over quantity. you get one curated match every thursday, and that's it. way better odds than other apps.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
                    ai-powered matching
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Merriweather, serif' }}>
                    our algorithm learns from real data to find matches based on genuine visual compatibility, not just swipe patterns.
                  </p>
                </div>

                <div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-3" style={{ fontFamily: 'Merriweather, serif' }}>
                    no games
                  </h3>
                  <p className="text-gray-700" style={{ fontFamily: 'Merriweather, serif' }}>
                    we're not trying to keep you on the app forever. we just want to help you find someone worth your time.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-28 px-6">
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
        <footer className="py-12 px-4">
          <div className="max-w-6xl mx-auto text-center">
            <p className="text-gray-600" style={{ fontFamily: 'Merriweather, serif' }}>
              © 2026 Likely One. All rights reserved.
            </p>
          </div>
        </footer>
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