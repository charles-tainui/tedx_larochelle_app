import { StyleSheet } from 'react-native';
import { theme } from "../../index"

const { fontSize, color, windowWidth, windowHeight } = theme;

const styles = StyleSheet.create({
	listStyle: {
		backgroundColor: color.white
	},
	
	itemContainerStyle: {
		padding: 20,
		paddingTop: 20,
		paddingBottom: 20,
		backgroundColor: color.white
		// height: 70
	},
	/*
	contentContainerStyle: {
		paddingLeft: 100,
		backgroundColor: 'red'
	},
	*/
	titleStyle: {
		marginLeft: 30,
		color: color.red,
	},
	subtitleStyle: {
		marginLeft: 30,
		color: color.dark_grey,
		fontSize: fontSize.regular
	},
	
	avatarContainerStyle: {},
});

export { styles };