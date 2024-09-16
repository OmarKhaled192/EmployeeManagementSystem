import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Employee } from '../interfaces/employee';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class WebApiService {
  baseUrl?: string;
  endPoint?: string;
  constructor(protected http: HttpClient) {
    this.baseUrl = 'https://task-dot-fe-task-428108.uc.r.appspot.com';
    this.endPoint = 'employees';
  }

  CreateEmployee(body: Employee): Observable<any> {
    return this.http.post(`${this.baseUrl}/${this.endPoint}`, body);
  }

  GetEmployees(): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.endPoint}`);
  }

  GetOneEmployee(id: string): Observable<any> {
    return this.http.get(`${this.baseUrl}/${this.endPoint}/${id}`);
  }

  UpdateEmployee(id: string, body: Employee): Observable<any> {
    return this.http.put(`${this.baseUrl}/${this.endPoint}/${id}`, body);
  }

  DeleteEmployee(id: string): Observable<any> {
    return this.http.delete(`${this.baseUrl}/${this.endPoint}/${id}`);
  }
}
