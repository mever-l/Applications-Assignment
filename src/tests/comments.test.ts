import request from "supertest"
import { app } from "../server";

describe("Comments Tests", () => {
    test("Test1", async () => {
        const response = await request(app).get("/comments");
        expect(response.statusCode).toBe(200)
    })
})