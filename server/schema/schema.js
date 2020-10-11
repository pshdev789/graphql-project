/* Schema contains is a map which contains the data points and the connection
between them */
const graphql = require("graphql");
// lodash is a js utility lib where used to manilpulate javascript  ds(arrays,list)
var _ = require("lodash");
//dummy data
var userData = [
  { id: "1", name: "Bond", age: 36, profession: "SSE" },
  { id: "13", name: "Anna", age: 26, profession: "SE" },
  { id: "211", name: "Bella", age: 16, profession: "Student" },
  { id: "19", name: "Gina", age: 26, profession: "SE" },
  { id: "150", name: "Georgiana", age: 36, profession: "TechLead" },
];

// construct to include GrphQL data types(classes)
const {
  GraphQLObjectType,
  GraphQLID,
  GraphQLString,
  GraphQLInt,
  GraphQLSchema,
} = graphql;

// Create types
const UserType = new GraphQLObjectType({
  name: "User",
  description: "Documentation for user...",
  fields: () => ({
    id: { type: GraphQLID },
    name: { type: GraphQLString },
    age: { type: GraphQLInt },
    profession: { type: GraphQLString },
  }),
});

// RootQuery is the path which allows us to traverse through the query.
// Querying Structure
const RootQuery = new GraphQLObjectType({
  name: "RootQueryType",
  description: "Description",
  fields: {
    user: {
      type: UserType,
      args: { id: { type: GraphQLString } },

      resolve(parent, args) {
        return _.find(userData, { id: args.id });

        // we resolve with data
        // get and return data from the datasource
      },
    },
  },
});

/* 
{
    user(id: "1"){

    }
} */

module.exports = new GraphQLSchema({
  query: RootQuery,
});
