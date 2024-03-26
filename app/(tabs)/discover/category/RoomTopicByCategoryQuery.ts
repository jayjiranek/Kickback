export const listRoomTopicsByCategory = /* GraphQL */ `
  query RoomTopicsByCategoryID($categoryID: ID!) {
    roomTopicsByCategoryID(categoryID: $categoryID) {
      items {
        id
        topicName
        topicDescription
        topicAvatarImage
        countGroupsNumber
      }
    }
  }
`;
