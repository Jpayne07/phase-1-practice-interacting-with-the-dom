

document.addEventListener("DOMContentLoaded",(event) =>{
    const  counter = document.getElementById("counter")
    let count =0
    function increment(){
        count++;
        counter.textContent = count
    }

    let plus = document.getElementById("plus")
    plus.addEventListener("click",() =>{
        count++;
        counter.textContent = count;
        
    })

    let minus = document.getElementById("minus")
    minus.addEventListener("click",() =>{
        count--;
        counter.textContent = count;
    })
    
    let intervalID = setInterval(increment, 1000)

    let pause = document.getElementById("pause")
    pause.addEventListener("click", () => {
  if (pause.textContent === ' pause ') {
    clearInterval(intervalID);
    pause.textContent = 'resume';
    pause.id = 'resume';
  } else {
    intervalID = setInterval(increment, 1000);
    pause.textContent = 'pause';
    pause.id = 'pause';
  }
});

let commentForm = document.getElementById('comment-form')
console.log(commentForm)
    commentForm.addEventListener("submit", (event) =>{
            event.preventDefault();
            formComment = document.getElementById('comment-input').value
            const commentAppend = document.createElement("p")
            commentAppend.textContent = formComment
            console.log(commentAppend)
            return document.getElementById("list").appendChild(commentAppend)
    })



    })
    