import { Component, Input } from '@angular/core';
import { Observable } from 'rxjs';
import { IMovie } from '../../models/movie';
import { AsyncPipe, DatePipe } from '@angular/common';

@Component({
  selector: 'app-slider',
  standalone: true,
  imports: [AsyncPipe, DatePipe],
  templateUrl: './slider.component.html',
  styleUrl: './slider.component.css'
})
export class SliderComponent {

  @Input() dataObs!: Observable<IMovie[]>;
  @Input() imagesBaseUrl = '';
  public slideIndex = 0;

  ngOnInit(){
    setInterval(()=>{
      
      if(this.slideIndex < 19){
        this.slideIndex++;
      }
      else {
        this.slideIndex = 0;
      }
    } , 7000);
  }

  slideLeft(){

    if(this.slideIndex <= 0 ){
      return
    }
    this.slideIndex--;
    
  }

  slideRight(){
    if(this.slideIndex >= 19 ){
      return
    }
    this.slideIndex++;
  }
}