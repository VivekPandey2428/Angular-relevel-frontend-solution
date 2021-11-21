import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'relevel';
  data=[
    {id:Math.random(),heading:"Ticket1",desc:"Please add a Card here"},
    {id:Math.random(),heading:"Ticket2",desc:"Card already added"},
    {id:Math.random(),heading:"Ticket3",desc:"Card already added"},
  ]
}
