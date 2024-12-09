/* eslint-disable @typescript-eslint/no-unused-vars */
'use client'

import React, { useEffect } from 'react'
import {
	qrScanner,
	init,
	miniApp,
	themeParams,
	viewport,
	popup,
	retrieveLaunchParams,
} from '@telegram-apps/sdk'
import { User } from '@/@types'

export const initApp = async (): Promise<User | undefined> => {
	try {
		await init()
		const { initData } = await retrieveLaunchParams()
		return initData?.user
	} catch (error) {
		console.error('Error:', error)
	}
}
export const openPopup = async (
	title: string,
	message: string,
	buttonText: string,
) => {
	popup.open({
		title: title,
		message: message,
		buttons: [{ id: 'my-id', type: 'default', text: buttonText }],
	})
}
export const handleScan = async () => {
	if (qrScanner.open.isAvailable()) {
		try {
			const promiseQR = qrScanner.open({
				text: 'Сканируйте QR-код на экране постамата',
				onCaptured(qr: string) {
					console.log('QR-код:', qr)
					if (qr === 'qr-content-we-expect') {
						qrScanner.close()
					}
				},
			})
			await promiseQR
		} catch (error) {
			console.error('Ошибка при работе с QR-сканером:', error)
		}
	} else {
		console.warn('QR-сканер недоступен')
	}
}
export default function Telegram() {
	useEffect(() => {
		if (typeof window !== 'undefined') {
			try {
				init()
				miniApp.mount()
				themeParams.mount()

				setTimeout(() => {
					try {
						viewport.requestFullscreen()
					} catch (error) {
						console.error('Ошибка вызова requestFullscreen:', error)
					}
				}, 100)
			} catch (error) {
				console.error('Ошибка инициализации Telegram SDK:', error)
			}
		}
	})
}
