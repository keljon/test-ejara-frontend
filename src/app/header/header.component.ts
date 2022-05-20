import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['../app.component.css']
})
export class HeaderComponent implements OnInit {
  emitter: string = "";
  constructor(private router: Router) { }

  ngOnInit(): void {
    const userlocal = localStorage.getItem("test-ejara-user");
    if(userlocal!=null) {
      const user = JSON.parse(userlocal);
      this.emitter = user.surname+' '+user.name;
    }
  }

  logout(){
    localStorage.removeItem("test-ejara-user");
    this.router.navigate(['/login']);
  }

}
