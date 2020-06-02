import React from 'react';
import Pack from '../../components/Pack';

const Caption = () => (
  <div className="ml-flex ml-font-mono ml-text-lg ml-text-gray-600 ml-m-4 ml-text-left ">
    <Pack />
    <p className="ml-flex">
      视频当前播放进度字幕，将加粗加下划线。这里是普通字幕。鼠标选中时字幕变为蓝色。
      如果文章中出现了学科名词，或者被用户右键选中标为重点词汇，则会显示黄色加粗高亮，如下句所示：
      拉格朗日乘数法是一种寻找多元函数在其变量受到一个或多个条件约束时的极值的方法。
      在例句中，第一个高亮标记为学科名词，第二个为用户标记重点词汇。
      此外，如果字幕中的一句话经常被读者点击跳转，超过一定阈值则会显示浮动的手指标识，鼠标移上去则会被加以浅粉色背景。
    </p>
  </div>
);

export default Caption;
