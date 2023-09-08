<template>
    <div class="container">
        <div class="test-intro" v-if="currentLevel === 0">
            <h1>나와 잘 어울리는 디저트는?</h1>
            <img src="/images/sweets.png" width="300"/>
            <el-button color="#f36fbb" @click="gameStart()" round>시작하기</el-button>
        </div>
        <div class="question-list" v-else-if="currentLevel === 1">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8" />
            </div>
            <h3>Q1. {{ answerList[0].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[0].answers"
                           @click="nextLevel(index)" round> {{ item.answer }}</el-button>
            </div>

        </div>
        <div class="question-list" v-else-if="currentLevel === 2">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8*2" />
            </div>
            <h3>Q2. {{ answerList[1].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[1].answers"
                           @click="nextLevel(index)" round>{{ item.answer }}</el-button>
            </div>
        </div>
        <div class="question-list" v-else-if="currentLevel === 3">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8*3" />
            </div>
            <h3>Q3. {{ answerList[2].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[2].answers"
                           @click="nextLevel(index)" round>{{ item.answer }}</el-button>
            </div>
        </div>
        <div class="question-list" v-else-if="currentLevel === 4">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8*4" />
            </div>
            <h3>Q4. {{ answerList[3].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[3].answers"
                           @click="nextLevel(index)" round>{{ item.answer }}</el-button>
            </div>

        </div>
        <div class="question-list" v-else-if="currentLevel === 5">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8*5" />
            </div>
            <h3>Q5. {{ answerList[4].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[4].answers"
                           @click="nextLevel(index)" round>{{ item.answer }}</el-button>
            </div>

        </div>
        <div class="question-list" v-else-if="currentLevel === 6">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8*6" />
            </div>
            <h3>Q6. {{ answerList[5].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[5].answers"
                           @click="nextLevel(index)" round>{{ item.answer }}</el-button>
            </div>

        </div>
        <div class="question-list" v-else-if="currentLevel === 7">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8*7" />
            </div>
            <h3>Q7. {{ answerList[6].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[6].answers"
                           @click="nextLevel(index)" round>{{ item.answer }}</el-button>
            </div>
        </div>
        <div class="question-list" v-else-if="currentLevel === 8">
            <h2>{{ mbtiTestTitle }}</h2>
            <div class="demo-progress">
                <el-progress color="#f36fbb" :show-text="false" :stroke-width="26" :percentage="100/8*8" />
            </div>
            <h3>Q8. {{ answerList[7].title }}</h3>
            <div class="answer-list">
                <el-button color="#eeb1d4" v-for="(item, index) in answerList[7].answers"
                           @click="nextLevel(index)" round>{{ item.answer }}</el-button>
            </div>

        </div>
        <div class="test-result" v-else-if="currentLevel === 9">
            <h2>{{ mbtiTestTitle }} </h2>
            <img :src="resultImg" alt="resultRankTitle" width="200"/>
            <h2>{{ resultRankTitle }}</h2>
            <div class="result-description">
                <ul>
                    <li v-for="(description,index) in resultRankContents " :key="index">
                        {{description}}
                    </li>
                </ul>
            </div>
            <div class="combination">
                <div class="best-cmb">
                    <h3>best</h3>
                    <p>{{resultBestCombination[0]}}</p>
                    <p>{{resultBestCombination[1]}}</p>
                </div>
                <div class="worst-cmb">
                    <h3>worst</h3>
                    <p>{{resultWorstCombination[0]}}</p>
                    <p>{{resultWorstCombination[1]}}</p>
                </div>
            </div>
                <el-button type="success" @click="gameReset()" round>다시하기</el-button>
    </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            mbtiTestTitle: '나와 잘 어울리는 디저트는?',
            currentLevel: 0, // 0이면 시작 안한거. 1,2,3,4,5...9면 각각 단계 진행중이고 10으로 되면 결과 보여주기
            answer1Value: null,
            answer2Value: null,
            answer3Value: null,
            answer4Value: null,
            answer5Value: null,
            answer6Value: null,
            answer7Value: null,
            answer8Value: null,
            MBTITestValue: null,
            resultImg:null,
            resultRankTitle: null,
            resultRankContents: null,
            resultBestCombination: null,
            resultWorstCombination: null,
            resultList: [
                {
                    mbtiResult: 'ESTP',
                    dessertName: '어디로 튈지 모르겠는 크레페',
                    dessertImg: '/images/005-crepe.png',
                    dessertDescription: ['하고 싶은 건 꼭 하는 행동파예요','그래서 어쩌라고? 왜? 굳이?','최고의 효율을 위해 최선을 다해요','내가 꽂힌 사람한테 불도저처럼 직진해요'],
                    bestCombination: ['차가운 팩폭러 아이스크림','따뜻하게 안아주는 핫초코'],
                    worstCombination: ['감성 끝판왕 츄러스','난 네가 너무 좋아, 발랄한 푸딩']
                },
                {
                    mbtiResult: 'ESTJ',
                    dessertName: '디저트계의 리더 딸기케이크',
                    dessertImg: '/images/002-strawberry-cake.png',
                    dessertDescription: ['완전 갓생러 이렇게 사는 내가 멋져요','효율적인 게 제일 좋아요','좋아하는 것과 싫어하는 것이 확실해요','나처럼 멋진 사람한테 끌려요'],
                    bestCombination: ['따뜻하게 안아주는 핫초코','겉바속차 탕후루'],
                    worstCombination: ['감성 끝판왕 츄러스','조용한 관종 젤리']
                },
                {   //ESFP
                    mbtiResult: 'ESFP',
                    dessertName: '분위기 메이커 쿠키',
                    dessertImg: '/images/004-cookies.png',
                    dessertDescription: ['노는 게 제일 좋아','미루기의 달인, 시험 공부도 벼락치기로 해요','나 빼고 놀지 마','나 좋다는 사람이 좋아요'],
                    bestCombination: ['따뜻하게 안아주는 핫초코','겉바속차 탕후루'],
                    worstCombination: ['감성 끝판왕 츄러스','난 네가 너무 좋아, 발랄한 푸딩']
                },
                {   //ESFJ
                    mbtiResult: 'ESFJ',
                    dessertImg: '/images/001-cupcake.png',
                    dessertName: '최고인싸 컵케이크',
                    dessertDescription: ['다 같이 놀고 싶은 평화주의자','거절을 잘 못하고 자책을 많이 해요','위로의 달인','좋아하는 사람한테 아낌없이 주는 나무'],
                    bestCombination: ['겉바속차 탕후루','그냥 누워있고 싶은 요거트'],
                    worstCombination: ['감성 끝판왕 츄러스','조용한 관종 젤리']
                },
                {   //ENTP
                    mbtiResult: 'ENTP',
                    dessertName: '골목대장 애플파이',
                    dessertImg: '/images/014-apple-pie.png',
                    dessertDescription: ['말싸움에서 지는 건 못 참지','난 멋져 내가 최고 내 말이 다 맞음','아이디어 뱅크','불도저 금사빠'],
                    bestCombination: ['조용한 관종 젤리','겉바속촉 크루아상'],
                    worstCombination: ['골목대장 애플파이','최고인싸 컵케이크']
                },
                {   //ENTJ
                    mbtiResult: 'ENTJ',
                    dessertName: '내꿈은 지구 정복! 도넛',
                    dessertImg: '/images/009-donut.png',
                    dessertDescription: ['난 멋져 내가 최고 내 말이 다 맞음','빨리빨리 효율적으로 완벽하게','승부욕이 엄청 강해요','연애도 효율적으로'],
                    bestCombination: ['감성 끝판왕 츄러스','내 안의 우주를 배회 중, 프레첼'],
                    worstCombination: ['nothing']
                },
                {   //ENFP
                    mbtiResult: 'ENFP',
                    dessertName: '난 네가 너무 좋아, 발랄한 푸딩',
                    dessertImg: '/images/003-pudding.png',
                    dessertDescription: ['새로운 사람 만나는 게 좋아','매일매일 재미있게 놀고 싶어!','나는 아싸라고 생각하는데 남들은 인싸라고 해요','애정표현 많이 해주는 사람이 좋아요'],
                    bestCombination: ['따뜻하게 안아주는 핫초코','겉바속촉 크루아상'],
                    worstCombination: ['분위기 메이커 쿠키','어디로 튈지 모르겠는 크레페']
                },
                {   //ENFJ
                    mbtiResult: 'ENFJ',
                    dessertName: '사랑둥이 마카롱',
                    dessertImg: '/images/007-macarons.png',
                    dessertDescription: ['네가 좋으면 나도 좋아','임기응변이 뛰어나요','걔가 왜 그렇게 말했을까?','좋아하는 사람한테 다 맞춰주려고 해요'],
                    bestCombination: ['감성 끝판왕 츄러스','그냥 누워있고 싶은 요거트'],
                    worstCombination: ['겉바속차 탕후루','어디로 튈지 모르겠는 크레페']
                },
                {   //ISTP
                    mbtiResult: 'ISTP',
                    dessertName: '겉바속차 탕후루',
                    dessertImg: '/images/016-tanghulu.png',
                    dessertDescription: ['그래서 결론이 뭔데?','빈말은 잘 못하는 편이에요','다른 사람의 일에 관심이 없어요','애정표현에 약해요'],
                    bestCombination: ['사랑둥이 마카롱','디저트계의 리더 딸기케이크'],
                    worstCombination: ['감성 끝판왕 츄러스','난 네가 너무 좋아, 발랄한 푸딩']
                },
                {
                    //ISTJ
                    mbtiResult: 'ISTJ',
                    dessertName: '차가운 철벽왕 아이스크림',
                    dessertImg: '/images/006-ice-cream.png',
                    dessertDescription: ['내 일에 참견하지 마','위로를 잘 못해요','혼자 있는 게 제일 좋아요','상대방에게 나를 좋아하는 건지 모르겠다는 소리를 자주 들어요'],
                    bestCombination: ['디저트계의 리더 딸기케이크','어디로 튈지 모르겠는 크레페'],
                    worstCombination: ['사랑둥이 마카롱','조용한 관종 젤리']
                },
                {   //ISFP
                    mbtiResult: 'ISFP',
                    dessertName: '그냥 누워있고 싶은 요거트',
                    dessertImg: "/images/013-yogurt-1.png",
                    dessertDescription: ['완전 집순이 집돌이','거절을 잘 못해요','계획 같은 건 없어요','상대방을 잘 믿고 의심도 별로 안 하는 편이에요'],
                    bestCombination: ['최고인싸 컵케이크','디저트계의 리더 딸기케이크'],
                    worstCombination: ['감성 끝판왕 츄러스','난 네가 너무 좋아, 발랄한 푸딩']
                },
                {   //ISFJ
                    mbtiResult: 'ISFJ',
                    dessertName: '따뜻하게 안아주는 핫초코',
                    dessertImg: '/images/018-cocoa.png',
                    dessertDescription: ['다정다감의 끝판왕','어른들이 좋아해요','게으른 완벽주의자','인싸 중에 아싸 아싸 중에 인싸'],
                    bestCombination: ['분위기 메이커 쿠키','어디로 튈지 모르겠는 크레페'],
                    worstCombination: ['조용한 관종 젤리','사랑둥이 마카롱']
                },
                {   //INTP
                    mbtiResult: 'INTP',
                    dessertName: '내 안의 우주를 배회 중, 프레첼',
                    dessertImg: '/images/017-pretzel.png',
                    dessertDescription: ['맨날 다른 생각 중','강요하지 마','좋아하면 밀당 안 해요','사실 연애에 큰 관심 없어요'],
                    bestCombination: ['내 꿈은 지구 정복! 도넛','디저트계의 리더 딸기케이크'],
                    worstCombination: ['nothing']
                },
                {   //INTJ
                    mbtiResult: 'INTJ',
                    dessertName: '겉바속촉 크루아상',
                    dessertImg: '/images/019-croissant.png',
                    dessertDescription: ['무뚝뚝 츤데레','혼자가 제일 편해요','꽂히면 그것만 파요','연애해도 내가 1순위'],
                    bestCombination: ['난 네가 너무 좋아, 발랄한 푸딩','어디로 튈지 모르겠는 크레페'],
                    worstCombination: ['따뜻하게 안아주는 핫초코','최고인싸 컵케이크']
                },
                {   //INFP
                    mbtiResult: 'INFP',
                    dessertName: '감성 끝판왕 츄러스',
                    dessertImg: '/images/008-churros.png',
                    dessertDescription: ['아 새벽감성에 취한다','눈치를 많이 봄','아이디어 뱅크','네가 너무 좋아서 괴로워!'],
                    bestCombination: ['사랑둥이 마카롱','내 꿈은 지구 정복! 도넛'],
                    worstCombination: ['겉바속차 탕후루','어디로 튈지 모르겠는 크레페']
                },
                {   //INFJ
                    mbtiResult: 'INFJ',
                    dessertName: '조용한 관종 젤리',
                    dessertImg: '/images/020-jelly.png',
                    dessertDescription: ['친해질수록 솔직해져요','속을 모르겠다는 소리를 듣는 편이에요','걱정을 사서 하는 경우가 많아요','사랑에 진심이에요'],
                    bestCombination: ['난 네가 너무 좋아, 발랄한 푸딩','골목대장 애플파이'],
                    worstCombination: ['그냥 누워있고 싶은 요거트','분위기 메이커 쿠키']
                },
            ],
            answerList: [
                {
                    title: '드디어 주말! 오랜만의 휴일을 당신은 어떻게 보낼 건가요?',
                    answers: [
                        { answer: '집이 최고! 침대에서 뒹굴뒹굴', extraversionValue: 1 },
                        { answer: '혼자서 외출해도 재밌다, 혼놀의 달인!', extraversionValue: 8 },
                        { answer: '이번 달 주말 내내 꽉 차있는 약속, 주말인데 당연히 놀아야지!', extraversionValue: 10 },
                        { answer: '밖순이/밖돌이 친구와 약속, 오랜만이야!', extraversionValue: 4 },
                    ]
                },
                {
                    title: '머리를 감으려고 샴푸를 짰는데 마지막 펌프인 것 같다, 당신의 반응은?',
                    answers: [
                        { answer: '샴푸 사와야겠다, 잊으면 큰일남!', judgingValue: 1 },
                        { answer: '이미 다음에 쓸 샴푸를 사뒀다. 새로 뜯어야지', judgingValue: 10 },
                    ]
                },
                {
                    title: '친구와의 약속에 나갈 준비를 하던 중에 갑자기 온 약속 취소 연락에 당신의 반응은?',
                    answers: [
                        { answer: '오히려 좋아, 바로 집순이/집돌이 모드 발동.', extraversionValue : 1 },
                        { answer: '어쩔 수 없지, 혼자라도 나가서 논다.', extraversionValue : 10 },
                    ]
                },
                {
                    title: '친구를 만나는 길, 약속장소까지 가는 방법은?',
                    answers: [
                        { answer: '출발하면서 검색해 본다', judgingValue : 1 },
                        { answer: '이미 가는 방법을 숙지해뒀다', judgingValue : 10 },
                    ]
                },
                {
                    title: '카페에 앉아서 창밖을 바라보다 멍을 때립니다. 이때, 당신이 한 생각은?',
                    answers: [
                        { answer: '"무슨 생각을 해?" 아무생각 없었다.', sensingValue: 10 },
                        { answer: '"카페에 갑자기 외계인이 떨어지면... 이렇게 해서 영웅이 될거야" 엄청난 상상을 한다.', sensingValue: 1},
                    ]
                },
                {
                    title: '친구의 고민을 들은 당신의 반응은?',
                    answers: [
                        { answer: '위로의 말을 해주는 편이다.', feelingValue: 10 },
                        { answer: '해결 방법을 제시하는 편이다.', feelingValue: 1 },
                    ]
                },
                {
                    title: '만약에... 토맛 토마토 vs 토마토맛 토 중에 뭐 선택할래? ',
                    answers: [
                        { answer: '"그걸 왜 골라야 하는데?" 왜 선택해야 하는지 모르겠다. ', sensingValue: 10 },
                        { answer: '"그래도 토맛 토마토가 낫지 않나? 그래도 토마토잖아 아닌가?" 진지하게 고민한다.', sensingValue: 1 },
                    ]
                },
                {
                    title: '집에 돌아온 그 날, 일기에 적는 내용은?',
                    answers: [
                        { answer: '"오늘 친구와 만나서 카페를 갔다. 커피가 맛있었다." 있었던 일을 객관적으로 쓴다. ', feelingValue: 1 },
                        { answer: '"오랜만에 친구랑 만났는데 커피도 맛있어서 너무 행복했다!" 하루 중에 느꼈던 감정 위주로 작성한다', feelingValue: 10 },
                    ]
                },
            ]
        }
    },
    methods: {
        gameStart() {
            this.currentLevel = 1
        },
        nextLevel(selectedAnswerIndex) {
            if (this.currentLevel === 1) {
                this.answer1Value = selectedAnswerIndex
            } else if (this.currentLevel === 2) {
                this.answer2Value = selectedAnswerIndex
            } else if (this.currentLevel === 3) {
                this.answer3Value = selectedAnswerIndex
            } else if (this.currentLevel === 4) {
                this.answer4Value = selectedAnswerIndex
            } else if (this.currentLevel === 5) {
                this.answer5Value = selectedAnswerIndex
            } else if (this.currentLevel === 6) {
                this.answer6Value = selectedAnswerIndex
            } else if (this.currentLevel === 7) {
                this.answer7Value = selectedAnswerIndex
            } else if (this.currentLevel === 8) {
                this.answer8Value = selectedAnswerIndex
                this.calculateResult()
            }
            this.currentLevel = this.currentLevel + 1
        },
        calculateResult() {
            this.extraversionRankValue = this.answerList[0].answers[this.answer1Value].extraversionValue
            this.judgingRankValue = this.answerList[1].answers[this.answer2Value].judgingValue
            this.extraversionRankValue += this.answerList[2].answers[this.answer3Value].extraversionValue
            this.judgingRankValue += this.answerList[3].answers[this.answer4Value].judgingValue
            this.sensingRankValue = this.answerList[4].answers[this.answer5Value].sensingValue
            this.feelingRankValue = this.answerList[5].answers[this.answer6Value].feelingValue
            this.sensingRankValue += this.answerList[6].answers[this.answer7Value].sensingValue
            this.feelingRankValue += this.answerList[7].answers[this.answer8Value].feelingValue

            this.extraversionRankValue >= 11 ? this.MBTITestValue = "E" : this.MBTITestValue = "I"
            this.sensingRankValue >= 11 ? this.MBTITestValue += "S" : this.MBTITestValue += "N"
            this.feelingRankValue >= 11 ? this.MBTITestValue += "F" : this.MBTITestValue += "T"
            this.judgingRankValue >= 11 ? this.MBTITestValue += "J" : this.MBTITestValue += "P"
            for (let i = 0; i < this.resultList.length; i++) {
                if (this.resultList[i].mbtiResult === this.MBTITestValue) {
                    this.resultImg = this.resultList[i].dessertImg
                    this.resultRankTitle = this.resultList[i].dessertName
                    this.resultRankContents = this.resultList[i].dessertDescription
                    this.resultBestCombination = this.resultList[i].bestCombination
                    this.resultWorstCombination = this.resultList[i].worstCombination

                }
            }

        },
        gameReset() {
            this.currentLevel = 0
            this.answer1Value = null
            this.answer2Value = null
            this.answer3Value = null
            this.answer4Value = null
            this.answer5Value = null
            this.answer6Value = null
            this.answer7Value = null
            this.answer8Value = null
            this.MBTITestValue = null
            this.resultRankTitle = null
            this.resultRankContents = null
        }
    }
}
</script>
