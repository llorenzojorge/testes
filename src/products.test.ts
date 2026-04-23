import request from "supertest"
import { app } from "./app"

describe("products", () => {
  it("should list produts", async () => {
    const response = await request(app).get("/products")
    console.log(response.body)
  })
})