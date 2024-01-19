export const getUser = /* GraphQL */ `
  query GetUser($id: ID!) {
    getUser(id: $id) {
      id
      username
      profileImage
      createdAt
      updatedAt
    }
  }
`;
