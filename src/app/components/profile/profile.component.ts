import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../profile.service";
import { UserProfile } from "src/app/user-profile";
@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  profile: UserProfile; //Need this reference to use method getUserProfile();

  constructor(private profileService: ProfileService) {}

  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}
