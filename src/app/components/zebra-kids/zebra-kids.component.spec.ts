import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ZebraKidsComponent } from './zebra-kids.component';

describe('ZebraKidsComponent', () => {
  let component: ZebraKidsComponent;
  let fixture: ComponentFixture<ZebraKidsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ZebraKidsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ZebraKidsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
