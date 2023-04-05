
let collapse = document.getElementById("openBar")

const showBar = document.getElementById("collapseBar");
const blackbox = document.getElementById("openBox")


collapse.addEventListener("click", ()=> {
    showBar.style.display = "block"
    blackbox.style.display = "block"
})



    fetch('https://dev.deepthought.education/assets/uploads/files/files/others/ddugky_project.json').then((data) => {
        return data.json();
    }).then((object) => {
        console.log(Object[0].commitment);
        let table = "";
        object.map((value) => {
            table += `<h1>${value.commitment}</h1>`;
        })
        document.getElementById('video').innerHTML = table
    })
