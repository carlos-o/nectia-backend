import request from 'supertest';
import mongoose from 'mongoose';
import envs from "../src/utils/settings";

const baseUrl = "http://localhost:3000"


describe("GET / - Return success", () => {
  it("get user response", async () => {
    const result = await request(baseUrl)
    .get("/user")

    expect(result.statusCode).toBe(200);
    expect(result.body.length >= 1).toBe(true)
  });
});

// describe("POST / - Return success", () => {
//   it("Create new user", async () => {
//     let randomEmail = (Math.random() + 1).toString(36).substring(3);
//     const result = await request(baseUrl)
//     .post("/user").
//     send({
//       "name": "example",
//       "lastName": "user",
//       "email": `${randomEmail}@gmail.com`,
//       "password": "example1234*"
//     });
//     expect(result.statusCode).toBe(201);
//     expect(result.body).toHaveProperty('message')
//     expect(result.body.message).toBe('User has been create successfully')
//   });
// });

describe("POST / - Return failed", () => {
  it("Error to create user - user email exist", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "carlos",
      "lastName": "user",
      "email": `admin@admin.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('message')
    expect(result.body.message).toBe('Email allready in use please use another')
  });
  it("Error to create user missing name", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "",
      "lastName": "user",
      "email": `exampleemail123@gmail.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('name field cannot be empty')
  });
  it("Error to create user - name invalid type", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": 1233,
      "lastName": "user",
      "email": `exampleemail123@gmail.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('string field is required')
  });
  it("Error to create user - name minimun characters", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "as",
      "lastName": "user",
      "email": `exampleemail123@gmail.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('name must be at least 3 characters long')
  });
  it("Error to create user missing lastName", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "example",
      "lastName": "",
      "email": `exampleemail123@gmail.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('lastName field cannot be empty')
  });
  it("Error to create user - lastName invalid type", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "exmaple",
      "lastName": 213.3,
      "email": `exampleemail123@gmail.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('string field is required')
  });
  it("Error to create user - lastName minimun characters", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "example",
      "lastName": "us",
      "email": `exampleemail123@gmail.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('lastName must be at least 3 characters long')
  });
  it("Error to create user - invalid email", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "example",
      "lastName": "user",
      "email": `exampleemail123gmail.com`,
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('Please enter a valid email address')
  });
  it("Error to create user - email required", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "example",
      "lastName": "user",
      "email": "",
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('Email field is required')
  });
  it("Error to create user - email invalid type", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "example",
      "lastName": "user",
      "email": {"asd":23},
      "password": "example1234*"
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('Please enter a valid email address')
  });
  it("Error to create user - password invalid type", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "example",
      "lastName": "user",
      "email": "exampleasdugvbq23@gmail.com",
      "password": 123
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('password at least one letter, one number and one special character')
  });
  it("Error to create user - password is required", async () => {
    const result = await request(baseUrl)
    .post("/user").
    send({
      "name": "example",
      "lastName": "user",
      "email": "exampleasdugvbq23@gmail.com",
      "password": ""
    });
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('errors')
    expect(result.body.errors.msg).toBe('password field is required')
  });
});