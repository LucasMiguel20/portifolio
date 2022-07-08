const getAge = document.getElementById("informations-age");
let updateAge = document.createTextNode(updatedAge());
getAge.appendChild(updateAge);

function updatedAge() {
    let today = new Date();
    let birthDate = new Date(1988, 07, 21);
    let age = today.getFullYear() - birthDate.getFullYear();
    let m = today.getMonth() - birthDate.getMonth();
    if (m < 0 || (m === 0 && today.getDate() < birthDate.getDate())) {
        age--;
    }
    return age;
}