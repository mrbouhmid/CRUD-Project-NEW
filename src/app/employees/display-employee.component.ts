import { Component, OnInit, Input, OnChanges, SimpleChanges, Output,EventEmitter } from '@angular/core';
import { Employee } from '../models/employee.model';

@Component({
  selector: 'app-display-employee',
  templateUrl: './display-employee.component.html',
  styleUrls: ['./display-employee.component.css']
})
export class DisplayEmployeeComponent implements OnInit, OnChanges {
  
  selectedEmployee:Employee;
  //@Output() notify : EventEmitter<Employee> = new EventEmitter<Employee>();

  @Input() employee : Employee;

  constructor() { }

  ngOnInit() {
  }

  ngOnChanges(changes: SimpleChanges) {
    const previousEmployee = <Employee>changes.employee.previousValue;
    const currentEmployee = <Employee>changes.employee.currentValue;
  
    console.log('Previous : ' + (previousEmployee ? previousEmployee.name : 'NULL') );
    console.log('Current : ' + currentEmployee.name);
  }


}
