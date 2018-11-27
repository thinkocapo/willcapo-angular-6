import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

import { AuthenticationService, I18nService } from '@app/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  menuHidden = true;
  navbarItems = ['RESUME', 'HEALTHCARE', 'BLOCKCHAIN', 'CODE']
  currentNavbarItem = 'MENU'
  textLeft = false

  constructor(private router: Router,
              private authenticationService: AuthenticationService,
              private i18nService: I18nService) { }

  ngOnInit() {

    const self = this
    window.addEventListener("resize", function(event){
      if (window.innerWidth > 400) {
        self.textLeft = false
      }
    });
  }

  // w3 mobile navbar
  myFunction() {
    console.log("my function...")
    var x = document.getElementById("myLinks");
    if (x.style.display === "block") {
      x.style.display = "none";
    } else {
      x.style.display = "block";
    }
  }

  selectMenuOption(item: string) {
    console.log("selectMenuOption", item)
  }

  toggleMenu() {
    this.menuHidden = !this.menuHidden;
    this.textLeft = true
  }

  setLanguage(language: string) {
    this.i18nService.language = language;
  }

  logout() {
    this.authenticationService.logout()
      .subscribe(() => this.router.navigate(['/login'], { replaceUrl: true }));
  }

  // get currentLanguage(): string {
  //   return this.i18nService.language;
  // }

  // get languages(): string[] {
  //   return this.i18nService.supportedLanguages;
  // }

  get username(): string | null {
    const credentials = this.authenticationService.credentials;
    return credentials ? credentials.username : null;
  }

}
