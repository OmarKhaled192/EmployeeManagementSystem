import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Employee } from 'src/app/interfaces/employee';
import { WebApiService } from 'src/app/services/web-api.service';

@Component({
  selector: 'app-employee-register',
  templateUrl: './employee-register.component.html',
  styleUrls: ['./employee-register.component.scss'],
})
export class EmployeeRegisterComponent {
  myForm: FormGroup;
  id: string | null = null;
  oldData: Employee = {
    name: '',
    position: '',
    department: '',
    salary: 0,
  };

  constructor(
    private fb: FormBuilder,
    private _WebApiService: WebApiService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.myForm = this.fb.group({
      name: ['', Validators.required],
      position: ['', Validators.required],
      department: ['', Validators.required],
      salary: ['', Validators.required],
    });
  }

  ngOnInit() {
    // Get the id from the route parameters
    this.route.paramMap.subscribe((params) => {
      this.id = params.get('id');
      console.log('ID:', this.id);
      if (this.id) {
        this.getOldData(this.id);
      }
    });
  }

  getOldData(id: string) {
    this._WebApiService.GetOneEmployee(id).subscribe({
      next: (res) => {
        this.oldData = res;
        console.log(this.oldData);

        this.myForm = this.fb.group({
          name: [this.oldData.name, Validators.required],
          position: [this.oldData.position, Validators.required],
          department: [this.oldData.department, Validators.required],
          salary: [this.oldData.salary, Validators.required],
        });
      },
    });
  }

  OnSubmitUpdate(id: string) {
    if (this.myForm.valid) {
      this._WebApiService.UpdateEmployee(id, this.myForm.value).subscribe({
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

  onSubmitCreate() {
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
