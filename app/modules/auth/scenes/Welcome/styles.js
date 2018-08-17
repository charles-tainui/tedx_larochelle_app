import { StyleSheet } from 'react-native';

import { color, fontFamily, padding, fontSize } from "../../../../styles/theme"

const resizeMode = 'cover';

const styles = StyleSheet.create ({
	container: {
		flex: 1,
		alignItems: 'center',
		justifyContent: 'center',
		backgroundColor: color.white,
		/*
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#111',
		*/
	},

	wrapper: {
		paddingHorizontal: 15,
		paddingBottom: padding * 2,
		justifyContent: "center",
		alignItems: "center",
		/*
		borderStyle: 'solid',
		borderWidth: 2,
		borderColor: '#111',
		*/
	},

	image: {
		height: 100,
		width: 100,
		backgroundColor: color.grey,
		marginBottom: padding,
		resizeMode
	},

	title: {
		fontSize: fontSize.large + 5,
		lineHeight: fontSize.large + 7,
		fontFamily: fontFamily.medium,
		color: "#FF553F",
		letterSpacing: 1
	},
	socialButton: {
		padding: 20
	},
	button: {
		backgroundColor: 'red'
	},
	buttonText: {
		fontSize: 15,
		/*
		height: 100,
			flex: 1,
			color:'#111111'
		*/
	},
});

export default styles;