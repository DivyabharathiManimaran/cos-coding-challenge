import { TranslateService } from '@ngx-translate/core';
import { Subscription } from 'rxjs';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-error',
  templateUrl: './error.component.html',
  styleUrls: ['./error.component.scss'],
})
export class ErrorComponent implements OnInit {

  @Input() errorMessage?: string;
  error!: string;
  somethinWentWrong='ERRORS.something_went_wrong';

  msgSubscription!: Subscription;

  constructor(private translateService: TranslateService) { }

  ngOnInit() {
      this.msgSubscription =  this.translateService.get(this.somethinWentWrong).subscribe(
        value => {
          this.error = value;
        }
      )
  }

}
