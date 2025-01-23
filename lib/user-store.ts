import { create } from 'zustand'

// Описание интерфейса для состояния
interface User {
	firstName: string
	lastName: string
	photoUrl: string
	id: number | null
}

interface UserState {
	user: User
	setUser: (user: User) => void
	updateUser: (updates: Partial<User>) => void
	clearUser: () => void
}

// Создание хранилища с типизацией
export const useUserStore = create<UserState>(set => ({
	user: {
		firstName: '',
		lastName: '',
		photoUrl: '',
		id: null,
	},
	setUser: user => set({ user }),
	updateUser: updates =>
		set(state => ({
			user: { ...state.user, ...updates },
		})),
	clearUser: () =>
		set({
			user: {
				firstName: '',
				lastName: '',
				photoUrl: '',
				id: null,
			},
		}),
}))

export default useUserStore
