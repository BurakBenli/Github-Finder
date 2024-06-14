export class Github {
  constructor() {
      this.client_id = "Ov23liEujvlCgo4R6eqR";
      this.client_secret = "32e9e8f06266b33c8b4facfc7e9f4ff1fcd16e14";
      this.per_page = 10;
  }
  // Kullanıcı bilgilerini alma
  async fetchUserData(username) {
      const profileUrl = `https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}`;
      const reposUrl = `https://api.github.com/users/${username}/repos?client_id=${this.client_id}&client_secret=${this.client_secret}&per_page=${this.per_page}`;
      try {
          const [profileRes, reposRes] = await Promise.all([
              fetch(profileUrl),
              fetch(reposUrl)
          ]);
          if (!profileRes.ok) {
              throw new Error('User not found');
          }
          const profileData = await profileRes.json();
          const reposData = await reposRes.json();
          console.log(reposData)
          return {
              profile: profileData,
              repos: reposData
          };
      } catch (error) {
          console.error(error);
          return { message: 'Not Found' };
      }
  }
}