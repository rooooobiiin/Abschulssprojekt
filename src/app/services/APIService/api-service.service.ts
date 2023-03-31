import { Injectable } from '@angular/core';
import {
  arbeitsplaetze,
  basicSoftwareSelection, bootServer,
  individualSoftwareSelection,
  logMessagesMock,
  SoftwareOptions,
  Tickets,
  ticketsMock
} from "../../Mockdatas/Data";

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor() { }

  getNameByUserID(userID: string): string {
    return '';
  }

  getStandardSoftware(): SoftwareOptions[] {
    return basicSoftwareSelection;
  }

  getIndividualSoftware(): SoftwareOptions[] {
    return individualSoftwareSelection;
  }

  getArbeitsplaetze() {
    return arbeitsplaetze
  }

  getBootServerDaten() {
    return bootServer
  }

  getColumns(obj: any): string[] {
    return Object.keys(obj)
  }

  getAllTickets(): Tickets[] {
    return ticketsMock;
  }

  deleteTicket(ticket: Tickets){
    //MOCK
    ticketsMock.splice(ticketsMock.indexOf(ticket), 1)
  }

  getLogMessages() {
    return logMessagesMock
  }


}
