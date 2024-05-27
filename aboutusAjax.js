$(document).ready(function() {
    $.ajax({
        url: 'aboutus.json',
        method: 'GET',
        dataType: 'json',
        success: function(data) {
            let partnershipsHtml = '<h2>Irem && Eda</h2>';
            data.forEach(partner => {
                partnershipsHtml += `<div><p>${partner.description}</p></div>`;
            });
            $('#italic').html(partnershipsHtml);
        },
        error: function(error) {
            console.error('Error fetching partnerships:', error);
        }
    });
});