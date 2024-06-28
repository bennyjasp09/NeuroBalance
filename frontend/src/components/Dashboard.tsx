import React from 'react';
import { Typography, Grid, Paper, Button } from '@mui/material';
import { Link } from 'react-router-dom';

const Dashboard: React.FC = () => {
  return (
    <div>
      <Typography variant="h4" gutterBottom>Dashboard</Typography>
      <Grid container spacing={3}>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Quick Stats</Typography>
            <Typography>Tests Completed: 10</Typography>
            <Typography>Average Score: 85%</Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={6}>
          <Paper sx={{ p: 2 }}>
            <Typography variant="h6">Upcoming Tests</Typography>
            <Button component={Link} to="/tests" variant="contained" color="primary">
              Start New Test
            </Button>
          </Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default Dashboard;