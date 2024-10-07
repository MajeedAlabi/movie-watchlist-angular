import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { Router } from '@angular/router';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  
  trendingmovies:any = ""
  popularmovies:any = ""
  theatremovies:any = ""

  constructor( private http:HttpClient, private router:Router ){ }

  ngOnInit(): void {
    this.getTrendingMovies();
    this.getPopularMovies();
    this.getTheatreMovies();
  }

  getTrendingMovies(){
    this.http.get("http://localhost:4200/assets/data/trending-movies.json")
    .subscribe((movies) => {
      this.trendingmovies = movies;
    }); 
  }

  getPopularMovies(){
    this.http.get("http://localhost:4200/assets/data/popular-movies.json")
    .subscribe((movies) => {
      this.popularmovies = movies;
    }); 
  }

  getTheatreMovies(){
    this.http.get("http://localhost:4200/assets/data/theatre-movies.json")
    .subscribe((movies) => {
      this.theatremovies = movies;
    }); 
  }

  goToMovies(type:string , id:string){
    this.router.navigate(["movie", type, id]);
    console.log("click")
  }

}
