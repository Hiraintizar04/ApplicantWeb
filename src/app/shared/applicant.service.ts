import { Injectable } from '@angular/core';
import { Applicant } from './applicant.model';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ApplicantService {
  

  
  constructor(private http: HttpClient) { }

  

  readonly baseURL = 'http://localhost:5000/api/Applicant'
  

  
  formData:Applicant = new Applicant();
   list : Applicant [];
  addApplicantData()
  {
    console.log (this.formData)
   return this.http.post(this.baseURL, this.formData)
   
    
  }
  // this method updates the selected data using its id
  updateApplicantData()
  {
    console.log (this.formData)
   return this.http.put(`${this.baseURL}/ ${this.formData.applicantId}`, this.formData)
    
  }

  // this method deletes the selected record using its id
  deleteApplicantdata(id:number)
  {
    return this.http.delete(`${this.baseURL}/ ${id}`)
    
  }

  // 
  getCountries(){
    return this.http.get('https://restcountries.eu/rest/v2/all');
  }

 
  refreshList()
  {
    this.http.get(this.baseURL)
    .toPromise()
    .then(res => this.list = res as Applicant[]);
  }
   
  
   



}
