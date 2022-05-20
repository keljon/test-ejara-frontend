import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['../app.component.css']
})

export class LoginComponent implements OnInit {

  constructor(private formBuilder: FormBuilder, private http: HttpClient, private router: Router) { }

  registerForm:any = FormGroup;
  submitted = false;

  get f() {
    return this.registerForm.controls;
  }

  ngOnInit(): void {
    const user = localStorage.getItem("test-ejara-user");
    if(user!=null) this.router.navigate(['/home']);
    else{ 
      $("#signout").css({"display":"none"});
    }

    this.registerForm = this.formBuilder.group({
      email: ['', [Validators.required, Validators.email]],
      password: ['', [Validators.required]]
    });
  }

  onSubmit(){
    this.submitted = true;
    if(this.registerForm.invalid){
      return;
    }

    if(this.submitted){
      const headers = {
        Authorization : 'Bearer token'
      }
      const body = {
          email : this.registerForm.value.email,
          password : this.registerForm.value.password,
      };

      this.http.post<any>(
        'https://test-ejara-backend-new.herokuapp.com/api/login',body, {headers}
      )
      .subscribe(response => {
        if(response.success===true){
          localStorage.setItem("test-ejara-user", JSON.stringify(response.data));
          this.router.navigate(['/home']);
          $("#signout").css({"display":"block"});
        }
        else{
          alert("Unavailaible parameters");
        }
        console.log(response);
      });
      
    }
    
  }

}
