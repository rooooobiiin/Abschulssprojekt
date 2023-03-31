import {LiveAnnouncer} from '@angular/cdk/a11y';
import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {MatSort, Sort} from '@angular/material/sort';
import {MatTable} from '@angular/material/table';
import {logMessagesMock, Logs} from "../../Mockdatas/Data";
import { MatTableModule } from '@angular/material/table';
import { ResizableModule } from 'angular-resizable-element';
import {map, Observable, startWith} from "rxjs";
import {FormControl} from "@angular/forms";

export const data = [
  {spalte1:'Nummer', spalte2:'Tschüss'},
  {spalte1:'Hallo', spalte2:'Tschüss'},
  {spalte1:'Hallo', spalte2:'Tschüss'},
  {spalte1:'Hallo', spalte2:'Tschüss'}
]

export const filterOptionen: string[] = ['One', 'Two', 'Three', 'Four']

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.scss']
})
export class TestComponent implements OnInit {

  myControl = new FormControl('');
  options: string[] = filterOptionen
  filteredOptions: Observable<string[]> | undefined;

  ngOnInit() {
    this.filteredOptions = this.myControl.valueChanges.pipe(
      startWith(''),
      map(value => this._filter(value || '')),
    );
  }

  private _filter(value: string): string[] {
    const filterValue = value.toLowerCase();

    return this.options.filter(option => option.toLowerCase().includes(filterValue));
  }

}
