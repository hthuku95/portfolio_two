import { Box, Typography } from '@mui/material';

const Skill = (props) => {
  return (
    <Box
      sx={{
        p: 1.5,
        borderRadius: '12px',
        width: '100%',
        minHeight: '80px',
        backgroundColor: 'custom.blue',
        color: 'custom.white',
        display: 'flex',
        alignItems: 'center',
        gap: 1.5,
        cursor: 'default',
        transition: 'transform 0.2s ease, box-shadow 0.2s ease',
        '&:hover': {
          transform: 'scale(1.06)',
          boxShadow: '0 6px 20px rgba(71,88,158,0.5)',
        },
      }}
    >
      <Box
        component="img"
        src={props.source}
        alt={props.alt}
        title={props.title}
        sx={{ width: 36, height: 36, flexShrink: 0 }}
      />
      <Typography variant="body2" sx={{ fontWeight: 500, lineHeight: 1.2 }}>
        {props.title}
      </Typography>
    </Box>
  );
};

export default Skill;
