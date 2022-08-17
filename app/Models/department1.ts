
import { BaseModel, column } from '@ioc:Adonis/Lucid/Orm'

export default class department1 extends BaseModel {
  @column({ isPrimary: true })
  public dept_id: number

 @column ()
 public dept_name : string

}
