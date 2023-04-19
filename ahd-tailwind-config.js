module.exports = {
    config: {
        theme: {
            extends : {
                // heights
                height: () => ({
                    120: '30rem',
                    144: '36rem',
                    160: '40rem',
                    map: '40.3rem'
                }),
                // screens
                screens: {
                    'xs': '476px'
                },
                // Add color classes to active state
                backgroundColor: ['active'],
                textColor: ['active'],
                // Animations
                keyframes: {
                    wiggle: {
                        '0%, 100%': { transform: 'rotate(-1deg)' },
                        '50%': { transform: 'rotate(2.5deg)' },
                    },
                },
                animation: {
                    wiggle: 'wiggle 15s ease-in-out infinite'
                },
                // Colors
                colors: {
                    teal: {
                        'DEFAULT': '#00cc0e',
                        'regular': '#00cc0e',
                        // deprecated
                        'light': '#00cc0e',
                        'regular-contrast': '#00b768',
                        'medium': '#00b752',
                        'medium-contrast': '#00b768',
                        'dark': '#00c2cc',
                        'dark-contrast': '#00c2cc',
                        'darker':'#006335',
                        'darker-contrast': '#006335',
                        'darkest': '#014d29',
                        'darkest-contrast': '#014d29',
                        '50': '#c2cbcc',
                        '100': '#b9ccb8',
                        '200': '##a1c995',
                        '300': '#9ccc8f',
                        '400':' #7ac8cc',
                        '500': '#66c7cc',
                        '600': '#52c6cc',
                        '700': '#3dc5cc',
                        '800': '#29c4cc',
                        '900': '#14c3cc'
                    },
                    navy: {
                        'DEFAULT': '#1b2434',
                        'lightest': '#273347',
                        'lighter': '#222c3d',
                        'regular': '#1b2434',
                        // deprecated
                        'light': '#22341b',
                        'regular-contrast': '#18202f',
                        // deprecated
                        'light-contrast': '#18202f',
                        'medium': '#161d2a',
                        'medium-contrast': '#132415',
                        'dark': '#10161f',
                        'dark-contrast': '#0e121a',
                        '50': '#303133',
                        '100': '#2e3033',
                        '200': '#292d33',
                        '300': '#242933',
                        '400': '#1f2633',
                        '500': '#1a2233',
                    },
                },
                // box shadow
                boxShadow: {
                    'md-dark': '1px 1px 7px 1px rgba(0, 0, 0, 0.2)',
                    'md-dark-contrast': '1px 1px 7px 1px rgba(0, 0, 0, 0.35)',
                    'lg-dark': '1px 1px 10px 1px rgba(0, 0, 0, 0.15)',
                    '2xl-light': '0 0 50px -20px rgba(255, 255, 255, 0.15)',
                }
            }
        },
        variants: {
            extend: {
                // add opacity classes to disabled state
                opacity: ['disabled'],
            },
        },
    },
    handler: function() {}
}