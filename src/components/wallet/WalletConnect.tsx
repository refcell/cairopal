import { Button } from "@chakra-ui/react";
import { useEffect, useState } from "react";

import { useStarknet } from "context";

const WalletConnect = () => {
  const { account, connectBrowserWallet } = useStarknet();
  const [connected, setConnected] = useState(account !== undefined);
  const [manuallyDisconnected, manuallyDisconnect] = useState(false);

  const resetConnection = () => {
    setConnected(account !== undefined);
  };

  useEffect(() => {
    if (!manuallyDisconnected) {
      resetConnection();
    }
  });
  useEffect(() => {
    if (!manuallyDisconnected) {
      setConnected(account !== undefined);
    }
  }, [account, manuallyDisconnected]);

  return !connected ? (
    <Button
      ml="4"
      onClick={() => {
        manuallyDisconnect(false);
        connectBrowserWallet();
        resetConnection();
      }}
    >
      Connect Wallet
    </Button>
  ) : (
    <Button
      ml="4"
      onClick={() => {
        manuallyDisconnect(true);
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
