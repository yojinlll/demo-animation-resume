

// 步骤一 把 code 写到 #code 和 style 标签中 
function writeCode(prefix,code,fn){
    let domCode = document.querySelector('#code')
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domCode.innerHTML = Prism.highlight(prefix + code.substring(0,n), Prism.languages.css)
        styleTag.innerHTML = prefix + code.substring(0,n)
        domCode.scrollTop = 10000
        if(n > code.length){
            window.clearInterval(id)
            fn.call()
        }
    },0)
}


var  result = 
`
/*
面试官你好，我是XXX
我想展示一个炫酷点的简历来介绍自己
*/

*{
    transition:all 1s;
}
html{
    background:rgb(222,222,222);
    font-size:16px;
}
#code{
    border:1px solid red;
    padding:16px;
}

/* 我需要一点代码高亮 */

.token.selector{
    color:#690;
}
.token.property{
    color:#905;
}
.token.function{
    color:#DD4A68;
}

/* 加点3D效果 */

#code{
    transform:rotate(360deg);
}

/* hahah，好吧，不玩了不玩了，我来介绍一下自己吧 */
/* 需要一张白纸 */

#code{
    position:fixed;
    left:0;
    width:50%;
    height:100%;
}
#paper{
    position:fixed;
    right:0;
    width:50%;
    height:100%;
    background:black;
    display:flex;
    justify-content:center;
    align-items:center;
    padding:16px;
}
#paper > .content{
    background:white;
    height:100%;
    width:100%;
}

`
function writeMarkdown(markdown,fn){
    let domPaper = document.querySelector('#paper> .content')
    let n = 0
    let id = setInterval(()=>{
        n += 1
        domPaper.innerHTML = markdown.substring(0,n)
        domPaper.scrollTop = domPaper.scrollHeight
        if(n > markdown.length){
            window.clearInterval(id)
            fn.call()
        }
    },0)
}



var result2 = 
`
/*
hello,world!
*/
`

var md = 
`
    #自我介绍

    我叫xxx
    1995年6月出生
    自学前端半年
    希望应聘前端开发岗位

    #技能

    熟悉 JavaScript CSS

    #项目介绍

    1.轮播
    2.简历
    3.画板

    #联系方式

    QQ：xxxxxxxxx
    Email：xxxxxxxxxx
    手机：xxxxxxxxxxx

`

// 优化
writeCode('',result,()=>{
    createPaper(()=>{
        writeCode(result,result2,()=>{
            writeMarkdown(md)
        })
    })
})

// 步骤二：生成 paper 区域（html）；
function createPaper(fn){
    var paper = document.createElement('div')
    paper.id = 'paper'
    var content = document.createElement('pre')
    content.className = 'content'
    paper.appendChild(content)
    document.body.appendChild(paper)
    fn.call()
}

