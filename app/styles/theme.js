import { Dimensions, Platform } from 'react-native';
import { moderateScale as normalize } from 'react-native-size-matters';

const color = {
	black: "#3B3031",
	light_black: "#414141",
	main: "rgb(99,139,250)",
	white: "#ffffff",
	dark_grey: "#3F3F3F",
	light_grey: "#eaeaea",
	grey: "#ccc",
	red: "#FF2B06",
	underlayColor: "#ddd"
};

const fontSize = {
	small: 12,
	regular: 14,
	large: 21,
	small: normalize(12),
	regular: normalize(14),
	large: normalize(21)
}

const fontFamily = {
	// extrabold: "RobotoExtraBold",
	// bold: "RobotoBold",
	// medium: "RobotoMedium",
	// regular: "RobotoRegular",
	// light: "RobotoLight"
}

const navBarStyle = {
	backgroundColor: color.red,
}

const navTitleStyle = {
	fontSize: fontSize.regular,
	fontFamily: fontFamily.extrabold,
	color: color.white
}

const padding = 8;
const navbarHeight = (Platform.OS === 'ios') ? 64 : 54;
const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const tabColor = (Platform.OS === "ios") ? "rgba(73,75,76, .5)" : "rgba(255,255,255,.8)";
const selectedTabColor = (Platform.OS === "ios") ? "rgb(73,75,76)" : "#fff";

const tabIconStyle = { size: 21, color: tabColor, selected: selectedTabColor }

export {
	color,
	fontSize,
	fontFamily,
	padding,
	navbarHeight,
	navBarStyle,
	windowWidth,
	windowHeight,
	tabIconStyle,
	navTitleStyle,
	normalize
}