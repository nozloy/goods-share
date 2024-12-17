'use client'
import React from 'react'
import { cn } from '@/lib/utils'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Button } from '../ui/button'
import { iItem } from '@/@types'
import Image from 'next/image'
import { MapPin, Info } from 'lucide-react'
import { iRentTypes } from '@/@types'
import { rentTypes } from '@/constants/rent-types'
import { Slider } from '../ui/slider'
import { Input } from '../ui/input'
interface Props {
	className?: string
	item: iItem
}

export const OrderRentSheet: React.FC<Props> = ({ className, item }) => {
	const [activeRentType, setActiveRentType] = React.useState<iRentTypes>(
		rentTypes[0],
	)
	const [bonus, setBonus] = React.useState(0)

	return (
		<div className={cn('', className)}>
			<Sheet>
				<SheetTrigger asChild>
					<Button className='rounded-xl p-6 text-lg font-bold'>
						К тарифам
					</Button>
				</SheetTrigger>
				<SheetContent className='w-full'>
					<SheetHeader>
						<SheetTitle>Оформление аренды</SheetTitle>
					</SheetHeader>
					{item && (
						<div className='bg-background'>
							<div className='px-2 w-full *:pt-4 h-screen overflow-y-auto invisible-scrollbar pb-16'>
								<div className='w-full rounded-xl shadow-lg flex flex-row gap-4 p-2'>
									<div className='relative w-[64px] h-[64px] rounded-xl'>
										<Image
											src={item.image}
											alt={item.name}
											className='object-contain mx-auto pt-2 rounded-2xl'
											fill
										/>
									</div>
									<div className='text-sm font-bold p-2'>{item.name}</div>
								</div>
								<div className='text-muted-foreground font-semibold'>
									Выберите ларек
								</div>
								<div className=' bg-background rounded-xl flex flex-row items-center gap-2'>
									<Image
										src='/icon-192x192.png'
										alt='icon'
										width={50}
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

								<div className='text-muted-foreground font-semibold'>
									Тип аренды
								</div>
								<div className='h-[90px] flex flex-row gap-2 w-full justify-left overflow-x-scroll invisible-scrollbar px-1'>
									{rentTypes.map((rentType: iRentTypes) => (
										<div
											key={rentType.id}
											onClick={() => setActiveRentType(rentType)}
											className={cn(
												'px-4 py-2 bg-background rounded-xl flex flex-col items-start justify-center gap-1 shadow-md min-w-[150px] h-[60px] *:text-sm border',

												rentType.id === activeRentType.id
													? 'border-primary'
													: 'border-background',
											)}
										>
											<p className='text-md font-bold'>{rentType.name}</p>
											<div className='flex flex-row gap-1 items-center justify-center *:text-muted-foreground *:font-semibold'>
												<Info size={16} />
												<p>{rentType.available ? 'Доступно' : 'Недоступно'}</p>
											</div>
										</div>
									))}
								</div>

								<div className='text-muted-foreground font-semibold'>
									Списать баллы
								</div>
								<div className='w-[90%] flex flex-row items-center justify-between gap-2'>
									<Slider
										defaultValue={[0]}
										max={100}
										step={1}
										onValueChange={value => setBonus(value[0])}
									/>
									<div className='w-[10px] px-2 text-lg font-bold'>{bonus}</div>
								</div>
								<div className='flex flex-row gap-1 items-center justify-start *:text-muted-foreground *:font-semibold text-sm'>
									<Info size={16} />
									<div>Можно оплатить не более 50% тарифа</div>
								</div>

								<div className='text-muted-foreground font-semibold'>
									Промокод
								</div>
								<div className='w-full mx-auto'>
									<Input
										type='text'
										placeholder='Введите промокод'
										className='rounded-2xl outline-none w-full bg-secondary h-10'
									/>
								</div>

								<div className='text-foreground font-semibold'>
									Итого стоимость
								</div>
								<div className='flex flex-col gap-2 items-center justify-centerrounded-xl border border-muted-foreground/20  rounded-xl w-full mt-4 p-4 text-center'>
									<div className='w-full flex flex-row items-center justify-between'>
										<p>{activeRentType.name}</p>
										<p>{item.price * activeRentType.mod}₽</p>
									</div>
									<div className='w-full flex flex-row items-center justify-between'>
										<p>Залог</p>
										<p>{item.price * 20}₽</p>
									</div>
									<tr className='border border-muted-foreground/20 border-dashed w-full' />
									<div className='w-full flex flex-row items-center justify-between'>
										<p>Итого</p>
										<p>{item.price * activeRentType.mod + item.price * 20}₽</p>
									</div>
								</div>
								<div>
									<div className='flex flex-col gap-2 pb-2'>
										<Button
											variant={'outline'}
											className='w-full h-12 text-primary rounded-xl border-primary'
										>
											Арнедовать без залога
										</Button>
										<Button
											variant={'default'}
											className='w-full h-12 rounded-xl border-primary'
										>
											Оформить заказ
										</Button>
									</div>
								</div>
							</div>
						</div>
					)}
				</SheetContent>
			</Sheet>
		</div>
	)
}
