import { Component } from "@angular/core";
import { EnrollmentService } from "./enrollment.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "florek";
  constructor(private _enrollmentService: EnrollmentService) {}
}
