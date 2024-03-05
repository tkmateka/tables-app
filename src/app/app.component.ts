import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  tableData: any;
  formFields: any = [
    { label: 'first name', type: 'text', fieldType: 'input', placeholder: 'Enter your full name', required: true, minLength: 3 },
    { label: 'gender', fieldType: 'select', placeholder: 'Select your Gender', required: true, options: ['Male', 'Female'], multiple: false },
    { label: 'date of birth', fieldType: 'datePicker', placeholder: 'Select your DOB', required: true, max: new Date() },
    { label: 'first name', type: 'text', fieldType: 'input', placeholder: 'Enter your full name', required: true, minLength: 3 },
    { label: 'gender', fieldType: 'select', placeholder: 'Select your Gender', required: true, options: ['Male', 'Female'], multiple: false },
    { label: 'date of birth', fieldType: 'datePicker', placeholder: 'Select your DOB', required: true, max: new Date() },
    { label: 'first name', type: 'text', fieldType: 'input', placeholder: 'Enter your full name', required: true, minLength: 3 },
    { label: 'gender', fieldType: 'select', placeholder: 'Select your Gender', required: true, options: ['Male', 'Female'], multiple: false },
    { label: 'date of birth', fieldType: 'datePicker', placeholder: 'Select your DOB', required: true, max: new Date() },
    { label: 'first name', type: 'text', fieldType: 'input', placeholder: 'Enter your full name', required: true, minLength: 3 },
    { label: 'gender', fieldType: 'select', placeholder: 'Select your Gender', required: true, options: ['Male', 'Female'], multiple: false },
    { label: 'date of birth', fieldType: 'datePicker', placeholder: 'Select your DOB', required: true, max: new Date() },
    { label: 'first name', type: 'text', fieldType: 'input', placeholder: 'Enter your full name', required: true, minLength: 3 },
    { label: 'gender', fieldType: 'select', placeholder: 'Select your Gender', required: true, options: ['Male', 'Female'], multiple: false },
    { label: 'date of birth', fieldType: 'datePicker', placeholder: 'Select your DOB', required: true, max: new Date() },
    { label: 'first name', type: 'text', fieldType: 'input', placeholder: 'Enter your full name', required: true, minLength: 3 },
    { label: 'gender', fieldType: 'select', placeholder: 'Select your Gender', required: true, options: ['Male', 'Female'], multiple: false },
    { label: 'date of birth', fieldType: 'datePicker', placeholder: 'Select your DOB', required: true, max: new Date() },
  ]

  constructor() {
    this.tableData = [
      {
        title: 'Users',
        dataSource: [
          { id: 1, name: 'User', progress: 0, fruit: 'apple' },
          { id: 2, name: 'tukiso2', progress: 44, fruit: 'mango' },
          { id: 3, name: 'tukiso3', progress: 27, fruit: 'banana' },
          { id: 4, name: 'tukiso4', progress: 68, fruit: 'grapes' },
          { id: 5, name: 'tukiso5', progress: 90, fruit: 'tomatoe' }
        ],
        displayedColumns: ['id', 'name', 'progress', 'fruit'],
        displayedHeaders: ['Id', 'Name', 'Progress', 'Fruit']
      },
      {
        title: 'Patients',
        dataSource: [
          { id: 1, name: 'Patient', progress: 50, fruit: 'apple' },
          { id: 2, name: 'tukiso2', progress: 44, fruit: 'mango' },
          { id: 3, name: 'tukiso3', progress: 27, fruit: 'banana' },
          { id: 4, name: 'tukiso4', progress: 68, fruit: 'grapes' },
          { id: 5, name: 'tukiso5', progress: 90, fruit: 'tomatoe' }
        ],
        displayedColumns: ['id', 'name', 'progress', 'fruit'],
        displayedHeaders: ['Id', 'Name', 'Progress', 'Fruit']
      },
      {
        title: 'Admin Panel',
        dataSource: [
          { id: 1, name: 'Admin', progress: 100, fruit: 'apple' },
          { id: 2, name: 'tukiso2', progress: 44, fruit: 'mango' },
          { id: 3, name: 'tukiso3', progress: 27, fruit: 'banana' },
          { id: 4, name: 'tukiso4', progress: 68, fruit: 'grapes' },
          { id: 5, name: 'tukiso5', progress: 90, fruit: 'tomatoe' }
        ],
        displayedColumns: ['id', 'name', 'progress', 'fruit'],
        displayedHeaders: ['Id', 'Name', 'Progress', 'Fruit']
      }
    ]
  }
}