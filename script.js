let faqboxes = document.querySelectorAll(".faqbox__disp");
let paragraphs = document.querySelectorAll(".faqbox p");

faqboxes.forEach((i) => {
    faqboxes[i].addEventListener("click", () => {
        let p = paragraphs[i];
        if (p.style.display === "none") {
            p.style.display = "block"; 
        } else {
            p.style.display = "none";  
        }
    });
});