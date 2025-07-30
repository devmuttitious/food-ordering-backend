import { gql } from 'apollo-server-express';

export const rootQuery = gql`
  type Query {
    me: User

    getAllCategories: [Category]
    getCategoryById(id: ID!): Category

    getAllCustomizations: [Customization]
    getCustomizationById(id: ID!): Customization

    getAllMenus(category: ID): [Menu]
    getMenuById(id: ID!): Menu
  }
`;
