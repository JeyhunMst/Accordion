var accordions=document.querySelectorAll(".accordion");
for (let i = 0; i < accordions.length; i++) {
    let acc=accordions[i];
   acc.addEventListener("click",()=>{
        for (let j = 0; j < accordions.length; j++) {
            let unwillingAcc=accordions[j];
            unwillingAcc.classList.remove("active");
            let sibblingOfAcc=unwillingAcc.nextElementSibling;
            sibblingOfAcc.classList.add("d-none");   
        }
        acc.classList.add("active");
        let mainInfoAcc=acc.nextElementSibling;
        mainInfoAcc.classList.remove("d-none");
        
   })
    
}