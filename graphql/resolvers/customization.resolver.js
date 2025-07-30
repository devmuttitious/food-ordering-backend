import Customization from '../../models/customization.model.js';

export const customizationResolvers = {
  Query: {
    getAllCustomizations: async () => await Customization.find(),
    getCustomizationById: async (_, { id }) =>
      await Customization.findById(id),
  },
  Mutation: {
    createCustomization: async (_, { input }) =>
      await Customization.create(input),
    updateCustomization: async (_, { id, input }) =>
      await Customization.findByIdAndUpdate(id, input, { new: true }),
    deleteCustomization: async (_, { id }) =>
      await Customization.findByIdAndDelete(id),
  },
  Customization: {
    id: (cust) => cust._id.toString(),
  },
};
