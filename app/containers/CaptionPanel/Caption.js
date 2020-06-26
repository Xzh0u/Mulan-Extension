import React from 'react';

const Caption = props => (
  <div className="ml-flex ml-flex-col ml-leading-relaxed ml-font-mono ml-text-base ml-text-gray-600 ml-mx-4 ml-my-5 ml-text-left ">
    <p className="ml-flex ml-overflow-y-auto">
      {props.curTime}
      {/* {props.srcs.map((item, index) => (
        <ImageCard key={index} src={item} onClick={() => props.onClick(item[1])} />
      ))} */}
      视频当前播放进度字幕，将加粗加下划线。这里是普通字幕。鼠标选中时字幕变为蓝色。
      或者被用户右键选中标为重点词汇，则会显示黄色加粗高亮，如下句所示：
      拉格朗日乘数法是一种寻找多元函数在其变量受到一个或多个条件约束时的极值的方法。
      在例句中，第一个高亮标记为学科名词，第二个为用户标记重点词汇。
      此外，如果字幕中的一句话经常被读者点击跳转，超过一定阈值则会显示浮动的手指标识，鼠标移上去则会被加以浅粉色背景。
    </p>
  </div>
);

export default Caption;
