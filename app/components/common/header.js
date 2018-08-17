import React from 'react';
import {Text, View} from 'react-native';

const Header = (props) => {
	const { textStyle, viewStyle } = styles;
	const { title } = props;

	return (
		<View style={viewStyle}>
			<Text style={textStyle}>{title}</Text>
		</View>
	);
};

const styles = {
	viewStyle: {
		backgroundColor: '#F8F8F8',
		display:'flex',
		// height:60,
		paddingTop: 15,
		justifyContent: 'center',
		alignItems: 'center',
		borderStyle:'solid',
		borderColor:'red',
		shadowColor:'#ccc',
		shadowOpacity: 1,
		shadowOffset:{
			width: 0, height: 2
		},
		position: 'relative',
		elevation: 2
	},
	textStyle: {
		fontSize: 20,
		fontWeight:'600'
	}
}

export {Header};