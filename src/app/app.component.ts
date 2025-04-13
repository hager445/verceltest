import { Component } from '@angular/core';
import { FormsModule, NgModel } from '@angular/forms';

import { ButtonModule } from 'primeng/button';
import { CardModule } from 'primeng/card';
import { CalendarModule } from 'primeng/calendar';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CardModule,
    ButtonModule , CalendarModule,FormsModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'testvercel';
  date1:string = '2/3/2020'
  date2:string = '2/3/2020'
  date3:string = '2/3/2020'
}
