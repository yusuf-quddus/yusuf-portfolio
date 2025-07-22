import {
  Box, Typography, Card, CardMedia, CardContent,
  Stack, Chip, Button
} from '@mui/material';
import { motion } from 'framer-motion';

const projects = [
  {
    title: 'RPGShowcase',
    image: '/images/rpgshowcase.png',
    description: 'Web app for posting TTRPG characters with auth and S3 storage.',
    tech: ['React', 'Node.js', 'MongoDB', 'AWS S3'],
    link: 'https://github.com/yusuf-quddus/RPG-Showcase',
  },
  {
    title: 'Cryptographic File Sharing',
    image: '/images/cryptoapp.png',
    description: 'Secure file sharing app with encryption and access control.',
    tech: ['Golang', 'Crypto', 'File Storage'],
    link: 'https://github.com/yusuf-quddus/cryptographic-fileshare',
  },
];

const Projects = () => (
  <Box my={6}>
    <Typography variant="h5" gutterBottom>Projects</Typography>
    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 3, justifyContent: 'space-between' }} >
      {projects.map((proj) => (
        <motion.div
          key={proj.title}
          whileHover={{ scale: 1.02 }}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ flex: '1 1 calc(50% - 24px)', maxWidth: '100%' }}
        >
          <Card elevation={4}
            sx={{ display: 'flex', flexDirection: 'column', height: '100%' }} >
            <CardMedia component="img" height="160" image={proj.image} alt={proj.title} />
            <CardContent sx={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
              <Typography variant="h6" gutterBottom>{proj.title}</Typography>
              <Typography variant="body2" color="text.secondary" sx={{ mb: 2 }}>
                {proj.description}
              </Typography>
              <Stack direction="row" spacing={1} flexWrap="wrap" mb={2}>
                {proj.tech.map((t) => (
                  <Chip key={t} label={t} size="small" />
                ))}
              </Stack>
              <Box sx={{ mt: 'auto' }}>
                <Button variant="outlined" size="small" href={proj.link} target="_blank">
                  View on GitHub
                </Button>
              </Box>
            </CardContent>
          </Card>
        </motion.div>
      ))}
    </Box>
  </Box>
);

export default Projects;
