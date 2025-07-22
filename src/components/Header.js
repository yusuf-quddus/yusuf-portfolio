import { Typography, Avatar, Box, Stack, IconButton, Button } from '@mui/material';
import { motion } from 'framer-motion';
import DownloadIcon from '@mui/icons-material/Download';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Header = () => (
  <motion.div initial={{ opacity: 0, y: -40 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8 }} >
    <Box textAlign="center" mt={4}>
      <Avatar alt="Yusuf Quddus" src="/images/profile-image.jpeg" sx={{ width: 150, height: 150, margin: 'auto', mb: 2 }} />
      <Typography variant="h4">Yusuf Quddus</Typography>
      <Typography variant="subtitle1" color="text.secondary">
        Full Stack Software Engineer | Cloud & Systems Enthusiast
      </Typography>

      <Stack direction="row" spacing={2} justifyContent="center" alignItems="center" sx={{ mt: 2 }} flexWrap="wrap" >
        <IconButton component="a" href="https://github.com/yusuf-quddus" target="_blank" rel="noopener" aria-label="GitHub" color="inherit" >
          <GitHubIcon fontSize="large" />
        </IconButton>
        <IconButton component="a" href="https://linkedin.com/in/yusuf-quddus" target="_blank" rel="noopener" aria-label="LinkedIn" color="inherit" >
          <LinkedInIcon fontSize="large" />
        </IconButton>
        <Button variant="contained" color="primary" href="/Quddus_Yusuf_Res.pdf" download startIcon={<DownloadIcon />} >
          Download CV
        </Button>
      </Stack>
    </Box>
  </motion.div>
);

export default Header;