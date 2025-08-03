import { Component } from '@angular/core';
import { UploadService } from '../../Services/upload.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload',
  standalone: false,
  templateUrl: './upload.component.html',
  styleUrl: './upload.component.css'
})
export class UploadComponent {
  uploadForm: FormGroup;
  selectedFile: File | null = null;
  responseMessage: string = '';

  constructor(private fb: FormBuilder, private uploadService: UploadService, private router: Router) {
    this.uploadForm = this.fb.group({
      userName: ['', Validators.required],
      file: [null, Validators.required]
    });
  }

  onFileSelected(event: Event): void {
    const input = event.target as HTMLInputElement;
    if (input.files && input.files.length > 0) {
      const file = input.files[0];

      if (file.type !== 'application/pdf') {
        this.responseMessage = 'Only PDF files are allowed.';
        this.selectedFile = null;
        this.uploadForm.get('file')?.setValue(null);
        return;
      }

      this.selectedFile = file;
      this.uploadForm.get('file')?.setValue(file);
      this.responseMessage = '';
    }
  }

  onSubmit(): void {
    if (this.uploadForm.valid && this.selectedFile) {
      const userName = this.uploadForm.get('userName')?.value;

      this.uploadService.uploadDocument(this.selectedFile, userName).subscribe({
        next: (res) => {
          this.responseMessage = res;
          this.uploadForm.reset();
          this.selectedFile = null;
          alert('Document upload successfully!');
          this.router.navigate(['/uploadGrid']);
        },
        error: (err) => {
          this.responseMessage = 'Upload failed: ' + (err.error || 'Server error');
        }
      });
    }
  }
  onClick(): void {
    this.router.navigate(['/uploadGrid']);
  }
}
