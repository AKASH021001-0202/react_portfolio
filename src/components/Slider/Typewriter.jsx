import React, { useState, useEffect } from 'react';

const Typewriter = ({ words }) => {
  const [wordIndex, setWordIndex] = useState(0);
  const [text, setText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);

  useEffect(() => {
    const type = () => {
      const currentWord = words[wordIndex];
      const shouldDelete = isDeleting ? 1 : -1;
      setText((current) => currentWord.substring(0, current.length - shouldDelete));

      if (!isDeleting && text === currentWord) {
        setTimeout(() => setIsDeleting(true), 500);
      } else if (isDeleting && text === '') {
        setIsDeleting(false);
        setWordIndex((current) => (current + 1) % words.length);
      }
    };

    const timer = setTimeout(type, isDeleting ? 100 : 200);

    return () => clearTimeout(timer);
  }, [wordIndex, isDeleting, text, words]);

  return <h2>{text}</h2>;
};

export default Typewriter;
