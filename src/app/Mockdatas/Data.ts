export interface SoftwareOptions {
  id: string
  name: string
  basicSoftware: boolean
  rowClicked: boolean
  chosen: boolean
}

export const individualSoftwareSelection: SoftwareOptions []= [
  {id : 'i1', name :'Ind 1', basicSoftware:false, rowClicked:false, chosen:false},
  {id : 'i2', name :'Ind 2', basicSoftware:false,rowClicked:false, chosen:false},
  {id : 'i3', name :'Ind 3', basicSoftware:false,rowClicked:false, chosen:false},
  {id : 'i4', name :'Ind 4', basicSoftware:false,rowClicked:false, chosen:false},
  {id : 'i3', name :'Ind 3', basicSoftware:false,rowClicked:false, chosen:false},
  {id : 'i4', name :'Ind 4', basicSoftware:false,rowClicked:false, chosen:false},
  {id : 'i2', name :'Ind 2', basicSoftware:false,rowClicked:false, chosen:false},
  {id : 'i3', name :'Ind 3', basicSoftware:false,rowClicked:false, chosen:false},
  {id : 'i4', name :'Ind 4', basicSoftware:false,rowClicked:false, chosen:false},
]

export const basicSoftwareSelection: SoftwareOptions []= [
  {id : 'b3', name :'xBasic 1',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b2', name :'mBasic 2',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b1', name :'sBasic 3',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b8', name :'rBasic 4',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b5', name :'vBasic 5',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b2', name :'mBasic 2',basicSoftware:true, rowClicked:false, chosen:false}, {id : 'b3', name :'xBasic 1',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b2', name :'mBasic 2',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b1', name :'sBasic 3',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b8', name :'rBasic 4',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b5', name :'vBasic 5',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b2', name :'mBasic 2',basicSoftware:true, rowClicked:false, chosen:false}, {id : 'b3', name :'xBasic 1',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b2', name :'mBasic 2',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b1', name :'sBasic 3',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b8', name :'rBasic 4',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b5', name :'vBasic 5',basicSoftware:true, rowClicked:false, chosen:false},
  {id : 'b2', name :'mBasic 2',basicSoftware:true, rowClicked:false, chosen:false},
]

export interface Logs {
  kategorie: string
  datum: string
  benutzer: string
  nachricht: string
}

export const logMessagesMock: Logs[] = [
  {kategorie: 'k', datum: '01.03.2022', benutzer: '4', nachricht:'4A'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '2', nachricht:'2'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '3', nachricht:'3'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '5', nachricht:'5'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '1', nachricht:'1'},{kategorie: 'k', datum: '01.03.2022', benutzer: '4', nachricht:'4A'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '2', nachricht:'2'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '3', nachricht:'3'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '5', nachricht:'5'},
  {kategorie: 'k', datum: '01.03.2022', benutzer: '1', nachricht:'1'},
]

export const arbeitsplaetze: string[] = ['AP 1', 'AP 2', 'Anderer Arbeitsplatz', 'Und So Weiter']
export const bootServer: string[] = ['BS 1', 'BS 2', 'BS BS', 'BLABLABLA Weiter']


export interface Tickets {
  ticketnummer: string
  inventarnummer: string
  macadresse: string
  hostname: string
  arbeitsplatztyp: string
  ersteller: string
  anwender: string
  erstelldatum: string
  zustand: string
}

