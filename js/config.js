//全局变量-----------------------------------------------------------
let currentCodeArray = [];
let throwNumbers = 1; //投掷铜钱次数
const timeSpan = 500;


//哈希表---------------------------------------------------------------
const buttonTextHash = {
  1: "第 2 次投掷",
  2: "第 3 次投掷",
  3: "第 4 次投掷",
  4: "第 5 次投掷",
  5: "第 6 次投掷",
}

const sideHash = {
  1: "正",
  0: "反"
}

const PropertyHash = {
  9: "老阳",
  8: "少阴",
  7: "少阳",
  6: "老阴"
}

const fillHash = {
  9: "red",
  8: "royalblue",
  7: "lightcoral",
  6: "blue"
}


//svg画布-----------------------------------------------
const svg1 = d3.select("div#coins div.coin")
  .append("svg")
  .attr("class", "coins")

const svg2 = d3.select("div#sideText div.svg")
  .append("svg")
  .attr("class", "sideText")

const div3 = d3.select("div#svg3");
const div4 = d3.select("div#svg4");
const div5 = d3.select("div#svg5");
const div6 = d3.select("div#svg6");


//三个铜钱的占位
const img1 = svg1.append("image")
  .attr("x", 25)
  .attr("y", 5)
  .attr("width", "80")
  .attr("height", "80")
  .attr("href", `./picture/notExist.png`)
  .style("opacity", 0)

const img2 = svg1.append("image")
  .attr("x", 25)
  .attr("y", 95)
  .attr("width", "80")
  .attr("height", "80")
  .attr("href", `./picture/notExist.png`)
  .style("opacity", 0)

const img3 = svg1.append("image")
  .attr("x", 25)
  .attr("y", 185)
  .attr("width", "80")
  .attr("height", "80")
  .attr("href", `./picture/notExist.png`)
  .style("opacity", 0)