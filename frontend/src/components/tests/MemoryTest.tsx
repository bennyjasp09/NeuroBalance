import React, { useState, useEffect, useCallback } from 'react';
import { Typography, Button, Box } from '@mui/material';

const MemoryTest: React.FC = () => {
  const [sequence, setSequence] = useState<number[]>([]);
  const [userSequence, setUserSequence] = useState<number[]>([]);
  const [level, setLevel] = useState(3);
  const [isShowingSequence, setIsShowingSequence] = useState(true);

  const generateSequence = useCallback(() => {
    const newSequence = Array.from({ length: level }, () => Math.floor(Math.random() * 9) + 1);
    setSequence(newSequence);
    setIsShowingSequence(true);
    setTimeout(() => setIsShowingSequence(false), level * 1000);
  }, [level]);

  useEffect(() => {
    generateSequence();
  }, [generateSequence]);

  const handleNumberClick = (number: number) => {
    if (isShowingSequence) return;
    const newUserSequence = [...userSequence, number];
    setUserSequence(newUserSequence);

    if (newUserSequence.length === sequence.length) {
      if (newUserSequence.every((num, index) => num === sequence[index])) {
        setLevel(level + 1);
        setUserSequence([]);
        generateSequence();
      } else {
        alert(`Game Over! You reached level ${level}`);
        setLevel(3);
        setUserSequence([]);
        generateSequence();
      }
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Memory Test - Level {level}</Typography>
      <Box sx={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 2, maxWidth: 300, margin: 'auto' }}>
        {[1, 2, 3, 4, 5, 6, 7, 8, 9].map((number) => (
          <Button
            key={number}
            variant="contained"
            onClick={() => handleNumberClick(number)}
            disabled={isShowingSequence}
          >
            {isShowingSequence && sequence.includes(number) ? number : ''}
          </Button>
        ))}
      </Box>
    </Box>
  );
};

export default MemoryTest;