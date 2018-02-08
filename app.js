
document.addEventListener("DOMContentLoaded", function () {
    let btn = document.createElement("button");
    btn.innerText = "Add Square";
    document.body.appendChild(btn);
    var lf = document.createElement("br");
    document.body.appendChild(lf)
    let divCnt = 0;
    var colors = ["crimson", "red", "blue", "cyan", "magenta", "purple", "green", "yellow", "brown", "orange"]
    var divs = [];

    function removeDiv(index2Remove){
        let newArr = [];
        for(let i in divs){
            if (i != index2Remove){
                newArr.push(divs[i]);
            }
        }
        divs = newArr;
    }
    
    


    btn.addEventListener("click", function () {
        divCnt++;
        let div = document.createElement("div");
        div.className = "squareDiv";
        div.id = divCnt - 1;

        let divText = document.createElement("div");
        divText.innerText = div.id;
        div.appendChild(divText);
        document.body.appendChild(div);
        divs.push(parseInt(div.id));

        div.addEventListener("click", function () {
            let rnd = Math.floor(Math.random() * 10);
            this.style.backgroundColor = colors[rnd];
        });

        div.addEventListener("dblclick", function () {
            let divId = parseInt(this.id);
            let divIndex = divs.indexOf(divId)
            if (divId % 2 == 0) {
                // Even - Remove Next
                if (divIndex == divs.length - 1) {
                    alert("Even - No square to remove");
                } else {
                    let id2Remove = divs[divIndex + 1];
                    let divToRemove = document.getElementById(id2Remove);
                    document.body.removeChild(divToRemove);
                    removeDiv(divIndex+1);
                }
            } else {
                // Odd - Remove Previous
                if (divIndex == 0) {
                    alert("Odd - No square to remove");
                } else {
                    let id2Remove = divs[divIndex - 1];
                    let divToRemove = document.getElementById(id2Remove);
                    document.body.removeChild(divToRemove);
                    removeDiv(divIndex - 1);
                }
            }
        });
    });
});
