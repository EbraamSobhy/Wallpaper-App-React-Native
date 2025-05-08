const theme = {
    colors: {
        neutral: (opacity = 1) => `rgba(10, 10, 10, ${opacity})`,
        primary: (opacity = 1) => `rgba(120, 120, 120, ${opacity})`,
        secondary: (opacity = 1) => `rgba(200, 200, 200, ${opacity})`,
        white: (opacity = 1) => `rgba(255, 255, 255, ${opacity})`,
        black: (opacity = 1) => `rgba(0, 0, 0, ${opacity})`,
    },
    spacing: {
        xs: 4,
        sm: 8,
        md: 16,
        lg: 24,
        xl: 32,
    },
    typography: {
        h1: {
            fontSize: 32,
            fontWeight: 'bold',
        },
        h2: {
            fontSize: 24,
            fontWeight: 'bold',
        },
        body: {
            fontSize: 16,
        },
    },
    fontsWeights: {
        medium: '500',
        semibold: '600',
        bold: '700',
    },
    radius: {
        xs: 10,
        sm: 12,
        md: 14,
        lg: 16,
        xl: 18,
    }
}

export default theme;