import { Component, OnInit } from "@angular/core";
import { User } from "../user";
import { EnrollmentService } from "../enrollment.service";
import axios from "axios";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"],
})
export class LoginComponent implements OnInit {
  userModel = new User("superuser@florater.one", "florater");
  constructor(private _enrollmentService: EnrollmentService) {}

  onSubmit() {
    this._enrollmentService
      .enroll(this.userModel)
      .subscribe(
        data => console.log("Succes", data),
        error => console.log("Error!", error)
      );
  }

  userdata(token) {
    const axios = require("axios");

    let Config = {
      headers: {
        Authorization: "JWT " + token,
      },
    };

    const UserData = () => {
      try {
        return axios.get(
          "https://kfsz.pythonanywhere.com/api/users/user-data/",
          Config
        );
      } catch (error) {
        alert(error);
      }
    };
    

    const getUserDataResponse = async () => {
      const data = UserData()
        .then(response => {
          console.log(response.data.first_name);
        })
        .catch(error => {
          alert(error);
        });
    };

    getUserDataResponse();
    var log = () => {
      const axios = require("axios");
      var token:any;
      var JSONParsed = "";
      var JSONdata = "";

      const Login = () => {
        try {
          return axios.post(
            "https://kfsz.pythonanywhere.com/api/users/obtain-token/",
            this.userModel
          );
        } catch (error) {
          alert(error);
        }
      };

      const showLoginResponse = async () => {
        const data = Login()
          .then(response => {
            token = response.data.token;
            JSONdata = JSON.stringify(response);
            JSONParsed = JSON.parse(JSONdata);
            this.userdata(token);
          }
        }
   } } 
  ngOnInit() {}
}
