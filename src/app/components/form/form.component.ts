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
  testData = {
    token: '287c76fe-7c10-4706-92ef-cd6618db20d9',
    first_name: 'gela',
    last_name: 'gelashvili',
    email: 'gelashvili@gela.ge',
    phone: '+995591933382',
    skills: [
      {
        id: 1,
        experience: 3,
      },
    ],
    work_preference: 'from_home',
    had_covid: true,
    had_covid_at: '2022-02-23',
    vaccinated: true,
    vaccinated_at: '2022-02-23',
    will_organize_devtalk: true,
    devtalk_topic: 'I would ...',
    something_special: 'I am special!',
  };
  multiForm = new FormGroup({
    first_name: new FormControl('', Validators.required),
    last_name: new FormControl(''),
    email: new FormControl(''),
    phone: new FormControl(''),
    skills: new FormArray([]),
    work_preference: new FormControl(''),
    had_covid: new FormControl(''),
    vaccinated: new FormControl(''),
    will_organize_devtalk: new FormControl(''),
    devtalk_topic: new FormControl(''),
    something_special: new FormControl(''),
  });

  skillsForm = new FormGroup({
    id: new FormControl(),
    experience: new FormControl(),
  });

  constructor(private api: ApiService, private router: Router) {}

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
    this.currentStep += 1;
    this.step = this.step + 1;
  }

  post() {
    const data = this.multiForm.value;
    data.token = '287c76fe-7c10-4706-92ef-cd6618db20d9';
    console.log(data);
    console.log(this.testData);
    this.api.postApplications(data).subscribe(
      (data) => {
        console.log(data);
      },
      (error: any) => console.log(error)
    );
  }

  addSkillFormGroup(): FormGroup {
    let skills = new FormGroup({
      id: new FormControl(this.skillsForm.value.id),
      experience: new FormControl(this.skillsForm.value.experience),
    });
    return skills;
  }

  addSkillButton() {
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
