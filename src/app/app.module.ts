import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListEmpComponent } from './list-emp/list-emp.component';
import { AddEmpComponent } from './add-emp/add-emp.component';
import { ReactiveFormsModule } from '@angular/forms';

import { HttpClientModule } from '@angular/common/http';  
import { EmployeeService } from './services/employee.service';

@NgModule({  
  declarations: [  
    AppComponent,  
    ListEmpComponent,  
    AddEmpComponent  
  ],  
  imports: [  
    BrowserModule,  
    HttpClientModule,  
    AppRoutingModule,  
    ReactiveFormsModule  
  ],  
  providers: [EmployeeService],  
  bootstrap: [AppComponent]  
})  
export class AppModule { }  
  