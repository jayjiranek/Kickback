export const listCategories = /* GraphQL */ `
  query ListCategories {
    listCategories {
      items {
        id
        categoryName
        categoryShortDescription
        categoryLongDescription
        categoryAvatarImage
        categoryBannerImage
      }
    }
  }
`;
