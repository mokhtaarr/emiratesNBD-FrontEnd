import { Component } from '@angular/core';
import { AccountService } from '../../Services/account.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {


  constructor(public accountService:AccountService){

  }
}
