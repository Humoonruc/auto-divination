//第二阶段的输出
function outputViaDOM(result) {

  let currentGua = result.currentGua;
  let futureGua = result.futureGua;

  d3.selectAll("h1").style("opacity", 1);
  let outputSentences = d3.select("div.description").style("width", "100%");

  //变爻序列
  let currentChangedYaoArray = result.currentGua.yaoArray
    .filter(yao => /老/.test(yao.property))


  //概述
  let ifChangeExist = "无变爻。"
  if (currentGua !== futureGua) {
    ifChangeExist = '变爻为<span style = "color:red;">' + currentChangedYaoArray.map(yao => yao.yaoName).join("、") + "</span>。";
  }
  outputSentences
    .append("p").classed("overview", true)
    .html("此次占卜结果：本卦" + currentGua.doubleSymbol + "《" + currentGua.doubleName + "》，之卦" + futureGua.doubleSymbol + "《" + futureGua.doubleName + "》，" + ifChangeExist);
  outputSentences.append("br");


  //本卦卦辞
  let row = outputSentences.append("div").classed("row", true)
  //5格宽度
  row.append("div").attr("class", "col-lg-6 col-md-6")
    .append("p").classed("guaSentence", true)
    .text("《" + currentGua.doubleName + "》：" + currentGua.sentence);
  //5格宽度
  row.append("div").attr("class", "col-lg-6 col-md-6")
    .append("p")
    .classed("guaSentence", true)
    .text("揣摩爻辞含义，可参考互证的单变爻");

  //本卦变爻爻辞
  printYaoSentence(result.currentGua);

  //之卦卦辞
  if (currentGua !== futureGua) {
    outputSentences.append("br");
    outputSentences
      .append("p").classed("guaSentence", true)
      .text("《" + futureGua.doubleName + "》：" + futureGua.sentence);
  }

  //之卦变爻爻辞
  if (currentChangedYaoArray.length > 0) {
    printYaoSentence(result.futureGua);
  }


  //打印爻辞的函数
  function printYaoSentence(gua) {
    for (let i = 0; i < 6; i++) {
      //新建一行
      let row = outputSentences.append("div").classed("row", true)
      //本卦爻辞，5格宽度
      row.append("div").attr("class", "col-lg-6 col-md-6")
        .append("p")
        .text("《" + gua.yaoArray[i].guaName + "》" + gua.yaoArray[i].yaoName + "：" + gua.yaoArray[i].sentence)
        .attr("class", /老/.test(gua.yaoArray[i].property) ? "changedYao" : "unchangedYao")
      //相关爻辞，5格宽度
      row.append("div").attr("class", "col-lg-6 col-md-6")
        .append("p")
        .text("《" + gua.corrYaoArray[i].guaName + "》" + gua.corrYaoArray[i].yaoName + "：" + gua.corrYaoArray[i].sentence)
    }
  }

}