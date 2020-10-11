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

var hobbiesData = [
  {
    id: "1",
    title: "Programming",
    description: "Using Computers to make the world a better place",
  },
  {
    id: "2",
    title: "Rowing",
    description: "Sweat and feel better before eating doanuts",
  },
  {
    id: "3",
    title: "Swimming",
    description: "Get in the water and learn to become the water",
  },
  { id: "4", title: "Fencing", description: "A hobby for fency people" },
  {
    id: "4",
    title: "Hiking",
    description: "Wear hiking boots and explore the world",
  },
];
var postData = [
  { id: "1", comment: "Building a Mind" },
  { id: "2", comment: "GraphQL is Amazing" },
  { id: "3", comment: "How to Change the World" },
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

// Create UserType
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

// Create HobbyType id,title, description
const HobbyType = new GraphQLObjectType({
  name: "Hobby",
  description: "Documentation for Hobby...",
  fields: () => ({
    id: { type: GraphQLInt },
    title: { type: GraphQLString },
    description: { type: GraphQLString },
  }),
});

// Post type (id, comment)

const PostType = new GraphQLObjectType({
  name: "Post",
  description: "Documentation for Post...",
  fields: () => ({
    id: { type: GraphQLID },
    comment: { type: GraphQLString },
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
      args: { id: { type: GraphQLID } },

      resolve(parent, args) {
        //user lodash to get data
        return _.find(userData, { id: args.id });

        // we resolve with data
        // get and return data from the datasource
      },
    },
    hobby: {
      type: HobbyType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //   return data for the hooby(use lodash )
        return _.find(hobbiesData, { id: args.id });
      },
    },

    post: {
      type: PostType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        //   return data for the hooby(use lodash )
        return _.find(postData, { id: args.id });
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
