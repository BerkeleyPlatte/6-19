function cl(data) {
  console.log(data);
}

const doctor = {
  name: null,
  speciality: null,
  address: null
};

function makeDrObj(arg1, arg2, arg3) {
  doctor.name = arg1;
  doctor.speciality = arg2;
  doctor.address = arg3;
  return doctor;
}

cl(makeDrObj("Jon Smith", "Oncology", "123 Street Drive"));

let petsArr = [];
function mkObjArr(name, breed) {
  let pets = {
    name: name,
    breed: breed
  };
  petsArr.push(pets);
}

mkObjArr("Molly", "English Setter");
mkObjArr("Sophie", "German Pointer");
mkObjArr("Penny", "German Pointer");
cl(petsArr);

let jumpStop = [];
let chatten = [];
let polar = [];

function musicFactFunc(name, genre, age) {
  let artistObj = {
    name: name,
    genre: genre,
    age: age
  };
  if (artistObj.genre === "Funk" || artistObj.genre === "Rap") {
    jumpStop.push(artistObj);
  } else if (artistObj.genre === "Country" || artistObj.genre === "Bluegrass") {
    chatten.push(artistObj);
  } else {
    polar.push(artistObj);
  }
  return artistObj;
}

musicFactFunc("Trill", "Rap", 23);
musicFactFunc("bob", "Funk", 75);
musicFactFunc("roy", "Pop", 21);
musicFactFunc("stacy", "Country", 83)
cl(jumpStop);
cl(chatten);
cl(polar);
