let ctx = document.getElementById("bookChart0").getContext('2d');

let bookChart0 = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: [],
        datasets: [{
            label: 'ページ数',
            data: [],
            backgroundColor: [
            ],
            borderColor: [
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});

window.addEventListener("load",function(){
    let XHR = new XMLHttpRequest();

    XHR.open("GET", "./cgi/get_progress.rb", true);//タダの設定　

    XHR.onreadystatechange = function(){//データが帰ってきたらどうするか
		if(XHR.readyState == 4){
            // GETした結果を表示する?
            let strXml0 = XHR.responseText;
            console.log(strXml0);
            let progressData = JSON.parse(strXml0);//date,pages String型で格納されている
            
            console.log(progressData);
            console.log(Number(progressData[0].pages));

            document.getElementById("test1").innerHTML = progressData[0].date;

            document.getElementById("test0").innerHTML = progressData[0].pages;

            //bookChart0に値をプッシュするforEach
            progressData.forEach(element => {
                bookChart0.data.labels.push(element.date);
                bookChart0.data.datasets[0].data.push(Number(element.pages));
                bookChart0.update();
            });
            
            // strXml0.split(",");
		};
    };//最初は素通り　帰ってくるタイミングはこちらで決められない

    XHR.send(null);

}, false); 