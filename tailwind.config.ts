
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: 'hsl(var(--primary))',
					foreground: 'hsl(var(--primary-foreground))'
				},
				secondary: {
					DEFAULT: 'hsl(var(--secondary))',
					foreground: 'hsl(var(--secondary-foreground))'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: 'hsl(var(--muted))',
					foreground: 'hsl(var(--muted-foreground))'
				},
				accent: {
					DEFAULT: 'hsl(var(--accent))',
					foreground: 'hsl(var(--accent-foreground))'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			typography: {
				DEFAULT: {
					css: {
						maxWidth: '65ch',
						color: 'hsl(var(--foreground))',
						h1: {
							color: 'hsl(var(--foreground))',
						},
						h2: {
							color: 'hsl(var(--foreground))',
						},
						h3: {
							color: 'hsl(var(--foreground))',
						},
						strong: {
							color: 'hsl(var(--foreground))',
						},
						a: {
							color: 'hsl(var(--primary))',
							'&:hover': {
								color: 'hsl(var(--primary) / 0.8)',
							},
						},
						blockquote: {
							borderLeftColor: 'hsl(var(--primary))',
							backgroundColor: 'hsl(var(--muted))',
							color: 'hsl(var(--foreground) / 0.8)',
						},
						hr: {
							borderColor: 'hsl(var(--border))',
						},
						ul: {
							li: {
								'&::marker': {
									color: 'hsl(var(--primary))',
								},
							},
						},
						ol: {
							li: {
								'&::marker': {
									color: 'hsl(var(--primary))',
								},
							},
						},
						pre: {
							backgroundColor: 'hsl(var(--muted))',
							borderColor: 'hsl(var(--border))',
							borderWidth: '1px',
							borderRadius: '0.5rem',
						},
						code: {
							color: 'hsl(var(--primary))',
							backgroundColor: 'hsl(var(--primary) / 0.1)',
							borderRadius: '0.25rem',
							padding: '0.2em 0.4em',
						},
					},
				},
			},
			fontFamily: {
				sans: ['Inter', 'system-ui', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
				raleway: ['Raleway', 'Inter', 'system-ui', 'sans-serif'],
				lato: ['Lato', 'Inter', 'system-ui', 'sans-serif'],
			},
			fontSize: {
				'display': 'clamp(40px, 4.5vw, 72px)',
				'h1': 'clamp(32px, 3.5vw, 56px)',
				'h2': 'clamp(24px, 2.8vw, 40px)',
				'h3': 'clamp(20px, 2.2vw, 28px)',
				'body-large': '18px',
				'body': '16px',
				'caption': '14px',
			},
			letterSpacing: {
				'tight': '-0.025em',
				'normal': '0',
				'slight': '-0.01em',
				'relaxed': '0.025em',
			},
			lineHeight: {
				'display': '115%',
				'heading': '120%',
				'subheading': '130%',
				'body': '160%',
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)',
				'pill': '9999px',
			},
			keyframes: {
				'accordion-down': {
					from: { height: '0' },
					to: { height: 'var(--radix-accordion-content-height)' },
				},
				'accordion-up': {
					from: { height: 'var(--radix-accordion-content-height)' },
					to: { height: '0' },
				},
				'fade-in': {
					'0%': { opacity: '0', transform: 'translateY(10px)' },
					'100%': { opacity: '1', transform: 'translateY(0)' },
				},
				'fade-in-right': {
					'0%': { opacity: '0', transform: 'translateX(-10px)' },
					'100%': { opacity: '1', transform: 'translateX(0)' },
				},
				'count-up': {
					'0%': { '--num': '0' },
					'100%': { '--num': 'var(--end)' },
				},
				'draw-line': {
					'0%': { 'stroke-dashoffset': '1000' },
					'100%': { 'stroke-dashoffset': '0' },
				},
				'gradient-shift': {
					'0%': { 'background-position': '0% 50%' },
					'50%': { 'background-position': '100% 50%' },
					'100%': { 'background-position': '0% 50%' },
				},
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.5s ease-out forwards',
				'fade-in-right': 'fade-in-right 0.5s ease-out forwards',
				'count-up': 'count-up 2s forwards',
				'draw-line': 'draw-line 1.5s ease-out forwards',
				'gradient-shift': 'gradient-shift 3s ease infinite',
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-primary': 'linear-gradient(to right, #3B82F6, #6366F1)',
				'gradient-secondary': 'linear-gradient(to right, #10B981, #3B82F6)',
				'noise-texture': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.01'/%3E%3C/svg%3E\")",
			},
			boxShadow: {
				'glow': '0 0 20px rgba(59, 130, 246, 0.1)',
				'glow-purple': '0 0 20px rgba(99, 102, 241, 0.1)',
				'card': '0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)',
				'card-hover': '0 4px 12px rgba(0, 0, 0, 0.1), 0 2px 4px rgba(0, 0, 0, 0.06)',
			},
		}
	},
	plugins: [
		require("tailwindcss-animate"),
		require("@tailwindcss/typography")
	],
} satisfies Config;
