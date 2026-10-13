import { useState, useEffect, useCallback } from 'react';

export function useBookingTimer(initialSeconds: number = 600) {
  const [timeLeft, setTimeLeft] = useState(initialSeconds);

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  const formatTimer = useCallback((seconds: number) => {
    const m = Math.floor(seconds / 60);
    const s = seconds % 60;
    return `${m.toString().padStart(2, '0')}:${s.toString().padStart(2, '0')}`;
  }, []);

  return {
    timeLeft,
    formattedTime: formatTimer(timeLeft),
    isExpired: timeLeft === 0,
    formatTimer,
    setTimeLeft,
  };
}
