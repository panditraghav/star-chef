/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            colors: {
                background: 'hsl(var(--background) / <alpha-value>)',
                foreground: 'hsl(var(--foreground) / <alpha-value>)',

                primary: {
                    DEFAULT: 'hsl(var(--primary) / <alpha-value>)',
                    foreground:
                        'hsl(var(--primary-foreground) / <alpha-value>)',
                },

                secondary: {
                    DEFAULT: 'hsl(var(--secondary) / <alpha-value>)',
                    foreground:
                        'hsl(var(--secondary-foreground) / <alpha-value>)',
                },

                border: {
                    DEFAULT: 'hsl(var(--border) / <alpha-value>)',
                    muted: 'hsl(var(--border-muted) / <alpha-value>)',
                },

                tag: {
                    DEFAULT: 'hsl(var(--tag) / <alpha-value>)',
                    foreground: 'hsl(var(--tag-foreground) / <alpha-value>)',
                },

                muted: {
                    DEFAULT: 'hsl(var(--muted) / <alpha-value>)',
                    foreground: 'hsl(var(--muted-foreground) / <alpha-value>)',
                },
            },
            boxShadow: {
                button: '0px 3px 4px hsla(0, 0%, 0%, 0.16)',
            },
            fontFamily: {
                sans: ['Open Sans', 'sans-serif'],
            },
        },
    },
    plugins: [],
}
