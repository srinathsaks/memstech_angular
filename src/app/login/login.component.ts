import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // loginForm: FormGroup;
  fGroup!: FormGroup;

  constructor(){ }

  ngOnInit(): void {
    this.fGroup = new FormGroup({
      User_Name: new FormGroup({
          First_Name: new FormControl('', Validators.required),
          Last_Name: new FormControl('', Validators.required),
      }),
      username: new FormControl('', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
      Password: new FormControl('', [Validators.minLength(6), Validators.required])
  });
    // this.loginForm = this.formBuilder.group({
    //   username: ['', Validators.required],
    //   password: ['', Validators.required]
    // });

  }
  // get f(){
  //   return this.loginForm.controls;
  // }
  // onSubmit(){
  //   this.submitted= true;
  //   if(this.loginForm.invalid){
  //     return;
  //   }
  // }

  onclick(){
    Swal.fire('Good job!','Successfully login')
  }

}
