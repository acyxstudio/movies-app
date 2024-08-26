import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VideoSearchIconComponent } from './video-search-icon.component';

describe('VideoSearchIconComponent', () => {
  let component: VideoSearchIconComponent;
  let fixture: ComponentFixture<VideoSearchIconComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VideoSearchIconComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(VideoSearchIconComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
