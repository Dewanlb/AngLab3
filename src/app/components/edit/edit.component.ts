import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../profile.service";
import { Router } from "@angular/router";
import { UserProfile } from "src/app/user-profile";

@Component({
  selector: "app-edit",
  templateUrl: "./edit.component.html",
  styleUrls: ["./edit.component.css"]
})
export class EditComponent implements OnInit {
  profile: UserProfile;
  constructor(private profileService: ProfileService, private router: Router) {}

  updateProfile(): void {
    this.profileService.setUserProfile(this.profile);
    this.router.navigate(["profile"]);
  }
  ngOnInit() {
    this.profile = this.profileService.getUserProfile();
  }
}
