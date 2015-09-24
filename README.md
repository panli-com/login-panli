## PanLi 组件库 

> 是为移动设备（手机、平板等webkit内核浏览器/webview）量身定做的弹层支撑，采用Native JavaScript编写，完全独立于PC版的layer，您需要按照场景选择使用。


/** 以下是小试牛刀的调用代码（此处不展示事件绑定）*/
//信息框
Pan.open({
    content: '您好',
    time: 2
});
//提示框
Pan.open({
    title: '提示',
    content: 'Pan 移动版和PC版不能同时使用在同一页面。'
});
//询问框
Pan.open({
    title: '提示',
    content: '您确定要刷新一下本页面吗？',
    btn: ['嗯', '不要'],
    yes: function(index){
        location.reload();
        Pan.close(index);
    }
});
//页面层
var pagei = Pan.open({
    type: 1, //1代表页面层
    content: '可传入html<button class="closediy">关闭</button>',
    style: 'width:300px; height:200px; border:none;',
    success: function(oPan){
        var cla = 'getElementsByClassName';
        oPan[cla]('closediy')[0].onclick = function(){
            Pan.close(pagei)
        }
    }
});
//加载层
Pan.open({
    type: 2,
    content: ''
});