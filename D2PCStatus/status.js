let getJSON = (url, callback) => {

    let xhr = new XMLHttpRequest();
    xhr.open('GET', url, true);
    xhr.responseType = 'json';

    xhr.onload = () => {

        let status = xhr.status;

        if (status == 200) {
            callback(null, xhr.response);
        } else {
            callback(status);
        }
    };

    xhr.send();
};

let getStatus = () => {

    getJSON('https://game-status-api.ubisoft.com/v1/instances?appIds=6c6b8cd7-d901-4cd5-8279-07ba92088f06,d2408c33-775c-416b-b5d4-768bd23ccbad', (err, data) => {
        var date = new Date();
        var infoDiv = document.getElementById("info");
        if (err != null) {
            console.error(err);
        } else {
            let text = `${data[0].Name}<br/>
    Status: ${data[0].Status}<br/>
    Maint: ${data[0].Maintenance}<br/>
    Last Update: ${date}<br/>
    ${data[1].Name}<br/>
    Status: ${data[1].Status}<br/>
    Maint: ${data[2].Maintenance}<br/>
    Last Update: ${date}<br/>`

            if (data[0].Status == "Degraded" || data[1].Status == "Degraded") {
                infoDiv.style.backgroundColor="red"
            } else if (data[0].Status == "Online" || data[1].Status == "Online") {
                infoDiv.style.backgroundColor="green"
            } else {
                infoDiv.style.backgroundColor="gray"
            }
            infoDiv.style.color = "white";
            infoDiv.innerHTML = text;
            console.log(text);
        }
    });

};

getStatus();

setInterval(function(){ getStatus(); },60000);
