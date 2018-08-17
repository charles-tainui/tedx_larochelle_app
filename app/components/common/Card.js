import React from 'react';
import {View} from 'react-native';

const Card = (props) => {
	const {containerStyle} = styles;

	return (
		<View style={containerStyle}>
			{props.children}
		</View>
	);
}

const styles = {
	containerStyle: {
		backgroundColor: '#FFFFFF',
		borderWidth:1,
		borderRadius:3,
		borderColor:'#dddddd',
		margin:5,
		padding:5,
	}
}

export {Card};