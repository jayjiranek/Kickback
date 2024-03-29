export const listChatRooms = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      ChatRooms {
        items {
          chatRoom {
            id
            roomtopicID
            chatName
            chatImage
            updatedAt
            users {
              items {
                user {
                  profileImage
                  username
                }
              }
            }
            LastMessage {
              id
              createdAt
              text
            }
          }
        }
      }
    }
  }
`;
