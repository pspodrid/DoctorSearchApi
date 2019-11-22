export class Hospital {

  async apiDocName(docName) {
    try {
      let response = fetch(`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`)
      if(response.ok) {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;

      } else {
        throw new Error('my error');
      }
    } catch(error) {
      let response = await fetch (`https://api.betterdoctor.com/2016-03-01/doctors?name=${docName}&location=45.5051%2C-122.6750%2C100&user_location=45.5051%2C-122.6750&skip=0&limit=10&user_key=${process.env.API_KEY}`)
      if (!response.ok) {
        let jsonifiedResponse = await response.json();
        return jsonifiedResponse;
      }
    }
  }
}
