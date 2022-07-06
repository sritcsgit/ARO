import { Component, OnInit, ViewChild } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
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

  constructor(private schedulingConfigService: SchedulingConfigService, private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.dailyForm = this.formBuilder.group({
      noOfDays: ['1'],
      time: ['1:30 AM']
    });
    this.weeklyForm = this.formBuilder.group({
      date: ['1'],
      time: ['1:30 AM'],
      weekDay: ['']
    });
    this.monthlyForm = this.formBuilder.group({
      date: ['1'],
      time: ['1:30 AM'],
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
    // let dailyObj = {
    //   'Pattern': 'Daily',
    //   "Job_Name": "Hyper-v Backup Job",
    //   "No_Of_Days": this.dailyForm.value.noOfDays,
    //   "Time": this.dailyForm.value.time
    // }
    // this.schedulingConfigService.saveDailyData(dailyObj).subscribe((response)=>{
    //   console.log(dailyObj)
    // })
  }

  onWeeklyFormSubmit() {
    console.log(this.weeklyForm.value);
  }

  onMonthlyFormSubmit() {
    console.log(this.monthlyForm.value);
  }
}

