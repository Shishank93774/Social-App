import { Box } from "@mui/system";
import styled from "@emotion/styled";

const WidgetWrapper = styled(Box)(({theme}) => ({
    padding: "1.5rem 1.5rem 0.75rem 1.5rem",
    backgroundColor: theme.palette.background.alt,
    borderRaius: "0.75rem"
}));

export default WidgetWrapper;