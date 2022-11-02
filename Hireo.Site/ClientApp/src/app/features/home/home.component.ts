import { Component, OnInit } from '@angular/core';
import { UntypedFormBuilder, UntypedFormGroup } from '@angular/forms';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  searchForm: UntypedFormGroup = this._formBuilder.group({
    select: [],
  });

  constructor(private _formBuilder: UntypedFormBuilder) {}

  values = [
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 3, v: 'Three' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 1, v: 'One' },
    { index: 2, v: 'Two' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
    { index: 3, v: 'Three' },
  ];

  selected = this.values[0];

  ngOnInit(): void {
    this.searchForm.get('select')?.setValue(this.selected.index);
  }

  onSubmit(): void {
    const index: number = this.searchForm.get('select')?.value;
    this.selected = this.values[index];

    console.log(this.selected);
  }
}
