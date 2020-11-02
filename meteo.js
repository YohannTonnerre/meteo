window.fetch('http://api.openweathermap.org/data/2.5/onecall?lat=44.8333&lon=-0.5667&lang=fr&units=metric&exclude=minutely&appid=2245e206bd71a8e54fa02b230e04d652')
    .then(response => response.json())
    .then(data => {
        var container = document.querySelector('.main-container');
        var skyP = document.querySelector('.sky');
        var dateP = document.querySelector('.date');
        var tempP = document.querySelector('.temp');
        var eachM = document.querySelectorAll('.each-meteo');
        var skyI = document.querySelector('.sky-img');
        var voirPLusP = document.querySelector('.voir-plus-p');
        var eachMI = document.querySelectorAll('.each-meteo-img');


        var humidityP = document.querySelector('.humidity');
        var windP = document.querySelector('.wind');

        var tempJ = document.querySelector('.tempJ');




        var calendar = document.querySelector('.calendar');

        var dAujourdhui = new Date();
        var options = { weekday: 'long', month: 'long', day: 'numeric' };
        dateP.innerHTML = dAujourdhui.toLocaleDateString('fr-CA', options);

        var dayJ = dAujourdhui.getDay() + 1;


        console.log(dayJ);

        dayJTemp = data['daily'][1]['temp']['day'];
        console.log(dayJTemp);





        for (i = 0; i < eachM.length; i++) {
            if ((dAujourdhui.getHours() + i) > 24) {
                eachM[i].innerHTML = "<p class='heure'>" + (dAujourdhui.getHours() + i - 24) + "h" + "</p>" + "<p>" + data['hourly'][i]['temp'] + "°C" + "</p>" + "<img src='img/" + data['hourly'][i]['weather'][0]['main'] + ".svg'>";
            } else {
                eachM[i].innerHTML = "<p class='heure'>" + (dAujourdhui.getHours() + i) + "h" + "</p>" + "<p>" + data['hourly'][i]['temp'] + "°C" + "</p>" + "<img src='img/" + data['hourly'][i]['weather'][0]['main'] + ".svg'>";
            }
        }


        console.log(data);
        var sky = data['current']['weather'][0]['main'];
        var temp = data['current']['temp'];

        var humidity = data['current']['humidity'];
        var wind = data['current']['wind_speed'];

        humidityP.innerHTML = humidity;
        windP.innerHTML = wind;
        skyP.innerHTML = sky;
        tempP.innerHTML = temp;


        if (sky === 'Clouds') {
            skyI.src = "img/Clouds.svg"
        }

        if (sky === 'Rain') {
            skyI.src = "img/Rain.svg"
        }

        if (sky === 'Clear') {
            skyI.src = "img/Clear.svg"
        }










        var plus = document.querySelector('.voir-plus');
        var plusC = document.querySelector('.plus-container');
        var TempC = document.querySelector('.temp-container');
        var eachDayC = document.querySelector('.each-day-container');
        var dayP = document.querySelector('.dayp');
        var weatherD = document.querySelector('.weather');
        var weatherDT = data['daily'][1]['weather'][0]['main'];




        plus.addEventListener('click', () => {
            plus.classList.toggle('active');
            plusC.classList.toggle('active');
            if (voirPLusP.innerHTML === "Voir plus") {
                voirPLusP.innerHTML = "Voir moins";
            } else {
                voirPLusP.innerHTML = "Voir plus";

            }
        })


        if (dAujourdhui.getHours() > 6 && dAujourdhui.getHours() < 20) {
            container.style.backgroundImage = "url(img/bg.svg)";
            plusC.style.backgroundColor = "#e879a6";
            plus.style.backgroundColor = "#e879a6";
        } else {
            container.style.backgroundImage = "url(img/bg-nuit.svg)";
            plusC.style.backgroundColor = "#617DA5";
            plus.style.backgroundColor = "#617DA5";
        }



        calendar.addEventListener('click', () => {
            calendar.classList.add('active');
            setTimeout(() => {
                window.location.href = 'day.html';

            }, 1000)

        })

        var eachDayContainer = document.querySelector('.each-day-container');

        for (i = 0; i < 3; i++) {
            var element = document.createElement('div');
            element.classList.add('each-day');
            element.innerHTML = "<p class='dayp'></p>";
            eachDayContainer.appendChild(element);
        }


        var dayM;

        function checkDay() {
            console.log(dayJ);

            if (dayJ == 1 || dayJ - 7 == 1) {
                dayP.innerHTML = "LUNDI";
            }

            if (dayJ == 2 || dayJ - 7 == 2) {
                dayP.innerHTML = "MARDI";
            }

            if (dayJ == 3 || dayJ - 7 == 3) {
                dayP.innerHTML = "MERCREDI";
            }

            if (dayJ == 4 || dayJ - 7 == 4) {
                dayP.innerHTML = "JEUDI";
            }

            if (dayJ == 5 || dayJ - 7 == 5) {
                dayP.innerHTML = "VENDREDI";
            }

            if (dayJ == 6 || dayJ - 7 == 6) {
                dayP.innerHTML = "SAMEDI";
            }

            if (dayJ == 7 || dayJ - 7 == 7) {
                dayP.innerHTML = "DIMANCHE";
            }

            tempJ.innerHTML = dayJTemp;
            weatherD.innerHTML = weatherDT;

        }

        checkDay();


    })