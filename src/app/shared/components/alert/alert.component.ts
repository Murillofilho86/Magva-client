import { Alert, AlertType } from './../../models/alert.model';
import { Component, OnInit, Input } from '@angular/core';
import { AlertService } from './services/alert.service';

@Component({
  selector: 'app-alert',
  templateUrl: './alert.component.html'
})
export class AlertComponent {

  @Input() timeout = 3000;
  alerts: Alert[] = [];

  constructor(
    private _servive: AlertService
  ) {

    this._servive
      .getAlert()
      .subscribe(alert => {
        if (!alert) {
          this.alerts = []
          return;
        }
        this.alerts.push(alert);
        setTimeout(() => this.removeAlert(alert), this.timeout);
      })
  }

  removeAlert(alertToRemove: Alert) {
    this.alerts = this.alerts.filter(alert => alert != alertToRemove)
  }

  getAlertClass(alert: Alert) {
    if (!alert) return '';

    switch (alert.alertType) {
      case AlertType.SUCCESS:
        return 'uk-alert-success';
      case AlertType.DANGER:
        return 'uk-alert-danger';
      case AlertType.WARNING:
        return 'uk-alert-warning';
      case AlertType.INFO:
        return 'uk-alert-primary';
    }
  }
}
