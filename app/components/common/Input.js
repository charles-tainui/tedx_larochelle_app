import React, {Component} from 'react';
import {TextInput, View, Text} from 'react-native';

const Input = ({ label, placeholder, value, secureTextEntry, onChangeText }) => {
	/*
	state = { text: '' };

		const { buttonStyle, textStyle } = styles;
		const {onPress, children} = props;
		 */
	// render() {
	return (
		<View style={styles.containerStyle}>
			<Text style={styles.labelStyle}>{label} :</Text>
			<TextInput value={value}
								 placeholder={placeholder}
								 onChangeText={onChangeText}
								 style={styles.textInput}
								 autoCorrect={false}
								 secureTextEntry={secureTextEntry}
			/>
		</View>
	);

	//}
}


const styles = {
	containerStyle: {
		flexDirection: 'row',
		flex: 1
	},
	labelStyle: {
		fontWeight: '600',
		lineHeight: 40,
		flex: 1,
	},
	textInput: {
		flex: 2,
		height: 38,
		borderRadius: 3,
		borderWidth: 1,
		borderColor: '#ddd',
		borderStyle: 'solid',
		padding: 5
	}
}

export {Input};