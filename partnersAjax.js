$(document).ready(function() {
    $.ajax({
        url: 'https://my-json-server.typicode.com/iremerdol/webdata/partners',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            let partnershipsHtml = '<h2>Our Partnerships</h2>';
            data.forEach(partner => {
                partnershipsHtml += `<div><h3>${partner.name}</h3><p>${partner.description}</p></div>`;
            });
            $('#partnerships').html(partnershipsHtml);
        },
        error: function(error) {
            console.error('Error fetching partnerships:', error);
        }
    });
});