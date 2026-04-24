import { emailConfig } from '../config/config'
import {
	renderPasswordResetEmail,
	renderPasswordResetEmailText,
} from '../templates/PasswordResetEmail.js'
import {
	renderVerificationEmail,
	renderVerificationEmailText,
} from '../templates/VerificationEmail'
import type {
	PasswordResetEmailData,
	VerificationEmailData,
} from '../types/emails'
import { EmailService } from './emailService'

export class AuthEmailService {
	static async sendVerificationEmail(
		data: VerificationEmailData,
	): Promise<void> {
		await EmailService.send({
			from: emailConfig.from.verification,
			to: data.email,
			subject: 'DevTalks - Verifica tu correo electrónico',
			text: renderVerificationEmailText(data),
			html: renderVerificationEmail(data),
		})
	}

	static async sendPasswordResetToken(
		data: PasswordResetEmailData,
	): Promise<void> {
		await EmailService.send({
			from: emailConfig.from.passwordReset,
			to: data.email,
			subject: 'DevTalks - Restablece tu password',
			text: renderPasswordResetEmailText(data),
			html: renderPasswordResetEmail(data),
		})
	}
}
