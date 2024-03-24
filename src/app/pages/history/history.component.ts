import { Component, OnInit } from '@angular/core';
import { ApiCallService } from '../../services/api-call.service';
import { CommonModule } from '@angular/common';
import { MatchCardComponent } from '../../component/match-card/match-card.component';

@Component({
  selector: 'app-history',
  standalone: true,
  imports: [CommonModule,MatchCardComponent],
  templateUrl: './history.component.html',
  styleUrl: './history.component.css'
})
export class HistoryComponent implements OnInit{

  allMatche:any;
  constructor(private _api:ApiCallService){

  }
  ngOnInit(): void {
    this.allMatches();
  }

  private allMatches() {
    this._api.getLiveMatches().subscribe({
      next: data => {
        console.log(data);
        this.allMatche=data;
      },
      error: error => {
        console.log(error);
      }
    });
  }
}
