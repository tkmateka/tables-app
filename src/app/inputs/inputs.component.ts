import { Component, Input } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-inputs',
  templateUrl: './inputs.component.html',
  styleUrls: ['./inputs.component.scss']
})
export class InputsComponent {
  dynamicForm: FormGroup;
  @Input() inputFields: any;

  constructor() {
    this.dynamicForm = new FormGroup({})
  }
}
