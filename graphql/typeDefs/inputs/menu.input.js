import { gql } from 'apollo-server-express';

export const menuInput = gql`
  input MenuInput {
    name: String!
    description: String
    image_url: String
    price: Float!
    rating: Float
    calories: Int
    protein: Int
    categories: ID!
    customizations: [ID!]
  }

  input UpdateMenuInput {
    name: String
    description: String
    image_url: String
    price: Float
    rating: Float
    calories: Int
    protein: Int
    categories: ID
    customizations: [ID!]
  }
`;
