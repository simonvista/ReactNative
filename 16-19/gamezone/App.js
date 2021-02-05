import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import { StyleSheet, Text, View } from "react-native";
import Home from "./screens/Home";
import * as Font from "expo-font";
import { AppLoading } from "expo";
import Navigator from "./routes/Drawer";

const getFonts = () =>
  Font.loadAsync({
    "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
    "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
  });
export default function App() {
  const [fontsLoaded, setFontsLoaded] = useState(false);
  return <Navigator />;
  /* if (!fontsLoaded) {
    return (
      <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
    );
  }
  return <Home />; */
}

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Home from "./screens/Home";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";
// import Navigator from "./routes/HomeStack";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });
// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);
//   return <Navigator />;
//   /* if (!fontsLoaded) {
//     return (
//       <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
//     );
//   }
//   return <Home />; */
// }

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, Text, View } from "react-native";
// import Home from "./screens/Home";
// import * as Font from "expo-font";
// import { AppLoading } from "expo";

// const getFonts = () =>
//   Font.loadAsync({
//     "nunito-regular": require("./assets/fonts/Nunito-Regular.ttf"),
//     "nunito-bold": require("./assets/fonts/Nunito-Bold.ttf"),
//   });
// export default function App() {
//   const [fontsLoaded, setFontsLoaded] = useState(false);
//   if (!fontsLoaded) {
//     return (
//       <AppLoading startAsync={getFonts} onFinish={() => setFontsLoaded(true)} />
//     );
//   }
//   return <Home />;
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });
