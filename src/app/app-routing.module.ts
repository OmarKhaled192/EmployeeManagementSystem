import { RouterModule, Routes } from '@angular/router';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { ErrorsComponent } from './components/errors/errors.component';
import { NgModule } from '@angular/core';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch:'full'},
  {path: 'home', component: ViewEmployeesComponent},
  {path: 'register', component: EmployeeRegisterComponent},
  {path: 'register/:id', component: EmployeeRegisterComponent},
  {path: 'employee/:id', component: EmployeeDetailsComponent},
  {path: 'error/:id', component: ErrorsComponent},
  {path: '**', redirectTo:'error/404', pathMatch:'full'},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
