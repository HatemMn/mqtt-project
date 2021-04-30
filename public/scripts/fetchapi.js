const url = 'https://api.ambeedata.com/';

let data = {
  name: 'Sara'
}

var request = new Request(url, {
    method: 'POST',
  //  body: data,
    headers: new Headers()
});

fetch(request)
.then(function(data) {
    console.log(data);
})