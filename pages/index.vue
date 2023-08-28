<template>
    <div>
        <div v-if="currentLevel === 0">
            <h1>나와 잘 어울리는 디저트는?</h1>
            <el-button type="info" @click="gameStart()" round>시작하기</el-button>
        </div>
        <div v-else-if="currentLevel === 1">
            <div class="el-progress"></div>
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q1.{{ answerList[0].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[0].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 2">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q2.{{ answerList[1].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[1].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 3">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q3.{{ answerList[2].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[2].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 4">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q4.{{ answerList[3].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[3].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 5">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q5.{{ answerList[4].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[4].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 6">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q6.{{ answerList[5].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[5].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 7">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q7.{{ answerList[6].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[6].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 8">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q8.{{ answerList[7].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[7].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 9">
            <h2>{{ mbtiTestTitle }}</h2>
            <h3>Q9.{{ answerList[8].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[8].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 10">
            <h2>{{ mbtiTestTitle }} </h2>
            <h3>{{ resultRankTitle }}</h3>
            <h4> {{  }}</h4>
            <div>{{ resultRankContents }}</div>
            <div><el-button type="success" @click="gameReset()" round>다시하기</el-button>
        </div>
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
            answer9Value: null,
            answer10Value: null,
            MBTITestValue: null,
            resultRankTitle: null,
            resultRankContents: null,
            resultList: [
                {
                    rankName: 'ESTP',
                    dessertName: '',
                    rankDescription: ''
                },
                {
                    rankName: 'ESTJ',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ESFP
                    rankName: 'ESFP',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ESFJ
                    rankName: 'ESFJ',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ENTP
                    rankName: 'ENTP',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ENTJ
                    rankName: 'ENTJ',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ENFP
                    rankName: 'ENFP',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ENFJ
                    rankName: '상냥도 레벨 최상',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ISTP
                    rankName: 'ISTP',
                    dessertName: '',
                    rankDescription: ''
                },
                {
                    //ISTJ
                    rankName: 'ISTJ',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ISFP
                    rankName: 'ISFP',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //ISFJ
                    rankName: 'ISFJ',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //INTP
                    rankName: 'INTP',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //INTJ
                    rankName: 'INTJ',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //INFP
                    rankName: 'INFP',
                    dessertName: '',
                    rankDescription: ''
                },
                {   //INFJ
                    rankName: 'INFJ',
                    dessertName: '',
                    rankDescription: ''
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
                        { answer: '오히려 좋아, 바로 집순이/집돌이 모드 발동', extraversionValue : 1 },
                        { answer: '어쩔 수 없지, 혼자라도 나가서 논다', extraversionValue : 10 },
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
                        { answer: '무슨 생각을 해? 아무생각 없었다', sensingValue: 10 },
                        { answer: '카페에 갑자기 외계인이 떨어지면... 이렇게 해서 영웅이 될거야', sensingValue: 1},
                    ]
                },
                {
                    title: '친구의 고민을 들은 당신의 반응은?',
                    answers: [
                        { answer: '어떡해 너무 힘들겠다 힘내자 ㅜㅜ', feelingValue: 8 },
                        { answer: '힘들어하는 친구의 모습에 눈물이 그렁그렁', feelingValue: 10 },
                        { answer: '힘들겠다... 근데 그건 이렇게 하는 게 낫지 않아?', feelingValue: 4 },
                        { answer: '찾아봤는데, 이렇게 하면 해결된대', feelingValue: 1 },
                    ]
                },
                {
                    title: '만약에... 토맛 토마토 vs 토마토맛 토 중에 뭐 선택할래? ',
                    answers: [
                        { answer: '그걸 왜 골라야 하는데?', sensingValue: 10 },
                        { answer: '그래도 토맛 토마토가 낫지 않나? 그래도 토마토잖아 아닌가?', sensingValue: 1 },
                    ]
                },
                {
                    title: '집에 돌아온 그 날, 일기에 적는 내용은?',
                    answers: [
                        { answer: '오늘 친구와 만나서 카페를 갔다. 커피가 맛있었다.', feelingValue: 1 },
                        { answer: '오랜만에 친구랑 만났는데 커피도 맛있어서 너무 행복했다!', feelingValue: 10 },
                    ]
                },
                {
                    title: '집에 돌아온 그 날, 일기에 적는 내용은?',
                    answers: [
                        { answer: '오늘 친구와 만나서 카페를 갔다. 커피가 맛있었다.', feelingValue: 1 },
                        { answer: '오랜만에 친구랑 만났는데 커피도 맛있어서 너무 행복했다!', feelingValue: 10 },
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
            } else if (this.currentLevel === 9) {
                this.answer9Value = selectedAnswerIndex
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
            this.feelingRankValue += this.answerList[8].answers[this.answer9Value].feelingValue

            this.extraversionRankValue >= 11 ? this.MBTITestValue = "E" : this.MBTITestValue = "I"
            this.sensingRankValue >= 11 ? this.MBTITestValue += "S" : this.MBTITestValue += "N"
            this.feelingRankValue >= 20 ? this.MBTITestValue += "F" : this.MBTITestValue += "T"
            this.judgingRankValue >= 11 ? this.MBTITestValue += "J" : this.MBTITestValue += "P"
            console.log(this.MBTITestValue)
            for (let i = 0; i < this.resultList.length; i++) {
                if (this.resultList[i].rankName == this.MBTITestValue) {
                    this.resultRankTitle = this.resultList[i].dessertName
                    this.resultRankContents = this.resultList[i].rankDescription
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
            this.answer9Value = null
            this.answer10Value = null
            this.MBTITestValue = null
            this.resultRankTitle = null
            this.resultRankContents = null
        }
    }
}
</script>
