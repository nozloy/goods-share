import React from 'react'
import { cn } from '@/lib/utils'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { Bell, Gift } from 'lucide-react'

interface Props {
	className?: string
}

export const NotificationSheet: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Sheet>
				<SheetTrigger asChild>
					<Bell size={24} />
				</SheetTrigger>
				<SheetContent className='w-full '>
					<SheetHeader>
						<SheetTitle>Уведомления</SheetTitle>
					</SheetHeader>
					<div className='flex flex-row gap-4 pt-10'>
						<div className='w-14 h-14 text-secondary-foreground bg-secondary flex items-center justify-center rounded-xl'>
							<Gift size={32} />
						</div>
						<div className='w-52 flex flex-col gap-1 *:text-sm'>
							<div className='font-bold'>Начисление баллов</div>
							<div>
								Благодарим за регистрацию и дарим Вам 1 бонусный балл! Скорее
								потратьте их на аренду одного из устройств!
							</div>
						</div>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
