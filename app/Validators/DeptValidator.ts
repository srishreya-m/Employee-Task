import { schema, CustomMessages ,rules } from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class DeptValidator {
  constructor(protected ctx: HttpContextContract) {}
//,rules.unique({table : 'department1', column:'dept_id'})
  public schema = schema.create({
    dept_id : schema.number([rules.required()]),
    dept_name : schema.string( [ rules.alpha() ])
  })

 
  public messages: CustomMessages = {

  }
}
