import { emailConfig } from '../config/config.js'
import {
	renderVerificationEmail,
	renderVerificationEmailText,
} from '../templates/VerificationEmail.js'
import type { VerificationEmailData } from '../types/emails.js'
import { EmailService } from './emailService.js'

export class AuthEmailService {
	static async sendVerificationEmail(
		data: VerificationEmailData,
	): Promise<void> {
		await EmailService.send({
			from: emailConfig.from.verification,
			to: data.email,
			subject: 'Verifica tu correo electrónico',
			text: renderVerificationEmailText(data),
			html: renderVerificationEmail(data),
		})
	}
}
