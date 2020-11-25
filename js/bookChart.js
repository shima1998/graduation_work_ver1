// 配列に関して、基本はドット記法を使用するが、keyが数字、または変数だった場合はブラケットを使用すること。
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

function insertArrayForChart(chart, arrayValues, keyLabels, keyValues, bgColor, bdColor){
    //for "Chart.js"

    chart.data.labels.forEach((cLabel, cIndex)=>{
        let cLabelsName;
        arrayValues.forEach((aValue, aIndex)=> {
            if(cLabel != aValue[keyLabels]){
                chart.data.labels.push(aValue[keyLabels]);
                chart.data.datasets[0].data.push(Number(aValue[keyValues]));
                chart.data.datasets[0].backgroundColor.push(bgColor);
                chart.data.datasets[0].backgroundColor.push(bdColor);
                chart.update();
                cLNames = cLabel;//ラベル名格納
            } else {//さらに探知がいる いちいちラベルの名前を取得すべし
                cLNames.forEach((cLName, cLIndex)=>{
                    if(cLName == cLabel){
                        chart.data.datasets[0].data[cLIndex]+=Number(aValue[keyValues]);
                    };
                });                
            };
        });        
    });

    arrayValues.forEach(element => {
        chart.data.labels.push(element[keyLabels]);
        chart.data.datasets[0].data.push(Number(element[keyValues]));
        chart.data.datasets[0].backgroundColor.push(bgColor);
        chart.data.datasets[0].backgroundColor.push(bdColor);
        chart.update();
    });
}

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
            // progressData.forEach(element => {
            //     bookChart0.data.labels.push(element.date);
            //     bookChart0.data.datasets[0].data.push(Number(element.pages));
            //     bookChart0.update();
            // });

            insertArrayForChart(bookChart0, progressData, 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)');

            //ほしい機能
            //labelの重複を消す
            //最後の空のデータをなんとかする
            // 色付ける
		};
    };//最初は素通り　帰ってくるタイミングはこちらで決められない

    XHR.send(null);

}, false); 