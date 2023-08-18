import { View, Text, TouchableOpacity, Image } from 'react-native';
import styles from './styles';
import { colors } from "../../globalStyles"

const icons = [
  require("../../assets/homeIcon.png"),
  require("../../assets/agendaIcon.png"),
  require("../../assets/businessIcon.png")
]

const TabBar = ({ state, descriptors, navigation }) => {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
              ? options.title
              : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: 'tabPress',
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: 'tabLongPress',
            target: route.key,
          });
        };

        return (
          <TouchableOpacity
            key={index}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={styles.tabItem}
          >

            <View
              style={[styles.overlay, isFocused && { backgroundColor: `${colors.yellow}80` }]}
            >
              <Image
                source={icons[index]}
                style={styles.icon}
              />
              <Text style={styles.label} >
                {label}
              </Text>
            </View>

          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default TabBar

