'use client'
import { DescriptionDrawer } from '@/components/shared/description-drawer'
import { GuideSheet } from '@/components/shared/guide-sheet'
import { Header } from '@/components/shared/header'
import { Items } from '@/constants/items'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import { MapPin } from 'lucide-react'
import Image from 'next/image'
import React, { useRef } from 'react'
import { OrderRentSheet } from '@/components/shared/order-rent-sheet'

export default function ProductPage({
	params: { id },
}: {
	params: { id: string }
}) {
	const item = Items.find(item => item.id === Number(id))
	// Реф для управления картой
	const mapRef = useRef<ymaps.Map | null>(null)
	const focusOnPoint = (coordinates: [number, number]) => {
		if (mapRef.current) {
			mapRef.current.setCenter(coordinates, 16, { duration: 300 }) // Установить центр и масштаб
		}
	}
	// Если товар не найден, показываем страницу 404
	if (!item) {
		return <h1>Товар не найден</h1>
	}
	return (
		<div className='min-h-svh flex flex-col'>
			<Header title={''} rbutton='share' />
			<div className=' flex flex-col items-center justify-center relative mt-10 m-4 pb-6 border border-muted-foreground/10 rounded-xl'>
				<div className='flex items-center justify-start w-[200px] h-[200px]  mx-auto'>
					<Image
						fill
						src={item.image}
						alt={item.name}
						className='object-contain mx-auto pt-2 rounded-2xl'
					/>
					<div className='absolute bottom-2 left-2 flex items-center justify-center gap-3'>
						<DescriptionDrawer description={item.description} />
						<GuideSheet guide={item.guide} />
					</div>
				</div>
			</div>
			<div className='text-lg font-bold p-4 text-left flex justify-start items-start w-full'>
				Ближайший Ларек
			</div>
			<div className='flex flex-col items-center justify-center mx-4 shadow-xl rounded-xl relative overflow-hidden'>
				<YMaps>
					<Map
						defaultState={{ center: [55.732083, 49.185431], zoom: 14 }}
						options={{
							autoFitToViewport: 'always',
							suppressMapOpenBlock: true,
							copyrightLogoVisible: true,
							copyrightUaVisible: false,
						}}
						style={{
							width: '100%',
							height: '200px',
						}}
						controls={[]}
						instanceRef={ref => {
							// Установка ссылки на карту, если она доступна
							mapRef.current = ref || null
						}}
					>
						<Placemark
							geometry={[55.732083, 49.185431]}
							properties={{
								hintContent: 'Ларек 1',
								balloonContent: 'Ларек 1',
							}}
							options={{
								iconLayout: 'default#image',
								iconImageHref: '/icon-192x192.png',
								iconImageSize: [40, 52],
								iconImageOffset: [-15, -42],
							}}
						/>
					</Map>
				</YMaps>
				<div
					className='z-50 absolute bottom-2 left-2 p-2 bg-background rounded-xl flex flex-row items-center gap-2 border border-muted-foreground'
					onClick={() => focusOnPoint([55.732083, 49.185431])}
				>
					<Image
						src='/icon-192x192.png'
						alt='icon'
						width={40}
						height={52}
						className='shadow-xl rounded-xl'
					/>
					<div className='flex flex-col'>
						<div className='font-bold text-lg'>Ларек 1</div>
						<div className='font-semibold text-sm flex flex-row items-center text-muted-foreground'>
							<MapPin size={16} /> Оренбургский Тракт, 138к3
						</div>
					</div>
				</div>
			</div>
			<div className='mt-auto pb-8 flex flex-row items-center justify-between px-6 *:text-xl font-bold'>
				<div>от {item.price}₽</div>
				<OrderRentSheet item={item} />
			</div>
		</div>
	)
}
