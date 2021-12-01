import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class DataProvider {
  constructor(private http: HttpClient) { }

  url = 'http://localhost:3000';
  getTaches() {
    return this
            .http
            .get(`${this.url}/users/taches`);
  }
  getIncidents() {
    return this
            .http
            .get(`${this.url}/users/incidents`);
  }
  getOpportunites() {
    return this
            .http
            .get(`${this.url}/users/opportunites`);
  }
  getUploads() {
    return this
            .http
            .get(`${this.url}/users/uploads`);
  }
  getProcessChart() {
    return this
            .http
            .get(`${this.url}/users/ProcessChart`);
  }
  getUniteChart() {
    return this
            .http
            .get(`${this.url}/users/UniteChart`);
  }
  getThematiqueChart() {
    return this
            .http
            .get(`${this.url}/users/ThematiqueChart`);
  }
  getEntiteExterneChart() {
    return this
            .http
            .get(`${this.url}/users/EntiteExterneChart`);
  }
  getIncidentsGraph() {
    return this
            .http
            .get(`${this.url}/users/IncidentsGraph`);
  }
  getRisquesGraph() {
    return this
            .http
            .get(`${this.url}/users/RisqueGraph`);
  }
  getOpporGraph() {
    return this
            .http
            .get(`${this.url}/users/opporGraph`);
  }
}