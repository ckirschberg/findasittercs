import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Baby } from "./entities/baby";

@Injectable()
export class UsersService {
  constructor(private http: HttpClient) {
  }
  updateBaby() {
  }

  deleteBaby() {
  }

  createBaby(baby: Baby) {
    baby.customerId = '3';
    return this.http.post("http://angular2api2.azurewebsites.net/api/internships", baby);
  }

  getUsers() {
    return this.http.get("http://angular2api1.azurewebsites.net/api/internships/getall");
  }

}