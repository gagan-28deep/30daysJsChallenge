// Activity 1
let obj = {
  title: "New Book",
  author: "John Doe",
  year: 2020,
};

// console.log(obj);

// console.log(obj.author);
// console.log(obj["title"]);

// Activity 2

obj.getBookDetais = function () {
  return `Book title : ${this.title} , author : ${this.author} , year : ${this.year}`;
};

let bookDetails = obj.getBookDetais();
// console.log(bookDetails);

obj.updateDetails = function (year) {
  this.year = year;
  return `Book title : ${this.title} , author : ${this.author} , year : ${this.year}`;
};

let updatedBook = obj.updateDetails(2021);
// console.log(updatedBook);

// Activity 3

let library = {
  name: "New Library",
  books: [
    {
      title: "Book 1",
      author: "John Doe",
      year: 2020,
    },
    {
      title: "Book 2",
      author: "new Doe",
      year: 2021,
    },
    {
      title: "Book 3",
      author: "hey Doe",
      year: 2022,
    },
  ],
};

// console.log(library);

// console.log(library?.name);

// library?.books?.map((book)=>(
//     console.log(book?.title)
// ))

library?.books?.forEach((book) => {
  // console.log(book?.title)
});

// Activity 4

// Same as activity 2

// Activity 5

for (const key in obj) {
  console.log(key , obj[key]);
}



// console.log(Object.keys(obj));

// console.log(Object.values(obj));
