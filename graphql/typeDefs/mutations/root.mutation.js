import { gql } from 'apollo-server-express';

export const rootMutation = gql`
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
