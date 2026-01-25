"use client"

import React, { useState, useEffect, useRef } from 'react';
import { signIn } from "next-auth/react";
import Link from 'next/link';
import { motion } from 'framer-motion';
import Footer from '@/components/Footer';
import TypingAnimation from '@/components/TypingAnimation';

// Map subdomains to their email domains and display names
const SUBDOMAIN_CONFIG: Record<string, { emailDomain: string; displayName: string; url: string; active: boolean }> = {
  'stanford': { emailDomain: 'stanford.edu', displayName: 'Stanford', url: 'https://stanford.likely.one', active: true },
  'psu': { emailDomain: 'psu.edu', displayName: 'Penn State', url: 'https://psu.likely.one', active: true },
  'berkeley': { emailDomain: 'berkeley.edu', displayName: 'Berkeley', url: 'https://berkeley.likely.one', active: false },
};

// Get list of college options for dropdown
const getCollegeOptions = () => {
  return Object.values(SUBDOMAIN_CONFIG).map(config => config.displayName);
};

const Home = () => {
  const [emailDomain, setEmailDomain] = useState('psu.edu');
  const [collegeName, setCollegeName] = useState('Penn State');
  const [isActive, setIsActive] = useState(true);
  const [selectedCollege, setSelectedCollege] = useState('');
  const [showAuth, setShowAuth] = useState(false);
  const [showDropdown, setShowDropdown] = useState(false);
  const [buttonWidth, setButtonWidth] = useState(0);
  const [expandedFAQ, setExpandedFAQ] = useState<number | null>(null);
  const [authMode, setAuthMode] = useState<'signup' | 'login'>('signup');
  const [signupState, setSignupState] = useState({
    emailPrefix: '',
    password: '',
    confirmPassword: '',
    otp: '',
    flow: 'email-signup',
    isLoading: false,
    error: '',
    success: ''
  });
  const [loginState, setLoginState] = useState({
    emailPrefix: '',
    password: '',
    isLoading: false,
    error: '',
    success: ''
  });

  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    // Get the current hostname
    const hostname = window.location.hostname;
    
    // Extract subdomain (e.g., "stanford" from "stanford.likely.one")
    const subdomain = hostname.split('.')[0];
    
    // Look up the configuration for this subdomain
    const config = SUBDOMAIN_CONFIG[subdomain];
    
    if (config) {
      setEmailDomain(config.emailDomain);
      setCollegeName(config.displayName);
      setIsActive(config.active);
    } else {
      // Default to psu if subdomain not found
      setEmailDomain('psu.edu');
      setCollegeName('Penn State');
      setIsActive(true);
    }
  }, []);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setShowDropdown(false);
      }
    };

    if (showDropdown) {
      document.addEventListener('mousedown', handleClickOutside);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [showDropdown]);

  useEffect(() => {
    if (buttonRef.current) {
      setButtonWidth(buttonRef.current.offsetWidth);
    }
  }, [showDropdown]);

  // Handle college selection from dropdown
  const handleCollegeChange = (college: string) => {
    setSelectedCollege(college);
    
    // Find the config for the selected college
    const config = Object.values(SUBDOMAIN_CONFIG).find(
      config => config.displayName === college
    );
    
    if (config) {
      // Redirect to the hardcoded URL
      window.location.href = config.url;
    }
  };

  const bubbles = [
    { id: 0, left: '5%', top: '10%', delay: '0s' },
    { id: 1, left: '30%', top: '20%', delay: '0.3s' },
    { id: 2, left: '10%', top: '72%', delay: '0.6s' },
    { id: 3, left: '35%', top: '85%', delay: '0.9s' },
    { id: 4, left: '10%', top: '50%', delay: '1.2s' },
    { id: 5, left: '70%', top: '70%', delay: '1.5s' },
    { id: 6, left: '80%', top: '15%', delay: '1.8s' },
    { id: 7, left: '75%', top: '40%', delay: '2.1s' },
    { id: 8, left: '60%', top: '10%', delay: '2.5s' },
  ];

  const messageTexts = [
    "my date is so mid. please help.",
    "im just not gonna reply to him he's not my type.",
    "bro she looks like a model i have no chance",
    "he looks like he would go varsity in calculus",
    "my date just ghosted me fml.",
    "i cant believe i have to sit through an hour with this girl",
    "he literally has a mullet",
    "he's literally the most stereotypical abb looking guy",
    "he looks like he'd be great just as a frienddd"
  ];

  const AnimatedCounter = ({ value, suffix }: { value: number; suffix: string }) => {
    const [count, setCount] = useState(0);
    const ref = useRef<HTMLDivElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting && !isVisible) {
            setIsVisible(true);
          }
        },
        { threshold: 0.1 }
      );

      if (ref.current) {
        observer.observe(ref.current);
      }

      return () => observer.disconnect();
    }, [isVisible]);

    useEffect(() => {
      if (isVisible) {
        let startTime: number;
        const duration = 1500;
        const animate = (currentTime: number) => {
          if (!startTime) startTime = currentTime;
          const progress = Math.min((currentTime - startTime) / duration, 1);
          setCount(Math.floor(progress * value));
          if (progress < 1) {
            requestAnimationFrame(animate);
          }
        };
        requestAnimationFrame(animate);
      }
    }, [isVisible, value]);

    return (
      <div ref={ref} className="text-3xl font-bold text-gray-800" style={{ fontFamily: 'Merriweather, serif' }}>
        {count}{suffix}
      </div>
    );
  };

  const stats = [
    {
      number: 98,
      suffix: '%',
      label: "of swipes on major dating apps never become a match or conversation",
      source: "Tinder reports ~1.8% overall match rate on 1.4B daily swipes (CNET analysis of Tinder data)"
    },
    {
      number: 79,
      suffix: '%',
      label: "of users say they feel emotionally drained or burnt out from using dating apps",
      source: "U.S. surveys on dating app fatigue and burnout reported by major health and tech outlets"
    },
    {
      number: 70,
      suffix: '%',
      label: "of users say dating apps make them feel less attractive over time",
      source: "surveys of adults about self-esteem and perceived desirability on dating apps"
    },
    {
      number: 75,
      suffix: '%',
      label: 'of daters say they feel stuck chasing people “out of their league”',
      source: 'polls of app users about perceived “leagues” in dating'
    },
  ];

  const handleGetMatched = () => {
    if (isActive) {
      setShowAuth(true);
    }
  };

  const handleCloseAuth = () => {
    setShowAuth(false);
    setAuthMode('signup');
    setSignupState({
      emailPrefix: '',
      password: '',
      confirmPassword: '',
      otp: '',
      flow: 'email-signup',
      isLoading: false,
      error: '',
      success: ''
    });
    setLoginState({
      emailPrefix: '',
      password: '',
      isLoading: false,
      error: '',
      success: ''
    });
  };

  const getFullEmail = (prefix: string) => {
    return `${prefix}@${emailDomain}`;
  };

  // SIGNUP HANDLERS
  const handleSendOTP = async () => {
    if (!signupState.emailPrefix || !signupState.password || !signupState.confirmPassword) {
      setSignupState(prev => ({
        ...prev,
        error: 'please fill in all fields.'
      }));
      return;
    }

    if (signupState.password.length < 8) {
      setSignupState(prev => ({
        ...prev,
        error: 'password must be at least 8 characters long.'
      }));
      return;
    }

    if (signupState.password !== signupState.confirmPassword) {
      setSignupState(prev => ({
        ...prev,
        error: 'passwords do not match.'
      }));
      return;
    }

    const fullEmail = getFullEmail(signupState.emailPrefix);

    setSignupState(prev => ({
      ...prev,
      isLoading: true,
      error: '',
      success: ''
    }));

    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fullEmail,
          password: signupState.password,
          type: "signup"
        }),
      });

      if (!response.ok) {
        const errorData = await response.json().catch(() => ({ message: 'network error' }));
        throw new Error(errorData.message || `HTTP error: ${response.status}`);
      }

      const data = await response.json();

      if (data.success) {
        setSignupState(prev => ({
          ...prev,
          flow: 'otp-verification',
          success: 'verification code sent!',
          isLoading: false
        }));
      } else {
        if (data.hasGoogleAccount) {
          setSignupState(prev => ({
            ...prev,
            error: 'this email is already registered with google. please sign in with google instead.',
            isLoading: false
          }));
        } else {
          setSignupState(prev => ({
            ...prev,
            error: data.message,
            isLoading: false
          }));
        }
      }
    } catch (error) {
      console.error('Signup error:', error);
      // Filter out technical MongoDB errors
      let errorMessage = error instanceof Error ? error.message : 'network error. please try again.';
      if (errorMessage.includes('EREFUSED') || errorMessage.includes('queryTxt') || errorMessage.includes('mongodb')) {
        errorMessage = 'service temporarily unavailable. please try again later.';
      }
      setSignupState(prev => ({
        ...prev,
        error: errorMessage,
        isLoading: false
      }));
    }
  };

  const handleVerifyOTP = async () => {
    if (!signupState.otp || signupState.otp.length !== 6) {
      setSignupState(prev => ({
        ...prev,
        error: 'please enter a valid 6-digit code.'
      }));
      return;
    }

    const fullEmail = getFullEmail(signupState.emailPrefix);

    setSignupState(prev => ({
      ...prev,
      isLoading: true,
      error: '',
      success: ''
    }));

    try {
      const response = await fetch("/api/auth/verify-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fullEmail,
          otp: signupState.otp,
          type: "signup",
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSignupState(prev => ({
          ...prev,
          success: data.message,
          isLoading: false
        }));

        if (data.shouldSignIn) {
          // Sign in and immediately redirect to onboarding (don't check status)
          signIn("credentials", {
            email: fullEmail,
            password: signupState.password,
            redirect: false,
          }).then(() => {
            // Always go to onboarding after signup
            window.location.href = '/onboarding';
          });
        }
      } else {
        setSignupState(prev => ({
          ...prev,
          error: data.message,
          isLoading: false
        }));
      }
    } catch (error) {
      setSignupState(prev => ({
        ...prev,
        error: 'network error. please try again.',
        isLoading: false
      }));
    }
  };

  const handleResendOTP = async () => {
    const fullEmail = getFullEmail(signupState.emailPrefix);

    setSignupState(prev => ({
      ...prev,
      isLoading: true,
      error: '',
      success: ''
    }));

    try {
      const response = await fetch("/api/auth/send-otp", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: fullEmail,
          password: signupState.password,
          type: "signup"
        }),
      });

      const data = await response.json();

      if (data.success) {
        setSignupState(prev => ({
          ...prev,
          success: 'new verification code sent!',
          isLoading: false
        }));
      } else {
        setSignupState(prev => ({
          ...prev,
          error: data.message,
          isLoading: false
        }));
      }
    } catch (error) {
      setSignupState(prev => ({
        ...prev,
        error: 'failed to resend code. please try again.',
        isLoading: false
      }));
    }
  };

  // LOGIN HANDLER
  const handleLogin = async () => {
    if (!loginState.emailPrefix || !loginState.password) {
      setLoginState(prev => ({
        ...prev,
        error: 'please fill in all fields.'
      }));
      return;
    }

    const fullEmail = getFullEmail(loginState.emailPrefix);
    const password = loginState.password;

    setLoginState(prev => ({
      ...prev,
      isLoading: true,
      error: '',
      success: ''
    }));

    try {
      const result = await signIn("credentials", {
        email: fullEmail,
        password: password,
        redirect: false,
      });

      if (result?.error) {
        setLoginState(prev => ({
          ...prev,
          error: 'invalid credentials. please try again.',
          isLoading: false
        }));
      } else if (result?.ok) {
        setLoginState(prev => ({
          ...prev,
          success: 'login successful! redirecting...',
          isLoading: false
        }));

        // Check onboarding status before redirecting
        setTimeout(async () => {
          try {
            // Check localStorage first (fallback for when MongoDB is unavailable)
            const storedOnboarding = localStorage.getItem(`onboarding_${fullEmail}`);
            if (storedOnboarding === 'true') {
              console.log('[DEV MODE] Found onboarding status in localStorage');
              window.location.href = '/profile';
              return;
            }

            const userResponse = await fetch("/api/user");
            if (userResponse.ok) {
              const userData = await userResponse.json();
              const onboardingCompleted = userData.data?.profile?.onboardingCompleted;
              
              if (onboardingCompleted) {
                // Store in localStorage as backup
                localStorage.setItem(`onboarding_${fullEmail}`, 'true');
                window.location.href = '/profile';
              } else {
                window.location.href = '/onboarding';
              }
            } else {
              // If we can't check, go to onboarding to be safe
              window.location.href = '/onboarding';
            }
          } catch (error) {
            // Check localStorage as fallback even on error
            const storedOnboarding = localStorage.getItem(`onboarding_${fullEmail}`);
            if (storedOnboarding === 'true') {
              window.location.href = '/profile';
              return;
            }
            // If error, go to onboarding
            window.location.href = '/onboarding';
          }
        }, 1000);
      }
    } catch (error) {
      setLoginState(prev => ({
        ...prev,
        error: 'network error. please try again.',
        isLoading: false
      }));
    }
  };

  const renderSignupForm = () => {
    if (signupState.flow === 'email-signup') {
      return (
        <div className="space-y-4">
          <div className="relative">
            <input
              type="text"
              placeholder="email"
              value={signupState.emailPrefix}
              onChange={(e) => {
                const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
                const value = isDev 
                  ? e.target.value // Allow any input in dev mode
                  : e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''); // Restrict in production
                setSignupState(prev => ({
                  ...prev,
                  emailPrefix: value,
                  error: ''
                }))
              }}
              className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-gray-900"
              disabled={signupState.isLoading}
              style={{ fontFamily: 'Merriweather, serif' }}
            />
            <span 
              className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              @{emailDomain}
            </span>
          </div>

          <input
            type="password"
            placeholder="password (min. 8 characters)"
            value={signupState.password}
            onChange={(e) =>
              setSignupState(prev => ({
                ...prev,
                password: e.target.value,
                error: ''
              }))
            }
            className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-gray-900"
            disabled={signupState.isLoading}
            style={{ fontFamily: 'Merriweather, serif' }}
          />

          <input
            type="password"
            placeholder="confirm password"
            value={signupState.confirmPassword}
            onChange={(e) =>
              setSignupState(prev => ({
                ...prev,
                confirmPassword: e.target.value,
                error: ''
              }))
            }
            className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-gray-900"
            disabled={signupState.isLoading}
            style={{ fontFamily: 'Merriweather, serif' }}
          />

          <button
            onClick={handleSendOTP}
            disabled={
              signupState.isLoading ||
              !signupState.emailPrefix ||
              !signupState.password ||
              !signupState.confirmPassword ||
              signupState.password.length < 8
            }
            className="w-full px-8 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            {signupState.isLoading ? 'sending...' : 'send verification code'}
          </button>
          <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Merriweather, serif' }}>
            by continuing, you agree that you are 18+ and agree to our{' '}
            <Link href="/legal/tos" className="underline hover:text-gray-700">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/legal/privacy" className="underline hover:text-gray-700">Privacy Policy</Link>
          </p>
        </div>
      );
    }

    if (signupState.flow === 'otp-verification') {
      return (
        <div className="space-y-4">
          <div className="text-center mb-4">
            <p className="text-sm text-gray-600" style={{ fontFamily: 'Merriweather, serif' }}>
              we sent a 6-digit code to <strong>{getFullEmail(signupState.emailPrefix)}</strong>
            </p>
          </div>
          <div className="w-full flex gap-1.5 sm:gap-2 mb-4">
            {[0, 1, 2, 3, 4, 5].map((index) => (
              <input
                key={index}
                type="text"
                inputMode="numeric"
                pattern="[0-9]*"
                maxLength={1}
                value={signupState.otp[index] || ''}
                onChange={(e) => {
                  const value = e.target.value;
                  if (value.match(/^[0-9]$/)) {
                    const newOtp = signupState.otp.split('');
                    newOtp[index] = value;
                    setSignupState(prev => ({
                      ...prev,
                      otp: newOtp.join(''),
                      error: ''
                    }));
                    if (index < 5) {
                      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
                      if (nextInput) nextInput.focus();
                    }
                  }
                }}
                onPaste={(e) => {
                  e.preventDefault();
                  const pastedText = e.clipboardData.getData('text');
                  const digits = pastedText.replace(/\D/g, '').slice(0, 6);
                  
                  if (digits.length > 0) {
                    const newOtp = signupState.otp.split('');
                    for (let i = 0; i < digits.length && index + i < 6; i++) {
                      newOtp[index + i] = digits[i];
                    }
                    setSignupState(prev => ({
                      ...prev,
                      otp: newOtp.join(''),
                      error: ''
                    }));
                    
                    // Focus the last filled input or the first empty one
                    const lastFilledIndex = Math.min(index + digits.length - 1, 5);
                    setTimeout(() => {
                      const nextInput = document.querySelector(`input[data-index="${lastFilledIndex}"]`) as HTMLInputElement;
                      if (nextInput) nextInput.focus();
                    }, 0);
                  }
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Backspace') {
                    if (signupState.otp[index]) {
                      e.preventDefault();
                      const newOtp = signupState.otp.split('');
                      newOtp[index] = '';
                      setSignupState(prev => ({
                        ...prev,
                        otp: newOtp.join(''),
                        error: ''
                      }));
                    } 
                    if (index > 0) {
                      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
                      if (prevInput) {
                        prevInput.focus();
                      }
                    }
                  }
                  if (e.key === 'ArrowLeft') {
                    if (index > 0) {
                      const prevInput = document.querySelector(`input[data-index="${index - 1}"]`) as HTMLInputElement;
                      if (prevInput) {
                        prevInput.focus();
                      }
                    }
                  }
                  if (e.key === 'ArrowRight') {
                    if (index < 5) {
                      const nextInput = document.querySelector(`input[data-index="${index + 1}"]`) as HTMLInputElement;
                      if (nextInput) {
                        nextInput.focus();
                      }
                    }
                  }
                }}
                data-index={index}
                className="flex-1 min-w-0 w-0 h-14 sm:h-16 text-center text-xl sm:text-2xl border border-gray-300 bg-white/60 shadow-sm rounded-2xl focus:outline-none focus:ring-2 focus:ring-gray-700 text-gray-900"                
                disabled={signupState.isLoading}
                style={{ fontFamily: 'Merriweather, serif' }}
              />
            ))}
          </div>
          <button
            onClick={handleVerifyOTP}
            disabled={signupState.isLoading || signupState.otp.length !== 6}
            className="w-full px-8 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            {signupState.isLoading ? 'creating account...' : 'create account'}
          </button>
          <p className="text-xs text-gray-500 text-center" style={{ fontFamily: 'Merriweather, serif' }}>
            by continuing, you agree that you are 18+ and agree to our{' '}
            <Link href="/legal/tos" className="underline hover:text-gray-700">Terms of Service</Link>
            {' '}and{' '}
            <Link href="/legal/privacy" className="underline hover:text-gray-700">Privacy Policy</Link>
          </p>
          <div className="flex flex-col space-y-2">
            <button
              onClick={handleResendOTP}
              disabled={signupState.isLoading}
              className="text-sm text-gray-600 hover:text-gray-800 underline"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              didn't receive code? resend
            </button>
            <button
              onClick={() =>
                setSignupState(prev => ({
                  ...prev,
                  flow: 'email-signup',
                  otp: '',
                  error: '',
                  success: ''
                }))
              }
              className="text-sm text-gray-500 hover:text-gray-700 underline"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              ← back
            </button>
          </div>
        </div>
      );
    }
  };

  const renderLoginForm = () => {
    return (
      <div className="space-y-4">
        <div className="relative">
          <input
            type="text"
            placeholder={typeof window !== 'undefined' && window.location.hostname === 'localhost' ? "email or username" : "email"}
            value={loginState.emailPrefix}
            onChange={(e) => {
              const isDev = typeof window !== 'undefined' && window.location.hostname === 'localhost';
              const value = isDev 
                ? e.target.value // Allow any input in dev mode
                : e.target.value.toLowerCase().replace(/[^a-z0-9]/g, ''); // Restrict in production
              setLoginState(prev => ({
                ...prev,
                emailPrefix: value,
                error: ''
              }))
            }}
            className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-gray-900"
            disabled={loginState.isLoading}
            style={{ fontFamily: 'Merriweather, serif' }}
          />
          <span 
            className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-500"
            style={{ fontFamily: 'Merriweather, serif' }}
          >
            @{emailDomain}
          </span>
        </div>

        <input
          type="password"
          placeholder="password"
          value={loginState.password}
          onChange={(e) =>
            setLoginState(prev => ({
              ...prev,
              password: e.target.value,
              error: ''
            }))
          }
          onKeyDown={(e) => {
            if (e.key === 'Enter' && loginState.emailPrefix && loginState.password) {
              handleLogin();
            }
          }}
          className="w-full px-4 py-3 border-2 border-gray-800 rounded-lg focus:outline-none focus:ring-2 focus:ring-gray-700 focus:border-transparent text-gray-900"
          disabled={loginState.isLoading}
          style={{ fontFamily: 'Merriweather, serif' }}
        />

        <button
          onClick={handleLogin}
          disabled={
            loginState.isLoading ||
            !loginState.emailPrefix ||
            !loginState.password
          }
          className="w-full px-8 py-3 bg-gray-800 text-white font-bold rounded-lg hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
          style={{ fontFamily: 'Merriweather, serif' }}
        >
          {loginState.isLoading ? 'logging in...' : 'log in'}
        </button>
      </div>
    );
  };

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
        {/* Hero Section */}
        <div 
          className="relative h-screen flex flex-col items-center justify-center px-4 overflow-hidden" 
          style={{ paddingTop: 'max(0px, env(safe-area-inset-top))', 
                  paddingBottom: 'max(0px, env(safe-area-inset-bottom))', 
                  paddingLeft: 'max(0px, env(safe-area-inset-left))', 
                  paddingRight: 'max(0px, env(safe-area-inset-right))' }}>
          {bubbles.map((bubble, i) => {
            const messageIndex = i % messageTexts.length;
            
            return (
              <div
                key={bubble.id}
                className={`absolute animate-float ${i >= 4 ? 'hidden md:block' : ''}`}
                style={{
                  left: bubble.left,
                  top: bubble.top,
                  animationDelay: bubble.delay,
                  animationDuration: '4s',
                  fontFamily: 'Merriweather, serif',
                  maxWidth: '250px',
                  filter: showAuth ? 'blur(8px)' : 'none',
                  transition: 'filter 0.3s ease',
                  width: '250px'
                }}
              >
                <div className="relative backdrop-blur-md bg-white/20 shadow-lg p-4" style={{ borderRadius: '24px 24px 24px 0' }}>
                  <p className="text-gray-600 text-xs opacity-70 font-medium">
                    {messageTexts[messageIndex]}
                  </p>
                </div>
              </div>
            );
          })}

          <div 
            className="absolute inset-0 flex flex-col items-center justify-center"
            style={{
              filter: showAuth ? 'blur(8px)' : 'none',
              transition: 'filter 0.3s ease',
              paddingTop: 'max(0px, env(safe-area-inset-top))',
              paddingBottom: 'max(0px, env(safe-area-inset-bottom))',
              paddingLeft: 'max(0px, env(safe-area-inset-left))',
              paddingRight: 'max(0px, env(safe-area-inset-right))'
            }}
          >
            <h1 
              className="text-5xl sm:text-6xl md:text-7xl font-bold text-gray-800 tracking-tight whitespace-nowrap"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              looks matter.
            </h1>
            <h2 
              className="text-3xl sm:text-4xl md:text-5xl font-bold text-gray-700 tracking-tight mt-2"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              for {collegeName}
            </h2>
            <p 
              className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-600 mt-2 max-w-4xl text-center px-4"
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              get a date who's actually as attractive as you
            </p>
            
            <div className="mt-6 flex flex-col sm:flex-row items-center gap-4 sm:gap-6">
              <button
                onClick={handleGetMatched}
                disabled={!isActive}
                className={`px-8 py-4 font-bold rounded-full transition-all duration-300 shadow-lg ${
                  isActive 
                    ? 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-xl hover:scale-105 cursor-pointer' 
                    : 'bg-gray-400 text-gray-200 cursor-not-allowed'
                }`}
                style={{ fontFamily: 'Merriweather, serif' }}
              >
                {isActive ? 'get matched' : 'coming soon...'}
              </button>

              <div ref={dropdownRef} className="relative flex flex-col items-center sm:items-start">
                <button
                  ref={buttonRef} 
                  onClick={(e) => {
                    setShowDropdown(!showDropdown);
                  }}
                  className="text-gray-800 font-bold underline hover:text-gray-600 transition-colors flex items-center gap-2 relative z-10"
                  style={{ fontFamily: 'Merriweather, serif', fontSize: '1rem' }}
                >
                  not from {collegeName}?
                  <svg
                    className={`w-4 h-4 transition-transform duration-300 ${showDropdown ? 'rotate-180' : ''}`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </button>
                
                {showDropdown && (
                  <div 
                    onClick={(e) => e.stopPropagation()}
                    className="absolute top-full mt-1 bg-white border-2 border-gray-400/40 rounded-lg shadow-xl max-h-60 overflow-y-auto z-50"
                    style={{ 
                      left: '-1px',
                      width: `${buttonWidth}px`,
                    }}
                  >
                    {getCollegeOptions().map((option) => (
                      <button
                        key={option}
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleCollegeChange(option);
                        }}
                        className="w-full px-4 py-3 text-left hover:bg-gray-100 transition-colors text-sm text-gray-700 first:rounded-t-lg last:rounded-b-lg whitespace-nowrap"
                        style={{ fontFamily: 'Merriweather, serif' }}
                      >
                        {option}
                      </button>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* The Problem Section */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Merriweather, serif' }}>
                the problem
              </h2>
              <motion.div 
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
                initial={{ opacity: 0, y: 50 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className="relative backdrop-blur-md bg-white/2 shadow-lg p-6 rounded-2xl border border-white/20 text-center"
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.6, delay: index * 0.1 }}
                    viewport={{ once: true }}
                    whileHover={{ scale: 1.05, transition: { duration: 0.2 } }}
                  >
                    <AnimatedCounter value={stat.number} suffix={stat.suffix} />
                    <p className="text-gray-700 mt-2 text-sm font-medium" style={{ fontFamily: 'Merriweather, serif' }}>
                      {stat.label}
                    </p>
                    <p className="text-xs text-gray-500 mt-3 italic" style={{ fontFamily: 'Merriweather, serif' }}>
                      {stat.source}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          </div>
        </section>

        {/* Solution Section */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto text-center px-4 sm:px-6 md:px-8">
            <TypingAnimation />
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-10 px-4">
          <div className="max-w-6xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Merriweather, serif' }}>
                how it works
              </h2>
              
              <div className="grid md:grid-cols-3 gap-8">
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl" style={{ fontFamily: 'Merriweather, serif' }}>1</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Merriweather, serif' }}>create your profile</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Merriweather, serif' }}>
                    tell us about yourself, upload photos, and set your preferences for the perfect match
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl" style={{ fontFamily: 'Merriweather, serif' }}>2</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Merriweather, serif' }}>opt in</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Merriweather, serif' }}>
                    if you opt in before midnight on thursday, our algorithm will find you a match as attractive as you
                  </p>
                </div>
                
                <div className="text-center">
                  <div className="w-16 h-16 bg-gray-800 rounded-full flex items-center justify-center mx-auto mb-4">
                    <span className="text-white font-bold text-xl" style={{ fontFamily: 'Merriweather, serif' }}>3</span>
                  </div>
                  <h3 className="text-xl font-bold text-gray-800 mb-2" style={{ fontFamily: 'Merriweather, serif' }}>go on a date</h3>
                  <p className="text-gray-600" style={{ fontFamily: 'Merriweather, serif' }}>
                    we email you their contact info and let you figure out the rest - meet up and have fun
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto">
            <div className="backdrop-blur-sm bg-white/20 rounded-3xl shadow-onboarding p-8 md:p-12">
              <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-800 mb-12" style={{ fontFamily: 'Merriweather, serif' }}>
                frequently asked questions
              </h2>
              
              <div className="space-y-3">
                {[
                  {
                    question: "how does the matching work?",
                    answer: "we designed an ai model to quantify just how visually compatible two people are by their photos, and we take in your preferences and other profile information to give you the best possible match every week."
                  },
                  {
                    question: `is this only for ${collegeName} students?`,
                    answer: "yes, we focus on connecting students within the same college community for better compatibility and easier meetups."
                  },
                  {
                    question: "what if i don't get matched?",
                    answer: "don't worry! we prioritize matching those that did not get matched previously and continuously work to improve match rate. you can also update your profile or preferences to increase your chances."
                  },
                  {
                    question: "is my information safe?",
                    answer: "absolutely. we use your school email for verification and only share your information to the matches you receive. your privacy is our priority."
                  },
                  {
                    question: "can i not match just for this week?",
                    answer: "yep! just opt back out in your profile and you won't receive a match until you opt back in."
                  }
                ].map((faq, index) => (
                  <div key={index} className="backdrop-blur-md bg-white/2 shadow-lg rounded-lg border border-white/20 overflow-hidden transition-all duration-200">
                    <button
                      onClick={() => setExpandedFAQ(expandedFAQ === index ? null : index)}
                      className="w-full px-6 py-4 flex items-center justify-between hover:bg-white/10 transition-colors text-left"
                    >
                      <h3 className="text-lg font-bold text-gray-800" style={{ fontFamily: 'Merriweather, serif' }}>
                        {faq.question}
                      </h3>
                      <svg
                        className={`w-6 h-6 text-gray-600 transition-transform duration-300 flex-shrink-0 ml-4 ${
                          expandedFAQ === index ? 'rotate-180' : ''
                        }`}
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 9l6 6 6-6" />
                      </svg>
                    </button>
                    {expandedFAQ === index && (
                      <div className="px-6 pt-0 pb-4 bg-white/10">
                        <p className="text-gray-600" style={{ fontFamily: 'Merriweather, serif' }}>
                          {faq.answer}
                        </p>
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold text-gray-800 mb-8" style={{ fontFamily: 'Merriweather, serif' }}>
              find your likely one?
            </h2>
            <button
              onClick={handleGetMatched}
              disabled={!isActive}
              className={`px-10 py-5 font-bold rounded-full transition-all duration-300 shadow-lg text-lg ${
                isActive 
                  ? 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-xl hover:scale-105 cursor-pointer' 
                  : 'bg-gray-400 text-gray-200 cursor-not-allowed'
              }`}
              style={{ fontFamily: 'Merriweather, serif' }}
            >
              {isActive ? 'get matched' : 'coming soon...'}
            </button>
          </div>
        </section>

        <Footer />

        {/* Auth Modal */}
        {showAuth && (
          <div className="fixed inset-0 flex items-center justify-center z-50 p-4" style={{ paddingTop: 'max(1rem, env(safe-area-inset-top))', paddingBottom: 'max(1rem, env(safe-area-inset-bottom))', paddingLeft: 'max(1rem, env(safe-area-inset-left))', paddingRight: 'max(1rem, env(safe-area-inset-right))' }}>
            <div 
              className="absolute inset-0 bg-black/30 backdrop-blur-sm"
              onClick={handleCloseAuth}
            ></div>
            
            <div className="relative bg-white/60 backdrop-blur-md rounded-2xl border-2 border-gray-300 shadow-2xl w-full max-w-md p-8 max-h-[90vh] overflow-y-auto">
              <button
                onClick={handleCloseAuth}
                className="absolute top-2 right-4 text-gray-400 hover:text-gray-600 text-2xl"
              >
                ×
              </button>

              <div className="flex mb-6 bg-white/20 rounded-lg p-1">
                <button
                  onClick={() => setAuthMode('signup')}
                  className={`flex-1 py-2 rounded-md font-bold transition-all duration-300 ${
                    authMode === 'signup'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  sign up
                </button>
                <button
                  onClick={() => setAuthMode('login')}
                  className={`flex-1 py-2 rounded-md font-bold transition-all duration-300 ${
                    authMode === 'login'
                      ? 'bg-gray-800 text-white'
                      : 'text-gray-600 hover:text-gray-800'
                  }`}
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  log in
                </button>
              </div>

              <div className="text-center mb-6">
                <h2 
                  className="text-3xl font-bold text-gray-800 mb-2"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  {authMode === 'signup' ? 'find your match' : 'here again?'}
                </h2>
                <p 
                  className="text-gray-600"
                  style={{ fontFamily: 'Merriweather, serif' }}
                >
                  {authMode === 'signup' 
                    ? 'create your account to get matched' 
                    : 'log in to continue your journey'}
                </p>
              </div>

              {authMode === 'signup' && signupState.error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" style={{ fontFamily: 'Merriweather, serif' }}>
                  {signupState.error}
                </div>
              )}
              {authMode === 'signup' && signupState.success && (
                <div className="mb-4 p-3 bg-green-100 border-2 border-green-300 rounded-lg text-green-800 text-center text-sm font-medium shadow-sm" style={{ fontFamily: 'Merriweather, serif' }}>
                  {signupState.success}
                </div>
              )}
              {authMode === 'login' && loginState.error && (
                <div className="mb-4 p-3 bg-red-50 border border-red-200 rounded-lg text-red-700 text-sm" style={{ fontFamily: 'Merriweather, serif' }}>
                  {loginState.error}
                </div>
              )}
              {authMode === 'login' && loginState.success && (
                <div className="mb-4 p-3 bg-green-50 border border-green-200 rounded-lg text-green-700 text-sm" style={{ fontFamily: 'Merriweather, serif' }}>
                  {loginState.success}
                </div>
              )}

              {authMode === 'signup' ? renderSignupForm() : renderLoginForm()}
            </div>
          </div>
        )}
      </div>

      <style>{`
        @keyframes float {
          0%, 100% {
            transform: translateY(0px);
          }
          50% {
            transform: translateY(-20px);
          }
        }
        
        .animate-float {
          animation: float 6s ease-in-out infinite;
        }

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
        
        .shadow-onboarding-hover {
          box-shadow: 0 0 25px rgba(196, 181, 253, 0.25), 0 0 40px rgba(221, 214, 254, 0.15);
        }
        
        .shadow-onboarding-hover-bright {
          box-shadow: 0 0 30px rgba(255, 255, 255, 0.6), 0 0 50px rgba(255, 255, 255, 0.4), 0 0 70px rgba(255, 255, 255, 0.2);
        }
      `}</style>
    </>
  );
};

export default Home;