/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const createAttachment = /* GraphQL */ `
  mutation CreateAttachment(
    $input: CreateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    createAttachment(input: $input, condition: $condition) {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateAttachment = /* GraphQL */ `
  mutation UpdateAttachment(
    $input: UpdateAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    updateAttachment(input: $input, condition: $condition) {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteAttachment = /* GraphQL */ `
  mutation DeleteAttachment(
    $input: DeleteAttachmentInput!
    $condition: ModelAttachmentConditionInput
  ) {
    deleteAttachment(input: $input, condition: $condition) {
      id
      storageKey
      type
      width
      height
      duration
      messageID
      chatroomID
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChatRoomVote = /* GraphQL */ `
  mutation CreateChatRoomVote(
    $input: CreateChatRoomVoteInput!
    $condition: ModelChatRoomVoteConditionInput
  ) {
    createChatRoomVote(input: $input, condition: $condition) {
      id
      voteType
      createdAt
      expiresAt
      voteCreatedBy
      userToBeRemoved
      newChatTitle
      newChatImage
      numVotes
      numVotesNeeded
      chatroomID
      updatedAt
      __typename
    }
  }
`;
export const updateChatRoomVote = /* GraphQL */ `
  mutation UpdateChatRoomVote(
    $input: UpdateChatRoomVoteInput!
    $condition: ModelChatRoomVoteConditionInput
  ) {
    updateChatRoomVote(input: $input, condition: $condition) {
      id
      voteType
      createdAt
      expiresAt
      voteCreatedBy
      userToBeRemoved
      newChatTitle
      newChatImage
      numVotes
      numVotesNeeded
      chatroomID
      updatedAt
      __typename
    }
  }
`;
export const deleteChatRoomVote = /* GraphQL */ `
  mutation DeleteChatRoomVote(
    $input: DeleteChatRoomVoteInput!
    $condition: ModelChatRoomVoteConditionInput
  ) {
    deleteChatRoomVote(input: $input, condition: $condition) {
      id
      voteType
      createdAt
      expiresAt
      voteCreatedBy
      userToBeRemoved
      newChatTitle
      newChatImage
      numVotes
      numVotesNeeded
      chatroomID
      updatedAt
      __typename
    }
  }
`;
export const createCategory = /* GraphQL */ `
  mutation CreateCategory(
    $input: CreateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    createCategory(input: $input, condition: $condition) {
      id
      categoryName
      categoryShortDescription
      categoryLongDescription
      categoryAvatarImage
      categoryBannerImage
      RoomTopics {
        items {
          id
          topicName
          categoryID
          topicAvatarImage
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateCategory = /* GraphQL */ `
  mutation UpdateCategory(
    $input: UpdateCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    updateCategory(input: $input, condition: $condition) {
      id
      categoryName
      categoryShortDescription
      categoryLongDescription
      categoryAvatarImage
      categoryBannerImage
      RoomTopics {
        items {
          id
          topicName
          categoryID
          topicAvatarImage
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteCategory = /* GraphQL */ `
  mutation DeleteCategory(
    $input: DeleteCategoryInput!
    $condition: ModelCategoryConditionInput
  ) {
    deleteCategory(input: $input, condition: $condition) {
      id
      categoryName
      categoryShortDescription
      categoryLongDescription
      categoryAvatarImage
      categoryBannerImage
      RoomTopics {
        items {
          id
          topicName
          categoryID
          topicAvatarImage
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createRoomTopic = /* GraphQL */ `
  mutation CreateRoomTopic(
    $input: CreateRoomTopicInput!
    $condition: ModelRoomTopicConditionInput
  ) {
    createRoomTopic(input: $input, condition: $condition) {
      id
      topicName
      categoryID
      topicAvatarImage
      ChatRooms {
        items {
          id
          chatName
          chatImage
          numMembers
          maxNumMembers
          roomtopicID
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateRoomTopic = /* GraphQL */ `
  mutation UpdateRoomTopic(
    $input: UpdateRoomTopicInput!
    $condition: ModelRoomTopicConditionInput
  ) {
    updateRoomTopic(input: $input, condition: $condition) {
      id
      topicName
      categoryID
      topicAvatarImage
      ChatRooms {
        items {
          id
          chatName
          chatImage
          numMembers
          maxNumMembers
          roomtopicID
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteRoomTopic = /* GraphQL */ `
  mutation DeleteRoomTopic(
    $input: DeleteRoomTopicInput!
    $condition: ModelRoomTopicConditionInput
  ) {
    deleteRoomTopic(input: $input, condition: $condition) {
      id
      topicName
      categoryID
      topicAvatarImage
      ChatRooms {
        items {
          id
          chatName
          chatImage
          numMembers
          maxNumMembers
          roomtopicID
          createdAt
          updatedAt
          chatRoomLastMessageId
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createChatRoom = /* GraphQL */ `
  mutation CreateChatRoom(
    $input: CreateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    createChatRoom(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        createdAt
        userSenderID
        chatroomID
        images
        Attachments {
          nextToken
          __typename
        }
        updatedAt
        __typename
      }
      chatName
      chatImage
      numMembers
      maxNumMembers
      Messages {
        items {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      roomtopicID
      ChatRoomVotes {
        items {
          id
          voteType
          createdAt
          expiresAt
          voteCreatedBy
          userToBeRemoved
          newChatTitle
          newChatImage
          numVotes
          numVotesNeeded
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const updateChatRoom = /* GraphQL */ `
  mutation UpdateChatRoom(
    $input: UpdateChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    updateChatRoom(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        createdAt
        userSenderID
        chatroomID
        images
        Attachments {
          nextToken
          __typename
        }
        updatedAt
        __typename
      }
      chatName
      chatImage
      numMembers
      maxNumMembers
      Messages {
        items {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      roomtopicID
      ChatRoomVotes {
        items {
          id
          voteType
          createdAt
          expiresAt
          voteCreatedBy
          userToBeRemoved
          newChatTitle
          newChatImage
          numVotes
          numVotesNeeded
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const deleteChatRoom = /* GraphQL */ `
  mutation DeleteChatRoom(
    $input: DeleteChatRoomInput!
    $condition: ModelChatRoomConditionInput
  ) {
    deleteChatRoom(input: $input, condition: $condition) {
      id
      users {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      LastMessage {
        id
        text
        createdAt
        userSenderID
        chatroomID
        images
        Attachments {
          nextToken
          __typename
        }
        updatedAt
        __typename
      }
      chatName
      chatImage
      numMembers
      maxNumMembers
      Messages {
        items {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      roomtopicID
      ChatRoomVotes {
        items {
          id
          voteType
          createdAt
          expiresAt
          voteCreatedBy
          userToBeRemoved
          newChatTitle
          newChatImage
          numVotes
          numVotesNeeded
          chatroomID
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      chatRoomLastMessageId
      __typename
    }
  }
`;
export const createMessage = /* GraphQL */ `
  mutation CreateMessage(
    $input: CreateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    createMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      userSenderID
      chatroomID
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const updateMessage = /* GraphQL */ `
  mutation UpdateMessage(
    $input: UpdateMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    updateMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      userSenderID
      chatroomID
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const deleteMessage = /* GraphQL */ `
  mutation DeleteMessage(
    $input: DeleteMessageInput!
    $condition: ModelMessageConditionInput
  ) {
    deleteMessage(input: $input, condition: $condition) {
      id
      text
      createdAt
      userSenderID
      chatroomID
      images
      Attachments {
        items {
          id
          storageKey
          type
          width
          height
          duration
          messageID
          chatroomID
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      __typename
    }
  }
`;
export const createUser = /* GraphQL */ `
  mutation CreateUser(
    $input: CreateUserInput!
    $condition: ModelUserConditionInput
  ) {
    createUser(input: $input, condition: $condition) {
      id
      username
      profileImage
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Messages {
        items {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUser = /* GraphQL */ `
  mutation UpdateUser(
    $input: UpdateUserInput!
    $condition: ModelUserConditionInput
  ) {
    updateUser(input: $input, condition: $condition) {
      id
      username
      profileImage
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Messages {
        items {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUser = /* GraphQL */ `
  mutation DeleteUser(
    $input: DeleteUserInput!
    $condition: ModelUserConditionInput
  ) {
    deleteUser(input: $input, condition: $condition) {
      id
      username
      profileImage
      ChatRooms {
        items {
          id
          chatRoomId
          userId
          createdAt
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      Messages {
        items {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        nextToken
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const createUserChatRoom = /* GraphQL */ `
  mutation CreateUserChatRoom(
    $input: CreateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    createUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        chatName
        chatImage
        numMembers
        maxNumMembers
        Messages {
          nextToken
          __typename
        }
        roomtopicID
        ChatRoomVotes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        username
        profileImage
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const updateUserChatRoom = /* GraphQL */ `
  mutation UpdateUserChatRoom(
    $input: UpdateUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    updateUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        chatName
        chatImage
        numMembers
        maxNumMembers
        Messages {
          nextToken
          __typename
        }
        roomtopicID
        ChatRoomVotes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        username
        profileImage
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
export const deleteUserChatRoom = /* GraphQL */ `
  mutation DeleteUserChatRoom(
    $input: DeleteUserChatRoomInput!
    $condition: ModelUserChatRoomConditionInput
  ) {
    deleteUserChatRoom(input: $input, condition: $condition) {
      id
      chatRoomId
      userId
      chatRoom {
        id
        users {
          nextToken
          __typename
        }
        LastMessage {
          id
          text
          createdAt
          userSenderID
          chatroomID
          images
          updatedAt
          __typename
        }
        chatName
        chatImage
        numMembers
        maxNumMembers
        Messages {
          nextToken
          __typename
        }
        roomtopicID
        ChatRoomVotes {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        chatRoomLastMessageId
        __typename
      }
      user {
        id
        username
        profileImage
        ChatRooms {
          nextToken
          __typename
        }
        Messages {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      createdAt
      updatedAt
      __typename
    }
  }
`;
