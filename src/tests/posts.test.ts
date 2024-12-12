import request from "supertest"
import { app } from "../server";
import mongoose from "mongoose";

afterAll((done) => {
    mongoose.connection.close();
    done();
});

describe("Posts Tests", () => {
    test("get all posts request", async () => {
        const response = await request(app).get("/posts");
        expect(response.statusCode).toBe(200)
    })
})