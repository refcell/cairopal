import { Button } from "@chakra-ui/react";

import { useStarknet } from "context";

const WalletConnect = () => {
  const { account, connected, setConnected, connectBrowserWallet } =
    useStarknet();

  return !connected ? (
    <Button
      ml="4"
      onClick={() => {
        connectBrowserWallet();
        setConnected(true);
      }}
    >
      Connect Wallet
    </Button>
  ) : (
    <Button
      ml="4"
      onClick={() => {
        setConnected(false);
      }}
    >
      {account
        ? `${account.substring(0, 4)}...${account.substring(
            account.length - 4
          )}`
        : "No Account"}
    </Button>
  );
};

export default WalletConnect;
