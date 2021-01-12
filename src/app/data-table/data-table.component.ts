import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-data-table',
  templateUrl: './data-table.component.html',
  styleUrls: ['./data-table.component.scss']
})
export class DataTableComponent implements OnInit {

  chips = [
    {name: 'Papadum', state: false},
    {name: 'Naan', state: false},
    {name: 'Dal', state: false}
  ];
  constructor() { }

  ngOnInit(): void {
  }

  public changeSelected(chip:any) {
    console.log(chip)
  }

  public onClickChip(chip:any) {
    console.log(chip);
    this.chips.forEach(eachChip => {
      if(eachChip.name != chip.name) eachChip.state = false;
      else eachChip.state = true;
    })
  }
}
