 const batsman = ["VK","MSD","GG","DK"]
 const bowler = ["Buhi","Bumraha", "Shami", "YUZI" ]
     batsman.concat(bowler)
//   console.log(batsman);

// spread.   just [...       and -> ,   ]    it will perform concatiation
   const indian_team= [...batsman, ...bowler ]
//console.log(indian_team)


/////. flat(. infinity).     
const criket_oplimpics_teams =["Aus","Eng", ["Nz","Ire"],"Afg","Usa", ["Ind","Pak"]]

// all_team is new array and flat method make all combine
const all_teams=criket_oplimpics_teams.flat(Infinity)
//console.log(all_teams)



// convert to array by---> from      and    2)  of
//console.log(Array.isArray("Vishal"))
  //console.log(Array.from("Vishal"))
// convert to array
//console.log(Array.from({name: "Vishal"})) // interesting. bcz->[] empty



//convert to array by--->  Array.of()
let score1=200;
let score2=400;
let score3=600;
console.log(Array.of(score1,score2,score3))
//[ 200, 400, 600 ]