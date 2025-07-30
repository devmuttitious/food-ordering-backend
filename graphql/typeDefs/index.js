import { gql } from 'apollo-server-express';

import { userType } from './types/user.type.js';
import { categoryType } from './types/category.type.js';
import { customizationType } from './types/customization.type.js';
import { menuType } from './types/menu.type.js';

import { userInput } from './inputs/user.input.js';
import { categoryInput } from './inputs/category.input.js';
import { customizationInput } from './inputs/customization.input.js';
import { menuInput } from './inputs/menu.input.js';

import { rootQuery } from './queries/root.query.js';
import { rootMutation } from './mutations/root.mutation.js';

export const typeDefs = gql`
  ${userType}
  ${categoryType}
  ${customizationType}
  ${menuType}

  ${userInput}
  ${categoryInput}
  ${customizationInput}
  ${menuInput}

  ${rootQuery}
  ${rootMutation}
`;
