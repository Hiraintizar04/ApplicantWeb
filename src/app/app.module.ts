import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms'
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ApplicantComponent } from './applicant/applicant.component';
import { ApplicantFormComponent } from './Applicant/applicant-form/applicant-form.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {  HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    ApplicantComponent,
    ApplicantFormComponent
  ],
  imports: [
    HttpClientModule,
    ToastrModule.forRoot(),
    BrowserModule,
    FormsModule, 
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
