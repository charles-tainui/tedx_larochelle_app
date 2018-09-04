import { StyleSheet } from 'react-native';
// import { color, fontFamily, padding, fontSize } from "../../styles/theme"
const resizeMode = 'cover';

const styles = StyleSheet.create ({
	headerStyle: {
		flexDirection: 'column',
		justifyContent: 'space-around'
	},
	headerTitleStyle: {
		fontSize: 18,
		fontWeight: '500'
	},
	thumbnailContainerStyle: {
		justifyContent: 'space-around',
		alignItems: 'flex-start',
		marginRight: 10,
	},
	thumbnailStyle: {
		width: 50,
		height: 50
	},
	coverStyle: {
		flex: 1,
		height: 300,
		width: null
	}
});

export default styles;