import { Component, DestroyRef, inject } from '@angular/core';
import { MoviesService } from '../../services/movies.service';
import { AsyncPipe } from '@angular/common';
import { IMovie } from '../../models/movie';
import { MovieComponent } from '../../components/movie/movie.component';
import { InfiniteScrollDirective } from "ngx-infinite-scroll";
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-show-search',
  standalone: true,
  imports: [AsyncPipe,MovieComponent,InfiniteScrollDirective],
  templateUrl: './show-search.component.html',
  styleUrl: './show-search.component.css'
})
export class ShowSearchComponent {
  private  moviesService  =  inject(MoviesService);
  private  pageNumber  =  1;
  private  destroyRef  =  inject(DestroyRef)
  public   moviesObs$  =  this.moviesService.fetchMoviesByType('popular', this.pageNumber);
  public   moviesResults:  IMovie[] = [];

  ngOnInit(){
    this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.moviesResults  =  data.results;
    });
  }

  onScroll():  void {
    this.pageNumber++;
    this.moviesObs$  =  this.moviesService.fetchTVDiscoverList(this.pageNumber);
    this.moviesObs$.pipe(takeUntilDestroyed(this.destroyRef)).subscribe((data) => {
      this.moviesResults  =  this.moviesResults.concat(data.results);
    });
  }
  
}
