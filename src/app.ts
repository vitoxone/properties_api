import express from 'express';

//sql config
import sequelize from './config/database';
import userRoutes from './routes/UserRoutes';

//mongodb config
import connectMongoDB from './config/mongodb';
import taskRoutes from './routes/TaskRoutes';


//mongodb + graphQl config

const { graphqlHTTP } = require("graphql-http");
import { createHandler } from "graphql-http/lib/use/express";
import { schema } from "./schema/propertySchema";

// Inicializar el server
const app = express();

// Middleware
app.use(express.json());

// Rutas
app.use('/api', userRoutes); //sql
app.use('/api', taskRoutes); //mongodb


//Configurar el middleware de GraphQL
app.use(
  "/graphql",
  createHandler({
    schema: schema
  })
);

// Inicializar bases de datos
(async () => {
  try {
    await sequelize.sync();
    console.log('Base de datos SQL conectada');
    await connectMongoDB();
    console.log('Base de datos mongo conectada');
  } catch (error) {
    console.error('Error al inicializar las bases de datos:', error);
  }

})();

export default app;