import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TableComponent } from './components/table/table.component';
import { TableRowComponent } from './components/table-row/table-row.component';



@NgModule({
    declarations: [
        TableComponent,
        TableRowComponent
    ],
    exports: [
        TableComponent
    ],
    imports: [
        CommonModule
    ]
})
export class SharedModule { }
