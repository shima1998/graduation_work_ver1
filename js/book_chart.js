let ctx = document.getElementById("myChart").getContext('2d');
let myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ["赤", "青", "黄色", "緑", "紫", "橙"],
        datasets: [{
            label: '得票数',
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
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



function addData0(chart, label, num){//イメージ chart.data.datasets[data][n] = num;
    chart.data.labels.push(label);
    // chart.data.datasets.data.push(num);
    chart.data.datasets.forEach((dataset) => {
        dataset.data.push(num);
    });

    // chart.data.datasets.data.push(data);
    chart.update();

    //ここからコンソールテスト

    chart.data.datasets.forEach((dataset) => {
        console.log(dataset);
    });//chart.data.datasetsは配列である。~.dataをforeachでconsole.logを取ろうとするとエラーを吐く
    // {label: "得票数", data: Array(7), backgroundColor: Array(6), borderColor: Array(6), borderWidth: 1, …}

    chart.data.datasets.forEach((dataset) => {
        console.log(dataset.data);
    });

    chart.data.datasets.forEach((dataset) => {
        console.log(dataset.data.indexOf(12));
    });

    chart.data.datasets.forEach((dataset) => {
        console.log(dataset.label);
    });

    console.log(chart.data.datasets.label);

    chart.data.datasets.forEach((dataset) => {//これはいける
        console.log(dataset.data[0]);
    });

    Object.keys(chart.data).forEach(key => {
        console.log(`key: ${key}`)
    })
    // key: labels
    // key: datasets

    Object.keys(chart.data.datasets).forEach(key => {
        console.log(`key: ${key}`)
    })// key: 0

    Object.keys(chart.data.datasets).forEach(key => {
        console.log(`key: ${key} value: ${chart.data.datasets[key]}`)
    })// key: 0 value: [object Object]　(これはエラー)
    //datasetsはkeyが0しかないためよくわからなさすぎる

    console.log(chart.data.datasets[0]);//中身出てきた　最初と同じ
    //{label: "得票数", data: Array(7), backgroundColor: Array(6), borderColor: Array(6), borderWidth: 1, …}
    

    Object.keys(chart.data.labels).forEach(key => {
        console.log(`key: ${key}`)
    })// key: 0(から6まで出てくる)

    Object.keys(chart.data.labels).forEach(key => {
        console.log(`key: ${key}　value: ${chart.data.labels[key]}`)
    })// key: 0(から最後まで) value: 赤(から最後まで)

    console.log(chart.data.datasets[0].data);//中身出てきた　
    //[12, 19, 3, 5, 2, 3, 5, _chartjs: {…}, push: ƒ, pop: ƒ, shift: ƒ, splice: ƒ, …]

    console.log(chart.data.datasets[0].data[2]);//中身出てきた 3

    chart.data.datasets[0].data.forEach((dataset) => {
        console.log(dataset);
    });//これはいった
    //datasets[0]じゃないと、datasetsのどこを参照すりゃいいんだよこの野郎!ってなるらす

    console.log(chart.data.datasets.data[0]);//これはだめ

    

    // console.log(chart.data.datasets.data[0]);//これはだめ

    // console.log(chart.data.datasets.data);

    // Object.keys(chart.data.datasets).forEach(key => {
    //     var ary = JSON.stringify(chart.data.datasets[key]);
    //     console.log(`key: ${key} value: ${ary}`)
    // })// key: 0 value: [object Object]　(これはエラー)
    // //ダメだった

    
}

function removeData0(chart) {
    chart.data.labels.pop();
    chart.data.datasets.forEach((dataset) => {
        dataset.data.pop();
    });
    chart.update();
}

function updateConfigByMutating(chart) {
    chart.options.title.text = 'FAMILY';
    chart.update();
}

var ctx1 = document.getElementById("myChart1").getContext('2d');
let labels1 = ['赤', '青', '黄色', '緑', '紫', '橙'];
let label1 = '得票数';
let data1 = [12, 19, 3, 5, 2, 3];

let backgroundColor1 = [
    'rgba(255, 99, 132, 0.2)',
    'rgba(54, 162, 235, 0.2)',
    'rgba(255, 206, 86, 0.2)',
    'rgba(75, 192, 192, 0.2)',
    'rgba(153, 102, 255, 0.2)',
    'rgba(255, 159, 64, 0.2)'
];

let borderColor1 = [
    'rgba(255,99,132,1)',
    'rgba(54, 162, 235, 1)',
    'rgba(255, 206, 86, 1)',
    'rgba(75, 192, 192, 1)',
    'rgba(153, 102, 255, 1)',
    'rgba(255, 159, 64, 1)'
];

let myChart1 = new Chart(ctx1, {//外部のStrや文字列は読めるのか?
    type: 'bar',
    data: {
        labels: [labels1.slice(0,7)],
        datasets: [{
            label: label1,
            data: [data1],
            backgroundColor: [
                backgroundColor1
            ],
            borderColor: [
                borderColor1
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