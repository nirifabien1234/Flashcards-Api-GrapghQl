import { objectType } from "nexus"
import { UserType } from "./UserType"

export const CardType = objectType({
    name: 'UserType',
    definition(t) {
        t.int('id')
        t.int('userId')
        t.string('frontTitle')
        t.string('frontContent')
        t.string('backTitle')
        t.string('backContent')
        t.float('createdAt')
        t.list.field('user', {
            type: UserType,
        })
    }
})