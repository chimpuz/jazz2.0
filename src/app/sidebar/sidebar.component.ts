import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  @Output() close: EventEmitter<any> = new EventEmitter();
  @Input() createServiceSidebar;

  constructor() { }

  onClose(event) {
    this.createServiceSidebar = event;
    this.close.emit(event);
  }

  preventDefault(event) {
    event.stopPropagation();
    event.preventDefault();
  }

  ngOnInit() {

  }

}
