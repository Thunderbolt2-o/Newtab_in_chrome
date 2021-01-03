var nameInput = document.getElementById('name');

document.querySelector('form.pure-form').addEventListener('submit', function (e) {

//prevent the normal submission of the form
e.preventDefault();
linkin = nameInput.value;
console.log(linkin);
console.log(nameInput.value);
document.body.style.backgroundImage = "url(" + nameInput.value + ")" ;
});






            setInterval(showTime, 100);

            function showTime() {
                let time = new Date();
                let hour = time.getHours();
                let min = time.getMinutes();
                let sec = time.getSeconds();

                hour = hour < 10 ? "0" + hour : hour;
                min = min < 10 ? "0" + min : min;
                sec = sec < 10 ? "0" + sec : sec;

                let currentTime = hour + ":" +
                    min + ":" + sec;

                document.getElementById("clock")
                    .innerHTML = currentTime;
            }

            showTime();