import { Component, OnInit, AfterViewInit } from '@angular/core';
import {coerceNumberProperty} from '@angular/cdk/coercion';
import {MatSnackBar} from '@angular/material';
import {MatSnackBarModule} from '@angular/material/snack-bar';
import { Chart } from 'chart.js';
import { Injectable } from '@angular/core';





@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {
  message = 'Unable to create service since this in only a POC';
  sliderValue = 0;
  chartOpen = false;
  show = false;
  createServiceSidebar = false;

  constructor(
    public snackBar: MatSnackBar,
  ) {}

  openSidebar() {
    this.createServiceSidebar = true;
  }
  openSnackBar(message: string, action: string, event) {
    event.preventDefault();

    this.snackBar.open(message, action, {
      duration: 200,
    });
  }

  ngAfterViewInit() {

  }
}
