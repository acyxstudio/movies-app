import { Injectable,inject } from '@angular/core';
import { environment } from '../../environments/environment';
import { HttpClient } from '@angular/common/http';
import { IMovie, IMovies } from '../models/movie';
import { map } from 'rxjs';
import { IVideos } from '../models/video';
import { ICredits } from '../models/credit';

export const imagesBaseUrl = 'https://image.tmdb.org/t/p/';

@Injectable({
  providedIn: 'root'
})
export class MoviesService {
  
  private apiUrl = 'https://api.themoviedb.org/3';
  private apiKey = environment.apiKEY;
  private httpClient = inject(HttpClient);

  constructor() { }
  
  fetchMoviesByType(type: string, pageNumber = 1) {
    return this.httpClient
      .get<IMovies>(`${this.apiUrl}/movie/${type}?page=${pageNumber}&api_key=${this.apiKey}`)
  }

  fetchSimilarMovies(id: string) {
    return this.httpClient
      .get<IMovies>(
        `${this.apiUrl}/movie/${id}/similar?api_key=${this.apiKey}`
      )
      .pipe(map((data)=> data.results));
  }

  fetchMovieById(id: string) {
    return this.httpClient.get<IMovie>(
      `${this.apiUrl}/movie/${id}?api_key=${this.apiKey}`
    )
  }

  fetchMovieVideos(id: string) {
    return this.httpClient
      .get<IVideos>(
        `${this.apiUrl}/movie/${id}/videos?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.results))
  }

  fetchMovieCast(id: string) {
    return this.httpClient
      .get<ICredits>(
        `${this.apiUrl}/movie/${id}/credits?api_key=${this.apiKey}`
      )
      .pipe(map((data) => data.cast))
  }

  fetchMovieGenreList(language: string, pageNumber = 1) {
    return this.httpClient
      .get<IMovies>(`${this.apiUrl}/genre/movie/list?page=${pageNumber}&api_key=${this.apiKey}`)
  }

  fetchMoviesByGenre(type: string, pageNumber = 1) {
    return this.httpClient
      .get<IMovies>(`${this.apiUrl}/movie/${type}?page=${pageNumber}&api_key=${this.apiKey}`)
  }

  fetchMoviesByUpcoming(pageNumber = 1) {
    return this.httpClient
      .get<IMovies>(`${this.apiUrl}/movie/upcoming?page=${pageNumber}&api_key=${this.apiKey}`)
  }

  fetchMoviesByQuery(query:string, pageNumber = 1) {
    return this.httpClient
      .get<IMovies>(`${this.apiUrl}/movie/?query=${query}&include_adult=false&page=${pageNumber}&api_key=${this.apiKey}`)
  }

  fetchTVGenreList(language: string, pageNumber = 1) {
    return this.httpClient
      .get<IMovies>(`${this.apiUrl}/genre/tv/list?page=${pageNumber}&api_key=${this.apiKey}`)
  }
  
  fetchTVDiscoverList(pageNumber = 1) {
    return this.httpClient
      .get<IMovies>(`${this.apiUrl}/discover/tv/?page=${pageNumber}&api_key=${this.apiKey}`)
  }

}
