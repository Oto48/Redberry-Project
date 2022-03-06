import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import {
  ControlContainer,
  FormArray,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { StepperComponent } from '@progress/kendo-angular-layout';
import { ApiService } from 'src/app/services/api.service';
import { SubmitGuardService } from 'src/app/services/submit-guard.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
})
export class FormComponent implements OnInit {
  currentStep = 0;
  stepper: StepperComponent;
  steps = [{}, {}, {}, {}, {}];
  step: number = 1;
  skills: any;
  clicked: boolean = false;
  multiForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl('', Validators.required),
    email: new FormControl('', Validators.required),
    phone: new FormControl('', Validators.required),
    skills: new FormArray([], Validators.required),
    work_preference: new FormControl('', Validators.required),
    had_covid: new FormControl('', Validators.required),
    vaccinated: new FormControl('', Validators.required),
    will_organize_devtalk: new FormControl('', Validators.required),
    devtalk_topic: new FormControl('', Validators.required),
    something_special: new FormControl('', Validators.required),
  });

  skillsForm = new FormGroup({
    id: new FormControl('', Validators.required),
    experience: new FormControl('', Validators.required),
  });

  constructor(
    private api: ApiService,
    private router: Router,
    private guard: SubmitGuardService
  ) {}

  ngOnInit(): void {
    this.api.getSkillsalData().subscribe((data) => {
      console.log(data);
      this.skills = data;
    });
    this.api.getApplications().subscribe((data) => {
      console.log(data);
    });
  }

  previous() {
    if (this.step === 1) {
      this.router.navigate(['home']);
    } else {
      this.step = this.step - 1;
      this.currentStep -= 1;
    }
  }
  next() {
    this.clicked = true;
    if (
      (this.multiForm.get('first_name')?.invalid ||
        this.multiForm.get('last_name')?.invalid ||
        this.multiForm.get('email')?.invalid) &&
      this.step == 1
    ) {
      return;
    }
    if (this.multiForm.get('skills')?.invalid && this.step == 2) {
      return;
    }
    if (
      (this.multiForm.get('work_preference')?.invalid ||
        this.multiForm.get('had_covid:')?.invalid ||
        this.multiForm.get('vaccinated')?.invalid) &&
      this.step == 3
    ) {
      return;
    }
    this.currentStep += 1;
    this.step = this.step + 1;
    this.clicked = false;

    // will_organize_devtalk: new FormControl('', Validators.required),
    // devtalk_topic: new FormControl('', Validators.required),
    // something_special: new FormControl('', Validators.required),
  }

  post() {
    const data = this.multiForm.value;
    data.token = '287c76fe-7c10-4706-92ef-cd6618db20d9';
    this.guard.setEnterStatus(true);
    console.log(data);
    this.api.postApplications(data).subscribe(
      (data) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
    this.router.navigate(['submit']);
  }

  addSkillFormGroup(): FormGroup {
    let skills = new FormGroup({
      id: new FormControl(this.skillsForm.value.id),
      experience: new FormControl(this.skillsForm.value.experience),
    });
    return skills;
  }

  addSkillButton() {
    if (
      this.skillsForm.get('id')?.invalid ||
      this.skillsForm.get('experience')?.invalid
    ) {
      return;
    }
    (<FormArray>this.multiForm.get('skills')).push(this.addSkillFormGroup());
  }

  addCovidDate() {
    if (!this.multiForm.get('had_covid_at')) {
      this.multiForm.addControl(
        'had_covid_at',
        new FormControl('', [Validators.required])
      );
    }
  }

  removeCovidDate() {
    if (this.multiForm.get('had_covid_at')) {
      this.multiForm.removeControl('had_covid_at');
    }
  }

  addVaccineDate() {
    if (!this.multiForm.get('vaccinated_at')) {
      this.multiForm.addControl(
        'vaccinated_at',
        new FormControl('', [Validators.required])
      );
    }
  }

  removeVaccineDate() {
    this.multiForm.removeControl('vaccinated_at');
  }
}
