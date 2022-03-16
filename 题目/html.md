# html

（1）HTML5 有什么新特性
    1、语义标签 
        header footer nav section article aside detailes summary dialog
    2、增强型表单
    3、视频和音频 
        audio source
    4、Canvas绘图
    5、拖放API 
        dragstart drag dragend
    6、Web Storage
        localStorage - 没有时间限制的数据存储
        sessionStorage - 针对一个 session 的数据存储, 当用户关闭浏览器窗口后，数据会被删除。
    7、WebSocket
    8、地理定位 
        Geolocation
    9、Svg
    10、Web Worker
        Web Worker 的作用，就是为 JavaScript 创造多线程环境，允许主线程创建 Worker 线程，将一些任务分配给后者运行

（2）常用的meta
    content     定义与http-equiv或name属性相关的元信息
    http-equiv  把content属性关联到HTTP头部。
    name        把 content 属性关联到一个名称。
    viewport    能优化移动浏览器的显示。
    email
    telephone

（3）script 标签的 async 和defer
    defer   
        脚本在执行时不会影响页面的构造，脚本会被延迟到整个页面都解析完毕后再运行
    async
        不让页面等待两个脚本下载和执行，从而异步加载页面其他内容。

（4）css 加载是否会阻塞DOM 渲染
    
    css加载不会阻塞DOM树解析（异步加载时DOM照常构建）
    但会阻塞render树渲染（渲染时需等css加载完毕，因为render树需要css信息）

（5）src 和 href 的区别
    
    href标识超文本引用，用在link和a等元素上，href是引用和页面关联，是在当前元素和引用资源之间建立联系
    
    src表示引用资源，表示替换当前元素，用在img，script，iframe上，src是页面内容不可缺少的一部分。

