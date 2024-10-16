
import localFont from "next/font/local"
import "@/styles/globals.css"
import { FC } from "react"
import { getLocale, getMessages } from "next-intl/server"
import { NextIntlClientProvider } from "next-intl"
import NavigationBar from "@/components/NavigationBar"
import Footer from "@/components/Footer"

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
})

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
})

export const metadata = {
  title: "Patrick KENNE TCHINDA - Senior Front-end Developer",
  description: "Developpeur frontend avec plus de 04 années d'expérience professionnelle et une excellente compétence en communication.",
}

type Props = {
  children: React.ReactNode
}
const RootLayout: FC<Props> = async ({ children }) => {

  const locale = await getLocale()

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages()

  return (
    <html lang={locale}>
      <title>{metadata.title}</title>
      <meta name="description" content={metadata.description} />
      <meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1, minimum-scale=1, user-scalable=no, viewport-fit=cover" />

      <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;700&family=Roboto:wght@300;400;700&display=swap" rel="stylesheet" precedence="default" />
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.4.0/css/all.min.css" precedence="default" />

      <body className={`${geistSans.variable} ${geistMono.variable} antialiased bg-gray-100 font-roboto text-gray-800`}>
        <NextIntlClientProvider messages={messages}>
          <main className='main relative'>
            <NavigationBar />
            {children}
            <Footer />
          </main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
export default RootLayout;
