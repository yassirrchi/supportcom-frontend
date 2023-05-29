import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css']
})
export class GridComponent implements OnInit {
  showKey:boolean=false;
  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
  toggleAPI_KEY(){
    this.showKey=!this.showKey

  }


}
