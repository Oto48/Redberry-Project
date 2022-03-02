import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  public currentStep = 0;
  step: number = 1;
  multiForm = new FormGroup({
    userDetails: new FormGroup({
      first_name: new FormControl('', Validators.required),
      last_name: new FormControl(''),
      phone: new FormControl(''),
    }),
  });

  constructor() {}

  ngOnInit(): void {}

  next() {
    this.currentStep += 1;
    if (this.multiForm.controls['userDetails'].invalid && this.step == 1) {
      return;
    }
    this.step = this.step + 1;
  }
}
