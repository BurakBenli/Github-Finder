import { Github } from "./scripts/api.js";
import { elements } from "./scripts/helpers.js";
import { UI } from "./scripts/ui.js";

//Github classın ornegını olusturduk
const github = new Github()
const ui = new UI()


const getInput = (e) =>{
    e.preventDefault();
    const value = elements.searchInput.value
    if(value ==""){
        return;
    }
    if(value){
        github.fetchUserData(value).then((res) => {
            if(res.message === 'Not Found'){
              ui.showAlert("Kullanıcı Bulunamadı","alert alert-danger");       
            }else{
                ui.showAlert("Kullanıcı Bulundu" , "alert alert-success");
                ui.renderProfile();
            }
        }).catch((err => console.log(err)));
    }
};


elements.searchBtn.addEventListener('click',getInput);
