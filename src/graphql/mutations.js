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
      categoryGroupsCount
      RoomTopics {
        items {
          id
          topicName
          categoryID
          topicAvatarImage
          topicDescription
          defaultTopicChatName
          countGroupsNumber
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
      categoryGroupsCount
      RoomTopics {
        items {
          id
          topicName
          categoryID
          topicAvatarImage
          topicDescription
          defaultTopicChatName
          countGroupsNumber
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
      categoryGroupsCount
      RoomTopics {
        items {
          id
          topicName
          categoryID
          topicAvatarImage
          topicDescription
          defaultTopicChatName
          countGroupsNumber
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
      topicDescription
      defaultTopicChatName
      countGroupsNumber
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
      BreakingNewsAlerts {
        items {
          id
          text
          createdAt
          articleLink
          roomtopicID
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
      topicDescription
      defaultTopicChatName
      countGroupsNumber
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
      BreakingNewsAlerts {
        items {
          id
          text
          createdAt
          articleLink
          roomtopicID
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
      topicDescription
      defaultTopicChatName
      countGroupsNumber
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
      BreakingNewsAlerts {
        items {
          id
          text
          createdAt
          articleLink
          roomtopicID
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
      UserActivity {
        items {
          id
          createdAt
          chatroomID
          activityType
          updatedAt
          userChatActivityUserIDId
          __typename
        }
        nextToken
        __typename
      }
      roomtopicID
      Votes {
        items {
          id
          voteType
          createdAt
          expiresAt
          newChatTitle
          newChatImage
          numYesVotesNeeded
          numYesVotes
          numNoVotes
          chatroomID
          updatedAt
          voteVoteCreationUserId
          voteUserToBeRemovedId
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
      UserActivity {
        items {
          id
          createdAt
          chatroomID
          activityType
          updatedAt
          userChatActivityUserIDId
          __typename
        }
        nextToken
        __typename
      }
      roomtopicID
      Votes {
        items {
          id
          voteType
          createdAt
          expiresAt
          newChatTitle
          newChatImage
          numYesVotesNeeded
          numYesVotes
          numNoVotes
          chatroomID
          updatedAt
          voteVoteCreationUserId
          voteUserToBeRemovedId
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
      UserActivity {
        items {
          id
          createdAt
          chatroomID
          activityType
          updatedAt
          userChatActivityUserIDId
          __typename
        }
        nextToken
        __typename
      }
      roomtopicID
      Votes {
        items {
          id
          voteType
          createdAt
          expiresAt
          newChatTitle
          newChatImage
          numYesVotesNeeded
          numYesVotes
          numNoVotes
          chatroomID
          updatedAt
          voteVoteCreationUserId
          voteUserToBeRemovedId
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
export const createBreakingNewAlert = /* GraphQL */ `
  mutation CreateBreakingNewAlert(
    $input: CreateBreakingNewAlertInput!
    $condition: ModelBreakingNewAlertConditionInput
  ) {
    createBreakingNewAlert(input: $input, condition: $condition) {
      id
      text
      createdAt
      articleLink
      roomtopicID
      updatedAt
      __typename
    }
  }
`;
export const updateBreakingNewAlert = /* GraphQL */ `
  mutation UpdateBreakingNewAlert(
    $input: UpdateBreakingNewAlertInput!
    $condition: ModelBreakingNewAlertConditionInput
  ) {
    updateBreakingNewAlert(input: $input, condition: $condition) {
      id
      text
      createdAt
      articleLink
      roomtopicID
      updatedAt
      __typename
    }
  }
`;
export const deleteBreakingNewAlert = /* GraphQL */ `
  mutation DeleteBreakingNewAlert(
    $input: DeleteBreakingNewAlertInput!
    $condition: ModelBreakingNewAlertConditionInput
  ) {
    deleteBreakingNewAlert(input: $input, condition: $condition) {
      id
      text
      createdAt
      articleLink
      roomtopicID
      updatedAt
      __typename
    }
  }
`;
export const createVote = /* GraphQL */ `
  mutation CreateVote(
    $input: CreateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    createVote(input: $input, condition: $condition) {
      id
      voteType
      createdAt
      expiresAt
      voteCreationUser {
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
      userToBeRemoved {
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
      newChatTitle
      newChatImage
      numYesVotesNeeded
      numYesVotes
      numNoVotes
      chatroomID
      userVotes {
        items {
          id
          createdAt
          voteID
          userVoteDecision
          updatedAt
          userVoteUserVoterIDId
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      voteVoteCreationUserId
      voteUserToBeRemovedId
      __typename
    }
  }
`;
export const updateVote = /* GraphQL */ `
  mutation UpdateVote(
    $input: UpdateVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    updateVote(input: $input, condition: $condition) {
      id
      voteType
      createdAt
      expiresAt
      voteCreationUser {
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
      userToBeRemoved {
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
      newChatTitle
      newChatImage
      numYesVotesNeeded
      numYesVotes
      numNoVotes
      chatroomID
      userVotes {
        items {
          id
          createdAt
          voteID
          userVoteDecision
          updatedAt
          userVoteUserVoterIDId
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      voteVoteCreationUserId
      voteUserToBeRemovedId
      __typename
    }
  }
`;
export const deleteVote = /* GraphQL */ `
  mutation DeleteVote(
    $input: DeleteVoteInput!
    $condition: ModelVoteConditionInput
  ) {
    deleteVote(input: $input, condition: $condition) {
      id
      voteType
      createdAt
      expiresAt
      voteCreationUser {
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
      userToBeRemoved {
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
      newChatTitle
      newChatImage
      numYesVotesNeeded
      numYesVotes
      numNoVotes
      chatroomID
      userVotes {
        items {
          id
          createdAt
          voteID
          userVoteDecision
          updatedAt
          userVoteUserVoterIDId
          __typename
        }
        nextToken
        __typename
      }
      updatedAt
      voteVoteCreationUserId
      voteUserToBeRemovedId
      __typename
    }
  }
`;
export const createUserVote = /* GraphQL */ `
  mutation CreateUserVote(
    $input: CreateUserVoteInput!
    $condition: ModelUserVoteConditionInput
  ) {
    createUserVote(input: $input, condition: $condition) {
      id
      createdAt
      voteID
      userVoteDecision
      userVoterID {
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
      updatedAt
      userVoteUserVoterIDId
      __typename
    }
  }
`;
export const updateUserVote = /* GraphQL */ `
  mutation UpdateUserVote(
    $input: UpdateUserVoteInput!
    $condition: ModelUserVoteConditionInput
  ) {
    updateUserVote(input: $input, condition: $condition) {
      id
      createdAt
      voteID
      userVoteDecision
      userVoterID {
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
      updatedAt
      userVoteUserVoterIDId
      __typename
    }
  }
`;
export const deleteUserVote = /* GraphQL */ `
  mutation DeleteUserVote(
    $input: DeleteUserVoteInput!
    $condition: ModelUserVoteConditionInput
  ) {
    deleteUserVote(input: $input, condition: $condition) {
      id
      createdAt
      voteID
      userVoteDecision
      userVoterID {
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
      updatedAt
      userVoteUserVoterIDId
      __typename
    }
  }
`;
export const createUserChatActivity = /* GraphQL */ `
  mutation CreateUserChatActivity(
    $input: CreateUserChatActivityInput!
    $condition: ModelUserChatActivityConditionInput
  ) {
    createUserChatActivity(input: $input, condition: $condition) {
      id
      createdAt
      chatroomID
      userID {
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
      activityType
      updatedAt
      userChatActivityUserIDId
      __typename
    }
  }
`;
export const updateUserChatActivity = /* GraphQL */ `
  mutation UpdateUserChatActivity(
    $input: UpdateUserChatActivityInput!
    $condition: ModelUserChatActivityConditionInput
  ) {
    updateUserChatActivity(input: $input, condition: $condition) {
      id
      createdAt
      chatroomID
      userID {
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
      activityType
      updatedAt
      userChatActivityUserIDId
      __typename
    }
  }
`;
export const deleteUserChatActivity = /* GraphQL */ `
  mutation DeleteUserChatActivity(
    $input: DeleteUserChatActivityInput!
    $condition: ModelUserChatActivityConditionInput
  ) {
    deleteUserChatActivity(input: $input, condition: $condition) {
      id
      createdAt
      chatroomID
      userID {
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
      activityType
      updatedAt
      userChatActivityUserIDId
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
        UserActivity {
          nextToken
          __typename
        }
        roomtopicID
        Votes {
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
        UserActivity {
          nextToken
          __typename
        }
        roomtopicID
        Votes {
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
        UserActivity {
          nextToken
          __typename
        }
        roomtopicID
        Votes {
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
