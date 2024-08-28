import { Platform } from "react-native"
import { MD3Type } from "react-native-paper/lib/typescript/types"

const baseFont: Required<Pick<MD3Type, 'fontFamily' | 'fontWeight' | 'letterSpacing' | 'lineHeight'>> = {
    fontFamily: Platform.select({
        web: 'Roboto, "Helvetica Neue", Helvetica, Arial, sans-serif',
        ios: 'System',
        default: 'sans-serif',
    }),
    fontWeight: '500',
    letterSpacing: 0.2,
    lineHeight: 20,
}
export const fontConfig: Record<string, MD3Type> = {
    default: {
        ...baseFont,
        fontSize: 14,
    },
    displaySmall: {
        ...baseFont,
        fontSize: 16,
        fontWeight: '600'
    },
    displayMedium: {
        ...baseFont,
        fontSize: 18,
        fontWeight: '600'
    },
    displayLarge: {
        ...baseFont,
        fontSize: 20,
        fontWeight: '700'
    }


}