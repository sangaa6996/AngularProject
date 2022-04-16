import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-alert',
  templateUrl: './success-alert.component.html',
  styleUrls: ['./success-alert.component.css']
})
export class SuccessAlertComponent implements OnInit {
  warningText: string = "";
  constructor() { }

  ngOnInit(): void {
  }

  onSuccess() {
    this.warningText = "Success!!!";
  }
}
