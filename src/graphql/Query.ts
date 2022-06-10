import { intArg, queryType } from "nexus";
import { GetMeType } from "./GetMeType";
import { ICursor, IMyContext } from '../interface'
import { isAuthenticated } from "../utils";
import { NOT_AUTHENTICATED, ROWS_LIMIT } from "../constants";
import { CardType } from "./CardType";

export const Query = queryType({
    definition(t) {
        t.field('hello', {
            type: 'String',
            resolve: () => 'worlds'
        })

        t.field('getMe', {
            type: GetMeType,
            resolve: (_, __, { session }: IMyContext ) => {
                if ( !isAuthenticated(session)) {
                    return new Error( NOT_AUTHENTICATED )
                }
                return {
                    userId: session.userId,
                }
            }
        })

        t.list.field('cards', {
            type: CardType,
            args: {
                cursor: intArg()
            },
            resolve: (_, {cursor}: IDBCursor, { prisma, session }: IMyContext ) => {
                try {
                    if ( !isAuthenticated(session)) {
                        return new Error( NOT_AUTHENTICATED)
                    }
                    return await prisma.card.findMany({
                        take: ROWS_LIMIT,
                        skip: cursor,
                        select: {
                            content
                        }
                    })
                }

            }
        })
    }
})