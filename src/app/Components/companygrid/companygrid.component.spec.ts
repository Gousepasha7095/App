import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanygridComponent } from './companygrid.component';

describe('CompanygridComponent', () => {
  let component: CompanygridComponent;
  let fixture: ComponentFixture<CompanygridComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [CompanygridComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CompanygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
