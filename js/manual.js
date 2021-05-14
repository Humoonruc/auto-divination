//查询解卦的主函数
function getInput() {

  //最基本的全局变量复位
  currentCodeArray = [];

  //遍历六个单选表单
  for (let i = 0; i < 6; i++) {
    // 每个单选表单包含四个元素，故读入了一个序列
    let radioArray = document.getElementsByName("yaoCode" + i);
    radioArray.forEach(radio => {
      if (radio.checked) currentCodeArray[i] = +radio.value;
    })
  }

  //计算占卜结果
  let result = calculate(currentCodeArray);

  //绘图
  renderChart(result.currentGua, div5);
  renderChart(result.futureGua, div6);

  //输出
  outputViaDOM(result);
}