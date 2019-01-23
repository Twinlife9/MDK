const API_URL = 'http://www.splashbase.co/api/v1/images/random'
let cnt = 0;
document.querySelectorAll('img').forEach((el)=>{
    if(cnt > 1){
        console.log(API_URL);
        fetch(API_URL,{
            method: 'GET'
        }).then((res)=>{console.log(res)})
    }
    else{
        cnt++;
    }
});