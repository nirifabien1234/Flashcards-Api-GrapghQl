import { User } from "@prisma/client";
import { mutationType, stringArg } from "nexus";

export const Mutation = mutationType({
    definition(t) {
        t.boolean('registerUser', {
            args: {
                name: stringArg(),
                email: stringArg(),
                password: stringArg()

            },
            resolve: (_, {}: Omit<User, 'id'>, _ctx) => {},
        })
    }
})