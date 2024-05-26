let add = document.querySelector(".add");
let menu = document.querySelector("#menu");
let cross = document.querySelector(".cross");

add.addEventListener(`click`, ()=>{
    menu.classList.add(`active`)
});

cross.addEventListener(`click`,()=>{
    menu.classList.remove(`active`)
});

menu.addEventListener(`click`,function(r){
    
    if(r.target.classList.contains(`active`)){
        
        menu.classList.remove(`active`)
        
    }
});


let navigation = document.querySelector(`#navigation`);
window.addEventListener(`scroll`,function(){
    let test = this.document.documentElement.scrollTop;
    if(test > 100){
        navigation.classList.add("action")
        
    }else{
        navigation.classList.remove("action")
    }
})


// let a = 0
// window.addEventListener(`scroll`,function(){
//     let test = this.document.documentElement.scrollTop;
//     if(test < a){
//         navigation.classList.add("action")
        
//     }else{
//         navigation.classList.remove("action")
//     }
//     a = test
// })