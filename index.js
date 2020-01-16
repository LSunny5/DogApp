'use strict';

//GET request for Dog Images
function getDogImages(userNumber) {
    let dogURL=`https://dog.ceo/api/breeds/image/random/${userNumber}`;
    fetch(dogURL)
        .then(response => response.json())
        .then(responseJson => displayImages(responseJson))
        .catch(error=>alert('Something is not working, please try again in a bit.'));
 }

//show the images
 function displayImages(responseJson) {
    
    /************************************************** 
     * Solution to Question 1 of Simple Get Requests
     * Load images into console
    ***************************************************/
    console.log(responseJson);
    /*******END SOLUTION for Question 1**********/

    //erase section and overwrite previous photos
    $('.imageSection').html(' ');

    //add the pictures of dogs to section
    for (let one of responseJson.message) {
        $('.imageSection').append(`<img src="${one}">`);
    }
   $('.results').removeClass('hidden');
 }
 
 //starting the app, after user inputs
 function startApp() {
   $('form').submit(event => {
     event.preventDefault();
     $('.results').addClass('hidden');
     let nPics=$('#userNumber').val();
     getDogImages(nPics);
   });
 }
 
 //App ready and waiting for user to enter numbers
 $(function() {
    console.log("App is ready, waiting for user...");
    startApp();
 }); 