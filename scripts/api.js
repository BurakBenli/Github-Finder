export class Github{
    constructor(){
        this.client_id = "Ov23liEujvlCgo4R6eqR";
        this.client_secret = "32e9e8f06266b33c8b4facfc7e9f4ff1fcd16e14";
        this.per_page = 10;
    }
    //API den kullanıcı bilgilerini alma
    async fetchUserData(username){
      const profileRes = await fetch(`https://api.github.com/users/${username}?client_id=${this.client_id}&client_secret=${this.client_secret}?per_page=${this.per_page}`);
    
      const data = await profileRes.json();
      console.log(data)
      return data;
    }
}