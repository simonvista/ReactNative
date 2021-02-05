import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import Home from "../screens/Home";
import ReviewDetails from "../screens/ReviewDetails";

const screens = {
  Home: {
    screen: Home,
  },
  ReviewDetails: {
    screen: ReviewDetails,
  },
};
const HomeStack = createStackNavigator(screens);

export default HomeStack;
// export default createAppContainer(HomeStack);

// import { createStackNavigator } from "react-navigation-stack";
// import { createAppContainer } from "react-navigation";
// import Home from "../screens/Home";
// import ReviewDetails from "../screens/ReviewDetails";

// const screens = {
//   Home: {
//     screen: Home,
//   },
//   ReviewDetails: {
//     screen: ReviewDetails,
//   },
// };
// const HomeStack = createStackNavigator(screens);

// // const screens = {
// //   Home: {
// //     screen: Home,
// //     navigationOptions: {
// //       title: "GameZone",
// //       headerStyle: { backgroundColor: "#333" },
// //     },
// //   },
// //   ReviewDetails: {
// //     screen: ReviewDetails,
// //     navigationOptions: {
// //       title: "Review Details",
// //       //   headerStyle: { beckgroundColor: "#eee" },
// //     },
// //   },
// // };
// // const HomeStack = createStackNavigator(screens, {
// //   defaultNavigationOptions: {
// //     headerTintColor:'#444',
// //     headerStyle: { beckgroundColor: "#eee",height:60 },
// //   },
// // });

// export default createAppContainer(HomeStack);
