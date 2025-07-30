import { gql } from 'apollo-server-express';

export const customizationType = gql`
  type Customization {
    id: ID!
    name: String!
    price: Float!
    type: String!
    image_url: String
  }
`;
