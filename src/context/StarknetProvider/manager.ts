import { getStarknet } from "@argent/get-starknet";
import React from "react";
import { defaultProvider, ProviderInterface } from "starknet";

import { StarknetState } from "./model";

interface StarknetManagerState {
  account?: string;
  library: ProviderInterface;
}

interface SetAccount {
  type: "set_account";
  account: string;
}

interface SetProvider {
  type: "set_provider";
  provider: ProviderInterface;
}

type Action = SetAccount | SetProvider;

function reducer(
  state: StarknetManagerState,
  action: Action
): StarknetManagerState {
  switch (action.type) {
    case "set_account": {
      return { ...state, account: action.account };
    }
    case "set_provider": {
      return { ...state, library: action.provider };
    }
    default: {
      return state;
    }
  }
}

const useStarknetManager = (): StarknetState => {
  const starknet = getStarknet({ showModal: false });
  const [state, dispatch] = React.useReducer(reducer, {
    library: defaultProvider,
  });

  const { account, library } = state;

  const connectBrowserWallet = React.useCallback(async () => {
    // eslint-disable-next-line no-console
    console.log("In connectBrowserWallet func");
    // eslint-disable-next-line @typescript-eslint/no-shadow
    const [account] = await starknet.enable();
    dispatch({ type: "set_account", account });
    if (starknet.signer) {
      dispatch({ type: "set_provider", provider: starknet.signer });
    }
  }, [starknet]);

  return { account, connectBrowserWallet, library };
};

export default useStarknetManager;
