import { Component, OnInit } from '@angular/core';
import { switchAll } from 'rxjs';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  OnClick(){
    Swal.fire('Great, You Successfully Submitted')
  }

}
