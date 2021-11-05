import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  rfContact!: FormGroup;
  constructor(private fb:FormBuilder) { }

  ngOnInit(): void {
    this.rfContact = this.fb.group({
      Account: this.fb.control('',Validators.required),
      Password: this.fb.control('',Validators.required),
     
    })
  }
  onSubmit(){
    console.log(this.rfContact);
  }

}
