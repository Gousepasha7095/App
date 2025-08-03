import { Component, OnInit } from '@angular/core';
import { UploadDocuments, UploadService } from '../../Services/upload.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-upload-grid',
  standalone: false,
  templateUrl: './upload-grid.component.html',
  styleUrl: './upload-grid.component.css'
})
export class UploadGridComponent implements OnInit {
  documents: UploadDocuments[] = [];

  constructor(private uploadService: UploadService, private router: Router) { }

  ngOnInit(): void {
    this.getAllDocs();
  }
  getAllDocs(): void {
    this.uploadService.getAllDocuments().subscribe({
      next: (data) => this.documents = data,
      error: (err) => console.error('Failed to fetch documents', err)
    });
  }
  downloadFile(doc: any): void {
    if (!doc.filePicture) {
      console.warn('No file data found for download.');
      return;
    }

    const byteCharacters = atob(doc.filePicture);
    const byteNumbers = new Array(byteCharacters.length);
    for (let i = 0; i < byteCharacters.length; i++) {
      byteNumbers[i] = byteCharacters.charCodeAt(i);
    }

    const byteArray = new Uint8Array(byteNumbers);
    const blob = new Blob([byteArray], { type: doc.filetype });

    const url = window.URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;

    const extension = doc.filetype.split('/')[1] || 'file';
    link.download = `${doc.userName || 'file'}.${extension}`;

    link.click();
    window.URL.revokeObjectURL(url);
  }
  navigateToUploadDoc(): void {
    this.router.navigate(['/upload']);

  }
  referesh(): void {
    this.getAllDocs();
  }
  back() {
    this.router.navigate(['/dashboard']);
  }
}
