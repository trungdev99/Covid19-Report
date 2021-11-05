import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css'],
})
export class RegisterComponent implements OnInit {
  rfContact!: FormGroup;
  constructor(private fb: FormBuilder) {}
  ngOnInit(): void {
    this.rfContact = this.fb.group({
      UserName: this.fb.control('', Validators.required),
      Account: this.fb.control('', Validators.required),
      Password: this.fb.control('', Validators.required),
      
    });
  }
  onSubmit() {
    console.log(this.rfContact);
  }
}
