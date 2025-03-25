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

let getD2Status = () => {

    getJSON('https://game-status-api.ubisoft.com/v1/instances?appIds=6c6b8cd7-d901-4cd5-8279-07ba92088f06,d2408c33-775c-416b-b5d4-768bd23ccbad', (err, data) => {
        var date = new Date();
        var infoDiv = document.getElementById("D2Info");
        if (err != null) {
            console.error(err);
        } else {
            let text = `${data[0].Name}<br/>
    Status: ${data[0].Status}<br/>
    Maint: ${data[0].Maintenance}<br/>
    <br/>
    ${data[1].Name}<br/>
    Status: ${data[1].Status}<br/>
    Maint: ${data[1].Maintenance}<br/>
    <br/>
    Last Update: ${date}<br/>`

            if (data[0].Status == "Degraded" || data[1].Status == "Degraded") {
                infoDiv.style.backgroundColor="red"
            } else if (data[0].Status == "Interrupted") {
                infoDiv.style.backgroundColor="darkorange"
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

let getXIVStatus = () => {

    getJSON('https://frontier.ffxiv.com/worldStatus/gate_status.json', (err, data) => {
        var date = new Date();
        var infoDiv = document.getElementById("XIVInfo");
        if (err != null) {
            console.error(err);
        } else {
            let text = `Gate Status: ${data.status}<br/>
    <br/>
    Last Update: ${date}<br/>`

            if (data[0].status == "0")  {
            } else if (data[0].status == "1") {
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

getD2Status();
getXIVStatus();

setInterval(function(){ getD2Status(); getXIVStatus(); },60000);
