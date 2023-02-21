
 
    const btn = document.getElementById('btn').addEventListener('click', ()=>{
  
        var myHeaders = new Headers();
  myHeaders.append("apikey", "Ov9FGZ20NtDNTjNLtu30ZY6hzhriJV8B");
  
  var requestOptions = {
    method: 'GET',
    redirect: 'follow',
    headers: myHeaders
  };
  let url = `https://api.apilayer.com/image_to_text/url?url=`
  const input = document.getElementById('inp').value
  
  fetch(`${url}${input}`, requestOptions)
    .then(response => response.json())
    .then((result) => {
   
    let text = result.all_text;
    let re = document.getElementById('result').innerHTML=text;
  
    })
   
    if (response.status === 429){
        alert('Too Many Requests Try it again')
    }
  
      })
