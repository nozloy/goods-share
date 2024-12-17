import React from 'react'
import { cn } from '@/lib/utils'

interface Props {
	className?: string
	id: string
}

export const ItemPage: React.FC<Props> = ({ className }) => {
	return <div className={cn('', className)}>ItemPage</div>
}
