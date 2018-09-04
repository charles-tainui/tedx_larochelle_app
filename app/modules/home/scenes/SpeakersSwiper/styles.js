import { StyleSheet } from 'react-native';
import { theme } from "../../index"

const { fontSize, color, windowWidth, windowHeight } = theme;

const styles = StyleSheet.create({
	swiperStyle:{
		backgroundColor: color.white
		
	},
	itemContainerStyle: {
		borderBottomWidth:0,
		/*
		borderColor:color.red,
		borderStyle:'solid',
		*/
		height: '80%',
		backgroundColor: color.white
	},
	wrapperStyle: {
		height: '100%',
		paddingTop: 20,
		paddingRight: 10,
		flexDirection: 'column',
		alignItems: 'center',
		/*
		shadowColor: color.black,
		shadowOffset: { width: 0, height: 0 },
		shadowOpacity: 0.3,
		shadowRadius: 5,
		backgroundColor: '#FFFFFF',
		borderColor:'black',
		borderWidth:1,
		borderStyle:'solid',
		*/
	},
	
	labelStyle: {
		color: color.dark_grey,
		fontSize: fontSize.regular,
		/*
		borderColor: 'black',
		borderWidth: 1,
		borderStyle: 'solid',
		*/
	},
	titleStyle: {
		color: color.red,
		textAlign: 'center',
		fontSize: fontSize.large,
		lineHeight: fontSize.large * 2,
		/*
		borderColor: 'black',
		borderWidth: 1,
		borderStyle: 'solid',
		*/
	},
	subtitleStyle: {
		color: color.dark_grey,
		fontSize: fontSize.regular,
		padding: 30,
		/*
		borderColor: 'black',
		borderWidth: 1,
		borderStyle: 'solid',
		*/
	},
	arrowButtonStyle: {
		color: color.red,
		fontSize: fontSize.large * 2
	},
	actionButtonStyle: {
		backgroundColor: color.red,
		borderRadius: 3
	},
	actionButtonTextStyle: {
		color: color.white,
		// fontSize: fontSize.large * 2,
	}
})

export default styles;