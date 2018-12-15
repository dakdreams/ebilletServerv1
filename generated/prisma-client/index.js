"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var prisma_lib_1 = require("prisma-client-lib");
var typeDefs = require("./prisma-schema").typeDefs;

var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
exports.Prisma = prisma_lib_1.makePrismaClientClass({
  typeDefs,
  models,
  endpoint: `https://ebilletserver-3c495a1eb3.herokuapp.com/BilletPostgresServer/dev`
});
exports.prisma = new exports.Prisma();
var models = [
  {
    name: "Post",
    embedded: false
  },
  {
    name: "User",
    embedded: false
  }
];
