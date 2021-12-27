import { Box } from "@chakra-ui/react";

import CTASection from "components/samples/CTASection";
import SomeText from "components/samples/SomeText";
import { Transactions } from "components/wallet";

const Home = () => {
  return (
    <Box mb={8} w="full" h="full" d="flex" flexDirection="column">
      <SomeText />
      <Transactions />
      <CTASection />
    </Box>
  );
};

export default Home;
