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
                let cout = 1;
                for(let j=i-1; j>=0; j--){
                    if(arrRates[i]>arrRates[j]){
                        ++cout
                    }
                    else if(arrRates[i]<=arrRates[j]){
                       j=0;
                    }
                }
                dataObj.push({rate: arrRates[i], specialRate : cout})
            }

            visualisation(dataObj)
        }

//////////////////////////////////////////Create Histogram D3js////////////////////////////////////////////////////////////////

function visualisation(data){
    const margin = {top:40, right:0, bottom:20, left:50},
          width  = 954 - margin.left - margin.right,
          height = 500 - margin.top - margin.bottom;

    const svg = d3.select("body")
          .append("svg")
          .attr("width", "100%")
          .attr("height", "100%")
          .attr("viewBox", "0 0 " + (width + margin.left + margin.right) + " " + (height + margin.top + margin.bottom));

    const chart = svg.append("g")
          .attr("transform", "translate(" + margin.left + "," + margin.top + ")");
      
    const yScale = d3.scaleLinear()
          .range([height, 0]);

    const xScale = d3.scaleBand()
          .range([0, width])
          .padding(0.1);
       
        yScale.domain([0, d3.max(data, function(d){ return d["specialRate"]; })]);
        xScale.domain(data.map(function(d){ return d["rate"]; }));
        
        chart.selectAll(".bar")
            .data(data)
            .enter()
            .append("rect")
            .attr("class", "bar")
            .attr("x", function(d){ return xScale(d["rate"]); })
            .attr("y", function(d){ return yScale(d["specialRate"]); })
            .attr("height", function(d){ return height - yScale(d["specialRate"]); })
            .attr("width", function(d){ return xScale.bandwidth(); })
            .attr("fill", "steelblue");
        
        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .selectAll(".textlabel")
            .data(data)
            .enter()
            .append("text")
            .attr("class", "textlabel")
            .attr("x", function(d){ return xScale(d["rate"]) + (xScale.bandwidth()/2); })
            .attr("y", function(d){ return yScale(d["specialRate"]) - 3; })
            .attr("text-anchor", "middle")
            .attr("font-family", "sans-serif")
            .attr("font-size", "10px")
            .text(function(d){ return d3.format("")(d["specialRate"]); });

        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + margin.top + ")")
            .call(d3.axisLeft(yScale).tickFormat(d3.format("")));

        svg.append("g")
            .attr("transform", "translate(" + margin.left + "," + (height + margin.top) + ")")
            .call(d3.axisBottom(xScale));
        
        svg.append("g")
            .attr("transform", "translate(" + (width/2) + ", 15)")
            .append("text")
            .text("Special Rate Histogramm (Russian Rubel)")
            .style("text-anchor", "middle")
            .style("font-family", "Arial")
            .style("font-weight", "800");
}
