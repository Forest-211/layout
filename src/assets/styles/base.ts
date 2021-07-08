// 华为开发者社区 https://bbs.huaweicloud.com/blogs/203832
import { Dimensions, StyleSheet } from 'react-native';
const deviceWidthDp = Dimensions.get('window').width;

// 默认设计稿750
const uiWidthPx = 750;

let BaseStyleSheet = {
    create(style: any) {
        let s = { ...style }; // 目前仅对以下的属性进行处理
        let list = [
            'width',
            'height',
            'marginTop',
            'marginBottom',
            'marginLeft',
            'marginRight',
            'paddingTop',
            'paddingRight',
            'paddingBottom',
            'paddingLeft',
            'top',
            'right',
            'bottom',
            'left',
            'fontSize',
            'lineHeight',
        ];
        for (const outKey in s) {
            for (const innerKey in s[outKey]) {
                if (
                    list.includes(innerKey) &&
                    typeof s[outKey][innerKey] === 'number'
                ) {
                    s[outKey][innerKey] =
                        (s[outKey][innerKey] * deviceWidthDp) / uiWidthPx;
                }
            }
        }
        return StyleSheet.create(s);
    },
};

export default BaseStyleSheet;
