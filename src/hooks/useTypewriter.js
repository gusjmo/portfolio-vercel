import { useState, useEffect, useCallback } from 'react';

export function useTypewriter(phrases, options = {}) {
  const { typeSpeed = 80, deleteSpeed = 50, pauseTime = 2000 } = options;
  const [text, setText] = useState('');
  const [phraseIndex, setPhraseIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);

  const currentPhrase = phrases[phraseIndex];

  useEffect(() => {
    let timeout;

    if (!isDeleting && text === currentPhrase) {
      // Finished typing, pause then start deleting
      timeout = setTimeout(() => setIsDeleting(true), pauseTime);
    } else if (isDeleting && text === '') {
      // Finished deleting, move to next phrase
      setIsDeleting(false);
      setPhraseIndex((prev) => (prev + 1) % phrases.length);
    } else {
      // Type or delete one character
      const speed = isDeleting ? deleteSpeed : typeSpeed;
      timeout = setTimeout(() => {
        setText(prev =>
          isDeleting
            ? prev.slice(0, -1)
            : currentPhrase.slice(0, prev.length + 1)
        );
      }, speed);
    }

    return () => clearTimeout(timeout);
  }, [text, isDeleting, currentPhrase, typeSpeed, deleteSpeed, pauseTime, phrases.length]);

  return { text, isDeleting };
}
