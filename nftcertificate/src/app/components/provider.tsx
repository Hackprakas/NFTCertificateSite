"use client";

import { ThirdwebProvider, metamaskWallet } from "@thirdweb-dev/react";


export default function Providers({children}) {
  return (
    <ThirdwebProvider activeChain="mumbai" clientId="d8936f6f6d303ca1a545dacd3ec64a90" supportedWallets={[metamaskWallet()]}>
      {children}
    </ThirdwebProvider>
  )
}