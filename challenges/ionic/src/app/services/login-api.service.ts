import { AuthenticationService } from "./authentication.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import {
  AuthenticationRequest,
  AuthenticationResult,
} from "../models/login.model";
import { BASE_URL } from "src/environments/environment";
import { firstValueFrom } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class LoginApiService {
  authenticationUrl = "v1/authentication/";

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  /** To check if credentials are valid */
  isValidUser(
    userEmailId: string,
    authenticationRequest: AuthenticationRequest
  ): Promise<AuthenticationResult | undefined> {
    const credentials = {
      password: authenticationRequest.password,
      meta: authenticationRequest.meta,
    };
    return firstValueFrom(
      this.http.put<AuthenticationResult>(
        BASE_URL + this.authenticationUrl + userEmailId,
        credentials,
        this.authenticationService.getHttpOptions()
      )
    );
  }
}
