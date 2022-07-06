import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-store-master',
  templateUrl: './store-master.component.html',
  styleUrls: ['./store-master.component.css']
})
export class StoreMasterComponent implements OnInit {

  constructor(
    private router: Router,
  ) { }

  ngOnInit(): void {
  }
  backButtonClick(){
    this.router.navigate(['masters']);
  }
}
