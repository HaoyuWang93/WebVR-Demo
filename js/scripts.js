$(document).ready(function() {
      $("#direct").click();
      function startTimer() {
        setInterval(function() {
          nextimage();
        }, 5000);
        var zahl = 0;
        var srcs = ["images/before1.jpg", "images/before1-1.jpg"]

        function nextimage() {
        console.log(zahl)
          $("#skyid").attr("src", srcs[zahl])
          zahl = (zahl < srcs.length - 1) ? ++zahl : 0
        }
      }
      startTimer()
});
