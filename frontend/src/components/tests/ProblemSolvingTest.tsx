import React, { useState } from 'react';
import { Typography, TextField, Button, Box } from '@mui/material';

const ProblemSolvingTest: React.FC = () => {
  const [answer, setAnswer] = useState('');
  const [score, setScore] = useState(0);
  const [currentProblem, setCurrentProblem] = useState(1);

  const problems = [
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "How many sides does a triangle have?", answer: "3" },
  ];

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (answer.toLowerCase() === problems[currentProblem - 1].answer.toLowerCase()) {
      setScore(score + 1);
    }
    if (currentProblem < problems.length) {
      setCurrentProblem(currentProblem + 1);
    } else {
      alert(`Test completed! Your score: ${score + 1}/${problems.length}`);
    }
    setAnswer('');
  };

  return (
    <Box>
      <Typography variant="h5" gutterBottom>Problem Solving Test</Typography>
      <Typography>Question {currentProblem}/{problems.length}</Typography>
      <Typography>{problems[currentProblem - 1].question}</Typography>
      <form onSubmit={handleSubmit}>
        <TextField
          value={answer}
          onChange={(e) => setAnswer(e.target.value)}
          fullWidth
          margin="normal"
        />
        <Button type="submit" variant="contained" color="primary">
          Submit Answer
        </Button>
      </form>
    </Box>
  );
};

export default ProblemSolvingTest;