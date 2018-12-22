import Vue from 'vue'
import Vuex from 'vuex'
// import wx from 'wx'
import tabBarData from '../data'

Vue.use(Vuex)

const storageData = wx.getStorageSync('selectedFoods') || []
let paymentShoppingCart = wx.getStorageSync('paymentShoppingCart') || []

const store = new Vuex.Store({
    state: {
        ...tabBarData,
        selectedFoods: storageData,
        remarks: '口味、偏好等要求',
        tablesId: 0,
        VipCardInfo: {},
        paymentShoppingCart: paymentShoppingCart || [],
        remarks: '',
        login: '', // 是否登录状态
        openid: '' //
    },
    mutations: {
        selectedFoods(state, data) {
            state.selectedFoods = data
        },
        remarks(state, data) {
            state.remarks = data
        },
        paymentShoppingCart(state, data) {
            state.paymentShoppingCart = data
        },
        tabBarChange(state, data) {
            state.tabBarData = data.newTabbar
        }
    },
    actions: {
        setSelectedFoods({ commit, state }, data) {
            let oldData = state.selectedFoods
            let status = oldData.some(item => item.id == data.id && item.skucode == data.skucode)
            if (!status) {
                oldData.push(data)
            } else {
                var index
                let copyData = JSON.parse(JSON.stringify(oldData))

                if (data.isMultiSpec) {
                    index = oldData.findIndex(
                        item => item.id == data.id && item.skucode == data.skucode
                    )
                    // 多规格更新
                    copyData[index].number = data.number
                    copyData[index].props = data.props
                    copyData[index].skucode = data.skucode
                    copyData[index].price = data.price
                    copyData[index].selectedProps = data.selectedProps
                    // 数量为0不返回
                    copyData = copyData.filter(item => item.number)
                    oldData = copyData
                } else {
                    index = oldData.findIndex(item => item.id == data.id)
                    // 单规格更新
                    copyData[index].number = data.number
                    copyData = copyData.filter(item => item.number)
                    oldData = copyData
                }
            }

            commit('selectedFoods', oldData)
        },
        removeSelectedFoods({ commit }) {
            commit('selectedFoods', [])
        },
        setRemarks({ commit }, data) {
            commit('remarks', data)
        },
        setCurrentBar({ commit, state }, data) {
            var newTabbar = []
            for(let item in state){
                if(tabBarData[item].type == data.type ){
                    newTabbar = tabBarData[item]
                    console.log(newTabbar)
                    break 
                }   
            }
            if (newTabbar) {
                newTabbar.options.items.forEach((item, key) => {
                    item.currentSelected = data.index == key
                })
                newTabbar = JSON.parse(JSON.stringify(newTabbar))
                commit('tabBarChange', {
                    type: data.type,
                    newTabbar
                })
            }
        }
    }
})

export default store
