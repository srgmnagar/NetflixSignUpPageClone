let faqboxes = document.querySelectorAll(".faqbox__disp");
let paragraphs = document.querySelectorAll(".faqbox p");

faqboxes.forEach((faqbox, i) => {
    faqbox.addEventListener("click", () => {
        let p = paragraphs[i];
        if (p.style.display === "none") {
            p.style.display = "block"; 
        } else {
            p.style.display = "none";  
        }
    });
});