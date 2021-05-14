function resetOutput() {
  currentCodeArray = [];

  //计数器复位
  throwNumbers = 1;
  d3.select("p#throw button")
    .text("第 1 次投掷")
    .transition().duration(100).ease(d3.easeLinear)
    .style("opacity", 1);

  //.empty()清空后代节点，选定的节点本身不受影响
  $("div#sideText div.svg svg").empty();

  $("div#svg3 div.svg").empty();
  $("div#svg3 div.title").empty();
  $("div#svg4 div.svg").empty();
  $("div#svg4 div.title").empty();
  $("div#svg5 div.svg").empty();
  $("div#svg5 div.title").empty();
  $("div#svg6 div.svg").empty();
  $("div#svg6 div.title").empty();

  d3.selectAll("h1#stage2").style("opacity", 0);
  $("div.description").empty();
}