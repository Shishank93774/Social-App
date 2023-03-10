import { Box, Typography, useTheme, useMediaQuery } from "@mui/material";
import Form from "./Form";

const Login = () => {
  const theme = useTheme();
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");

  return (
    <Box>
      <Box
        width="100%"
        backgroundColor={theme.palette.background.alt}
        p="1rem 6%"
        textAlign="center"
      >
        <Typography fontWeight={"bold"} fontSize="32px" color="primary">
          Hansky
        </Typography>
      </Box>
      <Box
        width={isNonMobileScreens ? "50%" : "93%"}
        p="2rem"
        margin="2rem auto"
        borderRadius="1.5rem"
        backgroundColor={theme.palette.background.alt}
      >
        <Typography
          fontWeight={"500"}
          variant="h5"
          sx={{
            mb: "1.5rem",
          }}
        >
          Stay connected and never miss a beat with Hansky.
        </Typography>
        <Form />
      </Box>
    </Box>
  );
};

export default Login;
