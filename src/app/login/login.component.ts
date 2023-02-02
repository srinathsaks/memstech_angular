import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, NgForm, Validators} from '@angular/forms';
import { Route, Router} from '@angular/router';
import { title } from 'process';
import Swal from 'sweetalert2'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  
  // loginForm: FormGroup;
  // div1:boolean=true;
  username:string;
  password:string;
  fGroup: FormGroup;
  showPassword = false;
  input: any;
  @ViewChild('f') Forms:NgForm;
  snackBar: any;

  constructor(private router:Router){ }

  ngOnInit(): void {
    this.fGroup = new FormGroup({
      User_Name: new FormGroup({
          First_Name: new FormControl('', Validators.required),
          Last_Name: new FormControl('', Validators.required),
      }),
      username: new FormControl('', [Validators.required,Validators.pattern("[^ @]*@[^ @]*")]),
      Password: new FormControl('', [Validators.minLength(6), Validators.required])
      // if(this.username=="srinathsaks@gmail.com" && this.password=="admin")
      // {
      //   console.log('login successfully')
      // }else{
      //     console.log('error!')
      //   }
  });
  }

  onclick(){
    // if(this.username=="srinathsaks@gmail.com" && this.password=="admin"){
      if(this.username!="srinathsaks@gmail.com" && this.password!="admin"){
        Swal.fire({
          icon:'error',
          title:'Oops!',
          text: 'Please check Username and Password!'
        })
        //Swal.fire('Good job!','Successfully login')
      }else if(this.username!="srinathsaks@gmail.com" && this.password=="admin"){
      // Swal.fire('Error!','Please Check username and password!')
        Swal.fire({icon:'error', title:'Oops!',text: 'Please check Username!'})
      }else if(this.username=="srinathsaks@gmail.com" && this.password!="admin"){
        Swal.fire({
          icon:'error',
          title:'Oops!',
          text: 'Please check password!'
        })
      }
      Swal.fire({
        icon:'success',
        title:'Good Job!',
        text: 'Successfully login!'
      })
    // }
  }
  
  // toggleShow(){
  //   //this.showPassword = !this.showPassword;
  //   this.input.type = !this.showPassword ? 'text' : 'password';
  // }

  // credentials(){    
  //   if(this.username=="srinathsaks@gmail.com" && this.password=="admin"){
  //     this.snackBar.open('Login Successful','',{duration:1000})
  //     this.router.navigate(['/customer.component'])
  // }else{
  //   this.snackBar.open('Login error','',{duration:1000})
  // }
  // }


}
