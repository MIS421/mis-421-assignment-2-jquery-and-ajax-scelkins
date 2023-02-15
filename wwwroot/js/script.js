var len;
var results = '';

function apiSearch() {
  var params = {
    "q": $("#query").val(),
    "count": "50",
    "offset": "0",
    "mkt": "en-us"
  };

  $.ajax({
      url: 'https://api.bing.microsoft.com/v7.0/search?' + $.param(params),
      beforeSend: function (xhrObj) {
        xhrObj.setRequestHeader("Ocp-Apim-Subscription-Key", "448aa37504c14344b7c615ef26dc7e74");
      },
      type: "GET",
    })
    .done(function (data) {
      len = data.webPages.value.length;
      for (i = 0; i < len; i++) {
        results += "<p><a href='" + data.webPages.value[i].url + "'>" + data.webPages.value[i].name + "</a>: " + data.webPages.value[i].snippet + "</p>";
      }

      $('#searchResults').html(results);
      $('#searchResults').dialog();
    })
    .fail(function () {
      alert("error");
    });
}

function executeSearch() {
  apiSearch();
}

function changeBackground() {
  let backgrounds = ['url("./resources/ship.png")','url("./resources/pyramids.png")','url("./resources/sunset.png")','url("./resources/island.png")'];
  // document.getElementById('title').classList.add('animate');
  document.documentElement.style.backgroundImage = backgrounds[Math.floor(Math.random() * 5)];
}

function displayTime() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var minutes = currentTime.getMinutes();
    var ampm = "AM";
    if(hours >= 12) {
      hours = hours - 12;
      ampm = "PM";
    }
    if(hours === 0) {
      hours = 12;
    }
    if (minutes < 10) {
      minutes = "0" + minutes;
    }
    $("#time").text(hours + ":" + minutes + " " + ampm);
    $("#time").dialog({
      modal: true,
      title: "Current Time",
      width: 300,
      height: 100
    }
  )
}