//绘图函数
function renderChart(gua, div) {
  //生成各爻
  renderYao(gua.yaoArray, div);

  //写入title
  div.select("div.title")
    .append("p").classed("guaName", true)
    .text(gua.doubleSymbol + "《" + gua.doubleName + "》")
}


function renderYao(yaoArray, div) {
  //创建画布
  let svg = div.select("div.svg").append("svg")

  //data join 到 groups 上
  let enterGroup = svg.selectAll("g").data(yaoArray).enter().append("g")
    .classed("yao", true).attr("transform", "translate(0, 10)")

  //group下建立的元素可以继承group绑定的data
  enterGroup.append("text")
    .classed("yaoName", true).attr("x", 0).attr("dy", 15)
    .text(d => d.yaoName + "（" + d.property + "）")

  enterGroup.append("rect")
    .attr("width", 150).attr("height", 20).attr("x", 120)
    .style("fill", d => d.fill);

  //若为阴爻，中间要有缺口。使用一段白色块覆盖上一层实现缺口。
  enterGroup.append("rect")
    .attr("width", 30).attr("height", 20).attr("x", 180)
    .style("fill", "white")
    .style("opacity", d => d.code % 2 === 0 ? 1 : 0)

  //group整体移动
  enterGroup
    .transition().duration(timeSpan).ease(d3.easeLinear)
    .attr("transform", (d, i) => `translate(0, ${300 - i * 45 - 30})`)
}