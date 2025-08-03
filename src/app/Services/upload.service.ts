import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, throwError } from 'rxjs';

export interface UploadDocuments {
  id: number;
  userName: string;
  filetype: string;
  uploadedAt: string;
  filePicture: string;
}

@Injectable({
  providedIn: 'root'
})


export class UploadService {

  private baseUrl = 'http://localhost:8080/api/v1/api/upload';

  constructor(private http: HttpClient) { }

  uploadDocument(file: File, userName: string): Observable<string> {
    const formData = new FormData();
    formData.append('file', file);
    formData.append('userName', userName);

    return this.http.post(this.baseUrl, formData, { responseType: 'text' }).pipe(
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    return throwError(() => error);
  }

  getAllDocuments(): Observable<UploadDocuments[]> {
    return this.http.get<UploadDocuments[]>('http://localhost:8080/api/v1/api/getAllDocuments');
  }

}
