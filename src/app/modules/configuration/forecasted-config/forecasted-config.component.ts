import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-forecasted-config',
  templateUrl: './forecasted-config.component.html',
  styleUrls: ['./forecasted-config.component.css']
})
export class ForecastedConfigComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  backButtonClick(){
    this.router.navigate(['configurations']);
  }
}
