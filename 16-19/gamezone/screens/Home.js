import React, { useState } from "react";
import { Button, StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { FlatList } from "react-native-gesture-handler";
import { globalStyles } from "../styles/global";

export default function Home({ navigation }) {
  const [reviews, setReviews] = useState([
    {
      title: "Zelda, Breath of Fresh Air",
      rating: 5,
      body: "lorem ipsum",
      key: "1",
    },
    {
      title: "Gotta Catch Them All (again)",
      rating: 4,
      body: "lorem ipsum",
      key: "2",
    },
    {
      title: 'Not So "Final" Fantasy',
      rating: 3,
      body: "lorem ipsum",
      key: "3",
    },
  ]);
  return (
    <View style={globalStyles.container}>
      <FlatList
        data={reviews}
        renderItem={({ item }) => (
          <TouchableOpacity
            onPress={() => navigation.navigate("ReviewDetails", item)}
          >
            <Text style={globalStyles.titleText}>{item.title}</Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
}

// import React from "react";
// import { Button, StyleSheet, Text, View } from "react-native";
// import { globalStyles } from "../styles/global";

// export default function Home({ navigation }) {
//   const pressHandler = () => {
//     // navigation.push("ReviewDetails");
//     navigation.navigate("ReviewDetails");
//   };
//   return (
//     <View style={globalStyles.container}>
//       <Text style={globalStyles.titleText}>Home</Text>
//       <Button title="Show Review Details" onPress={pressHandler} />
//     </View>
//   );
// }

// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function Home() {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.titleText}>Home</Text>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     padding: 24,
//   },
//   titleText: {
//     fontFamily: "nunito-bold",
//     fontSize: 18,
//   },
// });
