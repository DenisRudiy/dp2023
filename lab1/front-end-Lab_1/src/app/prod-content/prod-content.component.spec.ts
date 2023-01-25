import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdContentComponent } from './prod-content.component';

describe('ProdContentComponent', () => {
  let component: ProdContentComponent;
  let fixture: ComponentFixture<ProdContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdContentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
