import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor (
    private http: HttpClient,
    private router: Router){};
  apiUrl:string = 'https://api.tvmaze.com/shows/'
  showId?:number;
  movie:any = {
    "id": 0,
    "image": [],
    "name": "",
    "rating": [],
  }
  cast: any ;


  ngOnInit(){
    this.loadShow();
  }
  loadShow():void {
    if(this.movie.id) {
      this.http.get<any>("https://api.tvmaze.com/shows/" + this.movie.id)
        .subscribe((data: any) => {
          this.showId = data.id;
          this.movie = data;
          this.router.navigate(['/welcome']);
      });
    }
  }
}
