// export class Hospital {
//
//   async apiDocName(docName) {
//     try {
//       let response = fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`)
//       if(response.ok) {
//         let jsonifiedResponse = await response.json();
//         return jsonifiedResponse;
//
//       } else {
//         throw new Error('my error');
//       }
//     } catch(error) {
//       let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=${process.env.API_KEY}`)
//       if (!response.ok) {
//         let jsonifiedResponse = await response.json();
//         return jsonifiedResponse;
//       }
//     }
//   }
// }

export class Hospital {
  async apiDocName(docName) {
    let response =  await fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=pete&location=37.773%2C-122.413%2C100&user_location=37.773%2C-122.413&skip=0&limit=10&user_key=5cbce404701e46ba0b6879e5692075eb`)
    let jsonifiedResponse = await response.json();
    console.log(response);
    console.log(jsonifiedResponse);
    return jsonifiedResponse;
  }
}