export const ticketsMock: Tickets[] = [
  {ticketnummer: 'tn4', inventarnummer: 'in2', macadresse:'ma2', hostname:'hn2', arbeitsplatztyp:'at2', ersteller:'ersteller2', anwender:'anwender2', erstelldatum:'11.04.2014', zustand:'erfolgreich'},
  {ticketnummer: 'tn2', inventarnummer: 'in3', macadresse:'ma3', hostname:'hn3', arbeitsplatztyp:'at3', ersteller:'ersteller3', anwender:'anwender3', erstelldatum:'13.09.2022', zustand:'erfolgreich'},
  {ticketnummer: 'tn6', inventarnummer: 'in4', macadresse:'ma4', hostname:'hn4', arbeitsplatztyp:'at4', ersteller:'ersteller4', anwender:'anwender14', erstelldatum:'04.11.2013', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn3', inventarnummer: 'in5', macadresse:'ma5', hostname:'hn5', arbeitsplatztyp:'at5', ersteller:'ersteller5', anwender:'anwender5', erstelldatum:'01.09.2002', zustand:'in Progress'},
  {ticketnummer: 'tn8', inventarnummer: 'in6', macadresse:'ma6', hostname:'hn6', arbeitsplatztyp:'at6', ersteller:'ersteller6', anwender:'anwender6', erstelldatum:'02.01.2009', zustand:'fehlgeschlagen'},  {ticketnummer: 'tn1', inventarnummer: 'in1', macadresse:'ma1', hostname:'hn1', arbeitsplatztyp:'at1', ersteller:'ersteller1', anwender:'anwender1', erstelldatum:'01.01.2000', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn4', inventarnummer: 'in2', macadresse:'ma2', hostname:'hn2', arbeitsplatztyp:'at2', ersteller:'ersteller2', anwender:'anwender2', erstelldatum:'11.04.2014', zustand:'erfolgreich'},
  {ticketnummer: 'tn2', inventarnummer: 'in3', macadresse:'ma3', hostname:'hn3', arbeitsplatztyp:'at3', ersteller:'ersteller3', anwender:'anwender3', erstelldatum:'13.09.2022', zustand:'erfolgreich'},
  {ticketnummer: 'tn6', inventarnummer: 'in4', macadresse:'ma4', hostname:'hn4', arbeitsplatztyp:'at4', ersteller:'ersteller4', anwender:'anwender14', erstelldatum:'04.11.2013', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn3', inventarnummer: 'in5', macadresse:'ma5', hostname:'hn5', arbeitsplatztyp:'at5', ersteller:'ersteller5', anwender:'anwender5', erstelldatum:'01.09.2002', zustand:'in Progress'},
  {ticketnummer: 'tn8', inventarnummer: 'in6', macadresse:'ma6', hostname:'hn6', arbeitsplatztyp:'at6', ersteller:'ersteller6', anwender:'anwender6', erstelldatum:'02.01.2009', zustand:'fehlgeschlagen'},  {ticketnummer: 'tn1', inventarnummer: 'in1', macadresse:'ma1', hostname:'hn1', arbeitsplatztyp:'at1', ersteller:'ersteller1', anwender:'anwender1', erstelldatum:'01.01.2000', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn4', inventarnummer: 'in2', macadresse:'ma2', hostname:'hn2', arbeitsplatztyp:'at2', ersteller:'ersteller2', anwender:'anwender2', erstelldatum:'11.04.2014', zustand:'erfolgreich'},
  {ticketnummer: 'tn2', inventarnummer: 'in3', macadresse:'ma3', hostname:'hn3', arbeitsplatztyp:'at3', ersteller:'ersteller3', anwender:'anwender3', erstelldatum:'13.09.2022', zustand:'erfolgreich'},
  {ticketnummer: 'tn6', inventarnummer: 'in4', macadresse:'ma4', hostname:'hn4', arbeitsplatztyp:'at4', ersteller:'ersteller4', anwender:'anwender14', erstelldatum:'04.11.2013', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn3', inventarnummer: 'in5', macadresse:'ma5', hostname:'hn5', arbeitsplatztyp:'at5', ersteller:'ersteller5', anwender:'anwender5', erstelldatum:'01.09.2002', zustand:'erfolgreich'},
  {ticketnummer: 'tn8', inventarnummer: 'in6', macadresse:'ma6', hostname:'hn6', arbeitsplatztyp:'at6', ersteller:'ersteller6', anwender:'anwender6', erstelldatum:'02.01.2009', zustand:'in Progress'},  {ticketnummer: 'tn1', inventarnummer: 'in1', macadresse:'ma1', hostname:'hn1', arbeitsplatztyp:'at1', ersteller:'ersteller1', anwender:'anwender1', erstelldatum:'01.01.2000', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn4', inventarnummer: 'in2', macadresse:'ma2', hostname:'hn2', arbeitsplatztyp:'at2', ersteller:'ersteller2', anwender:'anwender2', erstelldatum:'11.04.2014', zustand:'erfolgreich'},
  {ticketnummer: 'tn2', inventarnummer: 'in3', macadresse:'ma3', hostname:'hn3', arbeitsplatztyp:'at3', ersteller:'ersteller3', anwender:'anwender3', erstelldatum:'13.09.2022', zustand:'erfolgreich'},
  {ticketnummer: 'tn6', inventarnummer: 'in4', macadresse:'ma4', hostname:'hn4', arbeitsplatztyp:'at4', ersteller:'ersteller4', anwender:'anwender14', erstelldatum:'04.11.2013', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn3', inventarnummer: 'in5', macadresse:'ma5', hostname:'hn5', arbeitsplatztyp:'at5', ersteller:'ersteller5', anwender:'anwender5', erstelldatum:'01.09.2002', zustand:'erfolgreich'},
  {ticketnummer: 'tn8', inventarnummer: 'in6', macadresse:'ma6', hostname:'hn6', arbeitsplatztyp:'at6', ersteller:'ersteller6', anwender:'anwender6', erstelldatum:'02.01.2009', zustand:'fehlgeschlagen'},  {ticketnummer: 'tn1', inventarnummer: 'in1', macadresse:'ma1', hostname:'hn1', arbeitsplatztyp:'at1', ersteller:'ersteller1', anwender:'anwender1', erstelldatum:'01.01.2000', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn4', inventarnummer: 'in2', macadresse:'ma2', hostname:'hn2', arbeitsplatztyp:'at2', ersteller:'ersteller2', anwender:'anwender2', erstelldatum:'11.04.2014', zustand:'in Progress'},
  {ticketnummer: 'tn2', inventarnummer: 'in3', macadresse:'ma3', hostname:'hn3', arbeitsplatztyp:'at3', ersteller:'ersteller3', anwender:'anwender3', erstelldatum:'13.09.2022', zustand:'erfolgreich'},
  {ticketnummer: 'tn6', inventarnummer: 'in4', macadresse:'ma4', hostname:'hn4', arbeitsplatztyp:'at4', ersteller:'ersteller4', anwender:'anwender14', erstelldatum:'04.11.2013', zustand:'fehlgeschlagen'},
  {ticketnummer: 'tn3', inventarnummer: 'in5', macadresse:'ma5', hostname:'hn5', arbeitsplatztyp:'at5', ersteller:'ersteller5', anwender:'anwender5', erstelldatum:'01.09.2002', zustand:'erfolgreich'},
  {ticketnummer: 'tn8', inventarnummer: 'in6', macadresse:'ma6', hostname:'hn6', arbeitsplatztyp:'at6', ersteller:'ersteller6', anwender:'anwender6', erstelldatum:'02.01.2009', zustand:'fehlgeschlagen'},
]

export enum ReasonEnum {
  createSSP_IN,
  delete
}
