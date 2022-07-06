import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import { SchedulingConfigService } from './scheduling-config.service';

@Component({
  selector: 'app-scheduling-config',
  templateUrl: './scheduling-config.component.html',
  styleUrls: ['./scheduling-config.component.css']
})
export class SchedulingConfigComponent implements OnInit {
  displayColumns: string[] = ['Job_Name', 'Job_Start', 'Job_End', 'Status', 'Actions'];
  jobSchedulers!: MatTableDataSource<any>;
  pageSize = 10;
  @ViewChild(MatPaginator, { static: false }) paginator!: MatPaginator;
  @ViewChild(MatSort, { static: false }) sort!: MatSort;
  dailyForm!: FormGroup;
  weeklyForm!: FormGroup;
  monthlyForm!: FormGroup;
  jobName: any = "Hyper-V Backup Job";

  constructor(private schedulingConfigService: SchedulingConfigService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dailyForm = this.formBuilder.group({
      noOfDays: [''],
      time: ['']
    });
    this.weeklyForm = this.formBuilder.group({
      date: [''],
      time: [''],
      weekDay: ['']
    });
    this.monthlyForm = this.formBuilder.group({
      date: [''],
      time: [''],
      monthCount: ['1']
    });
    this.getJobSchedulers();
  }

  getJobSchedulers() {
    this.schedulingConfigService.getJobScheduler().subscribe((response) => {
      this.jobSchedulers = new MatTableDataSource(response);
      this.jobSchedulers.paginator = this.paginator;
      this.jobSchedulers.sort = this.sort;
    })
  }

  onDailyFormSubmit() {
    console.log(this.dailyForm.value);
    let Obj = {
      "Pattern": "Daily",
      "Job_Name": this.jobName,
      "No_Of_Days": this.dailyForm.value.noOfDays,
      "Time": this.dailyForm.value.time
    }
    console.log(Obj)
    this.schedulingConfigService.saveJobConfig(Obj).subscribe((response) => {
      console.log(response);
      this.dailyForm.reset();
    })
  }

  onWeeklyFormSubmit() {
    console.log(this.weeklyForm.value);
    let Obj = {
      "Pattern": "Weekly",
      "Job_Name": this.jobName,
      "No_Of_Weeks": this.weeklyForm.value.date,
      "Time": this.weeklyForm.value.time,
      "Days": this.weeklyForm.value.weekDay
    }
    console.log(Obj);
    this.schedulingConfigService.saveJobConfig(Obj).subscribe((response) => {
      console.log(response);
      this.weeklyForm.reset();
    })
  }

  onMonthlyFormSubmit() {
    console.log(this.monthlyForm.value);
    let Obj = {
      "Pattern": "Monthly",
      "Job_Name": this.jobName,
      "Day": this.monthlyForm.value.date,
      "Time": this.monthlyForm.value.time,
      "Time_Duration": this.monthlyForm.value.monthCount
    }
    console.log(Obj);
    this.schedulingConfigService.saveJobConfig(Obj).subscribe((response) => {
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

