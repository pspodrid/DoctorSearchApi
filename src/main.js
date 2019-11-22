import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './styles.css';
import $ from 'jquery';
import {Hospital} from './back.js';


$(document).ready(function(){
  $('form').submit(function(event){
    event.preventDefault();

    const docName = $('#docName').val();
    $('#docName').val("");
    // const symptoms = $('#symptoms').val();
    // $('#symptoms').val("");

    (async () => {
      let hospital = new Hospital();
      let response = await hospital.apiDocName(docName);
      if (response.error) {
        showError(response);
        console.log(response);
      } else {
        getElements(response);
        console.log(response);
      }

    })();

    function getElements(response) {
      $('.showDoc').text(response.data[0].profile.first_name);
      $('.showLastDoc').text(response.data[0].profile.last_name);
      $('.showAddressStreet').text(response.data[0].practices[0].visit_address.street);
      $('.showAddressCity').text(response.data[0].practices[0].visit_address.city);
      $('.showAddressState').text(response.data[0].practices[0].visit_address.state);
      $('.showAddressZip').text(response.data[0].practices[0].visit_address.zip);
      $('.showPhone').text(response.data[0].practices[0].phones[0].number);
      $('.showWebsite').text(response.data[0].profile.first_name);
      $('.showActive').text(response.data[0].practices[0].accepts_new_patients);

    }

    function showError(response) {
      $('.showDoc').text(response.data);
    }

  });
});
