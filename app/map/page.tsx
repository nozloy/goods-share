'use client'
import React, { useRef } from 'react'
import { YMaps, Map, Placemark } from '@pbe/react-yandex-maps'
import Image from 'next/image'
import { MapPin } from 'lucide-react'

export default function MapPage() {
	// Реф для управления картой
	const mapRef = useRef<ymaps.Map | null>(null)

	// Функция для перемещения карты к заданным координатам
	const focusOnPoint = (coordinates: [number, number]) => {
		if (mapRef.current) {
			mapRef.current.setCenter(coordinates, 16, { duration: 300 }) // Установить центр и масштаб
		}
	}

	return (
		<div className='relative flex flex-col w-full min-h-svh'>
			<YMaps>
				<Map
					className='min-h-svh w-full'
					defaultState={{ center: [55.732083, 49.185431], zoom: 14 }}
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
				className='z-50 absolute bottom-24 left-2 p-2 bg-background rounded-xl flex flex-row items-center gap-2 border border-muted-foreground'
				onClick={() => focusOnPoint([55.732083, 49.185431])} // Ссылка на точку
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
	)
}
