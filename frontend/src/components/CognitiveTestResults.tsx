import React, { useState, useEffect } from 'react';
import { Container, Typography, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Paper } from '@mui/material';
import axios from 'axios';

interface TestResult {
  id: number;
  testType: string;
  score: number;
  takenAt: string;
}

const CognitiveTestResults: React.FC = () => {
  const [results, setResults] = useState<TestResult[]>([]);

  useEffect(() => {
    fetchResults();
  }, []);

  const fetchResults = async () => {
    try {
      const response = await axios.get('http://localhost:9090/api/cognitive-tests/results', {
        headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
      });
      setResults(response.data);
    } catch (error) {
      console.error('Error fetching test results:', error);
    }
  };

  return (
    <Container>
      <Typography variant="h4">Cognitive Test Results</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Test Type</TableCell>
              <TableCell>Score</TableCell>
              <TableCell>Date Taken</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{result.testType}</TableCell>
                <TableCell>{result.score}</TableCell>
                <TableCell>{new Date(result.takenAt).toLocaleString()}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Container>
  );
};

export default CognitiveTestResults;