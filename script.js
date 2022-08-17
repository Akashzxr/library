let mylibrary = [];
let length;
let add_btn = document.querySelector('#add-btn');
let booksec = document.querySelector('#book-sec');


class library{
constructor(bookname,author,pages){
 this.name = bookname;
 this.author = author;
 this.pages = pages; 
}
}



function addBookToLibrary() {
   let bookname = prompt("enter book name");
   let author = prompt("enter author name");
   let pages = prompt("enter no of pages");
   let books = new library(bookname,author,pages);
   mylibrary.push(books);
   length = mylibrary.length;

    let div = document.createElement("div");
    div.classList.add('new');

    let s1 = document.createElement("span");
    s1.classList.add('details')
    s1.textContent = mylibrary[length-1].name;

    let s2 = document.createElement("span");
    s2.classList.add('details');
    s2.textContent = mylibrary[length-1].author;

    let s3 = document.createElement("span");
    s3.classList.add('details');
    s3.textContent = mylibrary[length-1].pages;

    let readbtn = document.createElement("button");
    readbtn.classList.add('notread');
    readbtn.onclick=function(){
    readbtn.classList.toggle('read');
        if(readbtn.innerHTML == "Not read"){
            readbtn.innerHTML="Read";
        }
        else{
            readbtn.innerHTML="Not read";
        }
    }
    readbtn.textContent = "Not read";

    let removebtn = document.createElement("button");
    removebtn.classList.add('remove');
    removebtn.onclick=function(){
        this.parentElement.remove();
    };
    removebtn.textContent = "Remove";
    
    booksec.appendChild(div);
    div.appendChild(s1);
    div.appendChild(s2);
    div.appendChild(s3);
    div.appendChild(readbtn);
    div.appendChild(removebtn);
    
}


add_btn.addEventListener('click',addBookToLibrary);

