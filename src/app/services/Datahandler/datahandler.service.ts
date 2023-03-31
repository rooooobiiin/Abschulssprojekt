import { Injectable } from '@angular/core';
import {Tickets, ticketsMock} from "../../Mockdatas/Data";

@Injectable({
  providedIn: 'root'
})
export class DatahandlerService {

  actualTicket: Tickets | undefined = undefined

  constructor() { }

  setTicket(ticket: Tickets) {
    this.actualTicket = ticket
  }

  getTicket() {
    return this.actualTicket
  }

  deleteActualTicket() {
    this.actualTicket = undefined
  }

  deleteTicket(ticket: Tickets) {
    ticketsMock.splice(ticketsMock.indexOf(ticket),1)
  }

}
