import { View, FlatList, StyleSheet } from "react-native";

import RecommendedGroupCard from "../../cards/discover/RecommendedGroupCard";
import DiscoverSectionHeader from "../../header/DiscoverSectionHeader";

import { SIZES } from "../../../constants";

const RecommendedGroups = () => {
  const groupTopics = [
    [
      {
        topicId: "001",
        topicTitle: "technews",
        groupChatCount: "11.2k",
        groupTopicImage:
          "https://yt3.googleusercontent.com/ytc/APkrFKYJj0bxmPxP50p_xa3Rz6d7CUxQKH2ngzutpvxI=s900-c-k-c0x00ffffff-no-rj",
        groupTopicDescription:
          "Breaking news in technology and innovation. Stay informed and discuss new updates in tech.",
      },
      {
        topicId: "002",
        topicTitle: "sports",
        groupChatCount: "7.4k",
        groupTopicImage:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSeh5MWvNQYI8c-A-MpWfnrj7IPCcl3cZdwVA&usqp=CAU",
        groupTopicDescription:
          "Get the latest sports news and highlights. Discuss with sports fans from around the world.",
      },
    ],
    [
      {
        topicId: "003",
        topicTitle: "entertainment",
        groupChatCount: "2.2k",
        groupTopicImage:
          "https://media.istockphoto.com/id/1306125648/vector/pop-corn-isolated-on-yellowe-background-cinema-icon-in-flat-style.jpg?s=612x612&w=0&k=20&c=9J341sN7S2xZ69pmAasRl0pmDrgqjfP1HY2GEh6G1sY=",
        groupTopicDescription:
          "Stay up to date and discuss the latest happenings in the entertainment industry.",
      },
      {
        topicId: "004",
        topicTitle: "gaming",
        groupChatCount: "18.6k",
        groupTopicImage:
          "https://i.pinimg.com/474x/87/ab/bb/87abbbfb8cc12887f2c61fed39ecbe28.jpg",
        groupTopicDescription:
          "Meet and talk to passionate gamers from all around the world.",
      },
    ],
    [
      {
        topicId: "005",
        topicTitle: "orioles",
        groupChatCount: "782",
        groupTopicImage:
          "https://a.vsstatic.com/mobile/app/mlb/logos/thumbnail/baltimore-orioles-thumbnail.jpg",
        groupTopicDescription:
          "Stay up to date and discuss all things Baltimore Orioles.",
      },
      {
        topicId: "006",
        topicTitle: "tampa",
        groupChatCount: "217",
        groupTopicImage:
          "https://i.pinimg.com/474x/4d/73/7d/4d737d9e614e9e7135a2c559a750559b.jpg",
        groupTopicDescription:
          "Meet and talk to people from Tampa, FL. Share and discover hidden gems.",
      },
    ],
    [
      {
        topicId: "007",
        topicTitle: "pll",
        groupChatCount: "65",
        groupTopicImage:
          "https://premierlacrosseleague.com/wp-content/uploads/2019/03/PLL__Square_Logo_Social.png",
        groupTopicDescription:
          "Talk about all things about the Premier Lacrosse League.",
      },
      {
        topicId: "008",
        topicTitle: "golf",
        groupChatCount: "5.1k",
        groupTopicImage:
          "https://t4.ftcdn.net/jpg/02/65/37/85/360_F_265378502_ozkT6KiDeEOBWFnfMufqpKYC83GRMvc0.jpg",
        groupTopicDescription:
          "Give swing tips, share secrets, and all other things golf related.",
      },
    ],
  ];

  return (
    <View style={styles.container}>
      <DiscoverSectionHeader sectionTitle="Recommended Kicksbacks" />
      <FlatList
        data={groupTopics}
        horizontal
        showsHorizontalScrollIndicator={false}
        keyExtractor={(item) => item.topicId}
        renderItem={({ item }) => (
          <View style={styles.cardsContainer}>
            <RecommendedGroupCard topic={item[0]} />
            <RecommendedGroupCard topic={item[1]} />
          </View>
        )}
      />
    </View>
  );
};

export default RecommendedGroups;

const styles = StyleSheet.create({
  container: {
    width: "100%",
    marginVertical: SIZES.small,
  },
  cardsContainer: {
    marginTop: SIZES.xSmall,
  },
});
