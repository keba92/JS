const url = `https://www.nbrb.by/api/exrates/rates/dynamics/298?startdate=2019-09-03T00:00:00&enddate=2020-09-01T00:00:00`;
        fetch(url)
            .then(response=>response.json())
            .then(obj=>createObjRate(obj))
            .catch(error => alert(error))


        const dataObj = [];
        function createObjRate(arr){
            const arrRates =[];
            for(let i=0; i<arr.length; i++){
                let obj = arr[i];
                arrRates.push(obj['Cur_OfficialRate']);
            }

            for(let i=0; i<arrRates.length; i++){
                let cont = 1;
                for(let j=i-1; j>=0; j--){
                    if(arrRates[i]>arrRates[j]){
                        ++cont
                    }
                    else if(arrRates[i]<=arrRates[j]){
                       j=0;
                    }
                }
                dataObj.push({rate: arrRates[i], specialRate : cont})
            }
            visualisation(dataObj)
        }
//////////////////////////////////////////////////////////////////////////////////////////////////////////
function visualisation(data){
    var svg = d3.select("svg"),
        margin = {top: 20, right: 20, bottom: 30, left: 80},
        width = +svg.attr("width") - margin.left - margin.right,
        height = +svg.attr("height") - margin.top - margin.bottom;
    
    var tooltip = d3.select("body").append("div").attr("class", "toolTip");
    
    var x = d3.scaleLinear().range([width, 0]);
    var y = d3.scaleBand().range([height, 0]);

    var g = svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
    

    
        x.domain([0, d3.max(data, function(d) { return d.specialRate; })]);
        y.domain(data.map(function(d) { return d.rate; })).padding(0.1);

        g.append("g")
            .attr("class", "x axis")
            .attr("transform", "translate(0," + height + ")")
            .call(d3.axisBottom(x).ticks(5).tickFormat(function(d) { return parseInt(d); }).tickSizeInner([-height]));

        g.append("g")
            .attr("class", "y axis")
            .call(d3.axisLeft(y));

        g.selectAll(".bar")
            .data(data)
        .enter().append("rect")
            .attr("class", "bar")
            .attr("x", function(d){return x(d.specialRate) })
            .attr("height", y.bandwidth())
            .attr("y", function(d) { return y(d.rate); })
            .attr("width", function(d) { return x(0) - x(d.specialRate); })
            .on("mousemove", function(d){
                tooltip
                .style("left", d3.event.pageX - 50 + "px")
                .style("top", d3.event.pageY - 70 + "px")
                .style("display", "inline-block")
                .html(d.specialRate);
            })

}