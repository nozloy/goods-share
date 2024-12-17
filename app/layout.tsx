import type { Metadata } from 'next'
import './globals.css'
import { Footer } from '@/components/shared/footer'
import { Montserrat } from 'next/font/google'

const montserrat = Montserrat({
	subsets: ['cyrillic'],
	variable: '--font-montserrat',
	weight: ['400', '500', '600', '700', '800', '900'],
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
				className={`${montserrat.variable} antialiased flex flex-col min-h-dvh w-full justify-center mx-auto relative font-montserrat`}
			>
				{children}
				<Footer />
			</body>
		</html>
	)
}
