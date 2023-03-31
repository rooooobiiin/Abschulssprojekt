import {Component, Inject} from '@angular/core';
import {MAT_DIALOG_DATA, MatDialogRef} from "@angular/material/dialog";
import {DatahandlerService} from "../../../../services/Datahandler/datahandler.service";
import {Tickets} from "../../../../Mockdatas/Data";
import {TableService} from "../../../../services/TableService/table.service";

@Component({
  selector: 'app-overviewdialog',
  templateUrl: './overviewdialog.component.html',
  styleUrls: ['./overviewdialog.component.scss']
})
export class OverviewdialogComponent{

  delete = false

  constructor(
    public dialog: MatDialogRef<OverviewdialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: { reason: string, ticket: Tickets},
    private dataHandler: DatahandlerService,
    private tableService: TableService) { }

  deleteTicket() {

    this.data.ticket? this.dataHandler.deleteTicket(this.data.ticket) : ''
    this.tableService.snackBar.open(`Das Ticket mit der Nummer ${this.data.ticket.ticketnummer} wurde gelöscht!`, 'OK', {
      duration: 3000
    } )
    this.dialog.close()
  }

  closeDialog() {
    this.dialog.close()
  }

}

