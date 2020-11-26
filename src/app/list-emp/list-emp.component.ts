import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Employee } from '../employee';
import { EmployeeService } from '../services/employee.service';

@Component({
  selector: 'app-list-emp',
  templateUrl: './list-emp.component.html',
  styleUrls: ['./list-emp.component.css']
})
export class ListEmpComponent implements OnInit {

  employees: Employee[];  
  
  constructor(private empService: EmployeeService, private router: Router, ) { }  
  
  ngOnInit() {  
    
    this.empService.getEmployees()
      .subscribe((result : any) => {  
        debugger
        this.employees = result.data;  
      });  
  }  
  deleteEmp(employee: Employee): void {  
    this.empService.deleteEmployees(employee.id)  
      .subscribe(data => {  
        this.employees = this.employees.filter(u => u !== employee);  
      })  
  }  
  
  editEmp(employee: Employee): void {  
    localStorage.removeItem('editEmpId');  
    localStorage.setItem('editEmpId', employee.id.toString());  
    this.router.navigate(['add-emp']);  
  } 
}
