import React from 'react';
import ReactDOM from 'react-dom/client';

import App from './App';
// 组件导入
import 'antd-mobile/dist/antd-mobile.css'
// 自定义样式放在组件库样式之后,后面样式覆盖前面样式
// 字体图标库样式文件导入
import './assets/fonts/iconfont.css'
import './index.css'




const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <App />
);
// 严格模式下导致页面url刷新但内容不刷新

