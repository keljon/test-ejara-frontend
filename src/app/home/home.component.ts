import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['../app.component.css']
})
export class HomeComponent implements OnInit {

  emitter: string = "";

  constructor() { }

  ngOnInit(): void {

    const userlocal = localStorage.getItem("test-ejara-user");
    if(userlocal!=null) {
      const user = JSON.parse(userlocal);
      this.emitter = user.surname+' '+user.name;
    }

  }

}
