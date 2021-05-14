//由原始卦数一步步计算可能需要输出的所有值
function calculate(currentCodeArray) {
  //从本卦到之卦
  let futureCodeArray = getFutureCodeArray(currentCodeArray);

  //两个卦对象
  let currentGua = getDoubleGua(currentCodeArray);
  let futureGua = getDoubleGua(futureCodeArray);

  //为卦对象添加属性，成为一个完整的复卦对象
  //一个完整的复卦对象包含从卦名到变爻辞、再到关联爻辞的所有信息
  //爻（对象）序列
  currentGua.yaoArray = getYaoArray(currentCodeArray);
  futureGua.yaoArray = getYaoArray(futureCodeArray);
  //关联爻序列
  currentGua.corrYaoArray = getCorrYaoArray(currentGua.yaoArray);
  futureGua.corrYaoArray = getCorrYaoArray(futureGua.yaoArray);

  //返回两个完整的卦对象
  //此处只是借鉴了面向对象的思想，把一个复卦的数、象、辞、关联辞看作一个整体
  return {
    currentGua: currentGua,
    futureGua: futureGua
  }
}

// 分解大任务为一系列小函数----------------------------------------------

//6,9转换
function getFutureCode(currentCode) {
  let futureCode = (currentCode === 6 || currentCode === 9) ? 15 - currentCode : currentCode;
  return futureCode;
}

// 由本卦序列获得之卦序列
function getFutureCodeArray(currentCodeArray) {
  return currentCodeArray.map(code => getFutureCode(code)); //老阴老阳互换
}


// 由卦数序列匹配复卦object
function getDoubleGua(codeArray) {
  let codeString = codeArray.join("")
    .replaceAll("7", "9")
    .replaceAll("8", "6"); // 全部转换为6,9
  return doubleGuaData.filter(gua => gua.doubleCode === +codeString)[0]
}


// 由卦数序列获取爻对象序列
function getYaoArray(codeArray) {
  let guaName = getDoubleGua(codeArray).doubleName;
  let yaoArray = [];
  for (let i = 0; i < 6; i++) {
    let yao = yaoSentenceData
      .filter(yao => yao.index === i && yao.guaName === guaName)[0];
    yao.code = codeArray[i];
    yao.property = PropertyHash[codeArray[i]];
    yao.fill = fillHash[codeArray[i]];
    yaoArray.push(yao);
  }
  return yaoArray;
}

//相关爻对象序列，无code、property、fill属性
function getCorrYaoArray(currentYaoArray) {
  return currentYaoArray.map(function (currentYao) {
    return yaoSentenceData
      .filter(yao => yao.index === currentYao.index && yao.guaName === currentYao.futureGuaName)[0]
  })
}