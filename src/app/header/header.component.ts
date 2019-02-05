import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user: string;

  constructor(private authService: AuthService) { }

  ngOnInit() {
    this.authService.getUser()
      .subscribe((user) => this.user = user);
  }

  logout() {
    this.authService.logout();
  }

}
