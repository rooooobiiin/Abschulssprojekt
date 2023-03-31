import {Injectable, ViewChild} from '@angular/core';
import {MatSort, Sort} from "@angular/material/sort";
import {LiveAnnouncer} from "@angular/cdk/a11y";
import {MatSnackBar} from "@angular/material/snack-bar";

@Injectable({
  providedIn: 'root'
})
export class TableService {

  constructor(private _liveAnnouncer: LiveAnnouncer, public snackBar: MatSnackBar) { }



  sortColumns(sortState: Sort) {
    if (sortState.direction) {
      this._liveAnnouncer.announce(`Sorted ${sortState.direction}ending`);
    } else {
      this._liveAnnouncer.announce('Sorting cleared');
    }
  }

  public startDragging(event: MouseEvent): void {
    const cell = event.currentTarget as HTMLElement;
    const cellWidth = cell.offsetWidth;
    const startX = event.clientX;

    const mousemove = (event: MouseEvent) => {
      const dx = event.clientX - startX;
      const newWidth = cellWidth + dx;
      cell.style.width = `${newWidth}px`;
    };

    const mouseup = () => {
      document.removeEventListener('mousemove', mousemove);
      document.removeEventListener('mouseup', mouseup);
    };

    document.addEventListener('mousemove', mousemove);
    document.addEventListener('mouseup', mouseup);
  }
}
