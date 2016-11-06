var chartData = {
    labels: [],
    datasets: [
        {
            label: "Poll",
            backgroundColor: ['rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(255, 206, 86, 0.8)',
                'rgba(75, 192, 192, 0.8)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)',
                'rgba(55, 99, 132, 0.8)',
                'rgba(154, 62, 235, 0.8)',
                'rgba(155, 206, 86, 0.8)',
                'rgba(175, 192, 192, 0.8)',
                'rgba(253, 102, 255, 0.8)',
                'rgba(154, 62, 35, 0.8)',
                'rgba(55, 70, 186, 0.8)',
                'rgba(175, 102, 92, 0.8)',
                'rgba(253, 152, 55, 0.8)',
                'rgba(155, 109, 164, 0.8)'],
            strokeColor: "rgba(220,220,220,0.8)", 
            highlightFill: "rgba(220,220,220,0.75)",
            highlightStroke: "rgba(220,220,220,1)",
            data: []
        }
    ]
};

var request = new XMLHttpRequest();
request.open('GET', '/vote?pollid=' + getParameterByName('pollid'), true);
request.onload = function() {
  if (request.status >= 200 && request.status < 400) {

    var data = JSON.parse(request.responseText);
    
    for (var option of data.options) {
      chartData.labels.push(option.optionName);
      chartData.datasets[0].data.push(option.votes);
      
    }
    var ctx = document.getElementById('skills').getContext("2d");

var myPieChart = new Chart(ctx,{
    type: 'pie',
    data: chartData,
    options: options
});
    
    
  } else {
    console.log("There is an error.")
  }
};
request.onerror = function() {
  console.log("There is an error.")
};
request.send();

var options = {
    
};


function getParameterByName(name, url) {
    if (!url) {
      url = window.location.href;
    }
    name = name.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + name + "(=([^&#]*)|&|#|$)"),
        results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
}