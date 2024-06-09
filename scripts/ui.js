import { elements } from "./helpers.js";

export class UI{
    constructor(){
        this.profile = elements.profile;
    }

    renderProfile(res){
        this.profile.innerHTML = `
        <div class="row border p-4 my-4 rounded-3">
        <div class="col-md-3">
            <img class="img-fluid rounded shadow" src="${res.avatar_url}" alt="">
            <a class="btn btn-primary w-100 mt-4" href="${res.html_url}">Profili Göster</a>
        </div>
        <div class="col-md-9 gap-3" id="profileButton">
            <span class="badge fs-6 bg-primary">Açık Repolar:${res.public_repos}</span>
            <span class="badge fs-6 bg-secondary">Açık Gistler:0</span>
            <span class="badge fs-6 bg-success">Takipçiler:327 </span>
            <span class="badge fs-6 bg-info">Takip Edilenler:0 </span>

            <ul class="list-group mt-3">
                <li class="list-group-item">Hakkında: A software company</li>
                <li class="list-group-item">Şirket: null</li>
                <li class="list-group-item">Website: udemig.com</li>
                <li class="list-group-item">Konum:Sweden</li>
                <li class="list-group-item">Hesap Oluşturma:25.09.2022</li>
            </ul>
        </div>
    </div>
        `;
    }

    showAlert(message , className){
        const div = document.createElement("div");
        div.className = className;
        div.textContent = message;
        console.log(div);
        elements.warning.appendChild(div);
        console.log(elements.warning);
        setTimeout(()=>{
            this.clearAlert()
        },3000)
    }

    clearAlert(){
       const currentAlert =  document.querySelector(".alert");
       if(currentAlert){
            currentAlert.remove();
       }
       
    }

    
}