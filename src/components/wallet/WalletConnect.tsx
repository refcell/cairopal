import { Button } from "@chakra-ui/react";
import { useEffect } from "react";
import { useStarknet } from '@starknet-react/core'

const WalletConnect = () => {

  const { account, hasStarknet, connectBrowserWallet, library, error } = useStarknet()

  return !account ? (
    <Button
      ml="4"
      textDecoration="none !important"
      outline="none !important"
      boxShadow="none !important"
      onClick={() => {
        connectBrowserWallet();
      }}
    >
      Connect Wallet
    </Button>
  ) : (
    <Button
      ml="4"
      textDecoration="none !important"
      outline="none !important"
      boxShadow="none !important"
      // HACK: refresh to disconnect
      // TODO: actually disconnect when supported in starknet-react
      onClick={() => { window.location.reload(); }}
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
