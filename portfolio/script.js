


// document.getElementsByClassName("menu_btn").addEventListener("click",menu_function);



let flag=0;
function menu_function(){
    let menu_ele=document.getElementById("_menu_");
    if(flag==0){
        // alert("came in if statement");
        menu_ele.style.display="block";
        flag=1;
        // alert("after flag 1")
        
    }
    else{
        // alert("came in else statement")
        menu_ele.style.display="none";
        flag=0;
    }
    // alert("you clicked menu");


}


