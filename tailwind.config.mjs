/** @type {import('tailwindcss').Config} */
const plugin = require('tailwindcss/plugin')
export default {
	darkMode: ["class"],
	content: [
	  './pages/**/*.{ts,tsx,astro}',
	  './components/**/*.{ts,tsx,astro}',
	  './app/**/*.{ts,tsx,astro}',
	  './src/**/*.{ts,tsx,astro}',
	  ],
	theme: {
	  container: {
		center: true,
		padding: "2rem",
		screens: {
		  "2xl": "1400px",
		},
	  },
	  textShadow: {
        sm: '1px 2px var(--tw-shadow-color)',
        DEFAULT: '2px 4px var(--tw-shadow-color)',
        lg: '8px 16px var(--tw-shadow-color)',
      },
	  extend: {
		fontFamily: {
		  'inter': ['Inter', 'sans-serif'],
		  'nunito': ['nunito', 'sans-serif'],
		  'poppins': ['Poppins', 'sans-serif']
		},
		transitionDuration: {
			'50': '50ms'
		},
		transitionProperty: {
			'width': 'width'
		},
		colors: {
		  border: "hsl(var(--border))",
		  input: "hsl(var(--input))",
		  ring: "hsl(var(--ring))",
		  background: "hsl(var(--background))",
		  foreground: "hsl(var(--foreground))",
		  primary: {
			DEFAULT: "hsl(var(--primary))",
			foreground: "hsl(var(--primary-foreground))",
		  },
		  secondary: {
			DEFAULT: "hsl(var(--secondary))",
			foreground: "hsl(var(--secondary-foreground))",
		  },
		  destructive: {
			DEFAULT: "hsl(var(--destructive))",
			foreground: "hsl(var(--destructive-foreground))",
		  },
		  muted: {
			DEFAULT: "hsl(var(--muted))",
			foreground: "hsl(var(--muted-foreground))",
		  },
		  accent: {
			DEFAULT: "hsl(var(--accent))",
			foreground: "hsl(var(--accent-foreground))",
		  },
		  popover: {
			DEFAULT: "hsl(var(--popover))",
			foreground: "hsl(var(--popover-foreground))",
		  },
		  card: {
			DEFAULT: "hsl(var(--card))",
			foreground: "hsl(var(--card-foreground))",
		  },
		},
		borderRadius: {
		  lg: "var(--radius)",
		  md: "calc(var(--radius) - 2px)",
		  sm: "calc(var(--radius) - 4px)",
		},
		boxShadow: {
		  't-sm': '0 -1px 2px 0 rgba(0, 0, 0, 0.05)',
		  't-md': '0 -4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
		  't-lg': '0 -10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
		  't-xl': '0 -20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
		  't-2xl': '0 -25px 50px -12px rgba(0, 0, 0, 0.25)',
		  't-3xl': '0 -35px 60px -15px rgba(0, 0, 0, 0.3)',
		  // Add shadows for right, bottom, and left here
		  'r-sm': '-1px 0 2px 0 rgba(0, 0, 0, 0.05)',
		  'r-md': '-4px 0 6px -1px rgba(0, 0, 0, 0.1), 2px 0 4px -1px rgba(0, 0, 0, 0.06)',
		  'r-lg': '-10px 0 15px -3px rgba(0, 0, 0, 0.1), 4px 0 6px -2px rgba(0, 0, 0, 0.05)',
		  'r-xl': '-20px 0 25px -5px rgba(0, 0, 0, 0.1), 10px 0 10px -5px rgba(0, 0, 0, 0.04)',
		  'r-2xl': '-25px 0 50px -12px rgba(0, 0, 0, 0.25)',
		  'r-3xl': '-35px 0 60px -15px rgba(0, 0, 0, 0.3)',
		  'b-sm': '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
		  'b-md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 -2px 4px -1px rgba(0, 0, 0, 0.06)',
		  'b-lg': '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 -4px 6px -2px rgba(0, 0, 0, 0.05)',
		  'b-xl': '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 -10px 10px -5px rgba(0, 0, 0, 0.04)',
		  'b-2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
		  'b-3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
		  'l-sm': '1px 0 2px 0 rgba(0, 0, 0, 0.05)',
		  'l-md': '4px 0 6px -1px rgba(0, 0, 0, 0.1), -2px 0 4px -1px rgba(0, 0, 0, 0.06)',
		  'l-lg': '10px 0 15px -3px rgba(0, 0, 0, 0.1), -4px 0 6px -2px rgba(0, 0, 0, 0.05)',
		  'l-xl': '20px 0 25px -5px rgba(0, 0, 0, 0.1), -10px 0 10px -5px rgba(0, 0, 0, 0.04)',
		  'l-2xl': '25px 0 50px -12px rgba(0, 0, 0, 0.25)',
		  'l-3xl': '35px 0 60px -15px rgba(0, 0, 0, 0.3)',
		},
		keyframes: {
		  "accordion-down": {
			from: { height: 0 },
			to: { height: "var(--radix-accordion-content-height)" },
		  },
		  "accordion-up": {
			from: { height: "var(--radix-accordion-content-height)" },
			to: { height: 0 },
		  },
		},
		animation: {
		  "accordion-down": "accordion-down 0.2s ease-out",
		  "accordion-up": "accordion-up 0.2s ease-out",
		},
	  },
	},
	plugins: [
		require("tailwindcss-animate"), 
		require('@tailwindcss/typography'),
		plugin(function ({ matchUtilities, theme }) {
			matchUtilities(
			  {
				'text-shadow': (value) => ({
				  textShadow: value,
				}),
			  },
			  { values: theme('textShadow') }
			)
		  }),
	],
}
