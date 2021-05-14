//投掷按钮的事件函数
function throwYao() {

    //点击按钮后，旧按钮透明度重置为0
    d3.select("p#throw button")
        .style("opacity", 0);

    //计算和记录投掷结果
    displayCoins(throwNumbers);

    setTimeout(function () {
        if (throwNumbers !== 6) {
            //修改按钮文本并显示，准备再次点击
            d3.select("p#throw button")
                .text(buttonTextHash[throwNumbers])
                .transition().duration(200).ease(d3.easeLinear)
                .style("opacity", 1);
        } else {
            //进入收尾阶段
            let result = calculate(currentCodeArray);
            //绘图
            renderChart(result.currentGua, div3);
            renderChart(result.futureGua, div4);
            //输出
            outputViaDOM(result);
        }

        //全局变量投掷次数加一
        throwNumbers++;
    }, timeSpan * 4);
}


//计算和记录投掷结果
function displayCoins(throwNumbers) {

    //扔三个硬币，随机正反面
    let coin1 = Math.round(Math.random());
    let coin2 = Math.round(Math.random());
    let coin3 = Math.round(Math.random());

    // 动画演示硬币抛掷的结果
    let coinSide1 = coin1 === 1 ? "positive" : "negative";
    let coinSide2 = coin2 === 1 ? "positive" : "negative";
    let coinSide3 = coin3 === 1 ? "positive" : "negative";

    img1.attr("href", `./picture/${coinSide1}.png`)
        .transition().duration(timeSpan).ease(d3.easeLinear)
        .style("opacity", 1)
    img2.attr("href", `./picture/${coinSide2}.png`)
        .transition().duration(timeSpan).ease(d3.easeLinear).delay(timeSpan)
        .style("opacity", 1)
    img3.attr("href", `./picture/${coinSide3}.png`)
        .transition().duration(timeSpan).ease(d3.easeLinear).delay(timeSpan * 2)
        .style("opacity", 1)

    //记录该爻的阴阳到数组中
    let code = coin1 + coin2 + coin3 + 6;
    currentCodeArray.push(code);

    //正反面文本信息动画
    svg2.append("text").classed("yaoName", true)
        .text(sideHash[coin1] + " " + sideHash[coin2] + " " + sideHash[coin3])
        .attr("x", 20).attr("dy", 15)
        .style("opacity", 0)
        .attr("transform", "translate(0, 10)")
        .transition().duration(timeSpan).ease(d3.easeLinear).delay(timeSpan * 3)
        .style("opacity", 1)
        .attr("transform", `translate(0, ${300 - throwNumbers * 45 + 15})`)

    // reset硬币
    img1.transition().duration(timeSpan).ease(d3.easeLinear)
        .delay(timeSpan * 3)
        .style("opacity", 0);
    img2.transition().duration(timeSpan).ease(d3.easeLinear)
        .delay(timeSpan * 3)
        .style("opacity", 0);
    img3.transition().duration(timeSpan).ease(d3.easeLinear)
        .delay(timeSpan * 3)
        .style("opacity", 0);
}