import { Component, OnInit } from "@angular/core";
import { CallNumber } from "@ionic-native/call-number/ngx";
import { EmailComposer } from "@ionic-native/email-composer/ngx";
@Component({
  selector: "app-contact",
  templateUrl: "./contact.page.html",
  styleUrls: ["./contact.page.scss"],
})
export class ContactPage implements OnInit {
  constructor(
    private callNumber: CallNumber,
    private emailComposer: EmailComposer
  ) {}
  ngOnInit() {}
  onCallRoman() {
    this.callNumber
      .callNumber("+972-54-5779239", true)
      .then((res) => console.log("Launched dialer!", res))
      .catch((err) => console.log("Error launching dialer", err));
  }
  sendMailTo(address: string) {
    this.emailComposer.open({
      to: address,
    });
  }
}
