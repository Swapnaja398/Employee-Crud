import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Employee } from '../employee';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  
  constructor(private http: HttpClient) { }  
  baseUrl: string = 'http://192.168.1.112:8080/empRegistration';  
  
  getEmployees() {  
    return this.http.get<Object>(this.baseUrl);  
  }  
  deleteEmployees(id: number) {  
    return this.http.delete<Object>(this.baseUrl + id);  
  }  
  
  createUser(employee: Employee) {  
    return this.http.post(this.baseUrl, employee);  
  }  
  getEmployeeById(id: number) {  
    return this.http.get<Employee>(this.baseUrl + '/' + id);  
  }  
  updateEmployee(employee: Employee) {  
    return this.http.put(this.baseUrl + '/' + employee.id, employee);  
  }  
}
