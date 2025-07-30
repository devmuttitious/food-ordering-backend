import { gql } from 'apollo-server-express';

export const menuType = gql`
  type Menu {
    id: ID!
    name: String!
    description: String
    image_url: String
    price: Float!
    rating: Float
    calories: Int
    protein: Int
    categories: Category
    customizations: [Customization]
  }
`;
