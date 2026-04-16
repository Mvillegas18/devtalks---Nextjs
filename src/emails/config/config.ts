export const emailConfig = {
	from: {
		verification: 'DevTalks <cuentas@devtalks.com>',
		passwordReset: 'DevTalks <admin@devtalks.com>',
		default: 'DevTalks <noreply@devtalks.com>',
	},
	tokenExpiration: '1 hora',
} as const
