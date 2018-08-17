import React from 'react';
import { View, Text, Image } from 'react-native';

const CardSection = (props) => {
	const { containerStyle } = styles;
	const { style } = props;

	return (
		<View style={[containerStyle, style]}>
			{props.children}
		</View>
	);
}

const styles = {
	containerStyle: {
		justifyContent: 'flex-start',
		padding: 5,
		flexDirection: 'row',
		borderColor: '#eee',
		borderBottomWidth: 0,
		position: 'relative',
	}
}

export { CardSection };