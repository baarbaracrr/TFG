import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardprofComponent } from './dashboardprof/dashboardprof.component';
import { AsignaturasprofComponent } from './asignaturasprof/asignaturasprof.component';
import { CommonsModule } from '../../commons/commons.module';
import { Router, RouterModule } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DragulaModule } from 'ng2-dragula';
import { MessagesprofComponent } from './messagesprof/messagesprof.component';
import { SelectprofileComponent } from './selectprofile/selectprofile.component';
import { SeeportafolioComponent } from './seeportafolio/seeportafolio.component';
import { ClasesComponent } from './clases/clases.component';


@NgModule({
  declarations: [
    DashboardprofComponent,
    AsignaturasprofComponent,
    MessagesprofComponent,
    SelectprofileComponent,
    SeeportafolioComponent,
    ClasesComponent,
  ],
  exports: [
    DashboardprofComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    CommonsModule,
    DragulaModule,
  ]
})
export class ProfModule { }
