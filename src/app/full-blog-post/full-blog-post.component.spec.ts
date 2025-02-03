import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FullBlogPostComponent } from './full-blog-post.component';

describe('FullBlogPostComponent', () => {
  let component: FullBlogPostComponent;
  let fixture: ComponentFixture<FullBlogPostComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FullBlogPostComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FullBlogPostComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
