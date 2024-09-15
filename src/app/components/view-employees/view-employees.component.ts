import { Component, ViewChild } from '@angular/core';
import { WebApiService } from '../../services/web-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';

@Component({
  selector: 'app-view-employees',
  templateUrl: './view-employees.component.html',
  styleUrls: ['./view-employees.component.scss'],
})
export class ViewEmployeesComponent {
  displayedColumns: string[] = [
    'name',
    'position',
    'department',
    'salary',
    'actions',
  ];
  @ViewChild(MatPaginator) paginator?: MatPaginator;
  dataSource?: any;

  constructor(private _WebApiService: WebApiService) {}
  ngOnInit(): void {
    //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
    //Add 'implements OnInit' to the class.
    this.getEmployees();
  }

  getEmployees() {
    this._WebApiService.GetEmployees().subscribe({
      next: (res) => {
        console.log(res);
        // this.dataSource = res;
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.paginator = this.paginator;
      },
    });
  }
}
