import React from 'react';
import {
	Scene,
	Router,
	ActionConst,
	Stack,
	Modal,
	Tabs
} from 'react-native-router-flux';

//Splash Component
import Splash from '../components/Splash/Splash';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome/index';
// import Register from '../modules/auth/scenes/Register/index';
// import CompleteProfile from '../modules/auth/scenes/CompleteProfile/index';
import Login from '../modules/auth/scenes/Login/index';
// import ForgotPassword from '../modules/auth/scenes/ForgotPassword/index';
import Home from '../modules/home/scenes/Home/index';

//Import Store, actions
import store from '../redux/store'
import { checkLoginStatus } from "../modules/auth/actions";

import { color, navTitleStyle } from "../styles/theme";

export default class extends React.Component {
	constructor() {
		super ();
		this.state = {
			isReady: false,
			isLoggedIn: false,
			exist: false //indicates if user exist in realtime database
		}
	}

	componentDidMount() {
		console.log ('routes.js => componentDidMount');
		let _this = this;
		store.dispatch (checkLoginStatus ((exist, isLoggedIn) => {
			_this.setState ({ isReady: true, exist, isLoggedIn });
		}));
	}

	render() {
		if(!this.state.isReady) {
			return <Splash/>
		}

		return (
			<Router>
				<Scene key="root" hideNavBar
							 navigationBarStyle={{ backgroundColor: "#fff" }}
							 titleStyle={navTitleStyle}
							 backButtonTintColor={color.black}>
					<Stack key="Auth" initial={!this.state.isLoggedIn}>
						<Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
					</Stack>

					<Stack key="Main" initial={this.state.isLoggedIn}>
						<Scene key="Home" component={Home} title="Home" initial={true} type={ActionConst.REPLACE}/>
					</Stack>
				</Scene>
			</Router>
		)
		/*
		<Scene key="Register" component={Register} title="Register" back/>
		<Scene key="CompleteProfile" component={CompleteProfile} title="Select Username" back={false}/>
		<Scene key="Login" component={Login} title="Login"/>
		<Scene key="ForgotPassword" component={ForgotPassword} title="Forgot Password"/>
		 */
	}
}