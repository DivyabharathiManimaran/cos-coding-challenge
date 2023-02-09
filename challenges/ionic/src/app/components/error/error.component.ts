import { TranslateService } from "@ngx-translate/core";
import { Subscription } from "rxjs";
import { Component, Input, OnDestroy, OnInit } from "@angular/core";

@Component({
  selector: "app-error",
  templateUrl: "./error.component.html",
  styleUrls: ["./error.component.scss"],
})
export class ErrorComponent implements OnInit, OnDestroy {
  @Input() errorMessage?: string;
  somethinWentWrong = "ERRORS.something_went_wrong";

  msgSubscription?: Subscription;

  constructor(private translateService: TranslateService) {}

  ngOnInit() {
    /** Fetch default error message if no error message is passed into the component */
    if (!this.errorMessage) {
      this.msgSubscription = this.translateService
        .get(this.somethinWentWrong)
        .subscribe((value) => {
          this.errorMessage = value;
        });
    }
  }

  ngOnDestroy() {
    this.msgSubscription?.unsubscribe();
  }
}
