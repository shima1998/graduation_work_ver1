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

// function combineDuplicateArray

function insertArrayForChart(chart, arrayValues, keyLabels, keyValues, bgColor, bdColor){
    //for "Chart.js"
    //DBから送られてくるJSON要素の最後は"{}"という未定義の要素の想定である。

    //おそらく、最初にlabelを取得→重複削除　そしてlabelに応じた数値を１つ１つ足して入れていく　で行けるはず
    //→行けた

    let accumulateLabels = [];//最初にすべてのラベル名を格納するための配列

    // arrayValues.forEach(element => {
    //     console.log(element);
    // });
    
    arrayValues.forEach(element => {//#1 最初にlabelを取得
        accumulateLabels.push(element[keyLabels]);
    });

    // console.log(accumulateLabels);

    let refreshLabels = accumulateLabels.filter((element, index, thisElement) =>//#2 重複を削除
        thisElement.findIndex(elm =>
            elm === element 
            ) === index
    );

    refreshLabels.pop();//#3 最後にあるであろう未定義の要素を削除

    // console.log(refreshLabels);

    refreshLabels.forEach(element => {//#4 ラベルを追加
        chart.data.labels.push(element);
    });

    // console.log(chart.data.labels);
    
    chart.data.datasets[0].data = new Array(chart.data.labels.length).fill(0);//#5 グラフのデータ格納先の確保。 ラベルの数の分要素を作り、全要素を0にする。

    // console.log(chart.data.datasets[0].data.length);

    // console.log(chart.data.datasets[0].data);

    arrayValues.forEach(element => {//#6 グラフにする値のラベルと先ほど格納したラベルを比較し、一致したラベルに対応する位置に値を追加していく。
        chart.data.labels.forEach((elm, idx) => {
            if(element[keyLabels] === elm){//ラベルの比較
                chart.data.datasets[0].data[idx] += Number(element[keyValues]);
                chart.update();
            };
        });  
    });

    // console.log(chart.data.datasets[0].data);

    // chart.data.labels.forEachforEach(element => {
    //     chart.data.labels.push(element[keyLabels]);
    //     chart.update();
    // });

    // chart.data.labels.forEachforEach(element => {
    //     chart.data.labels.push(element[keyLabels]);
    //     chart.update();
    // });

    // arrayValues.forEach(element => {
    //     chart.data.datasets[0].data.push(Number(element[keyValues]));
    //     chart.data.datasets[0].backgroundColor.push(bgColor);
    //     chart.data.datasets[0].borderColor.push(bdColor);
    //     chart.update();
    // });

    //基本形
    // arrayValues.forEach(element => {
    //     chart.data.labels.push(element[keyLabels]);
    //     chart.data.datasets[0].data.push(Number(element[keyValues]));
    //     chart.data.datasets[0].backgroundColor.push(bgColor);
    //     chart.data.datasets[0].borderColor.push(bdColor);
    //     chart.update();
    // });


    // arrayValues.forEach(element => {
    //     chart.data.labels.forEach((label){
    //         if(element[keyLabels] != label){
    //             label.push(element[keyLabels]);
    //             console.log(label)
    //         };
    //     });
        
    //     chart.data.datasets[0].data.push(Number(element[keyValues]));
    //     chart.data.datasets[0].backgroundColor.push(bgColor);
    //     chart.data.datasets[0].borderColor.push(bdColor);
    //     chart.update();
    // });


    // chart.data.labels.forEach((cLabel)=>{
    //     cLNames = cLabel;
    // });

    // console.log(cLNames);

    // まだ動かん
    // chart.data.labels.forEach((cLabel)=>{//ここではまだchartにlabelsが入ってないのでcLnamesには数が入らない
    //     let cLNames;//Labelの名前を重複しないよう格納
    //     arrayValues.forEach((aValue)=> {
    //         if(cLabel != aValue[keyLabels]){
    //             cLabel.push(aValue[keyLabels]);
    //             chart.data.datasets[0].data.push(Number(aValue[keyValues]));
    //             chart.data.datasets[0].backgroundColor.push(bgColor);
    //             chart.data.datasets[0].backgroundColor.push(bdColor);
    //             chart.update();
    //             cLNames = cLabel;//ラベル名格納
    //             console.log(cLNames);
    //         } else {//さらに探知がいる いちいちラベルの名前を取得すべし
    //             cLNames.forEach((cLName, cLIndex)=>{
    //                 if(cLName == cLabel){
    //                     chart.data.datasets[0].data[cLIndex]+=Number(aValue[keyValues]);
    //                 };
    //             });                
    //         };
    //     });        
    // });

    // これは動く
//     arrayValues.forEach(element => {
//         chart.data.labels.push(element[keyLabels]);
//         chart.data.datasets[0].data.push(Number(element[keyValues]));
//         chart.data.datasets[0].backgroundColor.push(bgColor);
//         chart.data.datasets[0].borderColor.push(bdColor);
//         chart.update();
//     });
//     console.log(chart.data.labels[0]);
}

window.addEventListener("load",function(){
    let XHR = new XMLHttpRequest();

    XHR.open("GET", "./cgi/get_progress.rb", true);//タダの設定　

    XHR.onreadystatechange = function(){//データが帰ってきたらどうするか
		if(XHR.readyState == 4){
            // GETした結果を表示する?
            let strXml0 = XHR.responseText;
            // console.log(strXml0);
            let progressData = JSON.parse(strXml0);//date,pages String型で格納されている
            
            // console.log(progressData);
            // console.log(Number(progressData[0].pages));

            document.getElementById("test1").innerHTML = progressData[0].date;

            document.getElementById("test0").innerHTML = progressData[0].pages;

            //bookChart0に値をプッシュするforEach
            // progressData.forEach(element => {
            //     bookChart0.data.labels.push(element.date);
            //     bookChart0.data.datasets[0].data.push(Number(element.pages));
            //     bookChart0.update();
            // });

            // insertArrayForChart(chart, arrayValues, keyLabels, keyValues, bgColor, bdColor)
            insertArrayForChart(bookChart0, progressData, 'date', 'pages', 'rgba(75, 192, 192, 0.2)', 'rgba(75, 192, 192, 1)');

            //ほしい機能
            //labelの重複を消す
            //最後の空のデータをなんとかする
            // 色付ける
		};
    };//最初は素通り　帰ってくるタイミングはこちらで決められない

    XHR.send(null);

}, false); 