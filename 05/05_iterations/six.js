const myNum=[1,2,3,4,5,6,7,8,9,10]
const newNum=myNum.filter( (num)=>num>4)
//console.log(newNum);

//must return when { is in diffrent line
// }
// { -> scope open than return must;

const num=[1,2,3,4,5,6]
const newN= num.filter((num)=>{
    return num>4
})
//console.log(newN);


const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

const userBooks=books.filter((bk)=>bk.genre==='History')
//console.log(userBooks);

const movie=[
    {
       title: "aaa", language: "hindi", release: 2020, part2: 2022
    },
    {
       title: "bbb", language: "hindi", release: 2000, part2: 2010
    },
    {
       title: "ccc", language: "kannada", release: 2015, part2: 2023
    },
    {
       title: "rrr", language: "telegu", release: 2020, part2: 2024
    },
    {
       title: "abc", language: "telegu", release: 1999, part2: 2005
    }
];
const info=movie.filter((muv)=>   muv.language==='kannada')
//console.log(info);
const info1=movie.filter((muv)=>   muv.language==='hindi')
//console.log(info1);

// {} scope than must use return
const info2=movie.filter((movvvvv) =>{  return movvvvv.release>=2005
})
//console.log(info2);


const info3=movie.filter((movvvvv) =>{ 
     return movvvvv.release>=2000 &&  movvvvv.language==="hindi"
})
console.log(info3);


