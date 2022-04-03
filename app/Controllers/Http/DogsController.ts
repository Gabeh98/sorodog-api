import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dogs from '../../Models/Dog'

export default class DogsController {
  public async index({}: HttpContextContract) {
    const dogs = await Dogs.all()
    return dogs
  }

  public async create({}: HttpContextContract) {}

  public async store({ request }: HttpContextContract) {
    const data = request.only(['name', 'description', 'active'])
    const dogs = await Dogs.create(data)
    return dogs
  }

  public async show({ params }: HttpContextContract) {
    const dogs = await Dogs.findOrFail(params.id)
    return dogs
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params }: HttpContextContract) {
    const dogs = await Dogs.findOrFail(params.id)
    const data = request.only(['name', 'description', 'active'])
    dogs.merge(data)
    await dogs.save()
    return dogs
  }

  public async destroy({ params }: HttpContextContract) {
    const dogs = await Dogs.findOrFail(params.id)
    await dogs.delete()
    return dogs
  }
}
