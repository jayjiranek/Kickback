import { COLORS } from "../../../constants";

//icons
import { MaterialCommunityIcons } from "@expo/vector-icons";

const ChatNotificationsIcon = ({ numUnreadMessages }) => {
  if (numUnreadMessages === 0) {
    return null;
  } else if (numUnreadMessages > 0 && numUnreadMessages < 10) {
    return (
      <MaterialCommunityIcons
        name={`numeric-${numUnreadMessages}-circle`}
        size={24}
        color={COLORS.primary}
      />
    );
  } else {
    return (
      <MaterialCommunityIcons
        name="numeric-9-plus-circle"
        size={24}
        color={COLORS.primary}
      />
    );
  }
};

export default ChatNotificationsIcon;
