/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */
 /* global google, parseFloat */

$(document).ready(function() {
  $('.details-btn').on('click', function(event) {
    event.preventDefault();

    var info = $(this).data('info').split(',');
    $('#cityName').text('City: ' + info[0]);
    $('#additionalInfo').text('Additional Information: ' + info[1]);

    var latitude = parseFloat(info[2]);
    var longitude = parseFloat(info[3]);

    var mapUrl = 'https://www.google.com/maps/embed/v1/view?key=AIzaSyAc2iIrYChtf5TfeIVPcCdVWlEE-ZzwY00&center=' + latitude + ',' + longitude + '&zoom=12&maptype=satellite';

    $('#gpsMap').html('<iframe src="' + mapUrl + '" width="100%" height="450" style="border:0;" allowfullscreen="" loading="lazy"></iframe>');

    $('#detailsModal').modal('show');
  });
});
