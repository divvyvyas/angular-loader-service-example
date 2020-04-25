import { Component, OnInit, OnDestroy } from '@angular/core';
import { Subscription, Observable } from 'rxjs';
import { LoaderService } from './services/loader.service';
import { LoaderState } from './models/loader-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'loader-service-example';

  private subscription: Subscription;
  public show = false;

  constructor(
    private _loaderService: LoaderService
  ) { }

  ngOnInit(){
    this.subscription = this._loaderService.loaderState
    .subscribe((state: LoaderState) => {
      this.show = state.show;
    });
  }

  ngOnDestroy(){
    this.subscription.unsubscribe();
  }
}
