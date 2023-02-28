import { UserBusiness } from "../../src/business/UserBusiness"
import { LoginInputDTO } from "../../src/dtos/userDTO"
import { HashManagerMock } from "../mocks/HashManagerMock"
import { IdGeneratorMock } from "../mocks/IdGeneratorMock"
import { TokenManagerMock } from "../mocks/TokenManagerMock"
import { UserDatabaseMock } from "../mocks/UserDatabaseMock"

describe("login", () => {

    const userBusiness = new UserBusiness(
        new UserDatabaseMock(),
        new IdGeneratorMock(),
        new TokenManagerMock(),
        new HashManagerMock()
    )

    test("Deve retornar um token para login em conta NORMAL.", async () => {
        const input: LoginInputDTO = {
            email: "normal@email.com",
            password: "bananinha"
        }

        //{token: "token-mock-normal"}
        const response = await userBusiness.login(input) 

        const token = "token-mock-normal"

        expect(response.token).toBe(token)

    })

    test("Deve retornar um token para login em conta ADMIN.", async () => {
        const input: LoginInputDTO = {
            email: "admin@email.com",
            password: "bananinha"
        }

        //{token: "token-mock-normal"}
        const response = await userBusiness.login(input) 

        const token = "token-mock-admin"

        expect(response.token).toBe(token)

    })
})