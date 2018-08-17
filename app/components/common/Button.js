import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

const Button = (props) => {
	const { buttonStyle, textStyle } = styles;
	const { onPress, children } = props;

	return (
		<TouchableOpacity style={buttonStyle}
											onPress={onPress}>
			<Text style={textStyle}>{children}</Text>
		</TouchableOpacity>
	);
}

const styles = {
	textStyle: {
		fontWeight: '600',
		alignSelf: 'center',
		color: '#007aff',
		lineHeight: 38,
	},
	buttonStyle: {
		height: 38,
		borderWidth: 1,
		borderRadius: 5,
		borderColor: '#007aff',
		flex: 1,
		// alignItems: 'stretch',
		// alignSelf: 'center'
	}
}

export { Button };