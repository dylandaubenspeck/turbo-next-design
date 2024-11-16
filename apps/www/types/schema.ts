export interface User {
  id: string
  username: string
  email: string
  authProvider: 'google' | 'github' | 'email' | 'apple'
  role: 'admin' | 'user' | 'paid_user'
  credits: number
  referralCode: string
  referredBy?: string
  referralCount: number
  loginStreak: number
  lastLogin: Date
  createdAt: Date
}

export interface Character {
  id: string
  userId: string
  name: string
  attributes: {
    [key: string]: string | number | boolean
  }
  personality: {
    [key: string]: string | number
  }
  isPrivate: boolean
  images: string[]
  promptConfig: {
    negativePrompt: string
    positivePrompt: string
    seed: number
    steps: number
    cfg: number
    // other ComfyUI specific settings
  }
  referenceCharacterId?: string
  createdAt: Date
  updatedAt: Date
}

export interface Credit {
  id: string
  userId: string
  amount: number
  type: 'purchase' | 'reward' | 'referral' | 'login_streak'
  createdAt: Date
}
