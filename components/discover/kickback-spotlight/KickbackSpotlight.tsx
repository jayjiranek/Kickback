import { View, ScrollView, Dimensions, Animated } from "react-native";
import React from "react";
import { useState, useEffect } from "react";

import { graphqlOperation, API } from "aws-amplify";

import { listCategories } from "./CategoriesQuery";
import SpotlightGroupCard from "../../cards/discover/SpotlightGroupCard";

const OFFSET = 40;
const ITEM_WIDTH = Dimensions.get("window").width - OFFSET * 2;

const KickbackSpotlight = () => {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(false);

  const fetchCategories = async () => {
    setLoading(true);

    const response: any = await API.graphql(graphqlOperation(listCategories));

    console.log(response);
    const allCategories: any = response.data.listCategories.items;
    setCategories(allCategories);
    console.log(categories);
    setLoading(false);
  };

  useEffect(() => {
    fetchCategories();
  }, []);

  const scrollX = React.useRef(new Animated.Value(0)).current;
  return (
    <View>
      <ScrollView
        horizontal={true}
        decelerationRate={"normal"}
        snapToInterval={ITEM_WIDTH}
        bounces={false}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={12}
        disableIntervalMomentum
        onScroll={Animated.event(
          [{ nativeEvent: { contentOffset: { x: scrollX } } }],
          { useNativeDriver: false }
        )}
      >
        {categories.map((topic, idx) => {
          const inputRange = [
            (idx - 1) * ITEM_WIDTH,
            idx * ITEM_WIDTH,
            (idx + 1) * ITEM_WIDTH,
          ];

          const translate = scrollX.interpolate({
            inputRange,
            outputRange: [0.85, 1, 0.85],
          });

          const opacity = scrollX.interpolate({
            inputRange,
            outputRange: [0.5, 1, 0.5],
          });

          return (
            <Animated.View
              style={{
                width: ITEM_WIDTH,
                marginLeft: idx === 0 ? OFFSET : undefined,
                marginRight: idx === categories.length - 1 ? OFFSET : undefined,
                opacity: opacity,
                transform: [{ scale: translate }],
              }}
            >
              <SpotlightGroupCard topic={topic} />
            </Animated.View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default KickbackSpotlight;
