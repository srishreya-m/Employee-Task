import type { HttpContextContract } from '@ioc:Adonis/Core/HttpContext'
//import department1 from 'App/Models/department1';
import employee1 from 'App/Models/employee1';

import EmpValidator from 'App/Validators/EmpValidator';

export default class EmployeeController {
    //public async store({request,response} : HttpContextContract)
public async store({request} : HttpContextContract)
  { console.log(request.input('data.id'));
     try{ 
        const user = new employee1()
        // const dept = new Department()
        console.log(request.input('data.id'));
        
        user.id = request.input('data.id')
        user.name = request.input('data.name')
        user.email = request.input('data.email') 
        user.phone_no = request.input('data.phone_no')
        user.dept_id = request.input('data.dept_id') 
        user.save()
         return 'Inserted into database' 
        }
      catch(err){
        return 'Cannot display data'
      } //await request.validate(EmpValidator).catch((err) =>response.badRequest(err.messages))
    //   const newEmployee = new Employee();console.log("works");
    //   try{
    //       newEmployee.id = request.input('id');
    //       newEmployee.name = request.input('name');
    //       newEmployee.email = request.input('email');
    //       newEmployee.phone_no = request.input('phone_no');
    //       newEmployee.dept_id = request.input('dept_id');
    //       await newEmployee.save();
    //       return ("Employee succesfully Inserted ")
          
    //   }
    //   catch{
    //       return ("Employee ID / Department ID incorrect")
    //   }
      
  }
  public async fetch ()
  {
    try{const Emp = await employee1.all();console.log("works");
      if (Emp[0] == null)
      {
          return "No employee to show"
      }
      return Emp }
        catch{
            return ("Employee ID / Department ID incorrect")
        }
  }
  public async show({request} : HttpContextContract)
  {
      try{
          const emp = await employee1.findOrFail(Number(request.input('id')));
          return emp;
      }
      catch
      {
          return 'Employee doesnot exists'
      }  
   }
  public async update({request} : HttpContextContract)
  {
      //await request.validate(EmpValidator).catch(err  => {response.badRequest(err.messages) })
      try{
          const emp = await employee1.findOrFail(Number(request.input('data.id')));
          emp.name = request.input('data.name');
          emp.email = request.input('data.email');
          emp.phone_no = request.input('data.phone_no');
          emp.dept_id = Number(request.input('data.dept_id'));
          await emp.save();
          return "Employee details successfully updated"
      }catch(err){
          console.log(err);
          return "Employee ID  doesnot exists"
      }
  }
  public async delete({request} : HttpContextContract)
  {
    /*
    console.log(request.body());  
        console.log(request.input('id'));
        try{
           // await request.validate(DeptValidator).catch(err  => response.badRequest(err.messages))
            const dpmt = await department1.findOrFail(Number(request.input('dept_id')));
            await dpmt.delete();
            return "Department successfully deleted"
        }catch{
            return "Department ID doesnot exists"
        }
    */  
    try{
        const emp1 = await request.input('data.id');
        console.log(emp1);
          console.log(request.input('data.id'))
          const emp = await employee1.findOrFail(Number(request.input('data.id')));
          await emp.delete();
          //return "Employee successfully deleted"
      }catch{
          return "Employee ID doesnot exists"
      }
  }
}
