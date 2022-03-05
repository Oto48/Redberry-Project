import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  constructor(private http: HttpClient) {}

  getSkillsalData() {
    let url = 'https://bootcamp-2022.devtest.ge/api/skills';
    return this.http.get(url);
  }
  getApplications() {
    let testUrl =
      'https://bootcamp-2022.devtest.ge/api/applications?token=89nOpas%7Casdanjjh%5E%26as';
    let url =
      'https://bootcamp-2022.devtest.ge/api/applications?token=287c76fe-7c10-4706-92ef-cd6618db20d9';
    return this.http.get(url);
  }
  postApplications(data: any) {
    let url = 'https://bootcamp-2022.devtest.ge/api/application';
    return this.http.post(url, data);
  }
}
