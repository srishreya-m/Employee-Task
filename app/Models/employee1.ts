
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class employee1 extends BaseModel {
  @column({ isPrimary: true })
  public id: number

 @column ()
 public name : string

 @column()
 public email : string

 @column()
 public phone_no : string

 @column({})
 public dept_id : number

 
}
