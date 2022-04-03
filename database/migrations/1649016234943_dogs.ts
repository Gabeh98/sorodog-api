import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class Dogs extends BaseSchema {
  protected tableName = 'dogs'

  public async up() {
    this.schema.createTable(this.tableName, (table) => {
      table.increments('id')
      table.string('name')
      table.boolean('active')
      table.text('description', 'longtext')
      table.dateTime('created_at', { useTz: true })
      table.dateTime('updated_at', { useTz: true })
    })
  }

  public async down() {
    this.schema.dropTable(this.tableName)
  }
}
