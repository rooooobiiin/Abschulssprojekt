import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {Tickets} from "../../Mockdatas/Data";
import {MatPaginator} from "@angular/material/paginator";
import {ApiServiceService} from "../../services/APIService/api-service.service";
import {MatTableDataSource} from "@angular/material/table";
import {Router} from "@angular/router";
import {DatahandlerService} from "../../services/Datahandler/datahandler.service";
import {MatSort, Sort} from "@angular/material/sort";
import {TableService} from "../../services/TableService/table.service";
import {MatDialog} from "@angular/material/dialog";
import {OverviewdialogComponent} from "./overviewdialog/overviewdialog/overviewdialog.component";

@Component({
  selector: 'app-overview',
  templateUrl: './overview.component.html',
  styleUrls: ['./overview.component.scss'],
})
export class OverviewComponent implements OnInit, AfterViewInit{

  @ViewChild(MatPaginator) paginator!: MatPaginator;
  @ViewChild(MatSort) sort!: MatSort;

  columns = ['ticketnummer', 'inventarnummer', 'macAdresse', 'hostname', 'arbeitsplatztyp', 'ersteller', 'anwender', 'erstelldatum', 'zustand', 'bearbeiten', 'loeschen']

  //this.tickets = this.apiService.getAllTickets()
  tickets: Tickets[] = this.apiService.getAllTickets()


  dataSource = new MatTableDataSource(this.tickets)



constructor(private apiService: ApiServiceService,
            private router: Router,
            private dataHandler: DatahandlerService,
            private tableService: TableService,
            private dialog: MatDialog) {
}

  ngOnInit(): void {
    this.dataHandler.deleteActualTicket()
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator
    this.dataSource.sort = this.sort
  }

  sortColumns(sort: Sort){
    this.tableService.sortColumns(sort)
  }




  public startDragging(event: MouseEvent): void {
    this.tableService.startDragging(event)
  }


  refreshTickets() {
    this.tickets = this.apiService.getAllTickets()
    this.dataSource = new MatTableDataSource<Tickets>(this.tickets)
    this.paginator.length = this.tickets.length
    this.paginator.pageSizeOptions = [20, 50, 100, this.tickets.length]
  }

  navigateToCreateFreestyle() {
    this.router.navigate(['/createfreestyle'])
  }

  editTicket(ticket: Tickets){
    this.dataHandler.setTicket(ticket)
    this.router.navigateByUrl('/createfreestyle')
  }

  async deleteTicket(ticket: Tickets) {
    this.dialog.open(OverviewdialogComponent, {data: {reason: 'delete', ticket: ticket}})
    this.dataSource.data = this.tickets
  }

  createSSPIN() {
    this.dialog.open(OverviewdialogComponent, {data: {reason: 'create'}})
  }

}

