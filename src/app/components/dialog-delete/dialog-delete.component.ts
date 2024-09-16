import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-dialog-delete',
  templateUrl: './dialog-delete.component.html',
  styleUrls: ['./dialog-delete.component.scss'],
})
export class DialogDeleteComponent {
  constructor(
    public dialogRef: MatDialogRef<DialogDeleteComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { id: number },
    private _WebApiService: WebApiService,
    private router: Router
  ) {}

  ngOnInit() {
    console.log('Dialog ID:', this.data.id); // Access the id here;
  }

  DeleteEmployee(id: any) {
    this._WebApiService.DeleteEmployee(id).subscribe({
      next(res) {
        console.log('Employee Deleted Successfully', res.status);
      },
      error: (err) => {
        console.log('Error Occure When Delete Emplyee', err.status);
        // this is bug in your api, returned value not in json make confiusion with Rxjs in HttpClientModule.
        if (err.status == 200) {
          this.dialogRef.close();
        }
      },
    });
  }
}
