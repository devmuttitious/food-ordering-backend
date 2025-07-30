import { gql } from 'apollo-server-express';

export const customizationInput = gql`
  input CustomizationInput {
    name: String!
    price: Float!
    type: String!
    image_url: String
  }

  input UpdateCustomizationInput {
    name: String
    price: Float
    type: String
    image_url: String
  }
`;
