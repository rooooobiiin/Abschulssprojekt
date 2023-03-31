import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {SoftwareOptions, Tickets} from "../../Mockdatas/Data";
import {MatSort, Sort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";
import {MatDialog} from "@angular/material/dialog";
import {KategorieDialogComponent} from "./kategorie-dialog/kategorie-dialog.component";
import {map, Observable, startWith} from "rxjs";
import {FormControl} from "@angular/forms";
import {ApiServiceService} from "../../services/APIService/api-service.service";
import {DatahandlerService} from "../../services/Datahandler/datahandler.service";
import {TableService} from "../../services/TableService/table.service";

@Component({
  selector: 'app-freestyle-create',
  templateUrl: './freestyle-create.component.html',
  styleUrls: ['./freestyle-create.component.scss']
})

export class FreestyleCreateComponent implements OnInit, AfterViewInit {

  @ViewChild(MatSort) sort!: MatSort;

  mockdatenInput = 'Mockdaten'


  namensLabel = 'Hallöle';
  userID = '';

  ticket!: Tickets | undefined;

  inputEditable:boolean = true;


  //autocomplete start
  controlArbeitsplatz = new FormControl('');
  controlBootserver = new FormControl('');
  gefilterteOptionenArbeitsplatz: Observable<string[]> | undefined
  gefilterteOptionenBootserver: Observable<string[]> | undefined
  //autocomplete ende

  logColumns: string[] = ['kategorie', 'datum', 'benutzer', 'nachricht']
  displayedColumns: string[] = ['id', 'name']

  logMessages = this.apiService.getLogMessages()


  chosenSoftware: SoftwareOptions[] = [];

  selectedSoftwareBasicAndIndividual: SoftwareOptions[] = [];
  selectedSoftwareChosen: SoftwareOptions[] = [];

  dataChosen = new MatTableDataSource<SoftwareOptions>([])

  //new Lists
  clickedSoftwareBasicIndividual: SoftwareOptions[] = []; //Liste, die angeklickte Software aus der Liste von Basic/Individual enthält
  clickedSoftwareChosen: SoftwareOptions[] = []; //Liste die angeklickte Software aus der ausgewählt Tabelle enthält
  //chosenSoftware bleibt

  arbeitsplatzTypen: string[] = this.apiService.getArbeitsplaetze()
  bootServerDaten:string[] = this.apiService.getBootServerDaten()

  dataBasic = new MatTableDataSource(this.apiService.getIndividualSoftware())
  dataIndividual = new MatTableDataSource(this.apiService.getStandardSoftware())
  dataLogs = new MatTableDataSource(this.apiService.getLogMessages())



  constructor(private dialog: MatDialog,
              private apiService: ApiServiceService,
              private dataHandler: DatahandlerService,
              private tableService: TableService) {
  }

  ngOnInit() {
    console.log(this.dataHandler.getTicket())

    this.dataHandler.getTicket()? (this.ticket = this.dataHandler.getTicket(), this.inputEditable = false) : (this.inputEditable = true, console.log('Kein Ticket'))

    this.gefilterteOptionenArbeitsplatz = this.controlArbeitsplatz.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptionsArbeitsplatz(value || '')),
    );

    this.gefilterteOptionenBootserver = this.controlBootserver.valueChanges.pipe(
      startWith(''),
      map(value => this.filterOptionsBootserver(value || '')),
    );
    //Autocomplete ENDE
  }

  ngAfterViewInit(): void {
    this.dataIndividual.sort = this.sort
    this.dataLogs.sort = this.sort
    this.dataChosen.sort = this.sort
    this.dataBasic.sort = this.sort
  }

  sortColumns(sortState: Sort) {
    this.tableService.sortColumns(sortState)
  }

  clickRow(row: SoftwareOptions): void {
    console.log(this.chosenSoftware.indexOf(row))
    //Prüfung ob Software in ausgewählt Tabelle vorhanden ist und entsprechende Zuordnung in Clicked Liste
    if (this.chosenSoftware.indexOf(row) == -1) {
      this.clickedSoftwareBasicIndividual.push(row)
    }
    else {
      this.clickedSoftwareChosen.push(row)
    }
  }


  moveToRight(): void {
    //Ausgewählte Zeilen dataChosen hinzufügen
    this.dataChosen.data = this.dataChosen.data.concat(this.clickedSoftwareBasicIndividual)
    //Ausgewählte Zeilen aus den anderen Tabellen entfernen
    this.dataBasic.data = this.dataBasic.data.filter(x=> !x.rowClicked)
    this.dataIndividual.data = this.dataIndividual.data.filter(x=>!x.rowClicked)

    //rowClicked falsch setzen
    for (let x of this.clickedSoftwareBasicIndividual) {
      x.rowClicked = false
    }

    //ausgewählte Elemente zurücksetzen
    this.clickedSoftwareBasicIndividual = []
  }

  moveToLeft(): void {

  //TODO: Wie werden die Individual und Basic Softwares auseinandergehalten

    this.dataBasic.data = this.dataBasic.data
      .concat(this.chosenSoftware
        .filter(x => x.rowClicked && x.basicSoftware))
    this.dataIndividual.data = this.dataIndividual.data
      .concat(this.chosenSoftware
        .filter(x=> x.rowClicked && !x.basicSoftware))
    this.chosenSoftware = this.chosenSoftware.filter(x => !x.rowClicked)
    this.dataBasic.data = this.dataBasic.data
      .map(x=> {
        x.rowClicked = false
        x.chosen = false
        return x
      })

    this.dataIndividual.data = this.dataIndividual.data
      .map(x=> {
        x.rowClicked = false
        x.chosen = false
        return x
      })
  }

  moveAllToLeft(): void {
    this.dataBasic.data = this.dataBasic.data.concat(this.chosenSoftware
      .filter(x => x.basicSoftware)
      .map(x=> {
        x.rowClicked = false
        x.chosen = false
        return x
      })
    )
    this.dataIndividual.data = this.dataIndividual.data.concat(this.chosenSoftware
      .filter(x => !x.basicSoftware)
      .map(x=> {
        x.rowClicked = false
        x.chosen = false
        return x
      })
    )
    this.chosenSoftware = [];
  }




  public startDragging(event: MouseEvent): void {
    this.tableService.startDragging(event)
  }

  public sortColumn(sort: Sort) {
    this.tableService.sortColumns(sort)
  }

  openDialog(): void{
    this.dialog.open(KategorieDialogComponent, {height: '500px', width: '500px'})
  }

  filterOptionsArbeitsplatz(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.arbeitsplatzTypen.filter(x => x.toLowerCase().includes(filterValue));
  }

  filterOptionsBootserver(value: string): string[] {
    const filterValue = value.toLowerCase();
    return this.bootServerDaten.filter(x => x.toLowerCase().includes(filterValue));
  }


  test() {
    console.log('Hat geklappt')
  }


  setNamenslabel(){
    //this.namensLabel = this.apiService.getNameByUserID(this.userID);
    this.namensLabel = 'Joejfowiejfo'
  }

  generateHostname() {

  }




}

