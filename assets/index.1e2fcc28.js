import{a as L,o as t,e as l,h as c,w as h,f as e,t as n,F as v,r as V,i as k,E as T,j as w,c as d,k as b}from"./entry.f29e19c7.js";/* empty css                  */const m=""+globalThis.__publicAssetsURL("images/sweets.png"),p={data(){return{mbtiTestTitle:"나와 잘 어울리는 디저트는?",currentLevel:0,answer1Value:null,answer2Value:null,answer3Value:null,answer4Value:null,answer5Value:null,answer6Value:null,answer7Value:null,answer8Value:null,MBTITestValue:null,answerList:[{title:"드디어 주말! 오랜만의 휴일을 당신은 어떻게 보낼 건가요?",answers:[{answer:"집이 최고! 침대에서 뒹굴뒹굴",extraversionValue:1},{answer:"혼자서 외출해도 재밌다, 혼놀의 달인!",extraversionValue:8},{answer:"이번 달 주말 내내 꽉 차있는 약속, 주말인데 당연히 놀아야지!",extraversionValue:10},{answer:"밖순이/밖돌이 친구와 약속, 오랜만이야!",extraversionValue:4}]},{title:"머리를 감으려고 샴푸를 짰는데 마지막 펌프인 것 같다, 당신의 반응은?",answers:[{answer:"샴푸 사와야겠다, 잊으면 큰일남!",judgingValue:1},{answer:"이미 다음에 쓸 샴푸를 사뒀다. 새로 뜯어야지",judgingValue:10}]},{title:"친구와의 약속에 나갈 준비를 하던 중에 갑자기 온 약속 취소 연락에 당신의 반응은?",answers:[{answer:"오히려 좋아, 바로 집순이/집돌이 모드 발동.",extraversionValue:1},{answer:"어쩔 수 없지, 혼자라도 나가서 논다.",extraversionValue:10}]},{title:"친구를 만나는 길, 약속장소까지 가는 방법은?",answers:[{answer:"출발하면서 검색해 본다",judgingValue:1},{answer:"이미 가는 방법을 숙지해뒀다",judgingValue:10}]},{title:"카페에 앉아서 창밖을 바라보다 멍을 때립니다. 이때, 당신이 한 생각은?",answers:[{answer:'"무슨 생각을 해?" 아무생각 없었다.',sensingValue:10},{answer:'"카페에 갑자기 외계인이 떨어지면..." 엄청난 상상을 한다.',sensingValue:1}]},{title:"친구의 고민을 들은 당신의 반응은?",answers:[{answer:"위로의 말을 해주는 편이다.",feelingValue:10},{answer:"해결 방법을 제시하는 편이다.",feelingValue:1}]},{title:"만약에... 토맛 토마토 vs 토마토맛 토 중에 뭐 선택할래? ",answers:[{answer:"왜 선택해야 하는지 모르겠다. ",sensingValue:10},{answer:"진지하게 고민한다.",sensingValue:1}]},{title:"집에 돌아온 그 날, 일기에 적는 내용은?",answers:[{answer:"있었던 일을 객관적으로 쓴다. ",feelingValue:1},{answer:"하루 중에 느꼈던 감정 위주로 작성한다",feelingValue:10}]}],resultMapping:{ESTP:"crepe",ESTJ:"strawberry_cake",ESFP:"cookie",ESFJ:"cupcake",ENTJ:"donut",ENTP:"apple_pie",ENFP:"pudding",ENFJ:"macaron",ISTP:"tanghulu",ISTJ:"ice_cream",ISFP:"yogurt",ISFJ:"hot_choco",INFP:"churros",INFJ:"jelly",INTP:"pretzel",INTJ:"croissant"}}},methods:{gameStart(){this.currentLevel=1},nextLevel(a){this.currentLevel===1?this.answer1Value=a:this.currentLevel===2?this.answer2Value=a:this.currentLevel===3?this.answer3Value=a:this.currentLevel===4?this.answer4Value=a:this.currentLevel===5?this.answer5Value=a:this.currentLevel===6?this.answer6Value=a:this.currentLevel===7?this.answer7Value=a:this.currentLevel===8&&(this.answer8Value=a,this.calculateResult(),this.goToResult()),this.currentLevel=this.currentLevel+1},calculateResult(){this.extraversionRankValue=this.answerList[0].answers[this.answer1Value].extraversionValue,this.judgingRankValue=this.answerList[1].answers[this.answer2Value].judgingValue,this.extraversionRankValue+=this.answerList[2].answers[this.answer3Value].extraversionValue,this.judgingRankValue+=this.answerList[3].answers[this.answer4Value].judgingValue,this.sensingRankValue=this.answerList[4].answers[this.answer5Value].sensingValue,this.feelingRankValue=this.answerList[5].answers[this.answer6Value].feelingValue,this.sensingRankValue+=this.answerList[6].answers[this.answer7Value].sensingValue,this.feelingRankValue+=this.answerList[7].answers[this.answer8Value].feelingValue,this.extraversionRankValue>=11?this.MBTITestValue="E":this.MBTITestValue="I",this.sensingRankValue>=11?this.MBTITestValue+="S":this.MBTITestValue+="N",this.feelingRankValue>=11?this.MBTITestValue+="F":this.MBTITestValue+="T",this.judgingRankValue>=11?this.MBTITestValue+="J":this.MBTITestValue+="P"},goToResult(){const a=this.resultMapping[this.MBTITestValue];a&&this.$router.push({path:`/${a}`})}}},x={class:"container"},C={key:0,class:"test-intro"},R=e("h1",null,"나와 잘 어울리는 디저트는?",-1),B=e("img",{src:m,width:"300",alt:"startImg"},null,-1),y={key:1,class:"question-list"},E={class:"demo-progress"},I={class:"answer-list"},N={key:2,class:"question-list"},M={class:"demo-progress"},P={class:"answer-list"},S={key:3,class:"question-list"},j={class:"demo-progress"},F={class:"answer-list"},J={key:4,class:"question-list"},q={class:"demo-progress"},z={class:"answer-list"},D={key:5,class:"question-list"},U={class:"demo-progress"},G={class:"answer-list"},H={key:6,class:"question-list"},K={class:"demo-progress"},O={class:"answer-list"},Q={key:7,class:"question-list"},W={class:"demo-progress"},X={class:"answer-list"},Y={key:8,class:"question-list"},Z={class:"demo-progress"},A={class:"answer-list"};function $(a,f,ee,se,s,o){const u=T,_=b;return t(),l("div",x,[s.currentLevel===0?(t(),l("div",C,[R,B,c(u,{color:"#f36fbb",onClick:f[0]||(f[0]=r=>o.gameStart()),round:""},{default:h(()=>[w("시작하기")]),_:1})])):s.currentLevel===1?(t(),l("div",y,[e("h2",null,n(s.mbtiTestTitle),1),e("div",E,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8})]),e("h3",null,n(s.answerList[0].title),1),e("div",I,[(t(!0),l(v,null,V(s.answerList[0].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):s.currentLevel===2?(t(),l("div",N,[e("h2",null,n(s.mbtiTestTitle),1),e("div",M,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8*2})]),e("h3",null,n(s.answerList[1].title),1),e("div",P,[(t(!0),l(v,null,V(s.answerList[1].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):s.currentLevel===3?(t(),l("div",S,[e("h2",null,n(s.mbtiTestTitle),1),e("div",j,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8*3})]),e("h3",null,n(s.answerList[2].title),1),e("div",F,[(t(!0),l(v,null,V(s.answerList[2].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):s.currentLevel===4?(t(),l("div",J,[e("h2",null,n(s.mbtiTestTitle),1),e("div",q,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8*4})]),e("h3",null,n(s.answerList[3].title),1),e("div",z,[(t(!0),l(v,null,V(s.answerList[3].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):s.currentLevel===5?(t(),l("div",D,[e("h2",null,n(s.mbtiTestTitle),1),e("div",U,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8*5})]),e("h3",null,n(s.answerList[4].title),1),e("div",G,[(t(!0),l(v,null,V(s.answerList[4].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):s.currentLevel===6?(t(),l("div",H,[e("h2",null,n(s.mbtiTestTitle),1),e("div",K,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8*6})]),e("h3",null,n(s.answerList[5].title),1),e("div",O,[(t(!0),l(v,null,V(s.answerList[5].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):s.currentLevel===7?(t(),l("div",Q,[e("h2",null,n(s.mbtiTestTitle),1),e("div",W,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8*7})]),e("h3",null,n(s.answerList[6].title),1),e("div",X,[(t(!0),l(v,null,V(s.answerList[6].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):s.currentLevel===8?(t(),l("div",Y,[e("h2",null,n(s.mbtiTestTitle),1),e("div",Z,[c(_,{color:"#f36fbb","show-text":!1,"stroke-width":26,percentage:100/8*8})]),e("h3",null,n(s.answerList[7].title),1),e("div",A,[(t(!0),l(v,null,V(s.answerList[7].answers,(r,i)=>(t(),d(u,{color:"#eeb1d4",onClick:g=>o.nextLevel(i),round:""},{default:h(()=>[w(n(r.answer),1)]),_:2},1032,["onClick"]))),256))])])):k("",!0)])}const le=L(p,[["render",$]]);export{le as default};