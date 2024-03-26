export const listChatRoomsByRoomTopic = /* GraphQL */ `
  query ChatRoomsByRoomTopic($roomtopicID: ID!) {
    listChatRooms(filter: { roomtopicID: { eq: $roomtopicID } }) {
      items {
        id
        chatImage
        chatName
        numMembers
        maxNumMembers
      }
    }
  }
`;
