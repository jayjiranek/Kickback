/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateAttachment = /* GraphQL */ `
  subscription OnCreateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onCreateAttachment(filter: $filter) {
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
export const onUpdateAttachment = /* GraphQL */ `
  subscription OnUpdateAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onUpdateAttachment(filter: $filter) {
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
export const onDeleteAttachment = /* GraphQL */ `
  subscription OnDeleteAttachment(
    $filter: ModelSubscriptionAttachmentFilterInput
  ) {
    onDeleteAttachment(filter: $filter) {
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
export const onCreateChatRoomVote = /* GraphQL */ `
  subscription OnCreateChatRoomVote(
    $filter: ModelSubscriptionChatRoomVoteFilterInput
  ) {
    onCreateChatRoomVote(filter: $filter) {
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
export const onUpdateChatRoomVote = /* GraphQL */ `
  subscription OnUpdateChatRoomVote(
    $filter: ModelSubscriptionChatRoomVoteFilterInput
  ) {
    onUpdateChatRoomVote(filter: $filter) {
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
export const onDeleteChatRoomVote = /* GraphQL */ `
  subscription OnDeleteChatRoomVote(
    $filter: ModelSubscriptionChatRoomVoteFilterInput
  ) {
    onDeleteChatRoomVote(filter: $filter) {
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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateRoomTopic = /* GraphQL */ `
  subscription OnCreateRoomTopic(
    $filter: ModelSubscriptionRoomTopicFilterInput
  ) {
    onCreateRoomTopic(filter: $filter) {
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
export const onUpdateRoomTopic = /* GraphQL */ `
  subscription OnUpdateRoomTopic(
    $filter: ModelSubscriptionRoomTopicFilterInput
  ) {
    onUpdateRoomTopic(filter: $filter) {
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
export const onDeleteRoomTopic = /* GraphQL */ `
  subscription OnDeleteRoomTopic(
    $filter: ModelSubscriptionRoomTopicFilterInput
  ) {
    onDeleteRoomTopic(filter: $filter) {
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
export const onCreateChatRoom = /* GraphQL */ `
  subscription OnCreateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onCreateChatRoom(filter: $filter) {
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
export const onUpdateChatRoom = /* GraphQL */ `
  subscription OnUpdateChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onUpdateChatRoom(filter: $filter) {
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
export const onDeleteChatRoom = /* GraphQL */ `
  subscription OnDeleteChatRoom($filter: ModelSubscriptionChatRoomFilterInput) {
    onDeleteChatRoom(filter: $filter) {
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
export const onCreateMessage = /* GraphQL */ `
  subscription OnCreateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onCreateMessage(filter: $filter) {
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
export const onUpdateMessage = /* GraphQL */ `
  subscription OnUpdateMessage($filter: ModelSubscriptionMessageFilterInput) {
    onUpdateMessage(filter: $filter) {
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
export const onDeleteMessage = /* GraphQL */ `
  subscription OnDeleteMessage($filter: ModelSubscriptionMessageFilterInput) {
    onDeleteMessage(filter: $filter) {
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
export const onCreateUser = /* GraphQL */ `
  subscription OnCreateUser($filter: ModelSubscriptionUserFilterInput) {
    onCreateUser(filter: $filter) {
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
export const onUpdateUser = /* GraphQL */ `
  subscription OnUpdateUser($filter: ModelSubscriptionUserFilterInput) {
    onUpdateUser(filter: $filter) {
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
export const onDeleteUser = /* GraphQL */ `
  subscription OnDeleteUser($filter: ModelSubscriptionUserFilterInput) {
    onDeleteUser(filter: $filter) {
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
export const onCreateUserChatRoom = /* GraphQL */ `
  subscription OnCreateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onCreateUserChatRoom(filter: $filter) {
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
export const onUpdateUserChatRoom = /* GraphQL */ `
  subscription OnUpdateUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onUpdateUserChatRoom(filter: $filter) {
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
export const onDeleteUserChatRoom = /* GraphQL */ `
  subscription OnDeleteUserChatRoom(
    $filter: ModelSubscriptionUserChatRoomFilterInput
  ) {
    onDeleteUserChatRoom(filter: $filter) {
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
