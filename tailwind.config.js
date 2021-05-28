module.exports = {
    mode: 'jit',
    purge: ['./public/**/*.html', './src/**/*.{js,jsx,ts,tsx,vue}'],
    theme: {
        screens: {
            sm: '640px',
            md: '768px',
            lg: '1024px',
            xl: '1280px',
        },
        colors: {
            transparent: 'transparent',
            black: '#000',
            white: '#fff',
            gray: {
                100: '#f7fafc',
                // ...
                900: '#1a202c',
            },
        },
        fontFamily: {
            display: ['Gilroy', 'sans-serif'],
            body: ['Graphik', 'sans-serif'],
        },
        borderWidth: {
            0: '0',
            default: '1px',
            2: '2px',
            4: '4px',
        },
        extend: {
            colors: {
                cyan: '#9cdbff',
                purple: {
                    light: '#d05ce3',
                    default: '#9c27b0',
                    dark: '#6a0080',
                },
            },
            spacing: {
                96: '24rem',
                128: '32rem',
            },
        },
    },
}
