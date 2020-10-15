import { Component, OnInit } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { map, filter } from 'rxjs/operators';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  links = ['dashboard', 'browse', 'profile'];
  activeLink = 'Dashboard';

  constructor(router: Router) {
    router.events
      .pipe(
        filter((event) => event instanceof NavigationEnd),
        map(({ url }: NavigationEnd) => url.split('/')[1])
      )
      .subscribe((activeLink) => {
        this.activeLink = activeLink;
      });
  }

  ngOnInit(): void {}
}
