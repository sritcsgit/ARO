import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-distribution-center',
  templateUrl: './distribution-center.component.html',
  styleUrls: ['./distribution-center.component.css']
})
export class DistributionCenterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  backButtonClick(){
    this.router.navigate(['masters']);
  }
}

