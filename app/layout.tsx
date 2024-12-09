import type { Metadata } from 'next'
import localFont from 'next/font/local'
import './globals.css'
import { Footer } from '@/components/shared/footer'

const geistSans = localFont({
	src: './fonts/GeistVF.woff',
	variable: '--font-geist-sans',
	weight: '100 900',
})
const geistMono = localFont({
	src: './fonts/GeistMonoVF.woff',
	variable: '--font-geist-mono',
	weight: '100 900',
})

export const metadata: Metadata = {
	title: 'Goods Share App',
	description: 'Тестовое приложение',
}

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode
}>) {
	return (
		<html lang='en'>
			<head></head>
			<body
				className={`${geistSans.variable} ${geistMono.variable} antialiased flex flex-col  min-h-lvh w-full justify-center mx-auto relative`}
			>
				{children}
				<Footer />
			</body>
		</html>
	)
}
