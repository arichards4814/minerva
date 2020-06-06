export const primaryFont = "'Roboto', sans-serif"
export const secondaryFont = "'Kanit', sans-serif;"

export function handleFonts(propswfont){

    if (propswfont.font === "secondary"){
        return secondaryFont
    } else {
        return primaryFont
    }
}