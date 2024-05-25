import { Box, CircularProgress } from "@mui/material";

type sizeType = {
  size: number;
};

const LoadingIndiciator: React.FC<sizeType> = ({ size }) => {
  return (
    <Box
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <CircularProgress size={size} color="secondary" />
    </Box>
  );
};

export default LoadingIndiciator;
