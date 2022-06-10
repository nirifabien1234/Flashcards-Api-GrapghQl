import { objectType } from "nexus";

export const GetMeType = objectType({
    name: 'GetMeType',
    definition(t) {
        t.int('userId')
    }
})