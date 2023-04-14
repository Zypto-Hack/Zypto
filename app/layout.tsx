"use client"
import Header from '@/components/header'
import './globals.css'
import { WagmiConfig, createClient } from "wagmi";
import { ConnectKitProvider, getDefaultClient } from "connectkit";

const alchemyId = process.env.ALCHEMY_ID;

const client = createClient(
  getDefaultClient({
    appName: "Zypto Finance",
    alchemyId,
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
        <html lang="en">
          <body className='flex h-full flex-col'>
            <Header />
            {children}
          </body>
        </html>
      </ConnectKitProvider>
    </WagmiConfig>
  )
}

