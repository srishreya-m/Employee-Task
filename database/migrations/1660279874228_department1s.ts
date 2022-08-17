import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'department1s'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      
      table.integer('dept_id').primary(); 
      table.string('dept_name',255);
      
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}