import { emailConfig } from '../config/config'
import {
	renderVerificationEmail,
	renderVerificationEmailText,
} from '../templates/VerificationEmail'
import type { VerificationEmailData } from '../types/emails'
import { EmailService } from './emailService'

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
