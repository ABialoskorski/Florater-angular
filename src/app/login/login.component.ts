import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { EnrollmentService } from "../enrollment.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  // userModel = new User("superuser@florater.one", "florater");
  // constructor(private _enrollmentService: EnrollmentService) {}

  // onSubmit() {
  //   this._enrollmentService
  //     .enroll(this.userModel)
  //     .subscribe(
  //       data => console.log("Succes", data),
  //       error => console.log("Error!", error)
  //     );
  // }

  ngOnInit() {}
}
