export const listCategories = /* GraphQL */ `
  query ListCategories {
    listCategories {
      items {
        id
        categoryGroupsCount
        categoryName
        categoryShortDescription
        categoryLongDescription
        categoryAvatarImage
        categoryBannerImage
      }
    }
  }
`;
