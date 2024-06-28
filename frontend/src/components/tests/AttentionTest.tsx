import React, { useState, useEffect, useRef } from 'react';
import { Typography, Button, Box } from '@mui/material';

const AttentionTest: React.FC = () => {
  const [score, setScore] = useState(0);
  const [timeLeft, setTimeLeft] = useState(30);
  const [isActive, setIsActive] = useState(false);
  const intervalRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    if (isActive && timeLeft > 0) {
      intervalRef.current = setInterval(() => {
        setTimeLeft((time) => time - 1);
      }, 1000);
    } else if (timeLeft === 0) {
      setIsActive(false);
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    }
    return () => {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
      }
    };
  }, [isActive, timeLeft]);

  const startTest = () => {
    setIsActive(true);
    setScore(0);
    setTimeLeft(30);
  };

  const handleClick = () => {
    if (isActive) {
      setScore((prevScore) => prevScore + 1);
    }
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Attention Test</Typography>
      <Typography>Time Left: {timeLeft} seconds</Typography>
      <Typography>Score: {score}</Typography>
      {!isActive && (
        <Button onClick={startTest} variant="contained" color="primary">
          Start Test
        </Button>
      )}
      {isActive && (
        <Button onClick={handleClick} variant="contained" color="secondary">
          Click Me!
        </Button>
      )}
    </Box>
  );
};

export default AttentionTest;