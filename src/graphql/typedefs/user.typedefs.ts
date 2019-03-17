import { gql } from 'apollo-server-express';

export const userTypeDefs = gql`
  extend type Query {
    user(id: ID!): UserResponse!
    users: UsersResponse!
  }

  extend type Mutation {
    createUser(input: UserCreateInput!): UserResponse!
    updateUser(input: UserUpdateInput!): UserResponse!
    deleteUser(id: ID!): DeleteUserResponse!
  }

  # Types
  type User {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    created_at: String!
    updated_at: String!
    deleted_at: String!
    posts: [Post]
  }

  # Inputs
  input UserCreateInput {
    first_name: String!
    last_name: String!
    email: String!
    password: String!
  }

  input UserUpdateInput {
    id: ID!
    first_name: String
    last_name: String
    email: String
    password: String
  }

  # Responses
  type UserResponse implements Response {
    code: Int!
    message: String
    success: Boolean!
    user: User
  }

  type UsersResponse implements Response {
    code: Int!
    message: String
    success: Boolean!
    users: [User]
  }

  type DeleteUserResponse implements Response {
    code: Int!
    message: String
    success: Boolean!
  }
`;
