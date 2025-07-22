import { Box, Typography, List, ListItem, ListItemIcon, ListItemText } from '@mui/material';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const highlights = [
  'Migrated 1.28TB of infrastructure from Synology + VM Manager to Azure Blob Storage',
  'Managed on-premise testing lab for Android/ChromeOS at Google',
  'Built RESTful web apps using React, Node, Express, and MongoDB',
  'Integrated PostgreSQL with AWS RDS and cloud-deployed apps on Render.io',
  'Taught and mentored middle schoolers in Python, Scratch, and MakeCode'
];

const Highlights = () => (
  <Box my={4}>
    <Typography variant="h5" gutterBottom>Career Highlights</Typography>
    <List>
      {highlights.map((item) => (
        <ListItem key={item}>
          <ListItemIcon><CheckCircleIcon color="success" /></ListItemIcon>
          <ListItemText primary={item} />
        </ListItem>
      ))}
    </List>
  </Box>
);

export default Highlights;
