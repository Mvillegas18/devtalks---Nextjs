import { auth } from '@/src/lib/auth.js'

export type User = typeof auth.$Infer.Session.user
