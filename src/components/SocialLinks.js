import { Box, IconButton, Stack } from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const SocialLinks = () => (
  <Box sx={{ mt: 2 }}>
    <Stack direction="row" spacing={2} justifyContent="center">
      <IconButton
        component="a"
        href="https://github.com/yusuf-quddus"
        target="_blank"
        rel="noopener"
        aria-label="GitHub"
        color="inherit"
      >
        <GitHubIcon fontSize="large" />
      </IconButton>
      <IconButton
        component="a"
        href="https://linkedin.com/in/yusuf-quddus"
        target="_blank"
        rel="noopener"
        aria-label="LinkedIn"
        color="inherit"
      >
        <LinkedInIcon fontSize="large" />
      </IconButton>
    </Stack>
  </Box>
);

export default SocialLinks;
