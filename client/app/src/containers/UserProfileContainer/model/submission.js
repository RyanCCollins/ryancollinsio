export default class ProfileSubmission {
  constructor() {
    this.toData = this.toData.bind(this);
    const args = arguments[0];
    this.authToken = args.user.authToken;
    this.profile = {
      bio: args.bioInput,
      avatar: args.avatarInput,
      email: args.emailInput,
    };
  }
  toData() {
    return {
      authToken: this.authToken,
      profile: this.profile,
    };
  }
}
