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

    // (async () => {
    //   let hospital = new Hospital();
    //   let response = await hospital.apiDocName(docName);
    //   if (response.error) {
    //     showError(response);
    //   } else {
    //     getElements(response);
    //   }
    // })();
    //
    // function getElements(response) {
    //
    // }
    //
    // function showError(response) {
    //
    // }

    (async () => {
      let hospital = new Hospital();
      let response = await hospital.apiDocName(docName)
      if (this.readyState === 4 && this.status === 200) {
        getElements(response);
      } else {
        showError(response)
      }

    })();

    function getElements(response) {
      $('showNumber').text()
    }

    function showError(response) {
      $('showNumber').text()
    }

  });
});
