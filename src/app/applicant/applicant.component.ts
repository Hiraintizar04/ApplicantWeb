import { Component, OnInit } from '@angular/core';
import { Applicant } from '../shared/applicant.model';
import { ApplicantService } from '../shared/applicant.service';
import { ToastrService}  from 'ngx-toastr';
// Capitalize Input!


@Component({
  selector: 'app-applicant',
  templateUrl: './applicant.component.html',
  styles: [
  ]
})
export class ApplicantComponent implements OnInit {
 
  
  
 
  constructor(  public service: ApplicantService , private toastr:ToastrService) { }

  ngOnInit(): void {
  
  }

  
  populateForm(selectedRecord : Applicant)
  {
    this.service.formData =  Object.assign({},selectedRecord);
     
  }

  
  onDelete(id:number)
  {
    if(confirm("Are you sure you want to delete the required data?"))
    {
    this.service.deleteApplicantdata(id)
    .subscribe(
      res =>
      {
     this.service.refreshList();
     this.toastr.error("Data Deleted Successfully" , 'Applicant Data');
     ;
     
      },
      err =>
      {
        console.log(err)
      }
    )
  }
}



}
