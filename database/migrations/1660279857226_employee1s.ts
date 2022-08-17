import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'employee1s'

  public async up () {
    this.schema.createTable(this.tableName, (table) => {
      table.integer('id').primary();
      table.string('name',255);
      table.string('email',255);
      table.string('phone_no');
      table.integer('dept_id');      

    


  })
}

public async down () {
  this.schema.dropTable(this.tableName)
}
}