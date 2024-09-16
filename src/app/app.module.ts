import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './modules/material.module';
import { ViewEmployeesComponent } from './components/view-employees/view-employees.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { EmployeeRegisterComponent } from './components/employee-register/employee-register.component';
import { EmployeeDetailsComponent } from './components/employee-details/employee-details.component';
import { DialogDeleteComponent } from './components/dialog-delete/dialog-delete.component';
import { NgModule } from '@angular/core';
import { ErrorsComponent } from './components/errors/errors.component';

@NgModule({
  declarations: [
    AppComponent,
    ViewEmployeesComponent,
    EmployeeRegisterComponent,
    EmployeeDetailsComponent,
    DialogDeleteComponent,
    ErrorsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MaterialModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
