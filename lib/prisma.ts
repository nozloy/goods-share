'use server'
import { iRentTypes } from '@/@types'
import { PrismaClient } from '@prisma/client'
const prisma = new PrismaClient()

export const addRent = async (
	itemId: number,
	price: number,
	rentType: iRentTypes,
	userId: number,
) => {
	console.log(rentType.value)
	await prisma.rents.create({
		data: {
			itemId: itemId,
			userId: userId.toString(),
			price: price,
			rentType: rentType.id,
			endAt: new Date(Date.now() + rentType.value * 1000),
			accessCode: Math.floor(1000 + Math.random() * 9000),
		},
	})
}

export const getRents = async (userId: number) => {
	return await prisma.rents.findMany({
		where: {
			userId: userId.toString(),
		},
	})
}
