import React, { useState } from "react";
import {
  StyleSheet,
  View,
  Text,
  FlatList,
  Alert,
  TouchableWithoutFeedback,
  Keyboard,
} from "react-native";
import AddTodo from "./components/AddTodo";
import Header from "./components/Header";
import Sandbox from "./components/Sandbox";
import TodoItem from "./components/TodoItem";

export default function App() {
  const [todos, setTodos] = useState([
    { text: "buy coffee", key: "1" },
    { text: "create an app", key: "2" },
    { text: "play on the switch", key: "3" },
  ]);
  const pressHandler = (id) => {
    setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != id));
  };
  const submitHandler = (text) => {
    if (text.length > 3) {
      setTodos((prevTodos) => [
        ...prevTodos,
        { text, key: (prevTodos.length + 1).toString() },
      ]);
    } else {
      Alert.alert("Invalid Input", "At least FOUR characters long", [
        { text: "Got It", onPress: () => console.log("Alert Closed") },
      ]);
    }
  };
  return (
    <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        {/* header */}
        <Header />
        <View style={styles.content}>
          {/* todo form */}
          <AddTodo submitHandler={submitHandler} />
          <View style={styles.list}>
            <FlatList
              data={todos}
              renderItem={({ item }) => (
                <TodoItem item={item} pressHandler={pressHandler} />
              )}
            />
          </View>
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  content: {
    flex: 1,
    padding: 40,
    // backgroundColor: "pink",
  },
  list: {
    flex: 1,
    marginTop: 20,
    // backgroundColor: "yellow",
  },
});

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   FlatList,
//   Alert,
//   TouchableWithoutFeedback,
//   Keyboard,
// } from "react-native";
// import AddTodo from "./components/AddTodo";
// import Header from "./components/Header";
// import TodoItem from "./components/TodoItem";

// export default function App() {
//   const [todos, setTodos] = useState([
//     { text: "buy coffee", key: "1" },
//     { text: "create an app", key: "2" },
//     { text: "play on the switch", key: "3" },
//   ]);
//   const pressHandler = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != id));
//   };
//   const submitHandler = (text) => {
//     if (text.length > 3) {
//       setTodos((prevTodos) => [
//         ...prevTodos,
//         { text, key: (prevTodos.length + 1).toString() },
//       ]);
//     } else {
//       Alert.alert("Invalid Input", "At least FOUR characters long", [
//         { text: "Got It", onPress: () => console.log("Alert Closed") },
//       ]);
//     }
//   };
//   return (
//     <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
//       <View style={styles.container}>
//         {/* header */}
//         <Header />
//         <View style={styles.content}>
//           {/* todo form */}
//           <AddTodo submitHandler={submitHandler} />
//           <View style={styles.list}>
//             <FlatList
//               data={todos}
//               renderItem={({ item }) => (
//                 <TodoItem item={item} pressHandler={pressHandler} />
//               )}
//             />
//           </View>
//         </View>
//       </View>
//     </TouchableWithoutFeedback>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     padding: 40,
//   },
//   list: {
//     marginTop: 20,
//   },
// });

// import React, { useState } from "react";
// import { StyleSheet, View, Text, FlatList } from "react-native";
// import Header from "./components/Header";
// import TodoItem from "./components/TodoItem";

// export default function App() {
//   const [todos, setTodos] = useState([
//     { text: "buy coffee", key: "1" },
//     { text: "create an app", key: "2" },
//     { text: "play on the switch", key: "3" },
//   ]);
//   const pressHandler = (id) => {
//     setTodos((prevTodos) => prevTodos.filter((todo) => todo.key != id));
//   };
//   return (
//     <View style={styles.container}>
//       {/* header */}
//       <Header />
//       <View style={styles.content}>
//         {/* todo form */}
//         <View style={styles.list}>
//           <FlatList
//             data={todos}
//             renderItem={({ item }) => (
//               <TodoItem item={item} pressHandler={pressHandler} />
//             )}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     padding: 40,
//   },
//   list: {
//     marginTop: 20,
//   },
// });

// import React, { useState } from "react";
// import { StyleSheet, View, Text, FlatList } from "react-native";
// import Header from "./components/Header";

// export default function App() {
//   const [todos, setTodos] = useState([
//     { text: "buy coffee", key: "1" },
//     { text: "create an app", key: "2" },
//     { text: "play on the switch", key: "3" },
//   ]);
//   return (
//     <View style={styles.container}>
//       {/* header */}
//       <Header />
//       <View style={styles.content}>
//         {/* todo form */}
//         <View style={styles.list}>
//           <FlatList
//             data={todos}
//             renderItem={({ item }) => <Text>{item.text} </Text>}
//           />
//         </View>
//       </View>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//   },
//   content: {
//     padding: 40,
//   },
//   list: {
//     marginTop: 20,
//   },
// });

// import React, { useState } from "react";
// import {
//   StyleSheet,
//   View,
//   Text,
//   FlatList,
//   TouchableOpacity,
// } from "react-native";

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "shaun", id: "1" },
//     { name: "yoshi", id: "2" },
//     { name: "mario", id: "3" },
//     { name: "luigi", id: "4" },
//     { name: "peach", id: "5" },
//     { name: "toad", id: "6" },
//     { name: "bowser", id: "7" },
//   ]);
//   const pressHandler = (id) => {
//     console.log(id);
//     setPeople((prevPeople) => {
//       return prevPeople.filter((person) => person.id != id);
//     });
//   };
//   return (
//     <View style={styles.container}>
//       <FlatList
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <TouchableOpacity onPress={() => pressHandler(item.id)}>
//             <Text style={styles.item}>{item.name} </Text>
//           </TouchableOpacity>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop: 24,
//   },
// });

