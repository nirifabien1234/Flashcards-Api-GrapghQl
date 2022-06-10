import { objectType } from "nexus";
import { CardType } from './CardType'
export const UserType = objectType({
    name: 'UserType',
    definition(t) {
        t.int('id')
        t.string('name')
        t.string('email')
        t.string('password')
        t.float('createdAt')
        t.list.field('cards', {
            type: CardType,
        })
    }
})