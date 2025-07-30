import { gql } from 'apollo-server-express';

export const typeDefs = gql`
  # --------------------- User Types ---------------------
  type User {
    id: ID!
    name: String!
    email: String!
    avatar: String
  }

  type AuthPayload {
    token: String!
    user: User!
  }

  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  # --------------------- Category Types ---------------------
  type Category {
    id: ID!
    name: String!
    description: String
  }

  input CategoryInput {
    name: String!
    description: String
  }

  input UpdateCategoryInput {
    name: String
    description: String
  }

  # --------------------- Customization Types ---------------------
  type Customization {
    id: ID!
    name: String!
    price: Float!
    type: String!
    image_url: String
  }

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

  # --------------------- Menu Types ---------------------
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

  # --------------------- Auth Input ---------------------
  input RegisterInput {
    name: String!
    email: String!
    password: String!
  }

  input LoginInput {
    email: String!
    password: String!
  }

  # --------------------- Query ---------------------
  type Query {
    me: User

    getAllCategories: [Category]
    getCategoryById(id: ID!): Category

    getAllCustomizations: [Customization]
    getCustomizationById(id: ID!): Customization

    getAllMenus(category: ID): [Menu]
    getMenuById(id: ID!): Menu
  }

  # --------------------- Mutation ---------------------
  type Mutation {
    # User
    register(input: RegisterInput!): AuthPayload!
    login(input: LoginInput!): AuthPayload

    # Category
    createCategory(input: CategoryInput!): Category
    updateCategory(id: ID!, input: UpdateCategoryInput!): Category
    deleteCategory(id: ID!): Category

    # Customization
    createCustomization(input: CustomizationInput!): Customization
    updateCustomization(id: ID!, input: UpdateCustomizationInput!): Customization
    deleteCustomization(id: ID!): Customization

    # Menu
    createMenu(input: MenuInput!): Menu
    updateMenu(id: ID!, input: UpdateMenuInput!): Menu
    deleteMenu(id: ID!): Menu
  }
`;
