import type { Metadata } from 'next'
import { Suspense } from 'react';
import PushNotify from "cp/push_notify";
import LdDualRing from "cp/ld_dual_ring";
//import { Inter } from 'next/font/google'
import './globals.css'

//const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Back proyect Folder',
  description: 'App bancking',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <head>
       <link
       rel='stylesheet'
       href='https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,400,0,0'
      />
      </head>
      <body className={"inter.className"}>
       <Suspense fallback={<LdDualRing show={true} />}>
        <PushNotify>
         <main>
          {children}
         </main>
        </PushNotify>
       </Suspense>
      </body>
    </html>
  )
}
