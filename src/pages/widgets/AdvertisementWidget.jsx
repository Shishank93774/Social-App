import { Typography, useTheme } from "@mui/material";
import FlexBetween from "components/FlexBetween";
import WidgetWrapper from "components/WidgetWrapper";

const AdvertisementWidget = () => {
  const { palette } = useTheme();
  const dark = palette.neutral.dark;
  const main = palette.neutral.main;
  const medium = palette.neutral.medium;
  const randAdIdx = Math.floor(Math.random()*5) + 1;

  return (
    <WidgetWrapper>
      <FlexBetween>
        <Typography color={dark} variant="h5" fontWeight="500">
          Sponsored
        </Typography>
        <Typography color={medium}>Create Ad</Typography>
      </FlexBetween>
      <img
        width="100%"
        height="auto"
        alt="advert"
        src={`http://localhost:3001/assets/advertisement${randAdIdx}.jpg`}
        style={{ borderRadius: "0.75rem", margin: "0.75rem 0" }}
      />
      <FlexBetween>
        <Typography color={main}>Ad Title</Typography>
        <Typography color={medium}>Ad Website</Typography>
      </FlexBetween>
      <Typography color={medium} m="0.5rem 0">
        Some short and consice ad description to gather audience.
      </Typography>
    </WidgetWrapper>
  );
};

export default AdvertisementWidget;