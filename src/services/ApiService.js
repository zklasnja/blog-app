import httpClient from "./HttpService";

export class ApiService {
  constructor() {
    this.client = httpClient.client;
  }
}