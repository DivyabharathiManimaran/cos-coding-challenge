import { ComponentFixture, TestBed, waitForAsync } from "@angular/core/testing";
import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core";
import { AuthenticationService } from "../services/authentication.service";
import { LoginApiService } from "../services/login-api.service";
import { LoginPageComponent } from "./login.page";
import { FormBuilder } from "@angular/forms";
import { NO_ERRORS_SCHEMA } from "@angular/core";
import { ToastController } from "@ionic/angular";

describe("LoginPageComponent", () => {
  let component: LoginPageComponent;
  let fixture: ComponentFixture<LoginPageComponent>;

  beforeEach(waitForAsync(() => {
    const authenticationServiceSpy =
      jasmine.createSpyObj<AuthenticationService>(["login"]);

    const loginApiServiceSpy = jasmine.createSpyObj<LoginApiService>([
      "isValidUser",
    ]);
    const authenticationResultPromisedData = require("../../../src/assets/jsons/authenticationResult.json");
    loginApiServiceSpy.isValidUser.and.returnValue(
      Promise.resolve(authenticationResultPromisedData)
    );

    const toast = jasmine.createSpyObj("Toast", ["present"]);

    const toastControllerSpy = jasmine.createSpyObj<ToastController>(
      "ToastController",
      ["create"]
    );
    toast.present.and.returnValue(Promise.resolve());
    toastControllerSpy.create.and.returnValue(toast);

    TestBed.configureTestingModule({
      declarations: [LoginPageComponent],
      providers: [
        FormBuilder,
        { provide: AuthenticationService, useValue: authenticationServiceSpy },
        { provide: LoginApiService, useValue: loginApiServiceSpy },
        { provide: ToastController, useValue: toastControllerSpy },
      ],
      schemas: [NO_ERRORS_SCHEMA],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(LoginPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it("should create", () => {
    const fixture = TestBed.createComponent(LoginPageComponent);
    const component = fixture.componentInstance;
    expect(component).toBeTruthy();
  });
});
