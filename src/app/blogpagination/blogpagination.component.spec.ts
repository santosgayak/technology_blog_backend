import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BlogpaginationComponent } from './blogpagination.component';

describe('BlogpaginationComponent', () => {
  let component: BlogpaginationComponent;
  let fixture: ComponentFixture<BlogpaginationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BlogpaginationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BlogpaginationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
