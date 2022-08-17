import express from "express";

const app = express();

/**
 * @module API
 */

/**
 * Index route
 *
 * @name index
 * @path {GET} /
 *
 */
app.get("/", (req, res) => res.send("Welcome"));

/**
 * User route
 *
 * @name users
 * @path {POST} /user
 *
 */
app.post("/user", (req, res) => res.send("Welcome"));

/**
 * Products route
 *
 * @name products
 * @path {DELETE} /products
 *
 */
app.delete("/products", (req, res) => res.send("Welcome"));

/**
 * Sign in route
 *
 * @name signin
 * @path {POST} /signin
 *
 */
app.post("/signin", (req, res) => res.send("Welcome"));
