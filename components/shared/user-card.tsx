'use client'
import React, { useEffect, useState } from 'react'
import { cn } from '@/lib/utils'
import { initApp } from './telegram'
import Image from 'next/image'
import { Check, OctagonAlert, User as UserIcon } from 'lucide-react'
import { SupportDrawer } from './support-drawer'
import { NotificationSheet } from './notification-sheet'
import { useUserStore } from '@/lib/user-store'

interface Props {
	className?: string
}

export const UserCard: React.FC<Props> = ({ className }) => {
	const user = useUserStore(state => state.user)
	const setUser = useUserStore(state => state.setUser)

	const [verified, setVerified] = useState<boolean>(false)
	useEffect(() => {
		const fetchUser = async () => {
			const userData = await initApp()
			setUser({
				firstName: userData?.firstName || 'Иван',
				lastName: userData?.lastName || 'Иванов',
				photoUrl: userData?.photoUrl || '',
				id: userData?.id || 1,
			})
		}
		fetchUser()
	}, [setUser])

	return (
		<div
			className={cn(
				'm-1 pt-4 flex flex-row justify-between items-center px-4',
				className,
			)}
		>
			<div className='flex flex-row gap-2'>
				<div className='rounded-2xl w-12 h-12 bg-secondary flex items-center justify-center'>
					{user?.photoUrl ? (
						<Image
							className='rounded-2xl border border-1'
							src={user?.photoUrl}
							alt='avatar'
							width={48}
							height={48}
						/>
					) : (
						<UserIcon size={24} />
					)}
				</div>
				<div className='flex flex-col'>
					<div className='text-md font-bold'>
						{user?.firstName || 'Иван Иванов'} {user?.lastName}
					</div>
					<div className='*:flex *:flex-row *:gap-1 *:items-center *:text-sm'>
						{verified ? (
							<div>
								<Check size={16} className='text-green-500' /> Верифицирован
							</div>
						) : (
							<div onClick={() => setVerified(true)}>
								<OctagonAlert size={14} className='text-red-500' /> Пройти
								верификацию
							</div>
						)}
					</div>
				</div>
			</div>
			<div className='flex flex-row justify-center items-center gap-3'>
				<SupportDrawer />
				<div className='bg-secondary w-12 h-12 flex items-center justify-center rounded-2xl'>
					<NotificationSheet />
				</div>
			</div>
		</div>
	)
}
