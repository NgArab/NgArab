import { Injectable } from '@angular/core';
import { Observable, BehaviorSubject } from 'rxjs';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from '@env/environment';
@Injectable({
  providedIn: 'root',
})
export class ApiService {
  baseUrl = environment.baseURL;

  constructor(private http: HttpClient) {}

  getExam(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/exams', data);
  }
  answerExam(data: any): Observable<any> {
    return this.http.post(this.baseUrl + '/exam_answers', data);
  }
}
