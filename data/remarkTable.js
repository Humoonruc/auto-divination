// 卦爻辞
let remarkTable =
  [
    {
      "currentGua": "乾",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元亨。利贞。",
      "annotation": "彖象",
      "futureGua": "乾"
    },
    {
      "currentGua": "乾",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "潜龙勿用。",
      "annotation": "彖象",
      "futureGua": "姤"
    },
    {
      "currentGua": "乾",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "见龙在田，利见大人。",
      "annotation": "彖象",
      "futureGua": "同人"
    },
    {
      "currentGua": "乾",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "君子终日乾乾，夕惕若，厉，无咎。",
      "annotation": "彖象",
      "futureGua": "履"
    },
    {
      "currentGua": "乾",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "或跃，在渊，无咎。",
      "annotation": "彖象",
      "futureGua": "小畜"
    },
    {
      "currentGua": "乾",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "飞龙在天，利见大人。",
      "annotation": "彖象",
      "futureGua": "大有"
    },
    {
      "currentGua": "乾",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "亢龙有悔。",
      "annotation": "彖象",
      "futureGua": "夬"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元亨。利牝马之贞。",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "履霜，坚冰至。",
      "annotation": "彖象",
      "futureGua": "复"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "直方，不习，无不利。",
      "annotation": "彖象",
      "futureGua": "师"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "含章可贞，或从王事，无成有终。",
      "annotation": "彖象",
      "futureGua": "谦"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "括囊，无咎，无誉。",
      "annotation": "彖象",
      "futureGua": "豫"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "黄裳，元吉。",
      "annotation": "彖象",
      "futureGua": "比"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "龙战于野，其血玄黄",
      "annotation": "彖象",
      "futureGua": "剥"
    },
    {
      "currentGua": "屯",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元亨，利贞；勿用有攸往，利建",
      "annotation": "彖象",
      "futureGua": "屯"
    },
    {
      "currentGua": "屯",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "盘桓，利居贞，利建",
      "annotation": "彖象",
      "futureGua": "比"
    },
    {
      "currentGua": "屯",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "屯如，遣如。",
      "annotation": "彖象",
      "futureGua": "节"
    },
    {
      "currentGua": "屯",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "即鹿无虞，惟入于林",
      "annotation": "彖象",
      "futureGua": "既济"
    },
    {
      "currentGua": "屯",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "乘马班如，求婚媾；",
      "annotation": "彖象",
      "futureGua": "随"
    },
    {
      "currentGua": "屯",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "屯其膏。小，贞吉；",
      "annotation": "彖象",
      "futureGua": "复"
    },
    {
      "currentGua": "屯",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "乘马班如，泣血涟如",
      "annotation": "彖象",
      "futureGua": "益"
    },
    {
      "currentGua": "蒙",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨。匪我求童蒙，童蒙求我。",
      "annotation": "彖象",
      "futureGua": "蒙"
    },
    {
      "currentGua": "蒙",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "发蒙，利用刑人，用说桎梏，以往吝。",
      "annotation": "彖象",
      "futureGua": "损"
    },
    {
      "currentGua": "蒙",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "包蒙，吉。纳妇，吉。子克家。",
      "annotation": "彖象",
      "futureGua": "剥"
    },
    {
      "currentGua": "蒙",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "勿用取女，见金夫，不有躬。无攸利。",
      "annotation": "彖象",
      "futureGua": "蛊"
    },
    {
      "currentGua": "蒙",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "困蒙，吝。",
      "annotation": "彖象",
      "futureGua": "未济"
    },
    {
      "currentGua": "蒙",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "童蒙，吉。",
      "annotation": "彖象",
      "futureGua": "涣"
    },
    {
      "currentGua": "蒙",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "击蒙，不利为寇，利御寇。",
      "annotation": "彖象",
      "futureGua": "师"
    },
    {
      "currentGua": "需",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "有孚，光亨，贞吉。利涉大川。",
      "annotation": "彖象",
      "futureGua": "需"
    },
    {
      "currentGua": "需",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "需于郊。利用恒，无",
      "annotation": "彖象",
      "futureGua": "井"
    },
    {
      "currentGua": "需",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "需于沙，小有言，终",
      "annotation": "彖象",
      "futureGua": "既济"
    },
    {
      "currentGua": "需",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "需于泥，致宼至。",
      "annotation": "彖象",
      "futureGua": "节"
    },
    {
      "currentGua": "需",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "需于血，出自穴。",
      "annotation": "彖象",
      "futureGua": "夬"
    },
    {
      "currentGua": "需",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "需于酒食，贞吉。",
      "annotation": "彖象",
      "futureGua": "泰"
    },
    {
      "currentGua": "需",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "入于穴，有不速之客",
      "annotation": "彖象",
      "futureGua": "小畜"
    },
    {
      "currentGua": "讼",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "有孚窒，惕，中吉;终凶。",
      "annotation": "彖象",
      "futureGua": "讼"
    },
    {
      "currentGua": "讼",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "不永所事，小有言，",
      "annotation": "彖象",
      "futureGua": "履"
    },
    {
      "currentGua": "讼",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "不克讼，归而逋，其",
      "annotation": "彖象",
      "futureGua": "否"
    },
    {
      "currentGua": "讼",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "食旧德，贞厉，终吉",
      "annotation": "彖象",
      "futureGua": "姤"
    },
    {
      "currentGua": "讼",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "不克讼，复即命;渝，",
      "annotation": "彖象",
      "futureGua": "涣"
    },
    {
      "currentGua": "讼",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "讼，元吉。",
      "annotation": "彖象",
      "futureGua": "未济"
    },
    {
      "currentGua": "讼",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "或锡之鞶带，终朝三",
      "annotation": "彖象",
      "futureGua": "困"
    },
    {
      "currentGua": "师",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "贞。丈人吉，无咎。",
      "annotation": "彖象",
      "futureGua": "师"
    },
    {
      "currentGua": "师",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "师出以律，否臧凶。",
      "annotation": "彖象",
      "futureGua": "临"
    },
    {
      "currentGua": "师",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "在师，中吉，无咎;王",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "师",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "师或舆尸，凶。",
      "annotation": "彖象",
      "futureGua": "升"
    },
    {
      "currentGua": "师",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "师左次，无咎。",
      "annotation": "彖象",
      "futureGua": "解"
    },
    {
      "currentGua": "师",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "田有禽，利执言，无",
      "annotation": "彖象",
      "futureGua": "坎"
    },
    {
      "currentGua": "师",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "大君有命，开国承家",
      "annotation": "彖象",
      "futureGua": "蒙"
    },
    {
      "currentGua": "比",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "吉。原筮，元永贞，无咎",
      "annotation": "彖象",
      "futureGua": "比"
    },
    {
      "currentGua": "比",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "有孚比之，无咎",
      "annotation": "彖象",
      "futureGua": "屯"
    },
    {
      "currentGua": "比",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "比之自内，贞吉。",
      "annotation": "彖象",
      "futureGua": "坎"
    },
    {
      "currentGua": "比",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "比之匪人。",
      "annotation": "彖象",
      "futureGua": "蹇"
    },
    {
      "currentGua": "比",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "外比之，贞吉。",
      "annotation": "彖象",
      "futureGua": "萃"
    },
    {
      "currentGua": "比",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "显比;王用三驱，失前",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "比",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "比之无首，凶。",
      "annotation": "彖象",
      "futureGua": "观"
    },
    {
      "currentGua": "小畜",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨。密云不雨，自我西郊。",
      "annotation": "彖象",
      "futureGua": "小畜"
    },
    {
      "currentGua": "小畜",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "复自道，何其咎，",
      "annotation": "彖象",
      "futureGua": "巽"
    },
    {
      "currentGua": "小畜",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "牵复，吉。",
      "annotation": "彖象",
      "futureGua": "家人"
    },
    {
      "currentGua": "小畜",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "舆说辐，夫妻反目",
      "annotation": "彖象",
      "futureGua": "中孚"
    },
    {
      "currentGua": "小畜",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "有孚，血去惕出，",
      "annotation": "彖象",
      "futureGua": "乾"
    },
    {
      "currentGua": "小畜",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "有孚挛如，富以其",
      "annotation": "彖象",
      "futureGua": "大畜"
    },
    {
      "currentGua": "小畜",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "既雨既处，尚德载",
      "annotation": "彖象",
      "futureGua": "需"
    },
    {
      "currentGua": "履",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "履虎尾，不哇人，亨。",
      "annotation": "彖象",
      "futureGua": "履"
    },
    {
      "currentGua": "履",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "素履，往，无咎。",
      "annotation": "彖象",
      "futureGua": "讼"
    },
    {
      "currentGua": "履",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "履道坦坦，幽人贞吉",
      "annotation": "彖象",
      "futureGua": "无妄"
    },
    {
      "currentGua": "履",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "眇能视，跛能履。",
      "annotation": "彖象",
      "futureGua": "乾"
    },
    {
      "currentGua": "履",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "履虎尾，恝恝，终吉",
      "annotation": "彖象",
      "futureGua": "中孚"
    },
    {
      "currentGua": "履",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "夬履，贞厉。",
      "annotation": "彖象",
      "futureGua": "睽"
    },
    {
      "currentGua": "履",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "视履考祥，其旋元吉",
      "annotation": "彖象",
      "futureGua": "兑"
    },
    {
      "currentGua": "泰",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "小往大来，吉，亨。",
      "annotation": "彖象",
      "futureGua": "泰"
    },
    {
      "currentGua": "泰",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "拔茅茹，以其汇。征",
      "annotation": "彖象",
      "futureGua": "升"
    },
    {
      "currentGua": "泰",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "包荒，用冯河",
      "annotation": "彖象",
      "futureGua": "明夷"
    },
    {
      "currentGua": "泰",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "无平不陂，无往不复",
      "annotation": "彖象",
      "futureGua": "临"
    },
    {
      "currentGua": "泰",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "翩翩不富，以其邻不",
      "annotation": "彖象",
      "futureGua": "大壮"
    },
    {
      "currentGua": "泰",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "帝乙归妹，以祉元吉",
      "annotation": "彖象",
      "futureGua": "需"
    },
    {
      "currentGua": "泰",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "城复于隍;勿用师",
      "annotation": "彖象",
      "futureGua": "大畜"
    },
    {
      "currentGua": "否",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "否之匪人，不利，君子贞；大往",
      "annotation": "彖象",
      "futureGua": "否"
    },
    {
      "currentGua": "否",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "拔茅茹，以其汇，贞",
      "annotation": "彖象",
      "futureGua": "无妄"
    },
    {
      "currentGua": "否",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "包承，小人吉；大人",
      "annotation": "彖象",
      "futureGua": "讼"
    },
    {
      "currentGua": "否",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "包羞。",
      "annotation": "彖象",
      "futureGua": "遁"
    },
    {
      "currentGua": "否",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "有命，无咎，畴尚祉",
      "annotation": "彖象",
      "futureGua": "观"
    },
    {
      "currentGua": "否",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "休否，大人吉；其亡",
      "annotation": "彖象",
      "futureGua": "晋"
    },
    {
      "currentGua": "否",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "倾否；先否后喜。",
      "annotation": "彖象",
      "futureGua": "萃"
    },
    {
      "currentGua": "同人",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "同人于野，亨，利涉大川，",
      "annotation": "彖象",
      "futureGua": "同人"
    },
    {
      "currentGua": "同人",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "同人于门，无咎。",
      "annotation": "彖象",
      "futureGua": "遁"
    },
    {
      "currentGua": "同人",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "同人于宗，吝。",
      "annotation": "彖象",
      "futureGua": "乾"
    },
    {
      "currentGua": "同人",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "伏戎于莽，升其高",
      "annotation": "彖象",
      "futureGua": "无妄"
    },
    {
      "currentGua": "同人",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "乘其墉，弗克攻，",
      "annotation": "彖象",
      "futureGua": "家人"
    },
    {
      "currentGua": "同人",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "同人，先号眺，而",
      "annotation": "彖象",
      "futureGua": "离"
    },
    {
      "currentGua": "同人",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "同人于郊，无悔。",
      "annotation": "彖象",
      "futureGua": "革"
    },
    {
      "currentGua": "大有",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元亨。",
      "annotation": "彖象",
      "futureGua": "大有"
    },
    {
      "currentGua": "大有",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "无交害，匪咎；艰",
      "annotation": "彖象",
      "futureGua": "鼎"
    },
    {
      "currentGua": "大有",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "大车以载，有攸往",
      "annotation": "彖象",
      "futureGua": "离"
    },
    {
      "currentGua": "大有",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "公用亨于天子，小",
      "annotation": "彖象",
      "futureGua": "睽"
    },
    {
      "currentGua": "大有",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "匪其彭，无咎。",
      "annotation": "彖象",
      "futureGua": "大畜"
    },
    {
      "currentGua": "大有",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "厥孚交如，威如，",
      "annotation": "彖象",
      "futureGua": "乾"
    },
    {
      "currentGua": "大有",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "自天佑之，吉无不",
      "annotation": "彖象",
      "futureGua": "大壮"
    },
    {
      "currentGua": "谦",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，君子有终。",
      "annotation": "彖象",
      "futureGua": "谦"
    },
    {
      "currentGua": "谦",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "谦谦君子，用涉大川，吉。",
      "annotation": "彖象",
      "futureGua": "明夷"
    },
    {
      "currentGua": "谦",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "鸣谦，贞吉。",
      "annotation": "彖象",
      "futureGua": "升"
    },
    {
      "currentGua": "谦",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "劳谦君子，有终，吉。",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "谦",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "无不利，捴谦。",
      "annotation": "彖象",
      "futureGua": "小过"
    },
    {
      "currentGua": "谦",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "不富以其邻，利用侵伐，无不利。",
      "annotation": "彖象",
      "futureGua": "蹇"
    },
    {
      "currentGua": "谦",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "鸣谦，利用行师征邑国。",
      "annotation": "彖象",
      "futureGua": "艮"
    },
    {
      "currentGua": "豫",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利建侯行师。",
      "annotation": "彖象",
      "futureGua": "豫"
    },
    {
      "currentGua": "豫",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "鸣豫，凶。",
      "annotation": "彖象",
      "futureGua": "震"
    },
    {
      "currentGua": "豫",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "介于石，不终日，贞",
      "annotation": "彖象",
      "futureGua": "解"
    },
    {
      "currentGua": "豫",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "盱豫悔；迟有悔。",
      "annotation": "彖象",
      "futureGua": "小过"
    },
    {
      "currentGua": "豫",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "由豫，大有得；勿疑",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "豫",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "贞疾，恒不死。",
      "annotation": "彖象",
      "futureGua": "萃"
    },
    {
      "currentGua": "豫",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "冥豫成，有渝无咎。",
      "annotation": "彖象",
      "futureGua": "晋"
    },
    {
      "currentGua": "随",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元，亨，利，贞，无咎。",
      "annotation": "彖象",
      "futureGua": "随"
    },
    {
      "currentGua": "随",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "官有渝，贞吉。出门",
      "annotation": "彖象",
      "futureGua": "萃"
    },
    {
      "currentGua": "随",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "系小子，失丈夫。",
      "annotation": "彖象",
      "futureGua": "兑"
    },
    {
      "currentGua": "随",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "系丈夫，失小子。随",
      "annotation": "彖象",
      "futureGua": "革"
    },
    {
      "currentGua": "随",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "随有获，贞凶；有孚",
      "annotation": "彖象",
      "futureGua": "屯"
    },
    {
      "currentGua": "随",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "孚于嘉，吉。",
      "annotation": "彖象",
      "futureGua": "震"
    },
    {
      "currentGua": "随",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "拘系之，乃从，维之",
      "annotation": "彖象",
      "futureGua": "无妄"
    },
    {
      "currentGua": "蛊",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元亨，利涉在川；先甲三日",
      "annotation": "彖象",
      "futureGua": "蛊"
    },
    {
      "currentGua": "蛊",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "干父之蛊，有子，考",
      "annotation": "彖象",
      "futureGua": "大畜"
    },
    {
      "currentGua": "蛊",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "干母之蛊，不可贞。",
      "annotation": "彖象",
      "futureGua": "艮"
    },
    {
      "currentGua": "蛊",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "干父之蛊，小有悔，",
      "annotation": "彖象",
      "futureGua": "蒙"
    },
    {
      "currentGua": "蛊",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "裕父之蛊，往见吝。",
      "annotation": "彖象",
      "futureGua": "鼎"
    },
    {
      "currentGua": "蛊",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "干父之蛊，用誉。",
      "annotation": "彖象",
      "futureGua": "巽"
    },
    {
      "currentGua": "蛊",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "不事王侯，高尚其事",
      "annotation": "彖象",
      "futureGua": "升"
    },
    {
      "currentGua": "临",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元，亨，利，贞。至于八月有凶",
      "annotation": "彖象",
      "futureGua": "临"
    },
    {
      "currentGua": "临",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "咸临，贞吉。",
      "annotation": "彖象",
      "futureGua": "师"
    },
    {
      "currentGua": "临",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "咸临，吉，无不利。",
      "annotation": "彖象",
      "futureGua": "复"
    },
    {
      "currentGua": "临",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "甘临，无攸利；既忧",
      "annotation": "彖象",
      "futureGua": "泰"
    },
    {
      "currentGua": "临",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "至临，无咎。",
      "annotation": "彖象",
      "futureGua": "归妹"
    },
    {
      "currentGua": "临",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "知临，大君之宜，吉",
      "annotation": "彖象",
      "futureGua": "节"
    },
    {
      "currentGua": "临",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "敦临，吉，无咎。",
      "annotation": "彖象",
      "futureGua": "损"
    },
    {
      "currentGua": "观",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "盥而不荐，有孚顒",
      "annotation": "彖象",
      "futureGua": "观"
    },
    {
      "currentGua": "观",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "童观，小人无咎，君",
      "annotation": "彖象",
      "futureGua": "益"
    },
    {
      "currentGua": "观",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "窥观，利女贞。",
      "annotation": "彖象",
      "futureGua": "涣"
    },
    {
      "currentGua": "观",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "观我生，进退。",
      "annotation": "彖象",
      "futureGua": "渐"
    },
    {
      "currentGua": "观",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "观国之光，利用宾于",
      "annotation": "彖象",
      "futureGua": "否"
    },
    {
      "currentGua": "观",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "观我生，君子无咎。",
      "annotation": "彖象",
      "futureGua": "剥"
    },
    {
      "currentGua": "观",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "观其生，君子无咎。",
      "annotation": "彖象",
      "futureGua": "比"
    },
    {
      "currentGua": "噬嗑",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨。利用狱。",
      "annotation": "彖象",
      "futureGua": "噬嗑"
    },
    {
      "currentGua": "噬嗑",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "屦校灭趾，无咎。",
      "annotation": "彖象",
      "futureGua": "晋"
    },
    {
      "currentGua": "噬嗑",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "噬肤灭鼻，无咎。",
      "annotation": "彖象",
      "futureGua": "睽"
    },
    {
      "currentGua": "噬嗑",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "噬腊肉，遇毒；小",
      "annotation": "彖象",
      "futureGua": "离"
    },
    {
      "currentGua": "噬嗑",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "噬干胏，得金矢；利",
      "annotation": "彖象",
      "futureGua": "颐"
    },
    {
      "currentGua": "噬嗑",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "六五，噬干肉，得黄金；贞",
      "annotation": "彖象",
      "futureGua": "无妄"
    },
    {
      "currentGua": "噬嗑",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "何校灭耳，凶。",
      "annotation": "彖象",
      "futureGua": "震"
    },
    {
      "currentGua": "贲",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，小利有攸往。",
      "annotation": "彖象",
      "futureGua": "贲"
    },
    {
      "currentGua": "贲",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "贲其趾，舍车而徒。",
      "annotation": "彖象",
      "futureGua": "艮"
    },
    {
      "currentGua": "贲",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "贲其须。",
      "annotation": "彖象",
      "futureGua": "大畜"
    },
    {
      "currentGua": "贲",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "贲如，濡如，永贞吉",
      "annotation": "彖象",
      "futureGua": "颐"
    },
    {
      "currentGua": "贲",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "贲如，皤如，白马翰",
      "annotation": "彖象",
      "futureGua": "离"
    },
    {
      "currentGua": "贲",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "贲于丘园，束帛矣矣",
      "annotation": "彖象",
      "futureGua": "家人"
    },
    {
      "currentGua": "贲",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "白贲，无咎。",
      "annotation": "彖象",
      "futureGua": "明夷"
    },
    {
      "currentGua": "剥",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "不利有攸往。",
      "annotation": "彖象",
      "futureGua": "剥"
    },
    {
      "currentGua": "剥",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "剥床以足，蔑贞，凶",
      "annotation": "彖象",
      "futureGua": "颐"
    },
    {
      "currentGua": "剥",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "剥床以辨，蔑贞，凶。",
      "annotation": "彖象",
      "futureGua": "蒙"
    },
    {
      "currentGua": "剥",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "剥，无咎。",
      "annotation": "彖象",
      "futureGua": "艮"
    },
    {
      "currentGua": "剥",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "剥床以肤，凶。",
      "annotation": "彖象",
      "futureGua": "晋"
    },
    {
      "currentGua": "剥",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "贯鱼，以宫人宠，无",
      "annotation": "彖象",
      "futureGua": "观"
    },
    {
      "currentGua": "剥",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "硕果不食，君子得舆",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "复",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨。出入无疾，朋来无咎。",
      "annotation": "彖象",
      "futureGua": "复"
    },
    {
      "currentGua": "复",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "不远复，无祗悔，元",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "复",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "休复，吉。",
      "annotation": "彖象",
      "futureGua": "临"
    },
    {
      "currentGua": "复",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "频复，厉，无咎。",
      "annotation": "彖象",
      "futureGua": "明夷"
    },
    {
      "currentGua": "复",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "中行独复。",
      "annotation": "彖象",
      "futureGua": "震"
    },
    {
      "currentGua": "复",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "敦复，无悔。",
      "annotation": "彖象",
      "futureGua": "屯"
    },
    {
      "currentGua": "复",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "迷复，凶，有灾眚。",
      "annotation": "彖象",
      "futureGua": "颐"
    },
    {
      "currentGua": "无妄",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元亨，利贞。其匪正有眚，",
      "annotation": "彖象",
      "futureGua": "无妄"
    },
    {
      "currentGua": "无妄",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "无妄，往吉。",
      "annotation": "彖象",
      "futureGua": "否"
    },
    {
      "currentGua": "无妄",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "不耕获，不菑畲，",
      "annotation": "彖象",
      "futureGua": "履"
    },
    {
      "currentGua": "无妄",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "无妄之灾，或系之牛，行人之得",
      "annotation": "彖象",
      "futureGua": "同人"
    },
    {
      "currentGua": "无妄",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "可贞，无咎。",
      "annotation": "彖象",
      "futureGua": "益"
    },
    {
      "currentGua": "无妄",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "无妄之疾，勿药有喜",
      "annotation": "彖象",
      "futureGua": "噬嗑"
    },
    {
      "currentGua": "无妄",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "无妄，行有眚，无",
      "annotation": "彖象",
      "futureGua": "随"
    },
    {
      "currentGua": "大畜",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利贞；不家食，吉，利涉大",
      "annotation": "彖象",
      "futureGua": "大畜"
    },
    {
      "currentGua": "大畜",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "有厉，利已。",
      "annotation": "彖象",
      "futureGua": "蛊"
    },
    {
      "currentGua": "大畜",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "舆说輹。",
      "annotation": "彖象",
      "futureGua": "贲"
    },
    {
      "currentGua": "大畜",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "良马逐，利艰贞。",
      "annotation": "彖象",
      "futureGua": "损"
    },
    {
      "currentGua": "大畜",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "童牛之牿，元吉。",
      "annotation": "彖象",
      "futureGua": "大有"
    },
    {
      "currentGua": "大畜",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "豮豕之牙，吉。",
      "annotation": "彖象",
      "futureGua": "小畜"
    },
    {
      "currentGua": "大畜",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "何天之衢，亨。",
      "annotation": "彖象",
      "futureGua": "泰"
    },
    {
      "currentGua": "颐",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "贞吉；观颐，自求口实。",
      "annotation": "彖象",
      "futureGua": "颐"
    },
    {
      "currentGua": "颐",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "舍尔灵龟，观我朵颐",
      "annotation": "彖象",
      "futureGua": "剥"
    },
    {
      "currentGua": "颐",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "颠颐，拂经，于丘颐",
      "annotation": "彖象",
      "futureGua": "损"
    },
    {
      "currentGua": "颐",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "拂颐，贞凶，十年勿",
      "annotation": "彖象",
      "futureGua": "贲"
    },
    {
      "currentGua": "颐",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "颠颐，吉；虎视眈眈",
      "annotation": "彖象",
      "futureGua": "噬嗑"
    },
    {
      "currentGua": "颐",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "拂经，居贞吉，不可",
      "annotation": "彖象",
      "futureGua": "益"
    },
    {
      "currentGua": "颐",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "由颐；厉吉，利涉大",
      "annotation": "彖象",
      "futureGua": "复"
    },
    {
      "currentGua": "大过",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "栋桡；利有攸往，亨。",
      "annotation": "彖象",
      "futureGua": "大过"
    },
    {
      "currentGua": "大过",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "藉用白茅，无咎。",
      "annotation": "彖象",
      "futureGua": "夬"
    },
    {
      "currentGua": "大过",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "枯杨生梯，老夫得",
      "annotation": "彖象",
      "futureGua": "咸"
    },
    {
      "currentGua": "大过",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "栋桡，凶。",
      "annotation": "彖象",
      "futureGua": "困"
    },
    {
      "currentGua": "大过",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "栋隆，吉；有它，",
      "annotation": "彖象",
      "futureGua": "井"
    },
    {
      "currentGua": "大过",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "枯杨生华，老妇得",
      "annotation": "彖象",
      "futureGua": "恒"
    },
    {
      "currentGua": "大过",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "过涉灭顶，凶，无",
      "annotation": "彖象",
      "futureGua": "姤"
    },
    {
      "currentGua": "坎",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "有半，维心亨，行有尚。",
      "annotation": "彖象",
      "futureGua": "坎"
    },
    {
      "currentGua": "坎",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "习坎，入于坎窖，凶",
      "annotation": "彖象",
      "futureGua": "节"
    },
    {
      "currentGua": "坎",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "坎有险，求小得。",
      "annotation": "彖象",
      "futureGua": "比"
    },
    {
      "currentGua": "坎",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "来之坎坎，险且枕，",
      "annotation": "彖象",
      "futureGua": "井"
    },
    {
      "currentGua": "坎",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "樽酒簋贰用缶，纳约自牖，终无咎。",
      "annotation": "彖象",
      "futureGua": "困"
    },
    {
      "currentGua": "坎",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "坎不盈，祗既平，无咎。",
      "annotation": "彖象",
      "futureGua": "师"
    },
    {
      "currentGua": "坎",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "系用徽纆，窴于丛棘，三岁不得，凶。",
      "annotation": "彖象",
      "futureGua": "涣"
    },
    {
      "currentGua": "离",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利贞，亨；畜牝牛，吉。",
      "annotation": "彖象",
      "futureGua": "离"
    },
    {
      "currentGua": "离",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "履错然，敬之，无咎",
      "annotation": "彖象",
      "futureGua": "旅"
    },
    {
      "currentGua": "离",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "黄离，元吉。",
      "annotation": "彖象",
      "futureGua": "大有"
    },
    {
      "currentGua": "离",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "日昃之离，不鼓缶而",
      "annotation": "彖象",
      "futureGua": "噬嗑"
    },
    {
      "currentGua": "离",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "突如其来如，焚如，",
      "annotation": "彖象",
      "futureGua": "贲"
    },
    {
      "currentGua": "离",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "出涕佗若，戚嗟若，",
      "annotation": "彖象",
      "futureGua": "同人"
    },
    {
      "currentGua": "离",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "王用出征，有嘉折首",
      "annotation": "彖象",
      "futureGua": "丰"
    },
    {
      "currentGua": "咸",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，利贞；取女吉。",
      "annotation": "彖象",
      "futureGua": "咸"
    },
    {
      "currentGua": "咸",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "咸其拇。",
      "annotation": "彖象",
      "futureGua": "革"
    },
    {
      "currentGua": "咸",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "咸其腓，凶；居吉。",
      "annotation": "彖象",
      "futureGua": "大过"
    },
    {
      "currentGua": "咸",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "咸其股，执其随，往",
      "annotation": "彖象",
      "futureGua": "萃"
    },
    {
      "currentGua": "咸",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "贞吉，悔亡；憧憧往",
      "annotation": "彖象",
      "futureGua": "蹇"
    },
    {
      "currentGua": "咸",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "咸其晦，无悔。",
      "annotation": "彖象",
      "futureGua": "小过"
    },
    {
      "currentGua": "咸",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "咸其辅、颊、舌。",
      "annotation": "彖象",
      "futureGua": "遁"
    },
    {
      "currentGua": "恒",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，无咎，利贞，利有攸往。",
      "annotation": "彖象",
      "futureGua": "恒"
    },
    {
      "currentGua": "恒",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "浚恒，贞凶，无攸利",
      "annotation": "彖象",
      "futureGua": "大壮"
    },
    {
      "currentGua": "恒",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "悔亡。",
      "annotation": "彖象",
      "futureGua": "小过"
    },
    {
      "currentGua": "恒",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "不恒其德，或承之羞",
      "annotation": "彖象",
      "futureGua": "解"
    },
    {
      "currentGua": "恒",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "田无禽。",
      "annotation": "彖象",
      "futureGua": "升"
    },
    {
      "currentGua": "恒",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "恒其德，贞；妇人吉",
      "annotation": "彖象",
      "futureGua": "大过"
    },
    {
      "currentGua": "恒",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "振恒，凶。",
      "annotation": "彖象",
      "futureGua": "鼎"
    },
    {
      "currentGua": "遁",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，小利贞。",
      "annotation": "彖象",
      "futureGua": "遁"
    },
    {
      "currentGua": "遁",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "遁尾；厉。勿用有攸",
      "annotation": "彖象",
      "futureGua": "同人"
    },
    {
      "currentGua": "遁",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "执之用黄牛之革，莫",
      "annotation": "彖象",
      "futureGua": "姤"
    },
    {
      "currentGua": "遁",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "系遁，有疾厉，畜臣",
      "annotation": "彖象",
      "futureGua": "否"
    },
    {
      "currentGua": "遁",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "好遁，君子吉，小人",
      "annotation": "彖象",
      "futureGua": "渐"
    },
    {
      "currentGua": "遁",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "嘉遁，贞吉。",
      "annotation": "彖象",
      "futureGua": "旅"
    },
    {
      "currentGua": "遁",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "肥遁无不利。",
      "annotation": "彖象",
      "futureGua": "咸"
    },
    {
      "currentGua": "大壮",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利贞",
      "annotation": "彖象",
      "futureGua": "大壮"
    },
    {
      "currentGua": "大壮",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "壮于趾，征凶，有",
      "annotation": "彖象",
      "futureGua": "恒"
    },
    {
      "currentGua": "大壮",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "贞吉。",
      "annotation": "彖象",
      "futureGua": "丰"
    },
    {
      "currentGua": "大壮",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "小人用壮，君子用",
      "annotation": "彖象",
      "futureGua": "归妹"
    },
    {
      "currentGua": "大壮",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "贞吉，悔亡；藩决",
      "annotation": "彖象",
      "futureGua": "泰"
    },
    {
      "currentGua": "大壮",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "丧羊于易，无悔。",
      "annotation": "彖象",
      "futureGua": "夬"
    },
    {
      "currentGua": "大壮",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "羝羊触藩，不能退",
      "annotation": "彖象",
      "futureGua": "大有"
    },
    {
      "currentGua": "晋",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "康侯用锡马蕃庶，昼日三接。",
      "annotation": "彖象",
      "futureGua": "晋"
    },
    {
      "currentGua": "晋",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "晋如摧如，贞吉。",
      "annotation": "彖象",
      "futureGua": "噬嗑"
    },
    {
      "currentGua": "晋",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "晋如愁如，贞吉；",
      "annotation": "彖象",
      "futureGua": "未济"
    },
    {
      "currentGua": "晋",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "众允，悔亡。",
      "annotation": "彖象",
      "futureGua": "旅"
    },
    {
      "currentGua": "晋",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "晋如鼫鼠，贞厉。",
      "annotation": "彖象",
      "futureGua": "剥"
    },
    {
      "currentGua": "晋",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "悔亡，失得勿恤；往",
      "annotation": "彖象",
      "futureGua": "否"
    },
    {
      "currentGua": "晋",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "晋其角，维用伐邑",
      "annotation": "彖象",
      "futureGua": "豫"
    },
    {
      "currentGua": "明夷",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利艰贞。",
      "annotation": "彖象",
      "futureGua": "明夷"
    },
    {
      "currentGua": "明夷",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "明夷于飞，垂其翼",
      "annotation": "彖象",
      "futureGua": "谦"
    },
    {
      "currentGua": "明夷",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "明夷，夷于左股",
      "annotation": "彖象",
      "futureGua": "泰"
    },
    {
      "currentGua": "明夷",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "明夷于南狩",
      "annotation": "彖象",
      "futureGua": "复"
    },
    {
      "currentGua": "明夷",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "入于左腹",
      "annotation": "彖象",
      "futureGua": "丰"
    },
    {
      "currentGua": "明夷",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "箕子之明夷，利贞",
      "annotation": "彖象",
      "futureGua": "既济"
    },
    {
      "currentGua": "明夷",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "不明，晦；初登于",
      "annotation": "彖象",
      "futureGua": "贲"
    },
    {
      "currentGua": "家人",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利女贞。",
      "annotation": "彖象",
      "futureGua": "家人"
    },
    {
      "currentGua": "家人",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "闲有家，悔亡。",
      "annotation": "彖象",
      "futureGua": "渐"
    },
    {
      "currentGua": "家人",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "无攸遂，在中馈，",
      "annotation": "彖象",
      "futureGua": "小畜"
    },
    {
      "currentGua": "家人",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "家人嘀嘀，悔厉，",
      "annotation": "彖象",
      "futureGua": "益"
    },
    {
      "currentGua": "家人",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "富家，大吉。",
      "annotation": "彖象",
      "futureGua": "同人"
    },
    {
      "currentGua": "家人",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "王假有家，勿恤，",
      "annotation": "彖象",
      "futureGua": "贲"
    },
    {
      "currentGua": "家人",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "有孚，威如，终吉",
      "annotation": "彖象",
      "futureGua": "既济"
    },
    {
      "currentGua": "睽",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "小事吉。",
      "annotation": "彖象",
      "futureGua": "睽"
    },
    {
      "currentGua": "睽",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "悔亡；丧马，勿逐自",
      "annotation": "彖象",
      "futureGua": "未济"
    },
    {
      "currentGua": "睽",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "遇主于巷，无咎。",
      "annotation": "彖象",
      "futureGua": "噬嗑"
    },
    {
      "currentGua": "睽",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "见舆曳，其牛掣；其",
      "annotation": "彖象",
      "futureGua": "大有"
    },
    {
      "currentGua": "睽",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "睽孤；遇元夫，交孚",
      "annotation": "彖象",
      "futureGua": "损"
    },
    {
      "currentGua": "睽",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "悔亡，厥宗噬肤，往",
      "annotation": "彖象",
      "futureGua": "履"
    },
    {
      "currentGua": "睽",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "睽孤，见豕负涂，载",
      "annotation": "彖象",
      "futureGua": "归妹"
    },
    {
      "currentGua": "蹇",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利西南，不利东北；利见大人，",
      "annotation": "彖象",
      "futureGua": "蹇"
    },
    {
      "currentGua": "蹇",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "往蹇，来誉。",
      "annotation": "彖象",
      "futureGua": "既济"
    },
    {
      "currentGua": "蹇",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "王臣蹇蹇，匪躬之故",
      "annotation": "彖象",
      "futureGua": "井"
    },
    {
      "currentGua": "蹇",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "往蹇，来反。",
      "annotation": "彖象",
      "futureGua": "比"
    },
    {
      "currentGua": "蹇",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "往蹇，来连。",
      "annotation": "彖象",
      "futureGua": "咸"
    },
    {
      "currentGua": "蹇",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "大蹇，朋来。",
      "annotation": "彖象",
      "futureGua": "谦"
    },
    {
      "currentGua": "蹇",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "往蹇，来硕；吉；利",
      "annotation": "彖象",
      "futureGua": "渐"
    },
    {
      "currentGua": "解",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利西南；无所往，其来复吉；有",
      "annotation": "彖象",
      "futureGua": "解"
    },
    {
      "currentGua": "解",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "无咎。",
      "annotation": "彖象",
      "futureGua": "归妹"
    },
    {
      "currentGua": "解",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "田获三狐，得黄矢；",
      "annotation": "彖象",
      "futureGua": "豫"
    },
    {
      "currentGua": "解",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "负且乘，致宼至；贞",
      "annotation": "彖象",
      "futureGua": "恒"
    },
    {
      "currentGua": "解",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "解而拇，朋至斯孚。",
      "annotation": "彖象",
      "futureGua": "师"
    },
    {
      "currentGua": "解",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "君子维有解，吉，有",
      "annotation": "彖象",
      "futureGua": "困"
    },
    {
      "currentGua": "解",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "公用射隼于高墉之上",
      "annotation": "彖象",
      "futureGua": "未济"
    },
    {
      "currentGua": "损",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "有孚，元吉，无咎，可贞，利有",
      "annotation": "彖象",
      "futureGua": "损"
    },
    {
      "currentGua": "损",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "已事遄往，无咎；酌",
      "annotation": "彖象",
      "futureGua": "蒙"
    },
    {
      "currentGua": "损",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "利贞，征凶；弗损放",
      "annotation": "彖象",
      "futureGua": "颐"
    },
    {
      "currentGua": "损",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "三人行，则损一人；",
      "annotation": "彖象",
      "futureGua": "大畜"
    },
    {
      "currentGua": "损",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "损其疾，使遄有喜。",
      "annotation": "彖象",
      "futureGua": "睽"
    },
    {
      "currentGua": "损",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "或益之十朋之龟，弗",
      "annotation": "彖象",
      "futureGua": "中孚"
    },
    {
      "currentGua": "损",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "弗损益之；无咎，贞",
      "annotation": "彖象",
      "futureGua": "临"
    },
    {
      "currentGua": "益",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "利有攸往，利涉大川。",
      "annotation": "彖象",
      "futureGua": "益"
    },
    {
      "currentGua": "益",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "利用为大作，元吉，",
      "annotation": "彖象",
      "futureGua": "观"
    },
    {
      "currentGua": "益",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "或益之十朋之龟，弗",
      "annotation": "彖象",
      "futureGua": "中孚"
    },
    {
      "currentGua": "益",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "益之用凶事，无咎；",
      "annotation": "彖象",
      "futureGua": "家人"
    },
    {
      "currentGua": "益",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "中行告公从，利用为",
      "annotation": "彖象",
      "futureGua": "无妄"
    },
    {
      "currentGua": "益",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "有孚惠心，勿问元吉",
      "annotation": "彖象",
      "futureGua": "颐"
    },
    {
      "currentGua": "益",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "莫益之，或击之；立",
      "annotation": "彖象",
      "futureGua": "屯"
    },
    {
      "currentGua": "夬",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "扬于王庭，孚号有厉；告自邑",
      "annotation": "彖象",
      "futureGua": "夬"
    },
    {
      "currentGua": "夬",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "壮于前趾，往不胜为",
      "annotation": "彖象",
      "futureGua": "大过"
    },
    {
      "currentGua": "夬",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "锡号，旲夜有戎，勿",
      "annotation": "彖象",
      "futureGua": "革"
    },
    {
      "currentGua": "夬",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "壮于頑，有凶；君子",
      "annotation": "彖象",
      "futureGua": "兑"
    },
    {
      "currentGua": "夬",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "臀无肤，其行次且；",
      "annotation": "彖象",
      "futureGua": "需"
    },
    {
      "currentGua": "夬",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "苋陆夬夬，中行无咎",
      "annotation": "彖象",
      "futureGua": "大壮"
    },
    {
      "currentGua": "夬",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "无号，终有凶。",
      "annotation": "彖象",
      "futureGua": "乾"
    },
    {
      "currentGua": "姤",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "女壮，勿用取女。",
      "annotation": "彖象",
      "futureGua": "姤"
    },
    {
      "currentGua": "姤",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "系于金柅，贞吉；",
      "annotation": "彖象",
      "futureGua": "乾"
    },
    {
      "currentGua": "姤",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "包有鱼，无咎；不利",
      "annotation": "彖象",
      "futureGua": "遁"
    },
    {
      "currentGua": "姤",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "臀无肤，其行次且；",
      "annotation": "彖象",
      "futureGua": "讼"
    },
    {
      "currentGua": "姤",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "包无鱼，起凶。",
      "annotation": "彖象",
      "futureGua": "巽"
    },
    {
      "currentGua": "姤",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "以杞包瓜，含章，有",
      "annotation": "彖象",
      "futureGua": "鼎"
    },
    {
      "currentGua": "姤",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "姤其角；吝，无咎。",
      "annotation": "彖象",
      "futureGua": "大过"
    },
    {
      "currentGua": "萃",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨；王假有庙，利见大人",
      "annotation": "彖象",
      "futureGua": "萃"
    },
    {
      "currentGua": "萃",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "有孚不终，乃乱乃萃",
      "annotation": "彖象",
      "futureGua": "随"
    },
    {
      "currentGua": "萃",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "引吉，无咎",
      "annotation": "彖象",
      "futureGua": "困"
    },
    {
      "currentGua": "萃",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "萃如嗟如，无攸利",
      "annotation": "彖象",
      "futureGua": "咸"
    },
    {
      "currentGua": "萃",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "大吉，无咎。",
      "annotation": "彖象",
      "futureGua": "比"
    },
    {
      "currentGua": "萃",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "萃有位，无咎",
      "annotation": "彖象",
      "futureGua": "豫"
    },
    {
      "currentGua": "萃",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "赍咨涕洟，无咎。",
      "annotation": "彖象",
      "futureGua": "否"
    },
    {
      "currentGua": "升",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元亨，用见大人，勿恤，南征吉",
      "annotation": "彖象",
      "futureGua": "升"
    },
    {
      "currentGua": "升",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "允升，大吉。",
      "annotation": "彖象",
      "futureGua": "泰"
    },
    {
      "currentGua": "升",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "孚乃利用檜，无咎。",
      "annotation": "彖象",
      "futureGua": "谦"
    },
    {
      "currentGua": "升",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "升虚邑。",
      "annotation": "彖象",
      "futureGua": "师"
    },
    {
      "currentGua": "升",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "王用亨于岐山，吉，",
      "annotation": "彖象",
      "futureGua": "恒"
    },
    {
      "currentGua": "升",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "贞吉，升阶。",
      "annotation": "彖象",
      "futureGua": "井"
    },
    {
      "currentGua": "升",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "冥升，利于不息之贞",
      "annotation": "彖象",
      "futureGua": "蛊"
    },
    {
      "currentGua": "困",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨；贞，大人吉，无咎；有言不",
      "annotation": "彖象",
      "futureGua": "困"
    },
    {
      "currentGua": "困",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "臀困于株木，入于幽",
      "annotation": "彖象",
      "futureGua": "兑"
    },
    {
      "currentGua": "困",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "困于酒食，朱绂方来",
      "annotation": "彖象",
      "futureGua": "萃"
    },
    {
      "currentGua": "困",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "困于石，据于蒺藜；",
      "annotation": "彖象",
      "futureGua": "大过"
    },
    {
      "currentGua": "困",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "来徐徐，困于金车，",
      "annotation": "彖象",
      "futureGua": "坎"
    },
    {
      "currentGua": "困",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "劓刖，困于赤绂；乃",
      "annotation": "彖象",
      "futureGua": "解"
    },
    {
      "currentGua": "困",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "困于葛藟，于臲卼，",
      "annotation": "彖象",
      "futureGua": "讼"
    },
    {
      "currentGua": "井",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "改邑不改井，无丧无得，往来井",
      "annotation": "彖象",
      "futureGua": "井"
    },
    {
      "currentGua": "井",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "井泥不食，旧井无禽",
      "annotation": "彖象",
      "futureGua": "需"
    },
    {
      "currentGua": "井",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "井谷射鲋，瓮敝漏。",
      "annotation": "彖象",
      "futureGua": "蹇"
    },
    {
      "currentGua": "井",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "井渫不食，为我心恻",
      "annotation": "彖象",
      "futureGua": "坎"
    },
    {
      "currentGua": "井",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "井瓷，无咎。",
      "annotation": "彖象",
      "futureGua": "大过"
    },
    {
      "currentGua": "井",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "井洌，寒泉食。",
      "annotation": "彖象",
      "futureGua": "升"
    },
    {
      "currentGua": "井",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "井收，勿幕；有孚，",
      "annotation": "彖象",
      "futureGua": "巽"
    },
    {
      "currentGua": "革",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "己日乃孚，元亨，利贞，悔亡。",
      "annotation": "彖象",
      "futureGua": "革"
    },
    {
      "currentGua": "革",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "巩用黄牛之革。",
      "annotation": "彖象",
      "futureGua": "咸"
    },
    {
      "currentGua": "革",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "己日乃革之，征吉，",
      "annotation": "彖象",
      "futureGua": "夬"
    },
    {
      "currentGua": "革",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "征凶，贞厉；革言三",
      "annotation": "彖象",
      "futureGua": "随"
    },
    {
      "currentGua": "革",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "悔亡，有孚改命，吉",
      "annotation": "彖象",
      "futureGua": "既济"
    },
    {
      "currentGua": "革",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "大人虎变，未占有孚",
      "annotation": "彖象",
      "futureGua": "丰"
    },
    {
      "currentGua": "革",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "君子豹变，小人革面",
      "annotation": "彖象",
      "futureGua": "同人"
    },
    {
      "currentGua": "鼎",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "元吉，亨。",
      "annotation": "彖象",
      "futureGua": "鼎"
    },
    {
      "currentGua": "鼎",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "鼎颠趾，利出否；得",
      "annotation": "彖象",
      "futureGua": "大有"
    },
    {
      "currentGua": "鼎",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "鼎有实；我仇有疾，",
      "annotation": "彖象",
      "futureGua": "旅"
    },
    {
      "currentGua": "鼎",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "鼎耳革，其行塞，雉",
      "annotation": "彖象",
      "futureGua": "未济"
    },
    {
      "currentGua": "鼎",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "鼎折足，覆公錬，其",
      "annotation": "彖象",
      "futureGua": "蛊"
    },
    {
      "currentGua": "鼎",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "鼎黄耳金铉，利贞。",
      "annotation": "彖象",
      "futureGua": "姤"
    },
    {
      "currentGua": "鼎",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "鼎玉铉，大吉，无不",
      "annotation": "彖象",
      "futureGua": "恒"
    },
    {
      "currentGua": "震",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "號虢，笑言哑哑；震",
      "annotation": "彖象",
      "futureGua": "震"
    },
    {
      "currentGua": "震",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "震来虩虩，后笑言哑",
      "annotation": "彖象",
      "futureGua": "豫"
    },
    {
      "currentGua": "震",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "震来厉，亿丧贝，跻",
      "annotation": "彖象",
      "futureGua": "归妹"
    },
    {
      "currentGua": "震",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "震苏苏，震行无眚。",
      "annotation": "彖象",
      "futureGua": "丰"
    },
    {
      "currentGua": "震",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "震遂泥。",
      "annotation": "彖象",
      "futureGua": "复"
    },
    {
      "currentGua": "震",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "震往来，厉；亿无丧",
      "annotation": "彖象",
      "futureGua": "随"
    },
    {
      "currentGua": "震",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "震索索，视矍矍，征",
      "annotation": "彖象",
      "futureGua": "噬嗑"
    },
    {
      "currentGua": "艮",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "艮其背，不获其身；行其庭，不",
      "annotation": "彖象",
      "futureGua": "艮"
    },
    {
      "currentGua": "艮",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "艮其址，无咎，利永",
      "annotation": "彖象",
      "futureGua": "贲"
    },
    {
      "currentGua": "艮",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "艮其腓，不拯其随，",
      "annotation": "彖象",
      "futureGua": "蛊"
    },
    {
      "currentGua": "艮",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "艮其限，列其夤，厉",
      "annotation": "彖象",
      "futureGua": "剥"
    },
    {
      "currentGua": "艮",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "艮其身，无咎。",
      "annotation": "彖象",
      "futureGua": "旅"
    },
    {
      "currentGua": "艮",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "艮其辅，言有序，悔",
      "annotation": "彖象",
      "futureGua": "渐"
    },
    {
      "currentGua": "艮",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "敦艮，吉。",
      "annotation": "彖象",
      "futureGua": "谦"
    },
    {
      "currentGua": "渐",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "女归吉，利贞。",
      "annotation": "彖象",
      "futureGua": "渐"
    },
    {
      "currentGua": "渐",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "鸿渐于干；小子厉，",
      "annotation": "彖象",
      "futureGua": "家人"
    },
    {
      "currentGua": "渐",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "鸿渐于磐，饮食桁桁",
      "annotation": "彖象",
      "futureGua": "巽"
    },
    {
      "currentGua": "渐",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "鸿渐于陆，夫征不复",
      "annotation": "彖象",
      "futureGua": "观"
    },
    {
      "currentGua": "渐",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "鸿渐于木，或得其桷",
      "annotation": "彖象",
      "futureGua": "遁"
    },
    {
      "currentGua": "渐",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "鸿渐于陵，妇三岁不",
      "annotation": "彖象",
      "futureGua": "艮"
    },
    {
      "currentGua": "渐",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "鸿渐于陆，其羽可用",
      "annotation": "彖象",
      "futureGua": "蹇"
    },
    {
      "currentGua": "归妹",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "征凶，无攸利。",
      "annotation": "彖象",
      "futureGua": "归妹"
    },
    {
      "currentGua": "归妹",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "归妹以娣，跛能履",
      "annotation": "彖象",
      "futureGua": "解"
    },
    {
      "currentGua": "归妹",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "眇能视，利幽人之",
      "annotation": "彖象",
      "futureGua": "震"
    },
    {
      "currentGua": "归妹",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "归妹以须，反归以",
      "annotation": "彖象",
      "futureGua": "大壮"
    },
    {
      "currentGua": "归妹",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "归妹愆期，迟归有",
      "annotation": "彖象",
      "futureGua": "临"
    },
    {
      "currentGua": "归妹",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "帝乙归妹，其君之",
      "annotation": "彖象",
      "futureGua": "兑"
    },
    {
      "currentGua": "归妹",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "女承筐，无实，士",
      "annotation": "彖象",
      "futureGua": "睽"
    },
    {
      "currentGua": "丰",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，王假之；勿忧，宜日中。",
      "annotation": "彖象",
      "futureGua": "丰"
    },
    {
      "currentGua": "丰",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "遇其配主，虽旬无咎",
      "annotation": "彖象",
      "futureGua": "小过"
    },
    {
      "currentGua": "丰",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "丰其蔀，日中见斗，",
      "annotation": "彖象",
      "futureGua": "大壮"
    },
    {
      "currentGua": "丰",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "丰其沛，日中见昧，",
      "annotation": "彖象",
      "futureGua": "震"
    },
    {
      "currentGua": "丰",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "丰其蔀，日中见斗；",
      "annotation": "彖象",
      "futureGua": "明夷"
    },
    {
      "currentGua": "丰",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "来章，有庆誉，吉。",
      "annotation": "彖象",
      "futureGua": "革"
    },
    {
      "currentGua": "丰",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "车其屋，蔀其家，窥",
      "annotation": "彖象",
      "futureGua": "离"
    },
    {
      "currentGua": "旅",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "小亨，旅贞吉。",
      "annotation": "彖象",
      "futureGua": "旅"
    },
    {
      "currentGua": "旅",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "旅琐琐，斯其所取灾。",
      "annotation": "彖象",
      "futureGua": "离"
    },
    {
      "currentGua": "旅",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "旅即次，怀其资，得童仆，贞。",
      "annotation": "彖象",
      "futureGua": "鼎"
    },
    {
      "currentGua": "旅",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "旅焚其次，丧其童仆，贞厉。",
      "annotation": "彖象",
      "futureGua": "晋"
    },
    {
      "currentGua": "旅",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "旅于处，得其资斧，我心不快。",
      "annotation": "彖象",
      "futureGua": "艮"
    },
    {
      "currentGua": "旅",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "射雉，一矢亡，终以誉命。",
      "annotation": "彖象",
      "futureGua": "遁"
    },
    {
      "currentGua": "旅",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "鸟焚其巢，旅人先笑后号咷。丧牛于易，凶。",
      "annotation": "彖象",
      "futureGua": "小过"
    },
    {
      "currentGua": "巽",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "小亨。利有攸往。利见大人。",
      "annotation": "彖象",
      "futureGua": "巽"
    },
    {
      "currentGua": "巽",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "进退，利武人之贞。",
      "annotation": "彖象",
      "futureGua": "小畜"
    },
    {
      "currentGua": "巽",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "巽在床下，用史巫纷若，吉，无咎。",
      "annotation": "彖象",
      "futureGua": "渐"
    },
    {
      "currentGua": "巽",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "频巽，吝。",
      "annotation": "彖象",
      "futureGua": "涣"
    },
    {
      "currentGua": "巽",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "悔亡，田获三品。",
      "annotation": "彖象",
      "futureGua": "姤"
    },
    {
      "currentGua": "巽",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "贞吉，悔亡，无不利，无初有终。先庚三日，后庚三日，吉。",
      "annotation": "彖象",
      "futureGua": "蛊"
    },
    {
      "currentGua": "巽",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "巽在床下，丧其资斧，贞凶。",
      "annotation": "彖象",
      "futureGua": "井"
    },
    {
      "currentGua": "兑",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨。利贞。",
      "annotation": "彖象",
      "futureGua": "兑"
    },
    {
      "currentGua": "兑",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "和兑，吉。",
      "annotation": "彖象",
      "futureGua": "困"
    },
    {
      "currentGua": "兑",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "孚兑，吉，悔亡。",
      "annotation": "彖象",
      "futureGua": "随"
    },
    {
      "currentGua": "兑",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "来兑，凶。",
      "annotation": "彖象",
      "futureGua": "夬"
    },
    {
      "currentGua": "兑",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "商兑，未宁，介疾有",
      "annotation": "彖象",
      "futureGua": "节"
    },
    {
      "currentGua": "兑",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "孚于剥，有厉。",
      "annotation": "彖象",
      "futureGua": "归妹"
    },
    {
      "currentGua": "兑",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "引兑。",
      "annotation": "彖象",
      "futureGua": "履"
    },
    {
      "currentGua": "涣",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，王假有庙，利涉大川，利贞",
      "annotation": "彖象",
      "futureGua": "涣"
    },
    {
      "currentGua": "涣",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "用拯马壮，吉。",
      "annotation": "彖象",
      "futureGua": "中孚"
    },
    {
      "currentGua": "涣",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "涣奔其机，悔亡。",
      "annotation": "彖象",
      "futureGua": "观"
    },
    {
      "currentGua": "涣",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "涣其躬，无悔。",
      "annotation": "彖象",
      "futureGua": "巽"
    },
    {
      "currentGua": "涣",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "涣其群，元吉；涣有",
      "annotation": "彖象",
      "futureGua": "讼"
    },
    {
      "currentGua": "涣",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "，涣汗其大号，涣王",
      "annotation": "彖象",
      "futureGua": "蒙"
    },
    {
      "currentGua": "涣",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "涣其血，去逖出，无",
      "annotation": "彖象",
      "futureGua": "坎"
    },
    {
      "currentGua": "节",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，苦节不可，贞。",
      "annotation": "彖象",
      "futureGua": "节"
    },
    {
      "currentGua": "节",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "不出户庭，无咎。",
      "annotation": "彖象",
      "futureGua": "坎"
    },
    {
      "currentGua": "节",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "不出门庭，凶。",
      "annotation": "彖象",
      "futureGua": "屯"
    },
    {
      "currentGua": "节",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "不节若，则嗟若，无",
      "annotation": "彖象",
      "futureGua": "需"
    },
    {
      "currentGua": "节",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "安节，亨。",
      "annotation": "彖象",
      "futureGua": "兑"
    },
    {
      "currentGua": "节",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "甘节，吉，往有尚。",
      "annotation": "彖象",
      "futureGua": "临"
    },
    {
      "currentGua": "节",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "苦节；贞凶，悔亡。",
      "annotation": "彖象",
      "futureGua": "中孚"
    },
    {
      "currentGua": "中孚",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "虞吉，有它不燕。",
      "annotation": "彖象",
      "futureGua": "中孚"
    },
    {
      "currentGua": "中孚",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "鸣鹤在阴，其子和",
      "annotation": "彖象",
      "futureGua": "涣"
    },
    {
      "currentGua": "中孚",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "得敌，或鼓或罢，",
      "annotation": "彖象",
      "futureGua": "益"
    },
    {
      "currentGua": "中孚",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "月几望，马匹亡，",
      "annotation": "彖象",
      "futureGua": "小畜"
    },
    {
      "currentGua": "中孚",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "有孚挛如，无咎。",
      "annotation": "彖象",
      "futureGua": "履"
    },
    {
      "currentGua": "中孚",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "翰音登于天，贞凶",
      "annotation": "彖象",
      "futureGua": "损"
    },
    {
      "currentGua": "中孚",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "忠信为本，厄难消除",
      "annotation": "彖象",
      "futureGua": "节"
    },
    {
      "currentGua": "小过",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨，利贞；可小事，不可大",
      "annotation": "彖象",
      "futureGua": "小过"
    },
    {
      "currentGua": "小过",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "飞鸟以凶。",
      "annotation": "彖象",
      "futureGua": "丰"
    },
    {
      "currentGua": "小过",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "弗过防之，从或戕之，凶",
      "annotation": "彖象",
      "futureGua": "恒"
    },
    {
      "currentGua": "小过",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "无咎，弗过遇之",
      "annotation": "彖象",
      "futureGua": "豫"
    },
    {
      "currentGua": "小过",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "密云不雨",
      "annotation": "彖象",
      "futureGua": "谦"
    },
    {
      "currentGua": "小过",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "弗遇过之",
      "annotation": "彖象",
      "futureGua": "咸"
    },
    {
      "currentGua": "小过",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "过其祖，遇其妣",
      "annotation": "彖象",
      "futureGua": "旅"
    },
    {
      "currentGua": "既济",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨小，利贞；初吉终乱。",
      "annotation": "彖象",
      "futureGua": "既济"
    },
    {
      "currentGua": "既济",
      "yaoIndex": "1",
      "gender": "9",
      "yaoName": "初九",
      "sentence": "曳其轮，濡其尾，",
      "annotation": "彖象",
      "futureGua": "蹇"
    },
    {
      "currentGua": "既济",
      "yaoIndex": "2",
      "gender": "6",
      "yaoName": "六二",
      "sentence": "妇丧其髴，勿逐，",
      "annotation": "彖象",
      "futureGua": "需"
    },
    {
      "currentGua": "既济",
      "yaoIndex": "3",
      "gender": "9",
      "yaoName": "九三",
      "sentence": "九三，高宗伐鬼方，三年",
      "annotation": "彖象",
      "futureGua": "屯"
    },
    {
      "currentGua": "既济",
      "yaoIndex": "4",
      "gender": "6",
      "yaoName": "六四",
      "sentence": "繻有衣袽,终日戒。",
      "annotation": "彖象",
      "futureGua": "革"
    },
    {
      "currentGua": "既济",
      "yaoIndex": "5",
      "gender": "9",
      "yaoName": "九五",
      "sentence": "东邻杀牛，不如西",
      "annotation": "彖象",
      "futureGua": "明夷"
    },
    {
      "currentGua": "既济",
      "yaoIndex": "6",
      "gender": "6",
      "yaoName": "上六",
      "sentence": "濡其首，厉。",
      "annotation": "彖象",
      "futureGua": "家人"
    },
    {
      "currentGua": "未济",
      "yaoIndex": "0",
      "gender": "0",
      "yaoName": "卦辞",
      "sentence": "亨；小狐汔济，濡其尾，无",
      "annotation": "彖象",
      "futureGua": "未济"
    },
    {
      "currentGua": "未济",
      "yaoIndex": "1",
      "gender": "6",
      "yaoName": "初六",
      "sentence": "濡其尾，吝。",
      "annotation": "彖象",
      "futureGua": "睽"
    },
    {
      "currentGua": "未济",
      "yaoIndex": "2",
      "gender": "9",
      "yaoName": "九二",
      "sentence": "曳其轮，贞吉。",
      "annotation": "彖象",
      "futureGua": "晋"
    },
    {
      "currentGua": "未济",
      "yaoIndex": "3",
      "gender": "6",
      "yaoName": "六三",
      "sentence": "未济，征凶，利涉",
      "annotation": "彖象",
      "futureGua": "鼎"
    },
    {
      "currentGua": "未济",
      "yaoIndex": "4",
      "gender": "9",
      "yaoName": "九四",
      "sentence": "贞吉，悔亡；震用",
      "annotation": "彖象",
      "futureGua": "蒙"
    },
    {
      "currentGua": "未济",
      "yaoIndex": "5",
      "gender": "6",
      "yaoName": "六五",
      "sentence": "贞吉，无悔；君子",
      "annotation": "彖象",
      "futureGua": "讼"
    },
    {
      "currentGua": "未济",
      "yaoIndex": "6",
      "gender": "9",
      "yaoName": "上九",
      "sentence": "有孚于饮酒，无咎",
      "annotation": "彖象",
      "futureGua": "解"
    },
    {
      "currentGua": "乾",
      "yaoIndex": "ALL",
      "gender": "9",
      "yaoName": "用九",
      "sentence": "见群龙无首，吉。",
      "annotation": "彖象",
      "futureGua": "坤"
    },
    {
      "currentGua": "坤",
      "yaoIndex": "ALL",
      "gender": "6",
      "yaoName": "用六",
      "sentence": "利，永贞。",
      "annotation": "彖象",
      "futureGua": "乾"
    }
  ]