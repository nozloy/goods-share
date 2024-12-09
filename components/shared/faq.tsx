import React from 'react'
import { cn } from '@/lib/utils'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import {
	Accordion,
	AccordionContent,
	AccordionItem,
	AccordionTrigger,
} from '@/components/ui/accordion'
import { Button } from '../ui/button'
import { ChevronRight } from 'lucide-react'
interface Props {
	className?: string
}

export const Faq: React.FC<Props> = ({ className }) => {
	return (
		<div className={cn('', className)}>
			<Sheet>
				<SheetTrigger asChild>
					<Button
						variant={'outline'}
						className='flex justify-between font-bold w-full text-secondary-foreground h-12 bg-secondary'
					>
						Часто задаваемые вопросы
						<ChevronRight />
					</Button>
				</SheetTrigger>
				<SheetContent className='w-full '>
					<SheetHeader>
						<SheetTitle>Часто задаваемые вопросы</SheetTitle>
					</SheetHeader>
					<div className='pt-10'>
						<Accordion type='single' collapsible className='w-full'>
							<AccordionItem value='item-1'>
								<AccordionTrigger>Вопрос 1</AccordionTrigger>
								<AccordionContent>Ответ 1</AccordionContent>
							</AccordionItem>
							<AccordionItem value='item-2'>
								<AccordionTrigger>Вопрос 2</AccordionTrigger>
								<AccordionContent>Ответ 2</AccordionContent>
							</AccordionItem>
							<AccordionItem value='item-3'>
								<AccordionTrigger>Вопрос 3</AccordionTrigger>
								<AccordionContent>Ответ 3</AccordionContent>
							</AccordionItem>
						</Accordion>
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
