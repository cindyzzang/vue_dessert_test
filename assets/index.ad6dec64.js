import{a as T,o as n,b as l,e as h,w,f as t,t as s,F as V,r as v,h as _,E as d,i as c,c as m,j as p}from"./entry.66f142c6.js";const f={data(){return{mbtiTestTitle:"나와 잘 어울리는 디저트는?",currentLevel:0,answer1Value:null,answer2Value:null,answer3Value:null,answer4Value:null,answer5Value:null,answer6Value:null,answer7Value:null,answer8Value:null,MBTITestValue:null,resultRankTitle:null,resultRankContents:null,resultList:[{rankName:"ESTP",dessertName:"",rankDescription:""},{rankName:"ESTJ",dessertName:"",rankDescription:""},{rankName:"ESFP",dessertName:"",rankDescription:""},{rankName:"ESFJ",dessertName:"",rankDescription:""},{rankName:"ENTP",dessertName:"",rankDescription:""},{rankName:"ENTJ",dessertName:"",rankDescription:""},{rankName:"ENFP",dessertName:"",rankDescription:""},{rankName:"ENFJ",dessertName:"",rankDescription:""},{rankName:"ISTP",dessertName:"",rankDescription:""},{rankName:"ISTJ",dessertName:"",rankDescription:""},{rankName:"ISFP",dessertName:"",rankDescription:""},{rankName:"ISFJ",dessertName:"",rankDescription:""},{rankName:"INTP",dessertName:"",rankDescription:""},{rankName:"INTJ",dessertName:"",rankDescription:""},{rankName:"INFP",dessertName:"",rankDescription:""},{rankName:"INFJ",dessertName:"",rankDescription:""}],answerList:[{title:"드디어 주말! 오랜만의 휴일을 당신은 어떻게 보낼 건가요?",answers:[{answer:"집이 최고! 침대에서 뒹굴뒹굴",extraversionValue:1},{answer:"혼자서 외출해도 재밌다, 혼놀의 달인!",extraversionValue:8},{answer:"이번 달 주말 내내 꽉 차있는 약속, 주말인데 당연히 놀아야지!",extraversionValue:10},{answer:"밖순이/밖돌이 친구와 약속, 오랜만이야!",extraversionValue:4}]},{title:"머리를 감으려고 샴푸를 짰는데 마지막 펌프인 것 같다, 당신의 반응은?",answers:[{answer:"샴푸 사와야겠다, 잊으면 큰일남!",judgingValue:1},{answer:"이미 다음에 쓸 샴푸를 사뒀다. 새로 뜯어야지",judgingValue:10}]},{title:"친구와의 약속에 나갈 준비를 하던 중에 갑자기 온 약속 취소 연락에 당신의 반응은?",answers:[{answer:"오히려 좋아, 바로 집순이/집돌이 모드 발동",extraversionValue:1},{answer:"어쩔 수 없지, 혼자라도 나가서 논다",extraversionValue:10}]},{title:"친구를 만나는 길, 약속장소까지 가는 방법은?",answers:[{answer:"출발하면서 검색해 본다",judgingValue:1},{answer:"이미 가는 방법을 숙지해뒀다",judgingValue:10}]},{title:"카페에 앉아서 창밖을 바라보다 멍을 때립니다. 이때, 당신이 한 생각은?",answers:[{answer:"무슨 생각을 해? 아무생각 없었다",sensingValue:10},{answer:"카페에 갑자기 외계인이 떨어지면... 이렇게 해서 영웅이 될거야",sensingValue:1}]},{title:"친구의 고민을 들은 당신의 반응은?",answers:[{answer:"어떡해 너무 힘들겠다 힘내자 ㅜㅜ",feelingValue:8},{answer:"힘들어하는 친구의 모습에 눈물이 그렁그렁",feelingValue:10},{answer:"힘들겠다... 근데 그건 이렇게 하는 게 낫지 않아?",feelingValue:4},{answer:"찾아봤는데, 이렇게 하면 해결된대",feelingValue:1}]},{title:"만약에... 토맛 토마토 vs 토마토맛 토 중에 뭐 선택할래? ",answers:[{answer:"그걸 왜 골라야 하는데?",sensingValue:10},{answer:"그래도 토맛 토마토가 낫지 않나? 그래도 토마토잖아 아닌가?",sensingValue:1}]},{title:"집에 돌아온 그 날, 일기에 적는 내용은?",answers:[{answer:"오늘 친구와 만나서 카페를 갔다. 커피가 맛있었다.",feelingValue:1},{answer:"오랜만에 친구랑 만났는데 커피도 맛있어서 너무 행복했다!",feelingValue:10}]}]}},methods:{gameStart(){this.currentLevel=1},nextLevel(i){this.currentLevel===1?this.answer1Value=i:this.currentLevel===2?this.answer2Value=i:this.currentLevel===3?this.answer3Value=i:this.currentLevel===4?this.answer4Value=i:this.currentLevel===5?this.answer5Value=i:this.currentLevel===6?this.answer6Value=i:this.currentLevel===7?this.answer7Value=i:this.currentLevel===8&&(this.answer8Value=i,this.calculateResult()),this.currentLevel=this.currentLevel+1},calculateResult(){this.extraversionRankValue=this.answerList[0].answers[this.answer1Value].extraversionValue,this.judgingRankValue=this.answerList[1].answers[this.answer2Value].judgingValue,this.extraversionRankValue+=this.answerList[2].answers[this.answer3Value].extraversionValue,this.judgingRankValue+=this.answerList[3].answers[this.answer4Value].judgingValue,this.sensingRankValue=this.answerList[4].answers[this.answer5Value].sensingValue,this.feelingRankValue=this.answerList[5].answers[this.answer6Value].feelingValue,this.sensingRankValue+=this.answerList[6].answers[this.answer7Value].sensingValue,this.feelingRankValue+=this.answerList[7].answers[this.answer8Value].feelingValue,this.extraversionRankValue>=11?this.MBTITestValue="E":this.MBTITestValue="I",this.sensingRankValue>=11?this.MBTITestValue+="S":this.MBTITestValue+="N",this.feelingRankValue>=11?this.MBTITestValue+="F":this.MBTITestValue+="T",this.judgingRankValue>=11?this.MBTITestValue+="J":this.MBTITestValue+="P",console.log(this.MBTITestValue);for(let i=0;i<this.resultList.length;i++)this.resultList[i].rankName==this.MBTITestValue&&(this.resultRankTitle=this.resultList[i].dessertName,this.resultRankContents=this.resultList[i].rankDescription)},gameReset(){this.currentLevel=0,this.answer1Value=null,this.answer2Value=null,this.answer3Value=null,this.answer4Value=null,this.answer5Value=null,this.answer6Value=null,this.answer7Value=null,this.answer8Value=null,this.MBTITestValue=null,this.resultRankTitle=null,this.resultRankContents=null}}},N={key:0},y=t("h1",null,"나와 잘 어울리는 디저트는?",-1),C={key:1},R={class:"demo-progress"},x={key:2},B={class:"demo-progress"},D={key:3},I={class:"demo-progress"},b={key:4},E={class:"demo-progress"},M={key:5},S={class:"demo-progress"},F={key:6},P={class:"demo-progress"},j={key:7},J={class:"demo-progress"},Q={key:8},A={class:"demo-progress"},q={key:9};function z(i,L,G,H,e,u){const o=d,k=p;return n(),l("div",null,[e.currentLevel===0?(n(),l("div",N,[y,h(o,{type:"info",onClick:L[0]||(L[0]=a=>u.gameStart()),round:""},{default:w(()=>[c("시작하기")]),_:1})])):e.currentLevel===1?(n(),l("div",C,[t("div",R,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*1})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q1."+s(e.answerList[0].title),1),(n(!0),l(V,null,v(e.answerList[0].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===2?(n(),l("div",x,[t("div",B,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*2})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q2."+s(e.answerList[1].title),1),(n(!0),l(V,null,v(e.answerList[1].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===3?(n(),l("div",D,[t("div",I,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*3})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q3."+s(e.answerList[2].title),1),(n(!0),l(V,null,v(e.answerList[2].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===4?(n(),l("div",b,[t("div",E,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*4})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q4."+s(e.answerList[3].title),1),(n(!0),l(V,null,v(e.answerList[3].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===5?(n(),l("div",M,[t("div",S,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*5})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q5."+s(e.answerList[4].title),1),(n(!0),l(V,null,v(e.answerList[4].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===6?(n(),l("div",F,[t("div",P,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*6})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q6."+s(e.answerList[5].title),1),(n(!0),l(V,null,v(e.answerList[5].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===7?(n(),l("div",j,[t("div",J,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*7})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q7."+s(e.answerList[6].title),1),(n(!0),l(V,null,v(e.answerList[6].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===8?(n(),l("div",Q,[t("div",A,[h(k,{"show-text":!1,"stroke-width":26,percentage:100/8*8})]),t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,"Q8."+s(e.answerList[7].title),1),(n(!0),l(V,null,v(e.answerList[7].answers,(a,r)=>(n(),m(o,{type:"primary",onClick:g=>u.nextLevel(r),round:""},{default:w(()=>[c("A"+s(r+1)+"."+s(a.answer),1)]),_:2},1032,["onClick"]))),256))])):e.currentLevel===9?(n(),l("div",q,[t("h2",null,s(e.mbtiTestTitle),1),t("h3",null,s(e.resultRankTitle),1),t("h4",null,s(),1),t("div",null,s(e.resultRankContents),1),t("div",null,[h(o,{type:"success",onClick:L[1]||(L[1]=a=>u.gameReset()),round:""},{default:w(()=>[c("다시하기")]),_:1})])])):_("",!0)])}const O=T(f,[["render",z]]);export{O as default};
