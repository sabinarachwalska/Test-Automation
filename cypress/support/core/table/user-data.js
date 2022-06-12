export const name = [
  "Aaron",
  "Barbara",
  "Cecylia",
  "Daniel",
  "Edmund",
  "Fabian",
  "Gloria",
  "Hanna",
  "Ignacy",
  "Jacek",
  "Kaja",
  "Laura",
  "Magda",
  "Natalia",
  "Oktawiusz",
  "Patryk",
  "Radosław",
  "Sabina",
  "Tadeusz",
  "Urszula",
  "Wiktor",
];
export const surname = [
  "Nowak",
  "Wójcik",
  "Kowalczyk",
  "Woźniak",
  "Mazur",
  "Miśkowiec",
  "Baran",
  "Hanna",
  "Kobus",
  "Krawczyk",
  "Wróbel",
  "Wieczorek",
  "Krupa",
  "Kubiak",
  "Mazurek",
  "Kozak",
  "Szulc",
  "Mróz",
  "Kruk",
  "Kot",
  "Polak",
];
export const street = [
  "Bażantów",
  "Sadowa",
  "Zachodnia",
  "Szwedzka",
  "Szewska",
  "Biedronek",
  "Parczewskiego",
  "Brynowska",
  "Mariacka",
  "Floriańska",
  "Słowackiego",
  "Czapli",
  "Cisowa",
  "Brzozowa",
  "Chmielna",
  "Deszczowa",
  "Dolna",
  "Dworska",
  "Dworcowa",
  "Działowa",
  "Fabryczna",
];
export const postcode = [
  "40668",
  "30206",
  "51433",
  "32435",
  "78324",
  "12322",
  "55876",
  "23131",
  "13342",
  "12321",
  "43654",
  "21652",
  "86987",
  "12432",
  "24476",
  "55321",
  "11333",
  "10100",
  "23132",
  "77985",
  "12321",
];
export const town = [
  "Kraków",
  "Warszawa",
  "Katowice",
  "Wrocław",
  "Rzeszów",
  "Gdańsk",
  "Gdynia",
  "Sopot",
  "Opole",
  "Zielona góra",
  "Sosnowiec",
  "Częstochowa",
  "Kołobrzeg",
  "Ruda Śląska",
  "Chorzów",
  "Sanok",
  "Białystok",
  "Wydrna",
  "Dydnia",
  "Grabownica",
  "Jabłonka",
];
export const voivodeship = [
  "dolnośląskie",
  "kujawsko-pomorskie",
  "lubelskie",
  "lubuskie",
  "łódzkie",
  "małopolskie",
  "mazowieckie",
  "opolskie",
  "podkarpackie",
  "podlaskie",
  "pomorskie",
  "śląskie",
  "świętokrzyskie",
  "warmińsko - mazurskie",
  "wielkopolskie",
  "zachodniopomorskie",
];
export const password = [
  "QhbLresmtwFQRvKTkEN4",
  "D7ZaAuCntmBf5f8buF4D",
  "ER7HCE6aYmF7qouYCGJc",
  "NXTFD4Aua1yMrEdBkMeH",
  "9Q51XawyhUfpY280Mmho",
  "XN0rEwx5PWHTMJGPb3ML",
  "Yw2vK3YbvZ8L6RnG1kJP",
  "mxkbFuKrUyuH0Bk45Wbq",
  "cFyjDKk4BpwR6c92pjcX",
  "4HuuYxnMAnu9omvk811w",
  "XxfRGRkpJqayTV9YvDVV",
  "sgNGfvY5VBWHoQusGueh",
  "MCdMYvgdhtX7V43CREii",
  "6cxDdi2RVjp95BPpx61Y",
  "fntaqBByDXD8U18jrB0u",
  "FKGQYHGtMPwR5XJZDw8L",
  "5cGGXT4AKM4kDBZt02U7",
  "mT7rwUmvECGJQzjci80N",
  "Yy8EyYcxyjN2YaWmKRRE",
  "EDHznFZKacFn6Cpu2wwK",
  "TvJNdEhD02cEBF5hAYqj",
];

export const companyName = [
  "Equalis",
  "Kotrak",
  "Masters",
  "Solution Rent",
  "IdeaBud",
  "Alisna",
  "Tom&Co",
  "Konstruktor",
  "Skanditek",
  "Cocolita",
  "Zebra",
  "Mohito",
  "Adidas",
  "H&M",
  "Zara",
  "New Yorker",
  "Reserved",
  "Sephora",
  "Natura",
  "Hebe",
  "Rossman",
];

export function randomString(len, char) {
  var results = "";
  for (let i = len; i > 0; --i) {
    results += char;
  }
}

function generateRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}
export const generateRandomNumber = Math.floor(Math.random() * 10 + 2);
export const phone = Math.floor(Math.random() * 900000000 + 100000000);
export const generatePhone = generateRandom(phone);
export const randomEmail =
  Math.random().toString(10).substring(11) + "test" + "@E2E-test.com";
export const generateRandomName = generateRandom(name);
export const generateRandomSurname = generateRandom(surname);
export const generateStreet = generateRandom(street);
export const generatePostcode = generateRandom(postcode);
export const generateTown = generateRandom(town);
export const generateVoivedeship = generateRandom(voivodeship);
export const generatePassword = generateRandom(password);
export const generateCompanyName = generateRandom(companyName);
