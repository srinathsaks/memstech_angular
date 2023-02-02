import { Component, OnInit, ViewChild } from '@angular/core';

import Swal from 'sweetalert2';
import {NgForm} from '@angular/forms';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {
  @ViewChild('f') Forms: NgForm;
  isShowDivIf = false;  
  user={
    name: "",
    lname:"",
    email: "",
    passw:"",
    dob:"",
    gender:"",
    phoneNumber: "",
    address: "",
  }

  constructor() { }

  ngOnInit(): void {
  }
  OnClick(){
    Swal.fire('Great, You Successfully Submitted')
  }
  toggleDisplayDivIf(){
    this.isShowDivIf = !this.isShowDivIf; 
  }
  submitted = false;
  onSubmit() {
    this.submitted = true;
    this.user.name = this.Forms.value.name;
    this.user.lname = this.Forms.value.lname;
    this.user.email = this.Forms.value.email;
    this.user.passw = this.Forms.value.passw;
    this.user.dob = this.Forms.value.dob;
    this.user.gender = this.Forms.value.gender;
    this.user.phoneNumber = this.Forms.value.phoneNumber;
    this.user.address  = this.Forms.value.address;
    console.log(this.Forms.value.name, this.Forms.value.lname,this.Forms.value.email, this.Forms.value.passw,
      this.Forms.value.dob, this.Forms.value.gender, this.Forms.value.phoneNumber, this.Forms.value.address)
      this.Forms.reset();
  }

}
