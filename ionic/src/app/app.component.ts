import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import {Tab1Page} from "./pages/tab1/tab1.page";
import {CookieService} from "ngx-cookie-service";
import md5 from 'md5';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  constructor(
    private platform: Platform,
    private cookie: CookieService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
        if (!this.cookie.get('token')) {
          let result = '';
          let characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
          let charactersLength = characters.length;
          for (var i = 0; i < 20; i++) {
            result += characters.charAt(Math.floor(Math.random() * charactersLength));
          }
          this.cookie.set('token', md5(result));
        }
    });

  }
}
