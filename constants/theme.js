import { Dimensions } from "react-native";

const { height, width } = Dimensions.get('window');

const COLORS = {
    // primary: "#24AD50",
    // secondary: "#DDF0FF",
    // tertiary: "#FF7754",

    // gray: "#83829A",
    // gray2: "#C1C0C8",

    // offWhite: "#F3F4F8",
    // white: "#FFFFFF",
    // black: "#000000",
    // red: "#E81E4D",
    // green: "#00C135",
    // lightWhite: "#FAFAFC"
}

const SIZES = {
    // xSmall: 10,
    // small: 12,
    // medium: 16,
    // xLarge: 24,
    // xxLarge: 44,
    height,
    width
}

export { COLORS, SIZES }