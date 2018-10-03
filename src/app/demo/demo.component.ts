import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scrumboard1',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  
    tasks: Array<string> = ['Sugar Ray Robinson', 'Muhammad Ali', 'George Foreman', 'Joe Frazier', 'Jake LaMotta', 'Joe Louis', 'Jack Dempsey', 'Rocky Marciano', 'Mike Tyson', 'Oscar De La Hoya'];
    developers: Array<string> = [];
    testers: Array<string> = [];

}
