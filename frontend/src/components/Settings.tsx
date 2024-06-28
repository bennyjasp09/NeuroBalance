import React, { useState } from 'react';
import { Typography, Switch, FormControlLabel, Box } from '@mui/material';

const Settings: React.FC = () => {
  const [notifications, setNotifications] = useState(true);
  const [darkMode, setDarkMode] = useState(false);

  return (
    <Box>
      <Typography variant="h4" gutterBottom>Settings</Typography>
      <FormControlLabel
        control={
          <Switch
            checked={notifications}
            onChange={(e) => setNotifications(e.target.checked)}
          />
        }
        label="Enable Notifications"
      />
      <FormControlLabel
        control={
          <Switch
            checked={darkMode}
            onChange={(e) => setDarkMode(e.target.checked)}
          />
        }
        label="Dark Mode"
      />
    </Box>
  );
};

export default Settings;