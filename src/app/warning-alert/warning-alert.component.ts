import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-warning-alert',
  templateUrl: './warning-alert.component.html',
  styleUrls: ['./warning-alert.component.css']
})
export class WarningAlertComponent implements OnInit {
  warningText: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onWarning(){
    this.warningText = "Warning!!!";
  }
}
