import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormBuilder,FormGroup,Validators } from '@angular/forms';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
signupform!:FormGroup;
  constructor(private _formBuilder:FormBuilder, private _http:HttpClient, private router:Router) { }

  ngOnInit(): void {
    this.signupform = this._formBuilder.group({
      name:['',Validators.required],
      email: ['',Validators.required],
      mobile:['',Validators.required],
      password:['',Validators.required]
    })
  }
//creation of user
  signup(){
    this._http.post<any>("http://localhost:3000/signup",this.signupform.value).subscribe(res=>{
      alert("student regester sucessfully");
      this.signupform.reset();
      this.router.navigate(['login'])
    },err=>{
      alert("something went wrong");
    })

  }

}
