# React Native布局练习

## plan

- 定义公共样式
- 公共图标
- 背景图嵌套
- 京东首页
- 固定定位、视图层级关系

## 公共样式方案

- 每个页面都引入一次
- 封装一个公共组件，每次使用都继承这个组件
- 在index.js中使用global挂载，此方案会引起ts检测错误，且没有智能提示

## 开发过程中所遇问题

- 基类上的props和state，在子类中如何继承使用，如果在子类中声明了state和props的类型时不兼容基类所定义的数据state和props

## 待解决问题

- [x] 页面白边
- [ ] 继承基类的state和props
- [ ] 图片自适应宽度
- [ ] 懒加载
- [ ] tab栏的顶部自定义
- [ ] 字体
- [ ] 阴影（RN提供的只兼容iOS）[shadowColor, shadowOffset, shadowOpacity, shadowRadius]
- [ ] 1像素边框怪异行为

## 如何将一个基准是 750 的稿子，适配到各个不同尺寸和密度的屏幕上？

> 在设计稿中，元素的尺寸与总宽度有一个相对关系，在设备屏幕中，元素的实际宽度的 dp 数量与设备总宽度的 dp 数量有一个相对关系。我们只需要建立这两个相对关系的映射关系

在 React Native 中，有如下几个模块可以帮助我们实现:

```js
import { Dimensions, PixelRatio } from 'react-native';

const {height, width} = Dimensions.get('window'); // 获取窗口的宽、高度，以 dp 为单位。

PixelRatio.get(); // 获取设备的像素密度
PixelRatio.getFontScale(); // 获取设备的文字缩放比率
```

上面的代码中，我们通过 Dimensions.get('window') 获取实际设备的宽度，此时，我们只需要建立一个比例关系即可确定对应于这个设备，我们实际应该设置的元素尺寸的 dp 值了。

```js
const BASE_LINE = 750; // 设计稿是 750
const EL_WIDTH_DEVICE = width / BASE_LINE * EL_WIDTH_DESIGN;
```

对于文字的字号大小，设计师一般不希望文字根据尺寸做过多的缩放，因此，我们需要根据系统自身定义的文字缩放比率来设置。

```js
const TEXT_FONT_SIZE = PixelRatio.getFontScale() * FONT_SIZE_DESIGN;
```
