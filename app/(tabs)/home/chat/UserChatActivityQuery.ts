export const listUserActivityByChatRoom = /* GraphQL */ `
  query ListUserActivityByChatRoom($chatroomID: ID!) {
    listUserActivityByChatRoom(chatroomID: $chatroomID) {
      items {
        activityType
        id
        createdAt
        userID {
          username
        }
      }
    }
  }
`;
