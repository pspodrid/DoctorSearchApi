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
    }

    function showError(response) {
      $('.showDoc').text(response.data);
    }

  });
});
