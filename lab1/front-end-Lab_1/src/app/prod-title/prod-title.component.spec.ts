import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProdTitleComponent } from './prod-title.component';

describe('ProdTitleComponent', () => {
  let component: ProdTitleComponent;
  let fixture: ComponentFixture<ProdTitleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProdTitleComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ProdTitleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
