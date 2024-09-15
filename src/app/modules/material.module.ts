import { NgModule } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatDividerModule } from '@angular/material/divider';
import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatCardModule } from '@angular/material/card';

// this module creating for generalize packages i needed on project in one place
// instead of importing all these modules in every module or standalone component i want to use inside it.

@NgModule({
  exports: [
    // essential modules
    MatButtonModule,
    MatToolbarModule,
    MatIconModule,
    MatDividerModule,
    MatSlideToggleModule,
    MatTableModule,
    MatPaginatorModule,
    MatCardModule,
  ],
})
export class MaterialModule {}
