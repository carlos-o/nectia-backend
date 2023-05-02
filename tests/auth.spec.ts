import request from 'supertest';

const baseUrl = "http://localhost:3000"
 

describe("POST / - Return success, Token when credential is valid", () => {
  it("login test sucessfully", async () => {
    const result = await request(baseUrl)
    .post("/signin")
    .send({"email": "admin@admin.com","password": "admin123"});
    expect(result.statusCode).toBe(200);
    expect(result.body).toHaveProperty('token')
  });
});

describe("POST / - Return failed, missing parameter or incorrect", () => {
  it("login test missing email", async () => {
    const result = await request(baseUrl)
    .post("/signin")
    .send({"email": "","password": "admin123"});
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('message')
    expect(result.body.message).toBe('email is required')
  });
  it("login test missing password", async () => {
    const result = await request(baseUrl)
    .post("/signin")
    .send({"email": "admin@admin.com","password": ""});
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('message')
    expect(result.body.message).toBe('password is required')
  });
  it("login test credential are incorrect", async () => {
    const result = await request(baseUrl)
    .post("/signin")
    .send({"email": "admin@admin.com","password": "123123"});
    expect(result.statusCode).toBe(400);
    expect(result.body).toHaveProperty('message')
    expect(result.body.message).toBe('user or password is invalid')
  });
});