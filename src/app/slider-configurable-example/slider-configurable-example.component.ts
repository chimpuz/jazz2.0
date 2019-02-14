import {coerceNumberProperty} from '@angular/cdk/coercion';
import {Component} from '@angular/core';

/**
 * @title Configurable slider
 */
@Component({
  selector: 'slider-configurable-example',
  templateUrl: 'slider-configurable-example.component.html',
  styleUrls: ['slider-configurable-example.component.scss'],
})
export class SliderConfigurableExampleComponent {
  autoTicks = false;
  disabled = false;
  invert = false;
  max = 100;
  min = 0;
  showTicks = false;
  step = 1;
  thumbLabel = false;
  value = 0;
  vertical = false;

  get tickInterval(): number | 'auto' {
    return this.showTicks ? (this.autoTicks ? 'auto' : this._tickInterval) : 0;
  }
  set tickInterval(value) {
    this._tickInterval = coerceNumberProperty(value);
  }
  private _tickInterval = 1;
}


/**  Copyright 2018 Google Inc. All Rights Reserved.
    Use of this source code is governed by an MIT-style license that
    can be found in the LICENSE file at http://angular.io/license */
