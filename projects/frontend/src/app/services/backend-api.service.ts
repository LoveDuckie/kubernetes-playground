import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { BackendApiUrl } from '../configuration/configuration';
import { IResult } from '../data/results';
import { IResults } from '../data/results';
import { IWorker } from '../data/worker';

@Injectable({
  providedIn: 'root'
})
export class BackendApiService {

  constructor(private http: HttpClient) {
    if (!http) {
      throw new Error("The HTTP client is invalid or null")
    }
  }

  public getWorkers(): Array<IWorker> {
    return [];
  }
  public getWorkerQueues(): Array<IWorker> {
    return [];
  }
  public getResults(): IResults {
    return [];
  }

  public uploadImage(): Observable<IResult> {
    return this.http.post<IResult>(this.getApiUrl(),{});
  }

  public getApiUrl(...urls: any[]): string {
    let combinedUrl: string = urls.join('/')
    if (!combinedUrl) {
      throw new Error("The combined URL is invalid or null")
    }
    return `${BackendApiUrl}/${combinedUrl}`;
  }
}
