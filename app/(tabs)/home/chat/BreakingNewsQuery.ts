export const listBreakingNewsAlertsByRoomTopic = /* GraphQL */ `
  query ListBreakingNewsAlertsByRoomTopic($roomtopicID: ID!) {
    listBreakingNewsAlertsByRoomTopic(roomtopicID: $roomtopicID) {
      items {
        id
        createdAt
        text
        articleLink
        roomtopicID
      }
    }
  }
`;
