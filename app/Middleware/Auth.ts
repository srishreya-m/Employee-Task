import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import Env from '@ioc:Adonis/Core/Env'
export default class Auth {
  
    public async handle({request, response}: HttpContextContract, next: () => Promise<void>) {
    //code for middleware goes here. ABOVE THE NEXT CALL
    const appKey: string = Env.get('appKey')
     if ( appKey !== request.header('appKey')) {

      console.log(request.header('appKey'))
      response.unauthorized({ error: 'Not authorized request' })
       return
     }

    await next()
  }
  }


