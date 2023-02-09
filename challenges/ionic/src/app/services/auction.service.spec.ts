import { HttpClient, HttpErrorResponse } from "@angular/common/http";
import { HttpClientTestingModule } from "@angular/common/http/testing";
import { TestBed } from "@angular/core/testing";

import { AuctionService } from "./auction.service";
import { AuthenticationService } from "./authentication.service";
import buyerAuctionResponse from "../../assets/jsons/buyerAuctionResponse.json";
import { of } from "rxjs";

describe("AuctionService", () => {
  let auctionService: AuctionService;
  let httpClientSpy: jasmine.SpyObj<HttpClient>;

  beforeEach(() => {
    const authenticationServiceSpy =
      jasmine.createSpyObj<AuthenticationService>(["getAuthorisedHttpOptions"]);
    httpClientSpy = jasmine.createSpyObj("HttpClient", ["get"]);
    auctionService = new AuctionService(
      httpClientSpy,
      authenticationServiceSpy
    );
  });

  it('should be created', () => {
    expect(auctionService).toBeTruthy();
  });

  it("should return auctons for be created", (done: DoneFn) => {
    httpClientSpy.get.and.returnValue(of(buyerAuctionResponse));

    auctionService.getAuctionsForBuyer().subscribe({
      next: (auctions) => {
        expect(auctions).withContext("items").toEqual(buyerAuctionResponse);
        done();
      },
      error: done.fail,
    });

    expect(httpClientSpy.get.calls.count()).withContext("one call").toBe(1);
  });
});
