import $ from 'jquery'
import './app3.css'

const $square = $('#app3 .square')

$square.on('click',()=>{
    $square.toggleClass('active')
    // toggleClass ：有就删掉 没有就加上
})