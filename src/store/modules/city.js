const city = {   // moduleA
    namespaced: true,

    state: {
        nowCity: {
            id: "410100",
            name: "郑州"
        },
        historyCity: [
            {
                id: "410100",
                name: "郑州"
            }
        ],
        location:'',
    },
    mutations: {
        selectCity(state, val) {
            state.nowCity.id = val.id;
            state.nowCity.name = val.name;
        },
        addHistoryCity(state, val) {
            let flag = state.historyCity.some(item => item.id == val.id);
            if (!flag) {
                state.historyCity.push({ ...val });
            }
        },
        // locationCity(state,cityArr) {
        //     let that = state;
        //     function myFun(result) {
        //         console.log(result);
        //         that.location = result.name;
        //     }
        //     var myCity = new BMap.LocalCity();
        //     myCity.get(myFun);
        //     state.nowCity.name = state.location;
        //     let cityId = cityArr.find(item=>item.name == state.location);
        //     state.nowCity.id = cityId;
        // }
    },
    actions: {

    },
    getters: {
    }
}
export default city