import { Component } from '@angular/core';
import { HttpService } from 'src/app/services/http/http.service';

@Component({
  selector: 'app-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss'],
})
export class ToolbarComponent {
  constructor(private httpService: HttpService) {}

  hasToken() {
    if (this.httpService.token) return true;
    else return false;
  }

  signout() {
    sessionStorage.removeItem('jwt');
    location.reload();
  }
}
