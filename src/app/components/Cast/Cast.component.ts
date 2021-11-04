import { Component, OnInit } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'cast',
  templateUrl: './Cast.component.html',
  // styleUrls: ['../app.component.scss']
})
export class CastComponent implements OnInit {

  showId?:number;
  cast: any;

  constructor (private route: ActivatedRoute,
    private http:HttpClient){};

  ngOnInit():void{
    this.showId = this.route.snapshot.params['showId'];
    this.loadCast();
  }
  loadCast():void {
    if(this.showId){
      this.http.get<any[]>(`http://api.tvmaze.com/shows/${this.showId}/cast`)
        .subscribe((data: any[]) => this.cast = data);
    }
  }
}
