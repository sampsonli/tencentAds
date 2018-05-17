/**
 * Created by xiezg on 2018/4/9.
 */

import ajax from '@/utils/ajax'
import {src, platform, mapMutations, mapActions} from '@/utils/index'
import {Message} from 'element-ui'

import {getCK, setCK, removeCK} from '@/utils/auth'

const state = {
    withdrawList: null
}

const mutationsInfo = mapMutations({
    setWithDrawList (state, data) {
        state.withdrawList = data
    },
    setNationGetRed (state, data) {
        state.nationGetRed = data
    }

}, 'betblock')

const actionsInfo = mapActions({
    async getWithDrawMsg ({commit, dispatch}, pageData) {
        try {
            let InfoData = null
            if (pageData) {
                InfoData = await ajax.get(`http://10.0.1.167:6888/account/withdraw/approvelist?pageno=${pageData.pageNumber}&rangeno=${pageData.pageSize}&src=${src}`)
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/account/withdraw/approvelist`)
            }
            if (InfoData) {
                commit(mTypes.setWithDrawList, InfoData)
                Message({
                    message: '提款审核列表更新成功',
                    type: 'success',
                    duration: 3000
                })
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 5 * 1000
            })
        }
    },

    async setWithDrawReview ({commit, dispatch}, val) {
        try {
            let InfoData = await ajax.get(`http://10.0.1.167:6888/withdraw/review?ck=${getCK()}&oid=${val.oid}&result=${val.isAgree}&remark=${val.remark}`)
            if (InfoData) {
                Message({
                    message: '操作成功!',
                    type: 'success',
                    duration: 2000
                })
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 5 * 1000
            })
            return 0
        }
    },

    async getWithdrawOrder ({commit, dispatch}, pageData) {
        try {
            let InfoData = null
            if (pageData) {
                if (pageData.uid) {
                    InfoData = await ajax.get(`http://10.0.1.167:6888/withdraw/orders?pageno=${pageData.pageNumber}&pagesize=${pageData.pageSize}&src=${src}&uid=${pageData.uid}`)
                } else {
                    InfoData = await ajax.get(`http://10.0.1.167:6888/withdraw/orders?pageno=${pageData.pageNumber}&pagesize=${pageData.pageSize}&src=${src}`)
                }
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/withdraw/orders`)
            }
            if (InfoData) {
                commit(mTypes.setWithDrawList, InfoData)
                Message({
                    message: '提款审核列表更新成功',
                    type: 'success',
                    duration: 3000
                })
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 5 * 1000
            })
        }
    },

    /* 历史提款盈利 */
    async getWithdrawProfit ({commit, dispatch}, uid) {
        try {
            let InfoData = await ajax.get(`http://10.0.1.167:6888/withdraw/profit?uid=${uid}`)
            console.log(InfoData)
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 5 * 1000
            })
            return 0
        }
    },

    /* 账户明细  分情形 */
    async getAccountDetail ({commit, dispatch}, pageData) {
        try {
            let InfoData = null
            if (pageData) {
                InfoData = await ajax.get(`http://10.0.1.167:6888/account/detail?pageno=${pageData.pageNumber}&pagesize=${pageData.pageSize}&src=${src}&uid=${pageData.uid}`)
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/account/detail`)
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 5 * 1000
            })
            return 0
        }
    },

    /*  商品列表  */
    async getGoodsList ({commit, dispatch}, pageData) {
        try {
            let InfoData = null
            if (pageData) {
                InfoData = await ajax.get(`http://10.0.1.167:6888/bid/goods/list?pageno=${pageData.pageNumber}&pagesize=${pageData.pageSize}&src=${src}`)
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/bid/goods`)
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 5 * 1000
            })
            return 0
        }
    },

    /*  商品详情  */
    async getGoodsDetail ({commit, dispatch}, expectId) {
        try {
            let InfoData = null
            if (expectId) {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/detail?expectId=${expectId}`)
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/detail`)
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 3000
            })
            return 0
        }
    },

    /*  商品添加  */
    async goodsAdd ({commit, dispatch}, goodsData) {
        try {
            let InfoData = null
            if (goodsData) {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/add?ck=${getCK()}&goodsType=${goodsData.goodsType}
&goodsValue=${goodsData.goodsValue}&bidsTotal=${goodsData.bidsTotal}&bidValue=${goodsData.bidValue}
&beginTime=${goodsData.beginTime}&endTime=${goodsData.endTime}&renew=${goodsData.renew}
&robot=${goodsData.isRobot}&goodsUrl=${goodsData.goodsUrl}&goodsWeight=${goodsData.weightNum}
`)
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/add`)
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 3000
            })
            return 0
        }
    },

    /*  商品修改  */
    async goodsModify ({commit, dispatch}, goodsData) {
        try {
            let InfoData = null
            if (goodsData) {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/modify?ck=${getCK()}&goodsType=${goodsData.goodsType}
&goodsValue=${goodsData.goodsValue}&bidsTotal=${goodsData.bidsTotal}&bidValue=${goodsData.bidValue}
&beginTime=${goodsData.beginTime}&endTime=${goodsData.endTime}&renew=${goodsData.renew}
&robot=${goodsData.isRobot}&goodsUrl=${goodsData.goodsUrl}&goodsWeight=${goodsData.weightNum}&expectId=${goodsData.expectId}
`)
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/modify`)
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 3000
            })
            return 0
        }
    },

    /*  商品 派发审核 */
    async setResultReview ({commit, dispatch}, data) {
        try {
            let InfoData = null
            if (data) {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/result/review?ck=${getCK()}&expectId=${data.expectId}&result=${data.isAgree}`)
            } else {
                InfoData = await ajax.get(`http://10.0.1.167:6888/goods/result/review`)
            }
            return InfoData
        } catch (e) {
            Message({
                message: e.message,
                type: 'error',
                duration: 3000
            })
            return 0
        }
    }

}, 'betblock')

export const mTypes = mutationsInfo.mTypes
const mutations = mutationsInfo.mutations
export const aTypes = actionsInfo.aTypes
const actions = actionsInfo.actions
export default {state, mutations, actions}
