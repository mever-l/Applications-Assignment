import request from "supertest"
import { app } from "../server";

describe("users Tests", () => {
    test("Test1", async () => {
        const response = await request(app).get("/users");
        expect(response.statusCode).toBe(200)
    })
})