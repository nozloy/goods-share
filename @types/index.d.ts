export interface User {
	firstName: string
	lastName?: string
	photoUrl?: string
	id?: number
}

export interface iItem {
	id: number
	name: string
	image: string
	price: number
	description: string
	guide: string
}

export interface iRentTypes {
	id: number
	name: string
	value: number
	available: boolean
	mod: number
}
