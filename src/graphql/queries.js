/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const getAttachment = /* GraphQL */ `
  query GetAttachment($id: ID!) {
    getAttachment(id: $id) {
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
export const listAttachments = /* GraphQL */ `
  query ListAttachments(
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listAttachments(filter: $filter, limit: $limit, nextToken: $nextToken) {
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
  }
`;
export const attachmentsByMessageID = /* GraphQL */ `
  query AttachmentsByMessageID(
    $messageID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByMessageID(
      messageID: $messageID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const attachmentsByChatroomID = /* GraphQL */ `
  query AttachmentsByChatroomID(
    $chatroomID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelAttachmentFilterInput
    $limit: Int
    $nextToken: String
  ) {
    attachmentsByChatroomID(
      chatroomID: $chatroomID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getCategory = /* GraphQL */ `
  query GetCategory($id: ID!) {
    getCategory(id: $id) {
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
export const listCategories = /* GraphQL */ `
  query ListCategories(
    $filter: ModelCategoryFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listCategories(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        categoryName
        categoryShortDescription
        categoryLongDescription
        categoryAvatarImage
        categoryBannerImage
        categoryGroupsCount
        RoomTopics {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getRoomTopic = /* GraphQL */ `
  query GetRoomTopic($id: ID!) {
    getRoomTopic(id: $id) {
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
export const listRoomTopics = /* GraphQL */ `
  query ListRoomTopics(
    $filter: ModelRoomTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listRoomTopics(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        topicName
        categoryID
        topicAvatarImage
        topicDescription
        defaultTopicChatName
        countGroupsNumber
        ChatRooms {
          nextToken
          __typename
        }
        BreakingNewsAlerts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const roomTopicsByCategoryID = /* GraphQL */ `
  query RoomTopicsByCategoryID(
    $categoryID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelRoomTopicFilterInput
    $limit: Int
    $nextToken: String
  ) {
    roomTopicsByCategoryID(
      categoryID: $categoryID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        topicName
        categoryID
        topicAvatarImage
        topicDescription
        defaultTopicChatName
        countGroupsNumber
        ChatRooms {
          nextToken
          __typename
        }
        BreakingNewsAlerts {
          nextToken
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getChatRoom = /* GraphQL */ `
  query GetChatRoom($id: ID!) {
    getChatRoom(id: $id) {
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
export const listChatRooms = /* GraphQL */ `
  query ListChatRooms(
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const chatRoomsByRoomtopicID = /* GraphQL */ `
  query ChatRoomsByRoomtopicID(
    $roomtopicID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    chatRoomsByRoomtopicID(
      roomtopicID: $roomtopicID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getMessage = /* GraphQL */ `
  query GetMessage($id: ID!) {
    getMessage(id: $id) {
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
export const listMessages = /* GraphQL */ `
  query ListMessages(
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessages(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const messagesByUserSenderID = /* GraphQL */ `
  query MessagesByUserSenderID(
    $userSenderID: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    messagesByUserSenderID(
      userSenderID: $userSenderID
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const listMessagesByChatRoom = /* GraphQL */ `
  query ListMessagesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelMessageFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listMessagesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getBreakingNewAlert = /* GraphQL */ `
  query GetBreakingNewAlert($id: ID!) {
    getBreakingNewAlert(id: $id) {
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
export const listBreakingNewAlerts = /* GraphQL */ `
  query ListBreakingNewAlerts(
    $filter: ModelBreakingNewAlertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBreakingNewAlerts(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const listBreakingNewsAlertsByRoomTopic = /* GraphQL */ `
  query ListBreakingNewsAlertsByRoomTopic(
    $roomtopicID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelBreakingNewAlertFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listBreakingNewsAlertsByRoomTopic(
      roomtopicID: $roomtopicID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
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
  }
`;
export const getVote = /* GraphQL */ `
  query GetVote($id: ID!) {
    getVote(id: $id) {
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
export const listVotes = /* GraphQL */ `
  query ListVotes(
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        voteType
        createdAt
        expiresAt
        voteCreationUser {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        userToBeRemoved {
          id
          username
          profileImage
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
          nextToken
          __typename
        }
        updatedAt
        voteVoteCreationUserId
        voteUserToBeRemovedId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listVotesByChatRoom = /* GraphQL */ `
  query ListVotesByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listVotesByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        voteType
        createdAt
        expiresAt
        voteCreationUser {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        userToBeRemoved {
          id
          username
          profileImage
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
          nextToken
          __typename
        }
        updatedAt
        voteVoteCreationUserId
        voteUserToBeRemovedId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserVote = /* GraphQL */ `
  query GetUserVote($id: ID!) {
    getUserVote(id: $id) {
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
export const listUserVotes = /* GraphQL */ `
  query ListUserVotes(
    $filter: ModelUserVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserVotes(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        createdAt
        voteID
        userVoteDecision
        userVoterID {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        updatedAt
        userVoteUserVoterIDId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUserVotesByVote = /* GraphQL */ `
  query ListUserVotesByVote(
    $voteID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserVoteFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserVotesByVote(
      voteID: $voteID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        voteID
        userVoteDecision
        userVoterID {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        updatedAt
        userVoteUserVoterIDId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUserChatActivity = /* GraphQL */ `
  query GetUserChatActivity($id: ID!) {
    getUserChatActivity(id: $id) {
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
export const listUserChatActivities = /* GraphQL */ `
  query ListUserChatActivities(
    $filter: ModelUserChatActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatActivities(
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        chatroomID
        userID {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        activityType
        updatedAt
        userChatActivityUserIDId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const listUserActivityByChatRoom = /* GraphQL */ `
  query ListUserActivityByChatRoom(
    $chatroomID: ID!
    $createdAt: ModelStringKeyConditionInput
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatActivityFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserActivityByChatRoom(
      chatroomID: $chatroomID
      createdAt: $createdAt
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        createdAt
        chatroomID
        userID {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        activityType
        updatedAt
        userChatActivityUserIDId
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
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
export const listUsers = /* GraphQL */ `
  query ListUsers(
    $filter: ModelUserFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUsers(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
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
      nextToken
      __typename
    }
  }
`;
export const getUserChatRoom = /* GraphQL */ `
  query GetUserChatRoom($id: ID!) {
    getUserChatRoom(id: $id) {
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
export const listUserChatRooms = /* GraphQL */ `
  query ListUserChatRooms(
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    listUserChatRooms(filter: $filter, limit: $limit, nextToken: $nextToken) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
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
        user {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByChatRoomId = /* GraphQL */ `
  query UserChatRoomsByChatRoomId(
    $chatRoomId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByChatRoomId(
      chatRoomId: $chatRoomId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
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
        user {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
export const userChatRoomsByUserId = /* GraphQL */ `
  query UserChatRoomsByUserId(
    $userId: ID!
    $sortDirection: ModelSortDirection
    $filter: ModelUserChatRoomFilterInput
    $limit: Int
    $nextToken: String
  ) {
    userChatRoomsByUserId(
      userId: $userId
      sortDirection: $sortDirection
      filter: $filter
      limit: $limit
      nextToken: $nextToken
    ) {
      items {
        id
        chatRoomId
        userId
        chatRoom {
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
        user {
          id
          username
          profileImage
          createdAt
          updatedAt
          __typename
        }
        createdAt
        updatedAt
        __typename
      }
      nextToken
      __typename
    }
  }
`;
