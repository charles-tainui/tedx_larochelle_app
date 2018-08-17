import React, { Component } from 'react';
import { View, Text } from 'react-native';
import { Actions } from 'react-native-router-flux';
import { connect } from 'react-redux';
import { actions as auth } from "../../index"

class Login extends Component {

	render() {
		return (
			<View>
				<Text>Form Login</Text>
			</View>
		);
	}
}

export default Login;
