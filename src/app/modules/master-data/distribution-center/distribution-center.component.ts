import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribution-center',
  templateUrl: './distribution-center.component.html',
  styleUrls: ['./distribution-center.component.css']
})
export class DistributionCenterComponent implements OnInit {
  distributionCenterform!: FormGroup;
  constructor(
    private router: Router, private formBuilder: FormBuilder
  ) { }

  ngOnInit(): void {
    this.distributionCenterform = this.formBuilder.group({
      country: [""],
      state: [""],
      city: [''],
      distributionCenterID: [''],
      distributionCentralName: ['']
    });
  }
  backButtonClick() {
    this.router.navigate(['masters']);
  }

  onDistributionCenterSubmit() {
    console.log(this.distributionCenterform.value)
  }
}

