import React from 'react';
import {View, ActivityIndicator} from 'react-native';

const Spinner = ({ size }) => {
	return (
		<View style={styles.spinnerStyle}>
			<ActivityIndicator size={size || 'small'}/>
		</View>
	);
};


const styles = {
	spinnerStyle: {
		alignItems: 'center',
		justifyContent: 'center',
		flex: 1
	}
};

export {Spinner};