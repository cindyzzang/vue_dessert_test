<template>
    <div class="container test-result"
        v-if="matchedResult">
        <h2>나와 잘 어울리는 디저트는? </h2>
        <img :src="matchedResult.dessertImg" alt="resultRankTitle" width="200"/>
        <h2>{{ matchedResult.dessertName }}</h2>
        <div class="result-description">
            <ul>
                <li v-for="(description,index) in matchedResult.dessertDescription" :key="index">
                    {{description}}
                </li>
            </ul>
        </div>
        <div class="combination">
            <div class="best-cmb">
                <h3>best</h3>
                <p>{{matchedResult.bestCombination[0]}}</p>
                <p>{{matchedResult.bestCombination[1]}}</p>
            </div>
            <div class="worst-cmb">
                <h3>worst</h3>
                <p>{{matchedResult.worstCombination[0]}}</p>
                <p>{{matchedResult.worstCombination[1]}}</p>
            </div>
        </div>
        <nuxt-link to='/'><el-button type="success" round>다시하기</el-button></nuxt-link>
        <el-button color="green" @click="copyText" round>공유하기</el-button>
    </div>
</template>

<script>
export default {
    name: "_dessert",
    // async asyncData({ params }) {
    //     return {
    //         selectedResultId: params.dessert // 여기서 "dessert"는 `[dessert].vue` 파일명에서 파생된 param 이름
    //     }
    // },
    data() {
        return {
            resultList: [
                {
                    resultId: 'crepe',
                    dessertName: '어디로 튈지 모르겠는 크레페',
                    dessertImg: './images/005-crepe.png',
                    dessertDescription: ['하고 싶은 건 꼭 하는 행동파예요', '그래서 어쩌라고? 왜? 굳이?', '최고의 효율을 위해 최선을 다해요', '내가 꽂힌 사람한테 불도저처럼 직진해요'],
                    bestCombination: ['차가운 팩폭러 아이스크림', '따뜻하게 안아주는 핫초코'],
                    worstCombination: ['감성 끝판왕 츄러스', '난 네가 너무 좋아, 발랄한 푸딩']
                },
                {
                    resultId: 'strawberry_cake',
                    dessertName: '디저트계의 리더 딸기케이크',
                    dessertImg: './images/002-strawberry-cake.png',
                    dessertDescription: ['완전 갓생러 이렇게 사는 내가 멋져요', '효율적인 게 제일 좋아요', '좋아하는 것과 싫어하는 것이 확실해요', '나처럼 멋진 사람한테 끌려요'],
                    bestCombination: ['따뜻하게 안아주는 핫초코', '겉바속차 탕후루'],
                    worstCombination: ['감성 끝판왕 츄러스', '조용한 관종 젤리']
                },
                {   //ESFP
                    resultId: 'cookie',
                    dessertName: '분위기 메이커 쿠키',
                    dessertImg: './images/004-cookies.png',
                    dessertDescription: ['노는 게 제일 좋아', '미루기의 달인, 시험 공부도 벼락치기로 해요', '나 빼고 놀지 마', '나 좋다는 사람이 좋아요'],
                    bestCombination: ['따뜻하게 안아주는 핫초코', '겉바속차 탕후루'],
                    worstCombination: ['감성 끝판왕 츄러스', '난 네가 너무 좋아, 발랄한 푸딩']
                },
                {   //ESFJ
                    resultId: 'cupcake',
                    dessertImg: './images/001-cupcake.png',
                    dessertName: '최고인싸 컵케이크',
                    dessertDescription: ['다 같이 놀고 싶은 평화주의자', '거절을 잘 못하고 자책을 많이 해요', '위로의 달인', '좋아하는 사람한테 아낌없이 주는 나무'],
                    bestCombination: ['겉바속차 탕후루', '그냥 누워있고 싶은 요거트'],
                    worstCombination: ['감성 끝판왕 츄러스', '조용한 관종 젤리']
                },
                {   //ENTP
                    resultId: 'donut',
                    dessertName: '골목대장 애플파이',
                    dessertImg: './images/014-apple-pie.png',
                    dessertDescription: ['말싸움에서 지는 건 못 참지', '난 멋져 내가 최고 내 말이 다 맞음', '아이디어 뱅크', '불도저 금사빠'],
                    bestCombination: ['조용한 관종 젤리', '겉바속촉 크루아상'],
                    worstCombination: ['골목대장 애플파이', '최고인싸 컵케이크']
                },
                {   //ENTJ
                    resultId: 'apple_pie',
                    dessertName: '내꿈은 지구 정복! 도넛',
                    dessertImg: './images/009-donut.png',
                    dessertDescription: ['난 멋져 내가 최고 내 말이 다 맞음', '빨리빨리 효율적으로 완벽하게', '승부욕이 엄청 강해요', '연애도 효율적으로'],
                    bestCombination: ['감성 끝판왕 츄러스', '내 안의 우주를 배회 중, 프레첼'],
                    worstCombination: ['nothing']
                },
                {   //ENFP
                    resultId: 'pudding',
                    dessertName: '난 네가 너무 좋아, 발랄한 푸딩',
                    dessertImg: './images/003-pudding.png',
                    dessertDescription: ['새로운 사람 만나는 게 좋아', '매일매일 재미있게 놀고 싶어!', '나는 아싸라고 생각하는데 남들은 인싸라고 해요', '애정표현 많이 해주는 사람이 좋아요'],
                    bestCombination: ['따뜻하게 안아주는 핫초코', '겉바속촉 크루아상'],
                    worstCombination: ['분위기 메이커 쿠키', '어디로 튈지 모르겠는 크레페']
                },
                {   //ENFJ
                    resultId: 'macaron',
                    dessertName: '사랑둥이 마카롱',
                    dessertImg: './images/007-macarons.png',
                    dessertDescription: ['네가 좋으면 나도 좋아', '임기응변이 뛰어나요', '걔가 왜 그렇게 말했을까? 고민해요', '좋아하는 사람한테 다 맞춰주려고 해요'],
                    bestCombination: ['감성 끝판왕 츄러스', '그냥 누워있고 싶은 요거트'],
                    worstCombination: ['겉바속차 탕후루', '어디로 튈지 모르겠는 크레페']
                },
                {   //ISTP
                    resultId: 'tanghulu',
                    dessertName: '겉바속차 탕후루',
                    dessertImg: './images/016-tanghulu.png',
                    dessertDescription: ['그래서 결론이 뭔데?', '빈말은 잘 못하는 편이에요', '다른 사람의 일에 관심이 없어요', '애정표현에 약해요'],
                    bestCombination: ['사랑둥이 마카롱', '디저트계의 리더 딸기케이크'],
                    worstCombination: ['감성 끝판왕 츄러스', '난 네가 너무 좋아, 발랄한 푸딩']
                },
                {
                    //ISTJ
                    resultId: 'ice_cream',
                    dessertName: '차가운 철벽왕 아이스크림',
                    dessertImg: './images/006-ice-cream.png',
                    dessertDescription: ['내 일에 참견하지 마', '위로를 잘 못해요', '혼자 있는 게 제일 좋아요', '상대방에게 나를 좋아하는 건지 모르겠다는 소리를 자주 들어요'],
                    bestCombination: ['디저트계의 리더 딸기케이크', '어디로 튈지 모르겠는 크레페'],
                    worstCombination: ['사랑둥이 마카롱', '조용한 관종 젤리']
                },
                {   //ISFP
                    resultId: 'yogurt',
                    dessertName: '그냥 누워있고 싶은 요거트',
                    dessertImg: "./images/013-yogurt-1.png",
                    dessertDescription: ['완전 집순이 집돌이', '거절을 잘 못해요', '계획 같은 건 없어요', '상대방을 잘 믿고 의심도 별로 안 하는 편이에요'],
                    bestCombination: ['최고인싸 컵케이크', '디저트계의 리더 딸기케이크'],
                    worstCombination: ['감성 끝판왕 츄러스', '난 네가 너무 좋아, 발랄한 푸딩']
                },
                {   //ISFJ
                    resultId: 'hot_choco',
                    dessertName: '따뜻하게 안아주는 핫초코',
                    dessertImg: './images/018-cocoa.png',
                    dessertDescription: ['다정다감의 끝판왕', '어른들이 좋아해요', '게으른 완벽주의자', '인싸 중에 아싸 아싸 중에 인싸'],
                    bestCombination: ['분위기 메이커 쿠키', '어디로 튈지 모르겠는 크레페'],
                    worstCombination: ['조용한 관종 젤리', '사랑둥이 마카롱']
                },
                {   //INTP
                    resultId: 'pretzel',
                    dessertName: '내 안의 우주를 배회 중, 프레첼',
                    dessertImg: './images/017-pretzel.png',
                    dessertDescription: ['맨날 다른 생각 중', '강요하지 마', '좋아하면 밀당 안 해요', '사실 연애에 큰 관심 없어요'],
                    bestCombination: ['내 꿈은 지구 정복! 도넛', '디저트계의 리더 딸기케이크'],
                    worstCombination: ['nothing']
                },
                {   //INTJ
                    resultId: 'croissant',
                    dessertName: '겉바속촉 크루아상',
                    dessertImg: './images/019-croissant.png',
                    dessertDescription: ['무뚝뚝 츤데레', '혼자가 제일 편해요', '꽂히면 그것만 파요', '연애해도 내가 1순위'],
                    bestCombination: ['난 네가 너무 좋아, 발랄한 푸딩', '어디로 튈지 모르겠는 크레페'],
                    worstCombination: ['따뜻하게 안아주는 핫초코', '최고인싸 컵케이크']
                },
                {   //INFP
                    resultId: 'churros',
                    dessertName: '감성 끝판왕 츄러스',
                    dessertImg: './images/008-churros.png',
                    dessertDescription: ['아 새벽감성에 취한다', '눈치를 많이 봄', '아이디어 뱅크', '네가 너무 좋아서 괴로워!'],
                    bestCombination: ['사랑둥이 마카롱', '내 꿈은 지구 정복! 도넛'],
                    worstCombination: ['겉바속차 탕후루', '어디로 튈지 모르겠는 크레페']
                },
                {   //INFJ
                    resultId: 'jelly',
                    dessertName: '조용한 관종 젤리',
                    dessertImg: './images/020-jelly.png',
                    dessertDescription: ['친해질수록 솔직해져요', '속을 모르겠다는 소리를 듣는 편이에요', '걱정을 사서 하는 경우가 많아요', '사랑에 진심이에요'],
                    bestCombination: ['난 네가 너무 좋아, 발랄한 푸딩', '골목대장 애플파이'],
                    worstCombination: ['그냥 누워있고 싶은 요거트', '분위기 메이커 쿠키']
                }]
        }
    },
    computed: {
        matchedResult() {
            const route = useRoute();
            const routeResult = route.params.dessert;
            return this.resultList.find(result => result.resultId === routeResult)
        }
    },
    methods : {
        async copyText() {
            if (!process.client) {
                return;
            }
            try {
                await navigator.clipboard.writeText(window.location.href);
                alert("복사되었습니다. 원하는 곳에 붙여넣어 결과를 공유하세요!")
            } catch (err) {
                console.error('Failed to copy text: ', err);
            }
        }
    },
}
</script>

<style scoped>

</style>