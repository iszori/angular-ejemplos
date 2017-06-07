import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styles: [`
    .table td {padding: 0.25rem;}
    .table th {padding: 0.25rem;}

    tbody {
        display:block;
        overflow-y: auto;
    }
    thead, tbody tr {
        display:table;
        width:100%;
        table-layout:fixed;
    }
    thead {
        width: calc( 100% - 1em )
    }
  `]
})
export class GruposComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

}
