import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { SystemConfigService } from './systemconfig.service';

@Component({
  selector: 'app-systemconfig',
  templateUrl: './systemconfig.component.html',
  styleUrls: ['./systemconfig.component.css']
})
export class SystemconfigComponent implements OnInit {
  dailyForm!: FormGroup;
  weeklyForm!: FormGroup;
  monthlyForm!: FormGroup;
  constructor(
    private router: Router,
    private formBuilder: FormBuilder,
    private systemConfigService: SystemConfigService
  ) { }

  ngOnInit(): void {
    this.dailyForm = this.formBuilder.group({
      noOfDays: [''],
      time: ['']
    });
    this.weeklyForm = this.formBuilder.group({
      date: [''],
      time: [''],
      weekDay: [''],
    });
    this.monthlyForm = this.formBuilder.group({
      date: [''],
      time: [''],
      monthCount: ['']
    });
  }

  checkall() { }
  backButtonClick() {
    this.router.navigate(['configurations']);
  }

  onDailyFormSubmit() {
    console.log(this.dailyForm.value);
    let Obj = {
      "Pattern": "Daily",
      "Job_Name": "",
      "No_Of_Days": this.dailyForm.value.noOfDays,
      "Time": this.dailyForm.value.time
    }
    console.log(Obj);
    this.systemConfigService.saveJobConfig(Obj).subscribe((response) => {
      console.log(response);
      this.dailyForm.reset();
    })
  }

  onWeeklyFormSubmit() {
    console.log(this.weeklyForm.value);
    let Obj = {
      "Pattern": "Weekly",
      "Job_Name": "",
      "No_Of_Weeks": this.weeklyForm.value.date,
      "Time": this.weeklyForm.value.time,
      "Days": this.weeklyForm.value.weekDay
    }
    console.log(Obj);
    this.systemConfigService.saveJobConfig(Obj).subscribe((response) => {
      console.log(response);
      this.weeklyForm.reset();
    })
  }

  onMonthlyFormSubmit() {
    console.log(this.monthlyForm.value);
    let Obj = {
      "Pattern": "Monthly",
      "Job_Name": "",
      "Day": this.monthlyForm.value.date,
      "Time": this.monthlyForm.value.time,
      "Time_Duration": this.monthlyForm.value.monthCount
    }
    console.log(Obj);
    this.systemConfigService.saveJobConfig(Obj).subscribe((response) => {
      console.log(response);
      this.monthlyForm.reset();
    })
  }

  onKeyPress(event: any) {
    const pattern = /[\d]/;
    let inputChar = String.fromCharCode(event.charCode);
    if (!pattern.test(inputChar)) {
      event.preventDefault();
    }
  }
}
