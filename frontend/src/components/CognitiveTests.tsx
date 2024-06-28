import React, { useState } from 'react';
import { Typography, Button, Box } from '@mui/material';
import MemoryTest from './tests/MemoryTest';
import AttentionTest from './tests/AttentionTest';
import ProblemSolvingTest from './tests/ProblemSolvingTest';

const CognitiveTests: React.FC = () => {
  const [currentTest, setCurrentTest] = useState<string | null>(null);

  const renderTest = () => {
    switch (currentTest) {
      case 'memory':
        return <MemoryTest />;
      case 'attention':
        return <AttentionTest />;
      case 'problemSolving':
        return <ProblemSolvingTest />;
      default:
        return null;
    }
  };

  return (
    <div>
      <Typography variant="h4" gutterBottom>Cognitive Tests</Typography>
      {!currentTest ? (
        <Box>
          <Button onClick={() => setCurrentTest('memory')} variant="contained" sx={{ m: 1 }}>
            Memory Test
          </Button>
          <Button onClick={() => setCurrentTest('attention')} variant="contained" sx={{ m: 1 }}>
            Attention Test
          </Button>
          <Button onClick={() => setCurrentTest('problemSolving')} variant="contained" sx={{ m: 1 }}>
            Problem Solving Test
          </Button>
        </Box>
      ) : (
        renderTest()
      )}
    </div>
  );
};

export default CognitiveTests;