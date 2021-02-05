import { createStackNavigator } from "react-navigation-stack";
import About from "../screens/About";

const screens = {
  About: {
    screen: About,
    navigationOptions:{
        title:''
    }
  },
};
const AboutStack = createStackNavigator(screens);

export default AboutStack;
