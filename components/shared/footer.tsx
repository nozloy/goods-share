/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useState } from 'react'
import { cn } from '@/lib/utils'
import {
	House,
	MapPinned,
	Hammer,
	TimerReset,
	EllipsisVertical,
} from 'lucide-react'
// import { handleScan, openPopup } from './telegram'
import { useRouter, usePathname } from 'next/navigation'
interface Props {
	className?: string
}

const FooterItem: React.FC<{
	icon: React.ReactNode
	label: string
	name: string
	activePage: string
	onClick?: () => void
}> = ({ icon, label, name, activePage, onClick }) => (
	<div
		className={cn(
			'active:scale-95 text-bold active:text-primary text-sm flex flex-col items-center',
			name === activePage ? '*:text-primary' : '*:text-secondary-foreground ',
		)}
		onClick={onClick}
	>
		{icon}
		<p>{label}</p>
	</div>
)

export const Footer: React.FC<Props> = ({ className }) => {
	const iconSize = 24
	const router = useRouter()
	const pathname = usePathname()
	const getActivePage = (): string => {
		switch (pathname) {
			case '/':
				return 'Home'
			case '/map':
				return 'Map'
			case '/catalog':
				return 'Catalog'
			case '/rent':
				return 'Rent'
			case '/more':
				return 'More'
			default:
				return 'Home'
		}
	}
	const footerItems = [
		{
			icon: <House size={iconSize} />,
			label: 'Главная',
			name: 'Home',
			onClick: () => router.push('/'),
		},
		{
			icon: <MapPinned size={iconSize} />,
			label: 'Карта',
			name: 'Map',
			onClick: () => router.push('/map'),
		},
		{
			icon: <Hammer size={iconSize} />,
			label: 'Каталог',
			name: 'Catalog',
			onClick: () => router.push('/catalog'),
		},
		{
			icon: <TimerReset size={iconSize} />,
			label: 'Аренда',
			name: 'Rent',
			onClick: () => router.push('/rent'),
		},
		{
			icon: <EllipsisVertical size={iconSize} />,
			label: 'Еще',
			name: 'More',
			onClick: () => router.push('/more'),
		},
	]

	return (
		<div
			className={cn(
				'sticky z-50 bottom-0 w-full left-0 right-0 flex flex-row items-center justify-between gap-2 mt-auto h-[80px] neo p-4 pb-8 *:text-slate-400 *:rounded-full *:p-2',
				className,
			)}
		>
			{footerItems.map((item, index) => (
				<FooterItem
					key={index}
					icon={item.icon}
					name={item.name}
					activePage={getActivePage()}
					label={item.label}
					onClick={item.onClick}
				/>
			))}
		</div>
	)
}
