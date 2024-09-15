import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss'],
})
export class EmployeeRegisterComponent {
  myForm: FormGroup;

  constructor(
    private fb: FormBuilder,
    private _WebApiService: WebApiService,
    private router: Router
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  onSubmit() {
    if (this.myForm.valid) {
      console.log('Form Submitted!', this.myForm.value);
      this._WebApiService.CreateEmployee(this.myForm.value).subscribe({
        next: (res) => {
          console.log(res);
          this.router.navigate(['/home']);
        },
        error: (err) => {
          console.log(err);
        },
      });
    }
  }
}
