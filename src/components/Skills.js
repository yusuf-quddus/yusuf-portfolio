import { Box, Typography, Stack, Chip } from '@mui/material';

const techStack = [
  'React', 'Node.js', 'PostgreSQL', 'AWS', 'Python', 'MongoDB',
  'C++', 'Golang', 'Docker', 'Shell Scripting', 'CI/CD', 'Express', 'Linux'
];

const Skills = () => (
  <Box
    sx={{
      backgroundColor: '#f0f2f5',
      py: 6,
      px: 2,
      width: '100vw',
      position: 'relative',
      left: '50%',
      right: '50%',
      marginLeft: '-50vw',
      marginRight: '-50vw',
    }}
  >
    <Box sx={{ maxWidth: '960px', margin: '0 auto' }}>
      <Typography variant="h5" gutterBottom>
        Technical Skills
      </Typography>
      <Stack direction="row" spacing={1} flexWrap="wrap">
        {techStack.map((skill) => (
          <Chip key={skill} label={skill} color="primary" variant="outlined" sx={{ mb: 1 }} />
        ))}
      </Stack>
    </Box>
  </Box>
);

export default Skills;
