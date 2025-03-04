import { Component } from '@angular/core';
import { HeaderComponent } from './Components/header/header.component';
import { FooterComponent } from './Components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  imports: [HeaderComponent,FooterComponent,RouterModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'Nvfit';
}
