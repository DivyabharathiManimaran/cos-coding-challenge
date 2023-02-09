import { AuthenticationService } from "./authentication.service";
import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { BuyerAuctionsResponse } from "../models/buyer-auction.model";
import { BASE_URL } from "src/environments/environment";

@Injectable({
  providedIn: "root",
})
export class AuctionService {
  auctionBuyer = "v2/auction/buyer/";

  constructor(
    private http: HttpClient,
    private authenticationService: AuthenticationService
  ) {}

  /** Fetch auctions for buyer with optional query params */
  getAuctionsForBuyer(
    filter?: string,
    count?: boolean
  ): Observable<BuyerAuctionsResponse> {
    let query = "";
    if (filter) query = "?filter='" + filter;
    if (count) query = query + "'&count=" + count;
    return this.http.get<BuyerAuctionsResponse>(
      BASE_URL + this.auctionBuyer + query,
      this.authenticationService.getAuthorisedHttpOptions()
    );
  }
}
