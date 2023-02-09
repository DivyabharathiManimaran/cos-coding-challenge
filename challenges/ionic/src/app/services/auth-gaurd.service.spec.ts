import { TestBed } from "@angular/core/testing";

import { AuthGaurdService } from "./auth-gaurd.service";
import { AuthenticationService } from "./authentication.service";

describe("AuthGaurdService", () => {
  let authGaurdService: AuthGaurdService;

  beforeEach(() => {
    const authenticationServiceSpy =
      jasmine.createSpyObj<AuthenticationService>(["isAuthenticated"]);
    authenticationServiceSpy.isAuthenticated.and.returnValue(true);
    authGaurdService = new AuthGaurdService(authenticationServiceSpy);
  });

  it("should be created", () => {
    expect(authGaurdService).toBeTruthy();
  });

  it("should return true for activate", () => {
    expect(authGaurdService).toBeTruthy();
    expect(authGaurdService.canActivate()).toEqual(true)
  });
});
