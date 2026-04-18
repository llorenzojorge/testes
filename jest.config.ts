import type { Config } from "jest"

const config: Config = {
  bail: true,             // Para a execução dos testes seguintes quando um falhar.
  preset: "ts-jest",
  testEnvironment: "node" // O teste será executado no node.
}

export default config