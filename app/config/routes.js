import React from 'react';
import {
	Actions,
	Scene,
	Router,
	ActionConst,
	Stack,
	Drawer,
	Modal,
	Tabs
} from 'react-native-router-flux';
import SplashScreen from 'react-native-splash-screen';

import { Alert } from 'react-native';
// Components
// import Splash from '../components/Splash/Splash';
import DrawerContent from '../components/Drawer/Drawer';
import DrawerOpenIcon from '../assets/ui/drawer-open.png';

//Authentication Scenes
import Welcome from '../modules/auth/scenes/Welcome/index';
// import Register from '../modules/auth/scenes/Register/index';
// import CompleteProfile from '../modules/auth/scenes/CompleteProfile/index';
import Login from '../modules/auth/scenes/Login/index';
// import ForgotPassword from '../modules/auth/scenes/ForgotPassword/index';
import Home from '../modules/home/scenes/Home/index';
import Page from '../modules/home/scenes/Page/index';
import Speaker from '../components/Speaker/index';

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
			// Actions.Home();
			SplashScreen.hide();
		}));
	}

	render() {
		if(!this.state.isReady) {
			return false; // <Splash/>
		}

		return (
			<Router>
				<Modal key="modal" hideNavBar>
					<Scene key="root" hideNavBar
								 navigationBarStyle={{ backgroundColor: "#fff" }}
								 titleStyle={navTitleStyle}
								 backButtonTintColor={color.black}>
						<Stack key="Auth" initial={!this.state.isLoggedIn}>
							<Scene key="Welcome" component={Welcome} title="" initial={true} hideNavBar/>
						</Stack>
	
						<Stack key="Main" initial={this.state.isLoggedIn}>
							<Scene key="Home" component={Home} title="Home" initial={true}
										 type={ActionConst.PUSH}
										 /*drawer={true}*/
										 drawerPosition="right"
							/>
							<Drawer hideNavBar key="Drawer" drawerPosition="right" drawerImage={DrawerOpenIcon} contentComponent={DrawerContent}>
								<Scene key="Item1" back={true} onBack={() => Actions.pop()} component={Page} title="Item #1" />
								<Scene key="Item2" back={true} onBack={() => Actions.pop()} component={Page} title="Item #2" />
								<Scene key="Item3" back={true} onBack={() => Actions.pop()} component={Page} title="Item #3" />
							</Drawer>
							
							<Scene key="Speakers" component={Page} title="Speakers"
										 type={ActionConst.JUMP}
										 back={true} backTitle="Retour" onBack={() => Actions.pop() }
							/>
							<Scene key="Team" component={Page} title="L'équipe"
										 type={ActionConst.JUMP}
										 back={true} backTitle="Retour" onBack={() => Actions.pop() }
							/>
						</Stack>
					</Scene>
					
					<Scene back={true} key="Speaker" title="Speaker detail" component={Speaker} />
					
				</Modal>
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