import { Component, Input, Output, EventEmitter, OnInit, OnDestroy } from '@angular/core';
import { FormGroup, FormControl, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import EditorJS from '@editorjs/editorjs';
import Header from '@editorjs/header'; 
import Paragraph from '@editorjs/paragraph'; 
import ImageTool from '@editorjs/image'; // Import Image Tool
import List from '@editorjs/list'; // Import List Tool
import { BlogServicesService } from '../services/blog-services.service'

@Component({
  selector: 'app-blogform',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule, HttpClientModule],  // Add HttpClientModule to imports
  templateUrl: './blogform.component.html',
  styleUrls: ['./blogform.component.css'],
})
export class BlogformComponent implements OnInit, OnDestroy {

  editor: EditorJS | undefined;

  @Input() isVisible: boolean = false;
  @Output() toggleForm = new EventEmitter<void>(); // Event emitter to notify AppComponent
  @Output() formSubmitted = new EventEmitter<any>(); // Event emitter to notify AppComponent

  myForm = new FormGroup({
    category: new FormControl(''),
    image: new FormControl(''), // Field to store the selected image
  });

  imagePreview: string | null = null; // To store and show image preview
event: { target: any; } | undefined;

  constructor(private http: HttpClient, private blogService:BlogServicesService) {}

  ngOnInit(): void {
    const http = this.http; // Capture the http instance

    this.editor = new EditorJS({
      holder: 'editorjs',  // Target div with id 'editorjs'
      tools: {
        header: {
          class: Header as any,
          inlineToolbar: true,  // Enable inline toolbar for header
          config: {
            placeholder: 'Type a heading...', 
            levels: [1, 2, 3, 4, 5, 6], 
          },
        },
        paragraph: {
          class: Paragraph as any,
          inlineToolbar: true,
          config: {
            placeholder: 'Let’s write an awesome story!',
          },
        },
        image: {
          class: ImageTool,
          config: {
            uploader: {
              // Function for uploading image to the backend
              uploadByFile(file: File): Promise<{ success: number; file: { url: string } }> {
                const formData = new FormData();
                formData.append('image', file);
        
                // Send image data to the backend API for uploading
                return http.post<{ image: string }>('http://localhost:3000/upload', formData).toPromise().then((response) => {
                  return {
                    success: 1,
                    file: {
                      url: response?.image || '',  // The image URL from the backend
                    },
                  };
                }).catch((error) => {
                  console.error('Error uploading image:', error);
                  return {
                    success: 0,
                    file: {
                      url: '',
                    },
                  };
                });
              },
            },
          },
        },
        list: {
          class: List as any,
          inlineToolbar: true,
        },
      },
      autofocus: true,
    });
  }
  save() {
    if (this.editor) {
      this.editor.save().then((outputData) => {
        console.log('Editor content:', outputData);
        const category = (document.getElementById('category') as HTMLSelectElement)?.value || '';
        const authorName = (document.getElementById('authorName') as HTMLInputElement)?.value || '';
        const blogTitle = (document.getElementById('blogTitle') as HTMLInputElement)?.value || '';
        const blogCoverImageInput = document.getElementById('blogCoverImage') as HTMLInputElement;
        
        const image =  blogCoverImageInput.getAttribute('data-uploaded-url') || '';
        const readTime = (document.getElementById('readTime') as HTMLInputElement)?.value || '';
     

        const postData = {
          category,
          authorName,
          blogTitle,
          image,
          readTime,
          content: outputData,
        }
        this.http.post('http://localhost:3000/save-post', postData).subscribe(
          (response) => {
            console.log('Post saved successfully:', response);
            this.blogService.fetchAllBlogs();
            this.toggleForm.emit(); 

          },
          (error) => {
            console.error('Error saving post:', error);
          }
        );
      }).catch((error) => {
        console.error('Saving failed:', error);
      });
    }
  }
  
  
  

  ngOnDestroy(): void {
    if (this.editor) {
      this.editor.destroy();
    }
  }

  onCreatePostClick() {
    this.toggleForm.emit(); // Emit event to toggle form visibility in AppComponent
  }

  onCancel(){
    this.toggleForm.emit(); // Emit event to toggle form visibility in AppComponent
  }
  async uploadImage(event: Event): Promise<void> {
    const fileInput = event.target as HTMLInputElement;
    const imagePreview = document.getElementById('imagePreview');
    var blogCoverImageInput = document.getElementById('blogCoverImage');

  
    if (!fileInput.files || fileInput.files.length === 0) {
      if (imagePreview) {
        imagePreview.innerHTML = `<span class="text-muted">No image selected</span>`;
      }
      return;
    }
  
    const file = fileInput.files[0];
    const formData = new FormData();
    formData.append('image', file); // Field name 'image' matches the backend
  
    try {
      if (imagePreview) {
        imagePreview.innerHTML = `<span class="text-muted">Uploading...</span>`;
      }
  
      const response = await fetch('http://localhost:3000/upload', {
        method: 'POST',
        body: formData,
      });
  
      const result = await response.json();
      if (blogCoverImageInput) {
        blogCoverImageInput.setAttribute('data-uploaded-url', result.image);
      }
  
      if (response.ok) {
        if (imagePreview) {
          imagePreview.innerHTML = `<img src="${result.image}" alt="Uploaded Image" class="img-fluid" height="200px" width="300px">`;
        }
      } else {
        if (imagePreview) {
          imagePreview.innerHTML = `<span class="text-danger">${result.error || 'Upload failed'}</span>`;
        }
      }
    } catch (error) {
      if (imagePreview) {
        imagePreview.innerHTML = `<span class="text-danger">Error uploading image</span>`;
      }
    }
  }
  
  

}
