import React from 'react'
import {
	Sheet,
	SheetContent,
	SheetHeader,
	SheetTitle,
	SheetTrigger,
} from '@/components/ui/sheet'
import { cn } from '@/lib/utils'
import { FileDown, FileText } from 'lucide-react'
import Link from 'next/link'

interface Props {
	className?: string
	guide?: string
}

export const GuideSheet: React.FC<Props> = ({ className, guide }) => {
	return (
		<div className={cn('', className)}>
			<Sheet>
				<SheetTrigger asChild>
					<div className='w-36 h-8 flex flex-row items-center justify-center gap-1 rounded-lg shadow-lg bg-background'>
						<FileText
							className='p-1 bg-primary rounded-full text-white'
							size={24}
						/>
						<div>Инструкция</div>
					</div>
				</SheetTrigger>
				<SheetContent className='w-full '>
					<SheetHeader>
						<SheetTitle>Инструкция</SheetTitle>
					</SheetHeader>
					<div className='p-6'>
						{guide && (
							<div className='flex flex-row gap-1 justify-start items-center *:text-lg *:font-bold'>
								<FileDown />
								<Link href={`/guides/${guide}`}>Скачать PDF</Link>
							</div>
						)}
					</div>
				</SheetContent>
			</Sheet>
		</div>
	)
}
