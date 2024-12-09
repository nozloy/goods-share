import { BestItems } from '@/components/shared/best-items'
import { CurrentRent } from '@/components/shared/current-rent'
import { Search } from '@/components/shared/search'
import { UserCard } from '@/components/shared/user-card'
import React from 'react'

export default function Home() {
	return (
		<div className='relative flex flex-col gap-6 overflow-y-scroll overflow-hidden max-h-svh pb-24'>
			<UserCard />
			<Search />
			<BestItems />
			<div className='font-bold text-lg px-4'>Текущая аренда</div>
			<CurrentRent />
		</div>
	)
}
