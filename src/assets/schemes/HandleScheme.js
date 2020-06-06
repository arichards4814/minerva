import * as Colors from './ColorScheme'


const { primary, secondary, third, fourth } = Colors


export default function HandleScheme(propswcolor){
    //check if props has .theme, and handle it.
    if (propswcolor.theme){
        switch (propswcolor.theme) {
            case "minerva":
                return primary
                break;
            case "secondary":
                return secondary
                break;
            case "third":
                return third
                break;
            case "fourth":
                return fourth
                break;
            case "white":
                return "#FFFFFF"
                break;
            default:
                return "#000000"
        }
    } else {
        return "#000000"
    }
}

export function HandleSchemeTextColor(propswcolor) {
    //check if props has .theme, and handle it.
    if (propswcolor.color) {
        switch (propswcolor.color) {
            case "minerva":
                return primary
                break;
            case "secondary":
                return secondary
                break;
            case "third":
                return third
                break;
            case "fourth":
                return fourth
                break;
            case "white":
                return "#FFFFFF"
                break;
            default:
                return "#000000"
        }
    } else {
        return "#000000"
    }
}