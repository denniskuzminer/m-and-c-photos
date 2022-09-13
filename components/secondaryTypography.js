import { Typography } from "@mui/material";
import { styled } from "@mui/material/styles";

const SecondaryTypography = styled(Typography)(({ theme }) => ({
  fontFamily: theme.typography.secondary.fontFamily,
}));

export default SecondaryTypography;
