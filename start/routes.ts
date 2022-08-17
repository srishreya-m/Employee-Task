/*
|--------------------------------------------------------------------------
| Routes
|--------------------------------------------------------------------------
|
| This file is dedicated for defining HTTP routes. A single file is enough
| for majority of projects, however you can define routes in different
| files and just make sure to import them inside this file. For example
|
| Define routes in following two files
| ├── start/routes/cart.ts
| ├── start/routes/customer.ts
|
| and then import them inside `start/routes.ts` as follows
|
| import './routes/cart'
| import './routes/customer'
|
*/

import Route from '@ioc:Adonis/Core/Route'

Route.get('/', async () => {
  return { hello: 'world' }
})

Route.group(() => {
  Route.group(() => {
    Route.get('/fetch', 'EmployeeController.fetch');
    Route.post('/store', 'EmployeeController.store');
    Route.get('/show', 'EmployeeController.show');
    Route.put('/update', 'EmployeeController.update');
    Route.delete('/delete','EmployeeController.delete');
  }).prefix('Emp')
  
  Route.group(() => {
    Route.get('/fetch', 'DepartmentController.fetch');
    Route.post('/store', 'DepartmentController.store');
    Route.get('/show', 'DepartmentController.show');
    Route.put('/update', 'DepartmentController.update');
    Route.delete('/delete','DepartmentController.delete');
  }).prefix('Dept')
}).middleware('Auth')
//
