import { Github } from "./scripts/api.js";
import { elements } from "./scripts/helpers.js";
import { UI } from "./scripts/ui.js";
// Github sınıfının örneğini oluşturduk
const github = new Github();
const ui = new UI();
const getInput = (e) => {
    e.preventDefault();
    const value = elements.searchInput.value;
    if (value === "") {
        return;
    }
    if (value) {
        github.fetchUserData(value).then((res) => {
            if (res.message === 'Not Found') {
                ui.showAlert("Kullanıcı Bulunamadı", "alert alert-danger");
            } else {
                ui.showAlert("Kullanıcı Bulundu", "alert alert-success");
                ui.renderProfile(res.profile); // Profil bilgilerini render et
                ui.renderRepos(res.repos); // Repo bilgilerini render et
            }
        }).catch((err) => console.log(err));
    }
};
elements.searchBtn.addEventListener('click', getInput);







