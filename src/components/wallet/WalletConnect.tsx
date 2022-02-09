import { Button } from "@chakra-ui/react";
import { useStarknet } from "@starknet-react/core";

const WalletConnect = () => {

  const { account, hasStarknet, connectBrowserWallet } = useStarknet();

  return !account ? (
    !hasStarknet ? (
      <Button
        ml="4"
        textDecoration="none !important"
        outline="none !important"
        boxShadow="none !important"
      >
        <a href="https://github.com/argentlabs/argent-x">Get Argent-X</a>
      </Button>
    ) : (
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
    )
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
