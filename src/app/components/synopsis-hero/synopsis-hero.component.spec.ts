import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SynopsisHeroComponent } from './synopsis-hero.component';

describe('SynopsisHeroComponent', () => {
  let component: SynopsisHeroComponent;
  let fixture: ComponentFixture<SynopsisHeroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SynopsisHeroComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SynopsisHeroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
