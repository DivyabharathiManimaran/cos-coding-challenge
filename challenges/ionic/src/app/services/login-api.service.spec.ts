import { AuthenticationService } from './authentication.service';
import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { LoginApiService } from './login-api.service';
import { HttpClient } from '@angular/common/http';

describe('LoginApiService', () => {
  let loginApiService: LoginApiService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const authenticationServiceSpy =
      jasmine.createSpyObj<AuthenticationService>(["getHttpOptions"]);
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["put"]);
    loginApiService = new LoginApiService(
      httpClientSpy,
      authenticationServiceSpy
    );
  });

  it('should be created', () => {
    expect(loginApiService).toBeTruthy();
  });

  it('should check for valid user', () => {
    expect(loginApiService.isValidUser).toBeTruthy();
  });
});
