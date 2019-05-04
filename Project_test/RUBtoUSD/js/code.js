let inrub = document.getElementById('rub'),
    inusd = document.getElementById('usd');

inrub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function(){
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            inusd.value = inrub.value / data.usd;
        } else{
            inusd.value = 'Oops, something went wrong...'
        }
    });
});

inusd.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    request.open('GET', 'js/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    request.addEventListener('readystatechange', function(){
        if (request.readyState === 4 && request.status == 200){
            let data = JSON.parse(request.response);

            inrub.value = inusd.value * data.usd;
        } else{
            inrub.value = 'Oops, something went wrong...'
        }
    });
});