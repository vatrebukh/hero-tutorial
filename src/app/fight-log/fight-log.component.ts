import { Component } from '@angular/core';
import {MessageService} from "../message.service";

@Component({
  selector: 'app-fight-log',
  templateUrl: './fight-log.component.html',
  styleUrls: ['./fight-log.component.css']
})
export class FightLogComponent {
  constructor(public messageService: MessageService) {}
}
