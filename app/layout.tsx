"use client"
import Header from '@/components/header'
import './globals.css'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";
import { polygonMumbai, sepolia, goerli } from "wagmi/chains";
import { ContractProvider } from '@/context/ContractContext';

const alchemyId = process.env.ALCHEMY_ID;
const chains = [polygonMumbai, sepolia, goerli];

const client = createClient(
  getDefaultClient({
    appName: "Zypto Finance",
    alchemyId,
    chains
  }),
);


export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <WagmiConfig client={client}>
      <ConnectKitProvider>
        <ContractProvider>
          <html lang="en">
            <body className='flex h-full flex-col bg-gray-50'>
              <Header />
              {children}
            </body>
          </html>
          </ContractProvider>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

