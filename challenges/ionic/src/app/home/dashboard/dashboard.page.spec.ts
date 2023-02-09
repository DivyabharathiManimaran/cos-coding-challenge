import {
  TranslateFakeLoader,
  TranslateLoader,
  TranslateModule,
} from "@ngx-translate/core";
import { AuctionService } from "./../../services/auction.service";
import { ComponentFixture, TestBed } from "@angular/core/testing";
import { DashboardPage } from "./dashboard.page";
import { of } from "rxjs/internal/observable/of";
import { CUSTOM_ELEMENTS_SCHEMA } from "@angular/core";
import { IonicModule, IonRouterOutlet } from "@ionic/angular";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { AuthenticationService } from "src/app/services/authentication.service";
import buyerAuctionResponse from "../../../assets/jsons/buyerAuctionResponse.json";

describe("DashboardPage", () => {
  let component: DashboardPage;
  let fixture: ComponentFixture<DashboardPage>;

  beforeEach(async () => {
    const auctionServiceSpy = jasmine.createSpyObj<AuctionService>([
      "getAuctionsForBuyer",
    ]);

    auctionServiceSpy.getAuctionsForBuyer.and.returnValue(
      of(buyerAuctionResponse)
    );

    await TestBed.configureTestingModule({
      declarations: [DashboardPage],
      providers: [
        IonicModule,
        {
          provide: IonRouterOutlet,
          useValue: {
            swipeGesture: true,
          },
        },
        { provide: AuctionService, useValue: auctionServiceSpy },
        AuthenticationService,
        HttpClientTestingModule,
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useClass: TranslateFakeLoader,
          },
        }),
      ],
    }).compileComponents();

    fixture = TestBed.createComponent(DashboardPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it("should create", () => {
    expect(component).toBeTruthy();
  });
});
