import { CurrentRent } from '@/components/shared/current-rent'
import { Header } from '@/components/shared/header'
import React from 'react'

export default function Rent() {
	return (
		<div className='relative flex flex-col'>
			<Header title='Текущая аренда' />
			<CurrentRent />
		</div>
	)
}
