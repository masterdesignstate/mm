import defaultTheme from 'tailwindcss/defaultTheme';
import forms from '@tailwindcss/forms';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: [
        './vendor/laravel/framework/src/Illuminate/Pagination/resources/views/*.blade.php',
        './storage/framework/views/*.php',
        './resources/views/**/*.blade.php',
        './resources/js/**/*.jsx',
    ],

    theme: {
    	extend: {
    		colors: {
    			bpurple: {
    				'50': '#F3F0FF',
    				'100': '#F7EAF4',
    				'300': '#B3A2C6',
    				'400': '#7E65A2',
    				'500': '#692EB7',
    				'600': '#5A3D8B',
    				'900': '#100336'
    			}
    		},
    		fontFamily: {
    			head: [
    				'Tanker-Regular;',
                    ...defaultTheme.fontFamily.sans
                ],
    			sans: [
    				'Inter',
                    ...defaultTheme.fontFamily.sans
                ]
    		},
    		borderRadius: {
    			lg: 'var(--radius)',
    			md: 'calc(var(--radius) - 2px)',
    			sm: 'calc(var(--radius) - 4px)'
    		}
    	}
    },

    plugins: [forms, require("tailwindcss-animate")],
};
