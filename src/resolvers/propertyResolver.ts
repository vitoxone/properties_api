import Property, { IProperty } from "../models/mongo/Property";

export const propertyResolver = {
  getProperties: async (): Promise<IProperty[]> => {
    return await Property.find();
  },

/**
 * Resolver para obtener una propiedad por su ID.
 * 
 * Este resolver devuelve una propiedad específica basada en el ID proporcionado.
 * 
 * ### Ejemplo de Query:
 * ```graphql
 * query GetProperty($id: ID!) {
 *   getProperty(id: $id) {
 *     id
 *     name
 *     description
 *     address
 *     value
 *     type
 *   }
 * }
 * ```
 * 
 * ### Variables:
 * ```json
 * {
 *   "id": "64b4c1e95a1234567890abcd"
 * }
 * ```
 * 
 * ### Respuesta esperada:
 * ```json
 * {
 *   "data": {
 *     "getProperty": {
 *       "id": "64b4c1e95a1234567890abcd",
 *       "name": "Casa en Santiago",
 *       "description": "Hermosa casa con jardín",
 *       "address": "Avenida Siempre Viva 123, Santiago, Chile",
 *       "value": 120000000,
 *       "type": "venta"
 *     }
 *   }
 * }
 * ```
 * @param {object} _parent - Nodo padre, no utilizado en esta consulta.
 * @param {object} args - Argumentos pasados a la consulta.
 * @param {string} args.id - ID de la propiedad.
 * @returns {Promise<object>} Propiedad encontrada o error si no existe.
 * @example 
 */
  getProperty: async (_parent: any, args: { id: string }) => {
    console.log("getProperty")
    const property = await Property.findById(args.id);
    if (!property) {
      throw new Error("Property not found");
    }
    return property;
  },

  createProperty: async ({ input }: { input: IProperty }): Promise<IProperty> => {
    const newProperty = new Property(input);
    return await newProperty.save();
  },
  deleteProperty: async ({ id }: { id: string }): Promise<string> => {
    const result = await Property.findByIdAndDelete(id);
    if (!result) throw new Error("Property not found");
    return "Property deleted successfully";
  },
};