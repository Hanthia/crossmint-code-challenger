import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { Observable, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MetaverseService {
  private baseUrl = 'https://challenge.crossmint.io/api';
  private headers = new HttpHeaders({ 'Accept': '*/*'});
  constructor(private http: HttpClient) { }

  private handleError(error: any) {
    console.error(error); // Manejo del error más robusto en producción
    return throwError(error);
  }

  httpGetMatrix(candidateId: string) {
    return this.http.get(`${this.baseUrl}/map/${candidateId}/goal`, { headers: this.headers})
      .pipe(catchError(this.handleError));
  }

  createPOLYanet(candidateId: string, row: number, column: number): Observable<any> {

    const body = {
      candidateId: candidateId,
      row: row,
      column: column
    };

    return this.http.post(`${this.baseUrl}/polyanets`, body, { headers: this.headers });
  }

  deletePOLYanet(candidateId: string, row: number, column: number): Observable<any> {
    return this.http.delete(`${this.baseUrl}/polyanets`, { body: { candidateId, row, column }, headers: this.headers});
  }

  // Soloons
  createSoloon(candidateId: string, row: number, column: number, color: string): Observable<any> {
    return this.http.post(`${this.baseUrl}/soloons`, { row, column, color, candidateId });
  }

  deleteSoloon(candidateId: string, row: number, column: number): Observable<any> {
    const url = `${this.baseUrl}/soloons?row=${row}&column=${column}&candidateId=${candidateId}`;
    return this.http.delete(url);
  }

  // Comeths
  createCometh(candidateId: string, row: number, column: number, direction: string): Observable<any> {
    const url = `${this.baseUrl}/comeths`;
    return this.http.post(url, { row, column, direction, candidateId });
  }

  deleteCometh(candidateId: string, row: number, column: number): Observable<any> {
    const url = `${this.baseUrl}/comeths?row=${row}&column=${column}&candidateId=${candidateId}`;
    return this.http.delete(url);
  }


}
