//const express = require("express");
const neo4j = require("neo4j-driver");

const CONNECTION_STRING =
  process.env.NEO4J_CONNECTION_STRING || "bolt://localhost:7687";

const driver = neo4j.driver(CONNECTION_STRING);

module.exports = driver;