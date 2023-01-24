import { extendTheme } from 'native-base';

export const THEME = extendTheme({
    colors: {
        blue: {
            700: "#05445e",
        }
    },
    fonts: {
        heading: "Karla_700Bold",
        body: "Karla_400Regular",
    },
    fontSizes: {
        xs: 12,
        sm: 14,
        md: 16,
        lg: 18,
        xl: 20,
    },
    sizes: {
        14: 56,
        33: 148
    }
});
