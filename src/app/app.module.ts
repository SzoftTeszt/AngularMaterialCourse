import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { MatMenuModule } from '@angular/material/menu';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatCardModule } from '@angular/material/card';

import { MatTableModule } from '@angular/material/table';
import { MatPaginatorModule } from '@angular/material/paginator';

import { MatFormFieldModule } from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './home/home.component';
import { BasicComponent } from './basic/basic.component';
import { PaginatorComponent } from './paginator/paginator.component';
import { FilterComponent } from './filter/filter.component';
import { EditableComponent } from './editable/editable.component';
import { AnimalEditorComponent } from './animal-editor/animal-editor.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BasicComponent,
    PaginatorComponent,
    FilterComponent,
    EditableComponent,
    AnimalEditorComponent,
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
   MatListModule,
   MatMenuModule,
   MatIconModule,
   MatButtonModule ,
   MatCardModule ,
   HttpClientModule,
   MatTableModule,
   MatPaginatorModule,
   MatFormFieldModule,
   MatSelectModule,
   MatInputModule,
   FormsModule,
   ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
