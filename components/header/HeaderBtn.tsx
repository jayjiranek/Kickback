import { TouchableOpacity, Image } from "react-native";

import styles from "./headerbtn.style";

import { Ionicons } from "@expo/vector-icons";

import { COLORS } from "../../constants";

const ScreenHeaderBtn = ({ iconName, handlePress }) => {
  return (
    <TouchableOpacity style={styles.btnContainer} onPress={handlePress}>
      <Ionicons name={iconName} size={28} color={COLORS.tertiary} />
    </TouchableOpacity>
  );
};

export default ScreenHeaderBtn;
