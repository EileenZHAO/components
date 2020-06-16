// 赵兴英 - 2020-06-16：快捷键设置
let keyboardData = [
    {
        code: 112,
        value: '010112',
        label: 'F1'
    },
    {
        code: 113,
        value: '010113',
        label: 'F2'
    },
    {
        code: 114,
        value: '010114',
        label: 'F3'
    },
    {
        code: 115,
        value: '010115',
        label: 'F4'
    },
    {
        code: 116,
        value: '010116',
        label: 'F5'
    },
    {
        code: 117,
        value: '010117',
        label: 'F6'
    },
    {
        code: 118,
        value: '010118',
        label: 'F7'
    },
    {
        code: 120,
        value: '010120',
        label: 'F9'
    },
    {
        code: 13,
        value: '01013',
        label: 'enter'
    },
    {
        code: 39,
        value: '01039',
        label: '→'
    }
]
let combKeysData = [] // 组合键
let singleKeysData = [] // 单键
let ctrlKeyCombDate = [] // ctrl组合键
let altKeyCombData = [] // alt组合键
let shiftKeyCombData = [] // shift组合键
export const keydownEvent = (e) => {
    if (e.ctrlKey) { // ctrl +
        mapKeys(ctrlKeyCombDate, e)
    } else if (e.shiftKey) { // shift + 
        mapKeys(shiftKeyCombData, e)
    } else if (e.altKey) { // alt +
        mapKeys(altKeyCombData, e)
    } else { // 单键
        mapKeys(singleKeysData, e)
    }
}

export const mapKeys = (data, e) => {
    data.forEach(i => {
        if (e.keyCode === keydownCode(i.code)) {
            if (i.parameter) {
                i.callback(i.parameter)
            } else {
                i.callback()
            }
            e.preventDefault()
        }
    })
}


export const keydownCode = (value) => {
    let d = keyboardData.filter(i => i.value === String(value))
    if (d && d.length) {
        return d[0].code
    } else {
        return ''
    }
}
export default {
    registerKeyEvent: function (event) {
        combKeysData = Array.isArray(event.combKeys) ? event.combKeys : [] // 组合键
        singleKeysData = Array.isArray(event.singleKeysData) ? event.singleKeys : [] // 单键
        ctrlKeyCombDate = combKeysData.filter(i => { // ctrl + 
            return i.fnKey === 'ctrl'
        })
        shiftKeyCombData = combKeysData.filter(i => { // shift + 
            return i.fnKey === 'shift'
        })
        altKeyCombData = combKeysData.filter(i => { // alt + 
            return i.fnKey === 'alt'
        })
        document.addEventListener('keydown', keydownEvent)
    },
    removeKeyEvent: () => {
        console.log('销毁')
        combKeysData = []
        singleKeysData = []
        ctrlKeyCombDate = []
        shiftKeyCombData = []
        altKeyCombData = []
        document.removeEventListener('keydown', keydownEvent)
    },
} 