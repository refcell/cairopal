import { Box } from "@chakra-ui/react";

import CTASection from "components/samples/CTASection";
// import SomeImage from "components/samples/SomeImage";
import SomeText from "components/samples/SomeText";

const Home = () => {
  return (
    <Box mb={8} w="full" d="flex" flexDirection="column">
      <SomeText />
      <Box flex="1 1 auto" />
      {/* <SomeImage /> */}
      <CTASection />
    </Box>
  );
};

export default Home;
