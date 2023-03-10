import { useMediaQuery } from "@mui/material";
import { Box } from "@mui/system";
import Navbar from "pages/navbar/navbar";
import { useSelector } from "react-redux";
import UserWidget from "pages/widgets/UserWidget";
import MyPostWidget from "pages/widgets/MyPostWidget";
import PostsWidget from "pages/widgets/PostsWidget";
import AdvertisementWidget from "pages/widgets/AdvertisementWidget";
import FollowingListWidget from "pages/widgets/FollowingListWidget";

const Home = () => {
  const isNonMobileScreens = useMediaQuery("(min-width: 1000px)");
  const { _id, profileImg } = useSelector((state) => state.user);

  return (
    <Box>
      <Navbar />
      <Box
        width="100%"
        padding="2rem 6%"
        display={isNonMobileScreens ? "flex" : "block"}
        gap="0.5rem"
        justifyContent="space-between"
      >
        <Box flexBasis={isNonMobileScreens ? "26%" : undefined}>
          <UserWidget userId={_id} profileImg={profileImg} />
        </Box>
        <Box
          flexBasis={isNonMobileScreens ? "42%" : undefined}
          mt={isNonMobileScreens ? undefined : "2rem"}
        >
          <MyPostWidget profileImg={profileImg} />
          <PostsWidget userId={_id} />
        </Box>
        {isNonMobileScreens && <Box flexBasis="26%">
          <AdvertisementWidget />
          <Box m="2rem 0" />
          <FollowingListWidget userId={_id} />
        </Box>}
      </Box>
    </Box>
  );
};

export default Home;
