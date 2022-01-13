import './app2.css' 
import  $ from "jquery"
const $tabBar = $('#app2 .tab-bar')  //父元素
const $tabContent = $('#app2 .tab-content')
//监听点击事件(1和2)
//事件委托
$tabBar.on("click","li",e => {   
     //拿到用户点击的元素
    const $li = $(e.currentTarget)
    //——————————切换时换颜色——————————
    $li
    .addClass("selected")
    .siblings()
    .removeClass("selected")
         //拿到点击的是第几个
    const index = $li.index()
    // console.log(index)
//————————切换content内容——————
    // children是两个li标签    eq是等于第几个
    $tabContent.children()
    .eq(index).addClass('active')
    .siblings().removeClass('active')
    // siblings是兄弟节点  本人出现则兄弟隐藏
    // 不要用show不要用hide不要用css这三个api
})

// 为了一开始就有content内容  所以一开始先触发点击事件
$tabBar.children().eq(0).trigger('click')