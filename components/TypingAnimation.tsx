import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';

const TypingAnimation = () => {
  const [displayedText, setDisplayedText] = useState('');
  const [showSecondLine, setShowSecondLine] = useState(false);
  const [currentWordIndex, setCurrentWordIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef<HTMLDivElement>(null);
  
  const firstLineText = "but we can just give you a match who's actually as attractive as you";
  const secondLineWords = ['every.', 'single.', 'week.'];

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
    if (!isVisible) return;

    let currentIndex = 0;
    const typingSpeed = 30;

    const typeFirstLine = () => {
      if (currentIndex < firstLineText.length) {
        setDisplayedText(firstLineText.slice(0, currentIndex + 1));
        currentIndex++;
        setTimeout(typeFirstLine, typingSpeed);
      } else {
        setTimeout(() => setShowSecondLine(true), 300);
      }
    };

    typeFirstLine();
  }, [isVisible]);

  useEffect(() => {
    if (!showSecondLine) return;

    let wordIndex = 0;
    const wordDelay = 500;

    const showNextWord = () => {
      if (wordIndex < secondLineWords.length) {
        setCurrentWordIndex(wordIndex + 1);
        wordIndex++;
        setTimeout(showNextWord, wordDelay);
      }
    };

    showNextWord();
  }, [showSecondLine]);

  return (
    <div ref={ref}>
      <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-800 leading-tight min-h-[4rem]" style={{ fontFamily: 'Merriweather, serif' }}>
        {displayedText}
        {displayedText.length < firstLineText.length && <span className="animate-pulse">|</span>}
      </h2>
      {showSecondLine && (
        <h3 className="text-4xl md:text-5xl lg:text-6xl font-bold text-gray-800 mt-8" style={{ fontFamily: 'Merriweather, serif' }}>
          {secondLineWords.slice(0, currentWordIndex).map((word, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3 }}
              className="inline-block mr-5"
            >
              {word}
            </motion.span>
          ))}
        </h3>
      )}
    </div>
  );
};

export default TypingAnimation;