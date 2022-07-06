import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-systemconfig',
  templateUrl: './systemconfig.component.html',
  styleUrls: ['./systemconfig.component.css']
})
export class SystemconfigComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }

  checkall(){}
  backButtonClick(){
    this.router.navigate(['configurations']);
  }
}
