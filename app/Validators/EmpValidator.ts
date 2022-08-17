import { schema, CustomMessages ,rules} from '@ioc:Adonis/Core/Validator'
import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'

export default class EmpValidator {
  constructor(protected ctx: HttpContextContract) {}
  public schema = schema.create({
  id : schema.number([rules.required(),rules.unique({table : 'employee1', column : 'id'})]),
   name : schema.string([rules.maxLength(20) , rules.required() ]),
   email : schema.string([rules.required]), 
   phone_no : schema.number([rules.unique ,  rules.required()]),
   dept_id : schema.number([rules.required()]),
   

  })
public messages: CustomMessages = {
  'id.required': 'Please enter the Dept ID',
  'name.maxLength' : 'Maximum Characters 20',
  'phone_no.unique' : 'Number must be Unique',
  //'phone_no.mobile' : 'Must be a Mobile Number'rules.mobile() ,
  
}

}
