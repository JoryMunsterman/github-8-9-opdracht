// Gebruik array methoden voor alle onderstaande opdrachten

const inventors = [
  { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
  { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
  { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
  { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
  { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
  { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
  { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
  { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
  { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
  { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
  { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
  { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }
];

// 1. Filter de lijst op uitvinders die geboren zijn in de 16e eeuw
// Verwachte uitkomst:
// [{ first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 }, { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 }]

const zestiendeEeuw = inventors.filter((inventor) => {
  //return years boven 1500 en onder 1600
    return inventor.year <= 1600 && inventor.year >= 1500
  })
//print gevraagde getallen
console.log(zestiendeEeuw)


// 2. Maak een array met daarin alle geboortejaren van de uitvinders
// Verwachte uitkomst: [1879, 1643, 1564, 1867, 1571, 1473, 1858, 1898, 1815, 1855, 1878, 1847];

const yearOfBirth = inventors.map((inventor)=> {
  return inventor.year
})
console.log(yearOfBirth)

// 3. Maak een array met daarin alle volledige namen van de uitvinders (dus voor- en achternaam als één string)
// Verwachte uitkomst: [ 'Albert Einstein', 'Isaac Newton', 'Galileo Galilei', 'Marie Curie', 'Johannes Kepler', 'Nicolaus Copernicus', 'Max Planck', 'Katherine Blodgett', 'Ada Lovelace', 'Sarah E. Goode', 'Lise Meitner', 'Thomas Edison']

const names = inventors.map((inventor) => {
  return inventor.first + " " + inventor.last
})
console.log(names)

// 4. Sorteer de uitvinders op geboortejaar, oplopend van oudste naar jongste uitvinder
// Verwachte uitkomst:
// [
//   { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
//   { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
//   { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
//   { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
//   { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 },
//   { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
//   { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
//   { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
//   { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
//   { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
//   { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
//   { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 }
// ]

const ageOrder = inventors.sort((a, b) => {
  if(a.year < b.year) {
    return -1;
  }
})
console.log(ageOrder)
//extra oefening
const nameOrder = inventors.sort((a,b) => {
  if(a.first < b.first) {
    return -1;
  }
})
console.log(nameOrder)

// 5. Sorteer de uitvinders op hoeveel jaren ze geleefd hebben, van langste leven naar kortste leven
// Verwachte uitkomst:
// [
// { first: 'Lise', last: 'Meitner', year: 1878, passed: 1968 },
// { first: 'Max', last: 'Planck', year: 1858, passed: 1947 },
// { first: 'Isaac', last: 'Newton', year: 1643, passed: 1727 },
// { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 },
// { first: 'Katherine', last: 'Blodgett', year: 1898, passed: 1979 },
// { first: 'Galileo', last: 'Galilei', year: 1564, passed: 1642 },
// { first: 'Albert', last: 'Einstein', year: 1879, passed: 1955 },
// { first: 'Nicolaus', last: 'Copernicus', year: 1473, passed: 1543 },
// { first: 'Marie', last: 'Curie', year: 1867, passed: 1934 },
// { first: 'Johannes', last: 'Kepler', year: 1571, passed: 1630 },
// { first: 'Sarah E.', last: 'Goode', year: 1855, passed: 1905 },
// { first: 'Ada', last: 'Lovelace', year: 1815, passed: 1852 }
// ]

const yearsLivedOrder = inventors.sort((a, b) => {
  if((b.passed - b.year) < (a.passed - a.year)) {
    return -1
  }
})
console.log(yearsLivedOrder)

// const passedPerson = inventors.find((inventor) => {
//   return inventor.passed
// })
// const yearBorn = inventors.find((inventor) => {
//   return inventor.year
// })
// const yearsLived = passedPerson - yearBorn
// console.log(yearsLived)
//
// const livedYears = inventors.sort((a, b) => {
//   if (a.)
// })

// 6. Vind de gegevens over de uitvinder wiens achternaam 'Edison' is.
// Verwachte uitkomst: { first: 'Thomas', last: 'Edison', year: 1847, passed: 1931 }

const nameEdison = inventors.find((inventor) => {
  return inventor.last === "Edison";
})
console.log(nameEdison)
//extra oefening
const firstSarah = inventors.find((inventor) => {
  return inventor.first === "Sarah E.";
})
console.log(firstSarah)
//extra oefening
const yearGalilei = inventors.find((inventor) => {
  return inventor.year === 1564;
})
console.log(yearGalilei)
