import { builder } from '../builder'

builder.prismaObject('Message', {
  fields: t => ({
    id: t.exposeID('id'),
    body: t.exposeString('body'),
    createAt: t.expose('createdAt', {
      type: 'Date',
    }),
  }),
})
