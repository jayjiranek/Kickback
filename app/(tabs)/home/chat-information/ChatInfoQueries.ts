export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
      chatImage
      chatName
      createdAt
      maxNumMembers
      numMembers
      users(limit: 20) {
        items {
          user {
            id
            profileImage
            username
          }
        }
      }
      Votes(limit: 20) {
        items {
          id
          voteType
          createdAt
          newChatTitle
          newChatImage
        }
      }
    }
  }
`;
