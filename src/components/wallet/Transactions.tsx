import { Box, Text, useBreakpointValue, useColorMode } from "@chakra-ui/react";

import { useTransactions } from "context";

const Transactions = () => {
  const { transactions } = useTransactions();
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  // eslint-disable-next-line no-console
  console.log("Transactions:", transactions);

  return (
    <Box flex="1 1 auto">
      <Text as="h2" marginTop={4} fontSize="2xl">
        Transactions
      </Text>
      {transactions !== undefined && transactions.length > 0 ? (
        transactions.map((tx) => {
          return (
            <Box
              backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
              padding={4}
              marginTop={4}
              borderRadius={4}
            >
              <Box fontSize={textSize}>{tx}</Box>
            </Box>
          );
        })
      ) : (
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
          padding={4}
          marginTop={4}
          borderRadius={4}
        >
          <Box fontSize={textSize}>No Transactions</Box>
        </Box>
      )}
    </Box>
  );
};

export default Transactions;
