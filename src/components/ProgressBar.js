import { Box, Typography, CircularProgress } from "@material-ui/core";

const ProgressBar = ({ progress }) => {
  if (progress?.percent && progress.percent > 0)
    return (
      <Box position="relative" display="inline-flex">
        <CircularProgress variant="determinate" value={progress.percent} />
        <Box
          top={0}
          left={0}
          bottom={0}
          right={0}
          position="absolute"
          display="flex"
          alignItems="center"
          justifyContent="center"
        >
          <Typography
            variant="caption"
            component="div"
            color="textSecondary"
          >{`${progress.percent}%`}</Typography>
        </Box>
      </Box>
    );

  return <CircularProgress />;
};

export default ProgressBar;
