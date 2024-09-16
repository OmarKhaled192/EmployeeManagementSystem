import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-employee-details',
  templateUrl: './employee-details.component.html',
  styleUrls: ['./employee-details.component.scss'],
})
export class EmployeeDetailsComponent {
  constructor(
    private _WebApiService: WebApiService,
    private route: ActivatedRoute
  ) {}
  id: string | null = null;
  allData: Employee = {
    name: '',
    position: '',
    department: '',
    salary: 0,
  };

  ngOnInit(): void {
    // Get the id from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('ID:', this.id);
      if (this.id) {
        this.getData(this.id);
      }
    });
  }

  getData(id: string) {
    this._WebApiService.GetOneEmployee(id).subscribe({
      next: (res) => {
        this.allData = res;
        console.log(this.allData);
      },
    });
  }
}
