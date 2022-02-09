import { Box, Text, useBreakpointValue, useColorMode } from "@chakra-ui/react";
import { Transaction, useStarknet, useStarknetTransactionManager } from "@starknet-react/core";

function TransactionItem({
  transaction,
  onClick,
}: {
  transaction: Transaction
  onClick: () => void
}) {
  return (
    <div>
      {transaction.status}: {transaction.transactionHash} <button onClick={onClick}>remove</button>
    </div>
  )
}

const Transactions = () => {
  const { removeTransaction, transactions } = useStarknetTransactionManager();
  const { account } = useStarknet();
  const { colorMode } = useColorMode();
  const textSize = useBreakpointValue({
    base: "xs",
    sm: "md",
  });

  return (
    <Box>
      <Text as="h2" marginTop={4} fontSize="2xl">
        Transactions
      </Text>
      {account &&
        transactions !== undefined &&
        transactions.length > 0 &&
        transactions.map((tx, index) => (
          <TransactionItem
            key={index}
            transaction={tx}
            onClick={() => removeTransaction(tx.transactionHash)}
          />
        ))
      }
      {account && (transactions === undefined || transactions.length === 0) && (
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
          padding={4}
          marginTop={4}
          borderRadius={4}
        >
          <Box fontSize={textSize}>No Transactions</Box>
        </Box>
      )}
      {!account && (
        <Box
          backgroundColor={colorMode === "light" ? "gray.200" : "gray.500"}
          padding={4}
          marginTop={4}
          borderRadius={4}
        >
          <Box fontSize={textSize}>
            Connect your wallet to view a list of your transactions.
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default Transactions;
