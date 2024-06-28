import React, { useEffect, useState } from 'react';
import { Typography, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';
import axios from 'axios';

interface TestResult {
  id: number;
  testType: string;
  score: number;
  takenAt: string;
}

const Results: React.FC = () => {
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
    <div>
      <Typography variant="h4" gutterBottom>Test Results</Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Date</TableCell>
              <TableCell>Test Type</TableCell>
              <TableCell>Score</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {results.map((result) => (
              <TableRow key={result.id}>
                <TableCell>{new Date(result.takenAt).toLocaleString()}</TableCell>
                <TableCell>{result.testType}</TableCell>
                <TableCell>{result.score}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
};

export default Results;