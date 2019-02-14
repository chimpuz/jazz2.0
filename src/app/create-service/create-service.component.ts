import { Component, OnInit, AfterViewInit, Output, EventEmitter } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {MatSnackBar} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Chart } from 'chart.js';
import { Injectable } from '@angular/core';

@Component({
  selector: 'app-create-service',
  templateUrl: './create-service.component.html',
  styleUrls: ['./create-service.component.scss']
})
export class CreateServiceComponent implements OnInit {

  message = 'Unable to create service since this is only a POC';
  sliderValue = 0;
  @Output() close: EventEmitter<any> = new EventEmitter();

  show = false;

  constructor(
    public snackBar: MatSnackBar,
  ) {

  }

  openSnackBar(message: string, action: string, event) {
    event.preventDefault();

    this.snackBar.open(message, action, {
      duration: 2000,
    });
  }

  onClose() {
    this.close.emit(false);
  }

  ngOnInit() {

  }

}
