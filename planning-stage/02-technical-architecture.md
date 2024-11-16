# Technical Architecture

## Frontend Structure
- Next.js 14 with App Router
- TypeScript
- TailwindCSS
- Shadcn/ui Components

## Authentication Flow
1. Initial sign up with provider
2. Username selection/generation
3. Initial credit allocation
4. Referral code generation

## Database Collections
1. Users Collection
2. Characters Collection
3. Credits Collection
4. Images Collection
5. Referrals Collection

## API Integration
1. Authentication APIs
2. Image Generation Pipeline
   - ComfyUI Integration
   - Stable Diffusion Configuration
3. Character Management APIs
4. Credit System APIs

## Caching Strategy
- Redis for session management
- Edge caching for static assets
- CDN for generated images