// import React, { useState } from "react";
// import { StyleSheet, View, Text, FlatList } from "react-native";

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "shaun", id: "1" },
//     { name: "yoshi", id: "2" },
//     { name: "mario", id: "3" },
//     { name: "luigi", id: "4" },
//     { name: "peach", id: "5" },
//     { name: "toad", id: "6" },
//     { name: "bowser", id: "7" },
//   ]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         numColumns={2}
//         keyExtractor={(item) => item.id}
//         data={people}
//         renderItem={({ item }) => (
//           <View>
//             <Text style={styles.item}>{item.name} </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//     marginHorizontal: 10,
//     marginTop: 24,
//   },
// });

// import React, { useState } from "react";
// import { StyleSheet, View, Text, FlatList } from "react-native";

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "shaun", key: "1" },
//     { name: "yoshi", key: "2" },
//     { name: "mario", key: "3" },
//     { name: "luigi", key: "4" },
//     { name: "peach", key: "5" },
//     { name: "toad", key: "6" },
//     { name: "bowser", key: "7" },
//   ]);

//   return (
//     <View style={styles.container}>
//       <FlatList
//         data={people}
//         renderItem={({ item }) => (
//           <View>
//             <Text style={styles.item}>{item.name} </Text>
//           </View>
//         )}
//       />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//   },
// });

// import React, { useState } from "react";
// import { StyleSheet, View, TextInput, Text, FlatList } from "react-native";

// export default function App() {
//   const [people, setPeople] = useState([
//     { name: "shaun", key: "1" },
//     { name: "yoshi", key: "2" },
//     { name: "mario", key: "3" },
//     { name: "luigi", key: "4" },
//     { name: "peach", key: "5" },
//     { name: "toad", key: "6" },
//     { name: "bowser", key: "7" },
//   ]);

//   return (
//     <View style={styles.container}>
//       <FlatList>
//         {people.map((item) => (
//           <View key={item.key}>
//             <Text style={styles.item}>{item.name} </Text>
//           </View>
//         ))}
//       </FlatList>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     paddingTop: 40,
//     paddingHorizontal: 20,
//     // alignItems: "center",
//     // justifyContent: "center",
//   },
//   item: {
//     marginTop: 24,
//     padding: 30,
//     backgroundColor: "pink",
//     fontSize: 24,
//   },
// });

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { StyleSheet, View, TextInput, Text } from "react-native";

// export default function App() {
//   const [name, setName] = useState("shaun");
//   const [age, setAge] = useState("30");

//   return (
//     <View style={styles.container}>
//       <Text>Enter Name:</Text>
//       <TextInput
//         multiline
//         style={styles.input}
//         placeholder="your name"
//         onChangeText={(newName) => setName(newName)}
//       />
//       <Text>Enter Age:</Text>
//       <TextInput
//         keyboardType="numeric"
//         style={styles.input}
//         placeholder="your age"
//         onChangeText={(newAge) => setAge(newAge)}
//       />
//       <Text>
//         name: {name}, age: {age}
//       </Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   input: {
//     borderWkeyth: 1,
//     borderColor: "#777",
//     padding: 8,
//     margin: 10,
//     wkeyth: 200,
//   },
// });

// import { StatusBar } from "expo-status-bar";
// import React, { useState } from "react";
// import { Button, StyleSheet, Text, View } from "react-native";

// export default function App() {
//   const [name, setName] = useState("shaun");
//   const [person, setPerson] = useState({ name: "marion", age: 40 });
//   const clickHandler = () => {
//     setName("chun-li");
//     setPerson({ name: "luigi", age: 35 });
//   };
//   return (
//     <View style={styles.container}>
//       <Text>Name: {name} </Text>
//       <Text>
//         Person Info: | name: {person.name}, age: {person.age}
//       </Text>
//       {/* Button doesn't have style so need to be surrended by View */}
//       <View style={styles.buttonContainer}>
//         <Button title="update name" onPress={clickHandler} />
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   buttonContainer: {
//     marginTop: 20,
//   },
// });

// import { StatusBar } from "expo-status-bar";
// import React from "react";
// import { StyleSheet, Text, View } from "react-native";

// export default function App() {
//   return (
//     <View style={styles.container}>
//       <View style={styles.header}>
//         <Text style={styles.boldText}>Hello World</Text>
//       </View>
//       {/* View-Text no style inherit. Text-Text yes style inherit */}
//       <View style={styles.body}>
//         <Text style={styles.boldText}>
//           Lorem ipsum <Text>dolor sit</Text> met.
//         </Text>
//         <Text>Lorem ipsum dolor sit amet.</Text>
//         <Text>Lorem ipsum dolor sit amet.</Text>
//       </View>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: "#fff",
//     alignItems: "center",
//     justifyContent: "center",
//   },
//   header: {
//     backgroundColor: "pink",
//     padding: 20,
//   },
//   boldText: {
//     fontWeight: "bold",
//   },
//   body: {
//     backgroundColor: "yellow",
//     padding: 20,
//     fontWeight: "bold",
//   },
// });
