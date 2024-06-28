const menu= document.querySelector(".menu");
const select= document.querySelector(".select");
let click= true;
menu.addEventListener("click",()=>
    {
        if(click)
            {
                select.style.marginTop = "400px";
                click=false;
            }
            else
            {
                select.style.marginTop = "0px";
                click= true;
            }
     
    }
)
