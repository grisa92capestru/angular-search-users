import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { API_URL } from "src/app/constants";
import { UserModel } from "src/app/user/models/user";

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getUsers() {
    return this.http.get<UserModel[]>(API_URL);
  }
}