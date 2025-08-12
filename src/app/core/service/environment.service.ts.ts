import { Injectable } from "@angular/core";

import { Environment } from "../models/environment";
import { environment } from "../../../environment/environment.prod";
@Injectable ({
    providedIn: 'root'
})
export class EnvironmentService {
    private readonly env: Environment=environment as Environment;
    get config(): Environment {
        return this.env;
    }
     get isProduction(): boolean {
    return this.env.production;
  }
    get isDevelopment(): boolean {
    return this.env.environment === 'development';
  }
  get isUAT(): boolean {
    return this.env.environment === 'uat';
  }
  get environmentName(): string {
    return this.env.environment;
  }
   get apiUrl(): string {
    return this.env.apiUrl;
  }
    get isLoggingEnabled(): boolean {
    return this.env.isLoggingEnabled;
  }
  get isDebugMode(): boolean {
    return this.env.enableDebugMode;
  }
  get appVersion(): string {
    return this.env.appVersion;
  }
  logEnvironmentInfo(): void {
    if (!this.isProduction && this.isLoggingEnabled) {
      console.group('Environment Configuration');
      console.log('Environment:', this.environmentName);
      console.log('Version:', this.appVersion);
      console.log('API URL:', this.apiUrl);
      console.log('Debug Mode:', this.isDebugMode);
      console.groupEnd();
    }
  }

}

