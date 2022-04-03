import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'SoroDogApi' }
})

Route.resource('/dogs','DogsController').apiOnly()