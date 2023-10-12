
  
 function Next(){
    var elements = document.getElementsByClassName("inputs");
    for (let i = 0; i < elements.length; i++) {
       
        if(elements[i].classList.contains("active")){
            if(i == elements.length-1){
                elements[i].classList.remove("active");
                elements[0].classList.add("active");
            } else{
            elements[i].classList.remove("active");
            elements[i+1].classList.add("active");
            }
            break;
        }
        
    }
}