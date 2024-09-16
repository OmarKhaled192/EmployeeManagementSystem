import { Component, ViewChild } from '@angular/core';
import { WebApiService } from '../../services/web-api.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatTableDataSource } from '@angular/material/table';
import { MatDialog } from '@angular/material/dialog';
import { DialogDeleteComponent } from '../dialog-delete/dialog-delete.component';

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

  constructor(
    private _WebApiService: WebApiService,
    private dialog: MatDialog
  ) {}
  ngOnInit(): void {
    this.getEmployees();

    this.dialog.afterAllClosed.subscribe({
      next: () => {
        this.getEmployees();
      },
    });
  }

  openDialog(
    enterAnimationDuration: string,
    exitAnimationDuration: string,
    id: number
  ): void {
    this.dialog.open(DialogDeleteComponent, {
      width: '30%',
      enterAnimationDuration,
      exitAnimationDuration,
      data: { id },
    });
  }

  getEmployees() {
    this._WebApiService.GetEmployees().subscribe({
      next: (res) => {
        console.log(res);
        this.dataSource = new MatTableDataSource<any>(res);
        this.dataSource.paginator = this.paginator;
      },
    });
  }
}
