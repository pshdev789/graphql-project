/* Schema contains is a map which contains the data points and the connection
between them */
const graphql = require("graphql");

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLInt } = graphql;

// Create types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "Documentation for user...",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
  }),
});
