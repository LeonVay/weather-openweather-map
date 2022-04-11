import { Component, OnDestroy, OnInit, ViewEncapsulation } from "@angular/core";
import { AuthService } from "@libs/api-services";
import { Router } from "@angular/router";

@Component({
  selector: 'weather-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class LoginComponent {
  constructor(private authService: AuthService, private router: Router) {
  }

  login(): void {
    this.authService.login().subscribe((data) => {
      return this.router.navigate(['/content/list']);
    });
  }
}
