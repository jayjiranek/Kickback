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
export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onCreateCategory(filter: $filter) {
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
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onUpdateCategory(filter: $filter) {
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
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory($filter: ModelSubscriptionCategoryFilterInput) {
    onDeleteCategory(filter: $filter) {
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
export const onCreateRoomTopic = /* GraphQL */ `
  subscription OnCreateRoomTopic(
    $filter: ModelSubscriptionRoomTopicFilterInput
  ) {
    onCreateRoomTopic(filter: $filter) {
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
export const onUpdateRoomTopic = /* GraphQL */ `
  subscription OnUpdateRoomTopic(
    $filter: ModelSubscriptionRoomTopicFilterInput
  ) {
    onUpdateRoomTopic(filter: $filter) {
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
export const onDeleteRoomTopic = /* GraphQL */ `
  subscription OnDeleteRoomTopic(
    $filter: ModelSubscriptionRoomTopicFilterInput
  ) {
    onDeleteRoomTopic(filter: $filter) {
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
export const onCreateBreakingNewAlert = /* GraphQL */ `
  subscription OnCreateBreakingNewAlert(
    $filter: ModelSubscriptionBreakingNewAlertFilterInput
  ) {
    onCreateBreakingNewAlert(filter: $filter) {
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
export const onUpdateBreakingNewAlert = /* GraphQL */ `
  subscription OnUpdateBreakingNewAlert(
    $filter: ModelSubscriptionBreakingNewAlertFilterInput
  ) {
    onUpdateBreakingNewAlert(filter: $filter) {
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
export const onDeleteBreakingNewAlert = /* GraphQL */ `
  subscription OnDeleteBreakingNewAlert(
    $filter: ModelSubscriptionBreakingNewAlertFilterInput
  ) {
    onDeleteBreakingNewAlert(filter: $filter) {
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
export const onCreateVote = /* GraphQL */ `
  subscription OnCreateVote($filter: ModelSubscriptionVoteFilterInput) {
    onCreateVote(filter: $filter) {
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
export const onUpdateVote = /* GraphQL */ `
  subscription OnUpdateVote($filter: ModelSubscriptionVoteFilterInput) {
    onUpdateVote(filter: $filter) {
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
export const onDeleteVote = /* GraphQL */ `
  subscription OnDeleteVote($filter: ModelSubscriptionVoteFilterInput) {
    onDeleteVote(filter: $filter) {
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
export const onCreateUserVote = /* GraphQL */ `
  subscription OnCreateUserVote($filter: ModelSubscriptionUserVoteFilterInput) {
    onCreateUserVote(filter: $filter) {
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
export const onUpdateUserVote = /* GraphQL */ `
  subscription OnUpdateUserVote($filter: ModelSubscriptionUserVoteFilterInput) {
    onUpdateUserVote(filter: $filter) {
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
export const onDeleteUserVote = /* GraphQL */ `
  subscription OnDeleteUserVote($filter: ModelSubscriptionUserVoteFilterInput) {
    onDeleteUserVote(filter: $filter) {
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
export const onCreateUserChatActivity = /* GraphQL */ `
  subscription OnCreateUserChatActivity(
    $filter: ModelSubscriptionUserChatActivityFilterInput
  ) {
    onCreateUserChatActivity(filter: $filter) {
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
export const onUpdateUserChatActivity = /* GraphQL */ `
  subscription OnUpdateUserChatActivity(
    $filter: ModelSubscriptionUserChatActivityFilterInput
  ) {
    onUpdateUserChatActivity(filter: $filter) {
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
export const onDeleteUserChatActivity = /* GraphQL */ `
  subscription OnDeleteUserChatActivity(
    $filter: ModelSubscriptionUserChatActivityFilterInput
  ) {
    onDeleteUserChatActivity(filter: $filter) {
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
