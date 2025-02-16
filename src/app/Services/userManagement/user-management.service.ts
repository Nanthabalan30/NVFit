import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root' // ✅ Provided in the root injector
})
export class UserManagementService {
  constructor(public http: HttpClient) { }

  CreateUser(RegisterModel: any) {
    return this.http.post<object>("http://localhost:3000/Register", RegisterModel);
  }
}