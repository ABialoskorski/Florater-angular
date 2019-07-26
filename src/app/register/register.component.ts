import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { EnrollmentService } from "../enrollment.service";

@Component({
  selector: "app-register",
  templateUrl: "./register.component.html",
  styleUrls: ["./register.component.scss"],
})
export class RegisterComponent implements OnInit {
  userModel = new User("Mareczek", "Markowski", "", "");
  constructor(private _enrollmentService: EnrollmentService) {}

  submitted = false;

  onSubmit() {
    this.submitted = true;
    this._enrollmentService
      .enroll(this.userModel)
      .subscribe(
        data => console.log("Succes!", data),
        error => console.log("Error!", error)
      );
  }

  ngOnInit() {}
}
