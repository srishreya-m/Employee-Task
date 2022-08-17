import BaseSchema from '@ioc:Adonis/Lucid/Schema'

export default class extends BaseSchema {
  protected tableName = 'Employee'

  public async up () {
      this.schema.createTable(this.tableName, (table) => {
        table.integer('id').primary();
        table.string('name',255);
        table.string('email',255);
        table.string('phone_no');
        table.integer('dept_id');      
  
      

      /**
       * Uses timestamptz for PostgreSQL and DATETIME2 for MSSQL
       */
      table.timestamp('created_at', { useTz: true })
      table.timestamp('updated_at', { useTz: true })
    })
  }

  public async down () {
    this.schema.dropTable(this.tableName)
  }
}
