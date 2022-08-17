import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
import DeptValidator from 'App/Validators/DeptValidator';

import department1 from 'App/Models/department1';

export default class DepartmentController {

    public async store({request} : HttpContextContract)
     
        //public async store({request,response} : HttpContextContract)
    { 
        console.log(request.body());  
        console.log(request.input('data.dept_id'));
       try{
        //   const user = new employee1()
           const dept = new department1()
          dept.dept_id = request.input('data.dept_id')
          dept.dept_name = request.input('data.dept_name')
          dept.save()
           return 'Inserted into database'
          }
        catch(err){
          return 'Cannot display data'
        }// await request.validate(DeptValidator).catch(err  => response.badRequest(err.messages));
        // const newDepartment = new department1();
        // try{
        //     await newDepartment.fill({ dept_id: Number(request.input('dept_id')) , dept_name: request.input('name')} )
        //             .save();
        //     return ("Department succesfully Inserted ")
        // }
        // catch{
        //     return ("Department already exists")
        // }
    }

    public async fetch ()
    {
        const Department = await department1.all();console.log("works");
        if (Department[0] == null)
        {
            return "No department to show"
        }
        return Department
    }
    public async show({request} : HttpContextContract) 
    {
        try{
            const dpmt = await department1.findOrFail(Number(request.input('data.dept_id')));
            return dpmt;
        }
        catch
        {
            return 'Department doesnot exists'
        }  
     }
     /*
     public async store({request} : HttpContextContract)
     
        //public async store({request,response} : HttpContextContract)
    { 
     */
    public async update({request} : HttpContextContract)
    {
        console.log(request.body());  
        console.log(request.input('data.dept_id'));
        try{
           // await request.validate(DeptValidator).catch(err  => response.badRequest(err.messages))
            const dpmt = await department1.findOrFail(Number(request.input('data.dept_id')));
            dpmt.dept_name = request.input('data.dept_name');
            await dpmt.save();
            return "Department name successfully updated"
        }catch{
            return "Department ID  does not exists"
        }
    }
    public async delete({request} : HttpContextContract)
    {
        console.log(request.body());  
        console.log(request.input('dept_id'));
        try{
           // await request.validate(DeptValidator).catch(err  => response.badRequest(err.messages))
            const dpmt = await department1.findOrFail(Number(request.input('dept_id')));
            await dpmt.delete();
            return "Department successfully deleted"
        }catch{
            return "Department ID doesnot exists"
        }
    }
}