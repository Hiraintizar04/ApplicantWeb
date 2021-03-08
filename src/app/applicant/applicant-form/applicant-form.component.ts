import { Component, OnInit } from '@angular/core';
import { Form, NgForm } from '@angular/forms';
import { ApplicantService } from 'src/app/shared/applicant.service';
import {ToastrService} from 'ngx-toastr';
import { Applicant } from 'src/app/shared/applicant.model'
import { countriesStore } from 'src/app/shared/countries-store';


@Component({
  selector: 'app-applicant-form',
  templateUrl: './applicant-form.component.html',
  styles: [
  ]
})
export class ApplicantFormComponent implements OnInit {

    count = countriesStore;
    countries: any[] =[];
    URL= "https://restcountries.eu/rest/v2/name";
  constructor(public service: ApplicantService ,  private toastr: ToastrService) 
   
   {

   }
    


  ngOnInit(): void {
    this.service.refreshList();

   if(this.count.countries.
    length==0)
    {
this.service.getCountries().subscribe(
  res =>
  {
    this.count.setCountries(res);
    console.log(this.count);
  }
)
    }
    
  }


onSubmit(form:NgForm)
{
  if(this.service.formData.applicantId == 0)
 this.insertRecord(form);

 else
 this.updateRecord(form);

  }

  insertRecord(form:NgForm)
  {

    this.service.addApplicantData().subscribe(
      res =>
      {
        this.toastr.success('Data Entered Successfully' , 'Applicant Data');
        this.service.refreshList();
        this.resetForm(form);
      },
        
      err => {
        if(err.name=="HttpErrorResponse"){
          this.toastr.error('Connection Refused ', 'Http Error Response');
        }
        
        }

    );
  }

  updateRecord(form:NgForm)
  {
    this.service.refreshList();
    this.service.updateApplicantData().subscribe(
      res =>
      {
        this.toastr.info('Data Updated Successfully' , 'Applicant Data');
        this.service.refreshList();
        this.resetForm(form);
      },
      err => {console.log(err)}
    );
  }
resetForm(form:NgForm){
  
  
  
    form.form.reset();
    this.service.formData = new Applicant();
  

}
  }


       
    
  

