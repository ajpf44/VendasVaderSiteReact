import { Box, Typography } from "@mui/material";
import { purple } from "@mui/material/colors";

const primary = purple[500]; // #f44336

export default function NotFound() {
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minHeight: "89.2vh",
        backgroundColor: primary,
      }}
    >
      <Typography variant="h1" style={{ color: "white" }}>
        404
      </Typography>
      <Typography variant="h4" style={{ color: "white" }}>
        🧐 Oops! Essa página não existe
      </Typography>
    </Box>
  );
}
