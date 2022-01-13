import $ from'jquery'
import './app4.css'

const $circle = $('#app4 .circle')

//鼠标移入移出分别加上删掉active
$circle
.on('mouseenter',()=>{
    $circle.addClass('active')
})
.on('mouseleave',()=>{
    $circle.removeClass('active')
})