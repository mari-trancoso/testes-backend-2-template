import { UserBusiness } from "../../src/business/UserBusiness"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("Signup", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("teste de casdastro de usuário de conta normal que retorna um token", async () => {
        const input = {
            name: "Normal Mock",
            email: "norma@email.com",
            password: "hash-bananinha"
        }

        const response = await userBusiness.signup(input)

        const token = "token-mock-normal"

        expect(response.token).toBe(token)
    })
})