import './app1.css'
import $ from'jquery'
//找到按钮
const $button1 = $('#add1')
const $button2 = $('#minus1')
const $button3 = $('#mul2')
const $button4 = $('#divide2')
const $number = $('#number')
//每次进来都获取n
const n = localStorage.getItem('n')
// n的值是n 没有n就初始成100
$number.text(n || 100)
//绑定事件
$button1.on('click',()=>{
    //变成数字
    let n = parseInt($number.text())
    n += 1
    // 存到localStorage  防止刷新后变回原样
    localStorage.setItem('n',n)
    //把number再放回去
    $number.text(n)
})
$button2.on('click',()=>{
    let n = parseInt($number.text())
    n -= 1
    localStorage.setItem('n',n)
    $number.text(n)   
})

$button3.on('click',()=>{
    let n = parseInt($number.text())
    n *= 2
    localStorage.setItem('n',n)
    $number.text(n)   
})
$button4.on('click',()=>{
    let n = parseInt($number.text())
    n /= 2
    localStorage.setItem('n',n)
    $number.text(n)   
})
