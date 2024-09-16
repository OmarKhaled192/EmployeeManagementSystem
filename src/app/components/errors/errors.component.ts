import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-errors',
  templateUrl: './errors.component.html',
  styleUrls: ['./errors.component.scss'],
})
export class ErrorsComponent {
  id?: number | null = null;
  constructor(private _ActivatedRoute: ActivatedRoute) {}
  ngOnInit() {
    // Get the id from the route parameters
    this._ActivatedRoute.paramMap.subscribe((params) => {
      this.id = Number(params.get('id'));
      console.log('ID:', this.id);
      if (this.id) {
      }
    });
  }
}
