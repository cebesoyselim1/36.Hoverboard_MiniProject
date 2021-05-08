const hoverboard = document.querySelector(".hoverboard");

const colors = {
    navy: "#001f3f",
    blue: "#0074D9",
    aqua: "#7FDBFF",
    teal: "#39CCCC",
    olive: "#3D9970",
    green: "#2ECC40",
    lime: "#01FF70",
    yellow: "#FFDC00",
    orange: "#FF851B",
    red: "#FF4136",
    maroon: "#85144b",
    fuchsia: "#F012BE",
    purple: "#B10DC9"
}
const boxCount = 500;


loadBoxes();

function loadBoxes(){

    for(let i = 0; i < boxCount; i++){
        let box = document.createElement("div");
        box.className = "box";
        box.addEventListener("mouseenter", (e) => {
            let color = Object.values(colors)[Math.floor(Math.random() * Object.values(colors).length)];
            e.target.style.backgroundColor = color;
            e.target.style.boxShadow = `1px 1px 5px 0px ${color}`;
            changeBack(e);
        })

        hoverboard.appendChild(box);
    }
} 

function changeBack(e){
    setTimeout(() => {
        e.target.style.backgroundColor = "#424242";
        e.target.style.boxShadow = `1px 1px 5px 0px #424242`;
    },300);
}


