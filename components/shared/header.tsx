'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import { ArrowLeft, Share2 } from 'lucide-react'
import { useRouter } from 'next/navigation'

interface Props {
	className?: string
	title: string
	rbutton?: string
}

export const Header: React.FC<Props> = ({ className, title, rbutton }) => {
	const router = useRouter()

	const handleShare = async () => {
		if (navigator.share) {
			try {
				await navigator.share({
					title: 'Ларек',
					text: 'Аренда нужных устройств в твоем доме.',
					url: window.location.href,
				})
			} catch (error) {
				console.error('Ошибка при использовании Web Share API:', error)
			}
		} else {
			alert('Функция "Поделиться" не поддерживается в этом браузере.')
		}
	}

	return (
		<div
			className={cn(
				'sticky top-0 z-50 text-center p-4 w-full bg-background',
				className,
			)}
		>
			<div className=' text-lg fotn-bold'>{title}</div>
			<div
				onClick={() => router.back()}
				className='absolute w-10 h-10 top-5 left-5'
			>
				<ArrowLeft size={24} />
			</div>
			{rbutton === 'share' && (
				<div
					onClick={() => handleShare()}
					className='absolute w-10 h-10 top-5 right-1'
				>
					<Share2 />
				</div>
			)}
		</div>
	)
}
