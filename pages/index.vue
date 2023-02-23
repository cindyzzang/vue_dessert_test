<template>
    <div>
        <div v-if="currentLevel === 0">
            <h1>나의 상냥도는?</h1>
            <el-button type="Info" @click="gameStart()" round>시작하기</el-button>
        </div>
        <div v-else-if="currentLevel === 1">
            <h2>{{ mindTestTitle }}</h2>
            <h3>Q1.{{ answerList[0].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[0].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 2">
            <h2>{{ mindTestTitle }}</h2>
            <h3>Q2.{{ answerList[1].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[1].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 3">
            <h2>{{ mindTestTitle }}</h2>
            <h3>Q3.{{ answerList[2].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[2].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 4">
            <h2>{{ mindTestTitle }}</h2>
            <h3>Q4.{{ answerList[3].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[3].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 5">
            <h2>{{ mindTestTitle }}</h2>
            <h3>Q5.{{ answerList[4].title }}</h3>
            <el-button type="primary" v-for="(item, index) in answerList[4].answers"
                       @click="nextLevel(index)" round>A{{ index + 1 }}.{{ item.answer }}</el-button>
        </div>
        <div v-else-if="currentLevel === 6">
            <h2>{{ mindTestTitle }} 결과는??</h2>
            <h3>{{ resultRankTitle }}</h3>
            <h4>나의 점수 : {{ resultRankValue }}</h4>
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
            mindTestTitle: '나의 상냥도는?',
            currentLevel: 0, // 0이면 시작 안한거. 1,2,3,4,5면 각각 단계 진행중이고 6으로 되면 결과 보여주기
            answer1Value: null,
            answer2Value: null,
            answer3Value: null,
            answer4Value: null,
            answer5Value: null,
            resultRankValue: 0,
            resultRankTitle: null,
            resultRankContents: null,
            resultList: [
                {
                    rankMinValue: 0,
                    rankMaxValue: 15,
                    rankName: '상냥도 레벨 최하',
                    rankDescription: '당신은 매우 불친절 하시군요'
                },
                {
                    rankMinValue: 16,
                    rankMaxValue: 30,
                    rankName: '상냥도 레벨 중',
                    rankDescription: '당신은 평범한 사람이군요'
                },
                {
                    rankMinValue: 31,
                    rankMaxValue: 40,
                    rankName: '상냥도 레벨 상',
                    rankDescription: '당신은 주변에서 꽤 친절하다고 소문이 나 있는 사람입니다.'
                },
                {
                    rankMinValue: 41,
                    rankMaxValue: 50,
                    rankName: '상냥도 레벨 최상',
                    rankDescription: '당신은 그냥 천사 그 자체입니다.'
                },
            ],
            answerList: [
                {
                    title: '길을 가다가 낯선 사람이 말을 걸어옵니다 당신은 어떻게 합니까?',
                    answers: [
                        { answer: '쌩깐다', rankValue: 3 },
                        { answer: '화낸다', rankValue: 2 },
                        { answer: '발로찬다', rankValue: 0 },
                        { answer: '왜 말을 걸었는지 친절하게 물어본다', rankValue: 10 },
                    ]
                },
                {
                    title: '바다거북이 육지로 올라와 있습니다. 어떻게 할까요?',
                    answers: [
                        { answer: '가던길 간다', rankValue: 3 },
                        { answer: '초콜렛을 준다', rankValue: 2 },
                        { answer: '등딱지를 밟는다', rankValue: 0 },
                        { answer: '물가로 옮겨준다', rankValue: 10 },
                    ]
                },
                {
                    title: '길을 가다가 낯선 사람이 말을 걸어옵니다 당신은 어떻게 합니까?',
                    answers: [
                        { answer: '쌩깐다', rankValue: 3 },
                        { answer: '화낸다', rankValue: 2 },
                        { answer: '발로찬다', rankValue: 0 },
                        { answer: '왜 말을 걸었는지 친절하게 물어본다', rankValue: 10 },
                    ]
                },
                {
                    title: '길을 가다가 낯선 사람이 말을 걸어옵니다 당신은 어떻게 합니까?',
                    answers: [
                        { answer: '쌩깐다', rankValue: 3 },
                        { answer: '화낸다', rankValue: 2 },
                        { answer: '발로찬다', rankValue: 0 },
                        { answer: '왜 말을 걸었는지 친절하게 물어본다', rankValue: 10 },
                    ]
                },
                {
                    title: '길을 가다가 낯선 사람이 말을 걸어옵니다 당신은 어떻게 합니까?',
                    answers: [
                        { answer: '쌩깐다', rankValue: 3 },
                        { answer: '화낸다', rankValue: 2 },
                        { answer: '발로찬다', rankValue: 0 },
                        { answer: '왜 말을 걸었는지 친절하게 물어본다', rankValue: 10 },
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
                this.calculateResult()
            }

            this.currentLevel = this.currentLevel + 1
        },
        calculateResult() {
            this.resultRankValue = this.answerList[0].answers[this.answer1Value].rankValue
            this.resultRankValue += this.answerList[1].answers[this.answer2Value].rankValue
            this.resultRankValue += this.answerList[2].answers[this.answer3Value].rankValue
            this.resultRankValue += this.answerList[3].answers[this.answer4Value].rankValue
            this.resultRankValue += this.answerList[4].answers[this.answer5Value].rankValue

            for (let i = 0; i < this.resultList.length; i++) {
                if (this.resultList[i].rankMinValue <= this.resultRankValue && this.resultList[i].rankMaxValue >= this.resultRankValue) {
                    this.resultRankTitle = this.resultList[i].rankName
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
            this.resultRankValue = 0
            this.resultRankTitle = null
            this.resultRankContents = null
        }
    }
}
</script>
