
# properties_api

base api NodeJs-Typescript-Sql-Mongodb-Graphql-Jest

## Keywords

`NodeJs, Express, Typescript, Node, Sequelize, Mongodb, Jest, GraphQl`

## Descripción

base api NodeJs-Typescript-Sql-Mongodb-Graphql-Jest

## Instalación

```
npm install
```

## Uso (GraphQL correrá en http://127.0.0.1:3000)

```
npm run dev



```

```js
query { # obtener propiedad
  query GetProperty($id: ID!) {
    getProperty(id: $id) {
      id
      name
      description
      address
      value
      type
    }
  }
}
```

```variables
{
	"id": "675c3a4068430c8b3dc11288"
}
```
## Licencia

Este proyecto está bajo la licencia **ISC**.

## Autor

**Victor Silva**
