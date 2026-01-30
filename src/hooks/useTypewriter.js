import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(text, options = {}) {
  const {
    speed = 50,
    delay = 0,
    onComplete = () => {},
  } = options;

  const [displayText, setDisplayText] = useState('');
  const [isTyping, setIsTyping] = useState(false);
  const [isComplete, setIsComplete] = useState(false);

  const startTyping = useCallback(() => {
    setDisplayText('');
    setIsTyping(true);
    setIsComplete(false);
  }, []);

  useEffect(() => {
    let timeout;

    if (delay > 0 && !isTyping && !isComplete) {
      timeout = setTimeout(() => {
        setIsTyping(true);
      }, delay);
      return () => clearTimeout(timeout);
    }

    if (!isTyping) return;

    if (displayText.length < text.length) {
      timeout = setTimeout(() => {
        setDisplayText(text.slice(0, displayText.length + 1));
      }, speed);
    } else {
      setIsTyping(false);
      setIsComplete(true);
      onComplete();
    }

    return () => clearTimeout(timeout);
  }, [text, displayText, speed, delay, isTyping, isComplete, onComplete]);

  // Auto-start on mount
  useEffect(() => {
    if (delay === 0) {
      setIsTyping(true);
    }
  }, [delay]);

  return {
    displayText,
    isTyping,
    isComplete,
    startTyping,
  };
}
