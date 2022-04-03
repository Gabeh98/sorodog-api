import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Dogs from '../../Models/Dog'

export default class DogsController {
  public async index({}: HttpContextContract) {
    const dogs = await Dogs.all()
    return dogs
  }

  public async create({}: HttpContextContract) {}

  public async store({ request, response }: HttpContextContract) {
    const data = request.only(['name', 'description', 'active'])
    await Dogs.create(data)
    return response.status(201).json({"message":"Data created"})
  }

  public async show({ params }: HttpContextContract) {
    const dogs = await Dogs.findOrFail(params.id)
    return dogs
  }

  public async edit({}: HttpContextContract) {}

  public async update({ request, params, response }: HttpContextContract) {
    const dogs = await Dogs.findOrFail(params.id)
    const data = request.only(['name', 'description', 'active'])
    dogs.merge(data)
    await dogs.save()
    return response.status(200).json({"message":"Data updated"})
  }

  public async destroy({ params, response }: HttpContextContract) {
    const dogs = await Dogs.findOrFail(params.id)
    await dogs.delete()
    return response.status(200).json({"message":"Data has been deleted"})
  }
}
