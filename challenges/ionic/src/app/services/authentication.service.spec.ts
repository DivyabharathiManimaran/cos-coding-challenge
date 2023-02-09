import { Storage } from "@ionic/storage";
import { Platform } from "@ionic/angular";

import { AuthenticationService } from "./authentication.service";
import { TestBed } from "@angular/core/testing";

describe("AuthenticationService", () => {
  let authenticationService: AuthenticationService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AuthenticationService, Platform, Storage],
    });
  });

  it("should be created", () => {
    expect(authenticationService).toBeDefined
  });
  });
