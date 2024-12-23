import { GraphQLObjectType, GraphQLSchema, GraphQLString, GraphQLID, GraphQLList, GraphQLFloat, GraphQLInputObjectType } from "graphql";
import Property from "../models/mongo/Property";
import { propertyResolver } from "../resolvers/propertyResolver";

// Tipo Property
const PropertyType = new GraphQLObjectType({
    name: "Property",
    description: "Representa una propiedad como una casa o departamento en arriendo o venta.",
    fields: () => ({
      id: { type: GraphQLID, description: "Identificador único de la propiedad." },
      name: { type: GraphQLString, description: "Nombre de la propiedad." },
      description: { type: GraphQLString, description: "Descripción breve de la propiedad." },
      address: { type: GraphQLString, description: "Ubicación de la propiedad." },
      value: { type: GraphQLString, description: "Precio de la propiedad en CLP." },
      type: {
        type: GraphQLString,
        description: "Tipo de operación: 'venta' o 'arriendo'."
      },
    }),
  });

// Input para crear propiedades
const PropertyInput = new GraphQLInputObjectType({
  name: "PropertyInput",
  fields: {
    name: { type: GraphQLString },
    description: { type: GraphQLString },
    address: { type: GraphQLString },
    imageUrl: { type: GraphQLString },
    value: { type: GraphQLFloat },
    type: { type: GraphQLString },
  },
});


// Query
const RootQuery = new GraphQLObjectType({
    name: "RootQueryType",
    description: "Punto de entrada para las consultas.",
    fields: {
        getProperties: {
            type: new GraphQLList(PropertyType),
            description: "Obtiene todas las propiedades de la base de datos.",
            resolve: propertyResolver.getProperties
          },
      getProperty: {
        type: PropertyType,
        args: { id: { type: GraphQLID } },
        description: "Obtiene una propiedad por su identificador único.",
        resolve: async (_parent, args, context) => {
          return await propertyResolver.getProperty(context, args)
        },
      },
    },
  });

// Mutation
const Mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    createProperty: {
      type: PropertyType,
      args: {
        input: { type: PropertyInput },
      },
      resolve: async (_parent, { input }) => {
        const newProperty = new Property(input);
        return await newProperty.save();
      },
    },
    deleteProperty: {
      type: GraphQLString,
      args: { id: { type: GraphQLID } },
      resolve: async (_parent, { id }) => {
        const result = await Property.findByIdAndDelete(id);
        if (!result) throw new Error("Property not found");
        return "Property deleted successfully";
      },
    },
  },
});

// Exportar el esquema
export const schema = new GraphQLSchema({
  query: RootQuery,
  mutation: Mutation,
});