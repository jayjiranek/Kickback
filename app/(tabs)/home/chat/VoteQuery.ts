export const listVotesByChatRoom = /* GraphQL */ `
  query ListVotesByChatRoom($chatroomID: ID!) {
    listVotesByChatRoom(chatroomID: $chatroomID) {
      items {
        id
        createdAt
        newChatImage
        newChatTitle
        numNoVotes
        numYesVotes
        numYesVotesNeeded
        voteType
        voteCreationUser {
          id
          profileImage
          username
        }
        userToBeRemoved {
          id
          username
        }
      }
    }
  }
`;
