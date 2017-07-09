import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-charts',
  templateUrl: './charts.component.html',
  styleUrls: ['./charts.component.css']
})
export class ChartsComponent implements OnInit {
  chartType: string = "bar";
  public chartOptions:any = {
    responsive: true,
    scales: {
        yAxes: [{
            display: true,
            ticks: {
                suggestedMin: 0
            }
        }]
    }
  };
  public chartData:Array<any> = [
   {data: [5, 10, 7, 11, 5, 13, 10, 5, 11, 5, 12, 8], label: 'ZKH Dataset'}
 ];
  public chartLabels:Array<any> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  constructor() { }

  ngOnInit() {
  }

}
