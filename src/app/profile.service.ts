import { Injectable } from "@angular/core";
import { UserProfile } from "../app/user-profile";
import { Router } from "@angular/router";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  private profile: UserProfile = {
    name: "Dewan",
    contact: "Dewanok@gmail.com",
    bio: "Young Man with a Plan"
  };
  constructor() {}
  getUserProfile() {
    return this.profile;
  }
  setUserProfile(profile: UserProfile): void {
    this.profile = profile;
  }
}
