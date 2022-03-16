# js
（1）Watch 、 Computer 、 Methods 有什么区别

    1.watch和computed都是以Vue的依赖追踪机制为基础，methods里面是用来定义函数的，很显然，它需要手动调用才能执行，而不像watch和computed那样，“自动执行”预先定义的函数。

    2、computed 主要用于同步对数据的处理
	   watch 主要用于事件的派发，可异步

    3、computed拥有缓存属性，当依赖的数据发生变化时，关联的数据才会变化，适用于计算或者格式化数据的场景

    4、watch监听数据，有关联但是没有依赖，只要某个数据发生变化，就可以处理一些数据或者派发事件并同步/异步执行。

（2）去重

    // 1: "Set"
    [...new Set(array)];
    ​
    // 2: "Filter"
    array.filter((item, index) => array.indexOf(item) === index);
    ​
    // 3: "Reduce"
    array.reduce((unique, item) => 
        unique.includes(item) ? unique : [...unique, item], []);

（3）var let const 区别（变量提升，暂时性死区）

    1、函数提升优先于变量提升，函数提升会把整个函数挪到作用域顶部，变量提升只会把声明挪到作用域顶部

    2、var 存在提升，我们能在声明之前使用。 let 、 const 因为暂时性死区的原因，不能在声明前使用

    3、var 在全局作用域下声明变量会导致变量挂载在 window 上，其他两者不会

    4、let 和 const 声明的变量不能再次声明

    5、const定义的是常量

（4）null undefined区别

    null是空指针object，没有指向堆的指针

    变量被声明了，但没有赋值时，就等于undefined。
    调用函数时，应该提供的参数没有提供，该参数等于undefined。
    对象没有赋值的属性，该属性的值为undefined。
    函数没有返回值时，默认返回undefined。

（5）数据类型

    基本数据类型：undefined boolean number string symbol
    引用数据类型：array object function

（6）闭包的理解

    闭包是指有权访问另一个函数作用域中的变量的函数

    优点：
        函数内部的变量在函数执行后，仍然存活在内存中在函数外部可以操作到函数内部的数据

    缺点：
        非常耗内存，没有被回收，可能会导致内存溢出

    处理方法：
        赋值为null

（7）call apply bind
    相同：改变函数运行时的this指向
    不同：
        bind：
            返回改变了this指向的一个函数
        call:
            会执行函数，参数一个个写
        apply：
            会执行函数，参数可以传数组

（8）eveneloop

（9）promise
    1、主要用于异步计算
    2、可以将异步操作队列化，按照期望的顺序执行，返回符合预期的结果
    3、可以在对象之间传递和操作promise，帮助我们处理队列
    4、解决回调地狱

（10）深拷贝、浅拷贝
    1、浅拷贝和深拷贝都只针对于引用类型

    2、浅拷贝：只复制指向某个对象的指针，不复制对象本身，新旧对象还是共享同一块内存

    3、深拷贝：会另外创造一个一模一样的对象，新对象跟原对象不共享内存，修改新对象不会改到原对象

    4、区别：浅拷贝只复制对象的第一层属性。深拷贝可以 对 对象的属性进行 递归复制。

（11）tcp 协议

    三次握手确保客户端和服务端的收发能力正常

（12）v-model原理
    v-model只是语法糖
    v-model获取值是监听输入框的input事件

（13）双向绑定

    vue数据双向绑定是通过数据劫持结合发布者-订阅者模式的方式来实现的
    Object.defineProperty实现数据劫持
    1.实现一个监听器Observer，用来劫持并监听所有属性，如果有变动的，就通知订阅者。

    2.实现一个订阅者Watcher，可以收到属性的变化通知并执行相应的函数，从而更新视图。

    3.实现一个解析器Compile，可以扫描和解析每个节点的相关指令，并根据初始化模板数据以及初始化相应的订阅器。

（14）v-for 的key值作用

    key的作用主要是为了高效的更新虚拟DOM

    使用key来给每个节点做一个唯一标识，Diff算法就可以正确的识别此节点，找到正确的位置区插入新的节点。

    如果没有设置key，会采用“就地更新”的策略，插入位置之后都需要重新渲染

（15）data为什么是一个函数

    数据以函数返回值形式定义，这样每复用一次组件，就会返回一份新的data，类似于给每个组件实例创建一个私有的数据空间，让各个组件实例维护各自的数据

（16）vue3和vue2区别

    1.vue3中template支持多个根标签
    2.main.js createApp 与 new Vue
    3.setup（取代data methods） ref
    4.v-model在组件中的运用
    5.新组件 Teleport

（17）虚拟DOM

    虚拟DOM就是为了解决浏览器性能问题而被设计出来的
    用JS对象模拟DOM节点的好处是，页面的更新可以先全部反映在JS对象(虚拟DOM)上，操作内存中的JS对象的速度显然要更快，等更新完成后，再将最终的JS对象映射成真实的DOM，交由浏览器去绘制。

（18）路由懒加载

    1、() => import()

    2、resolve => require([], resolve)

    3、webpack配置

（19）vuex

    Vuex 是一个专为 Vue.js 应用程序开发的状态管理模式.
    它采用集中式存储管理应用的所有组件的状态，并以相应的规则保证状态以一种可预测的方式发生变化

    场景：
        多个视图依赖于同一状态。
        来自不同视图的行为需要变更同一状态。

    state       单一状态树
    Getter      可以认为是 store 的计算属性
    Mutation    操作
    Action      Action 提交的是 mutation，而不是直接变更状态。
                Action 可以包含任意异步操作。
    Module      模块

（20）webpack常见配置

    entry       
        资源入口文件，所有的资源最后会打包成一个 JS 文件。
    output      
        打包之后存放的文件路径。path 为相对路径，filename 为打包后的文件名。
    module       
        rules 配置编译规则，test 正则匹配
    plugins
        插件
            html-webpack-plugin

（21）get和post

    get:
        会缓存
        浏览器及服务器不同，IE最大限制2083个字符
        请求参数querystring

    post:
        不会缓存
        理论上讲，post是没有大小限制的
        请求参数放在body

    安全性:
        相对来说，post比get安全

（22）OPTIONS请求
    用于获取目的资源所支持的通信选项
    获取当前URL所支持的方法

    满足1+2或者1+3，出现：
        1、跨域请求，非跨域请求不会出现options请求
        2、自定义请求头
        3、请求头中的content-type是application/x-www-form-urlencoded，multipart/form-data，text/plain之外的格式

（23）原型与原型链

    原型：
        函数对象的一个属性，它定义了函数构造出的对象的公共祖先。
        通过该函数构造出的对象，可以继承该原型的属性和方法。

    原型链：
        当试图访问一个对象的属性时，它不仅仅在该对象上搜寻，还会搜寻该对象的原型，以及该对象的原型的原型，依次层层向上搜索，直到找到一个名字匹配的属性或到达原型链的末尾。

（24）new的过程发生了什么

    1.创建一个空对象，将它的引用赋给this，继承函数的原型。

    2.通过this将属性和方法添加至这个对象。

    3.最后返回this指向的新对象。

（25）如何定义一个全局使用的弹窗组件

    使用vue.extends继承一个子类，在vue的原型上面绑定一个方法，方法调用的时候，将子类实例化，使用mount方法将子类挂载，然后使用appendChild将dom节点加入到页面上

（26）promise有哪些api

    then
    catch
    all
        Promise.all可以将多个Promise实例包装成一个新的Promise实例。同时，成功和失败的返回值是不同的，成功的时候返回的是一个结果数组，而失败的时候则返回最先被reject失败状态的值。
    finally
        不管promise最后的状态，在执行完then或catch指定的回调函数以后，都会执行finally方法指定的回调函数。
    race
        Promise.race([p1, p2, p3])里面哪个结果获得的快，就返回那个结果，不管结果本身是成功状态还是失败状态。

（27）promise有几种状态，什么时候会进入catch

    三个状态：pending 执行中、reslove 成功、reject 失败

    reject会进入catch，多个promise中发生错误都会进入最后的catch

（28）async await与promise的关系或者区别

    async/await是寄生于Promise，Generater的语法糖

    async用于申明一个function是异步的，await可以认为是async wait的简写，等待一个异步方法执行完成。

（29）async await如何捕获错误

    1、try {} catch(err) {}

    2、因为返回是一个promise，所以可以使用.then

（30）事件冒泡是什么

    当一个元素接收到事件的时候 会把他接收到的事件传给自己的父级，一直到window

（31）阻止事件冒泡阻止的是什么

    event.stopPropagation() 不让事件向上传递

（32）[1,2,3] 变成 [1,2,0,0,0,3]

    [1,2,3].splice(2,0,0,0,0)

（33）sessionStorage、localStorage和cookie的区别

    共同点
        都是保存在浏览器端、且同源的

    区别
        cookie数据始终在同源的http请求中携带
        sessionStorage和localStorage不会自动把数据发送给服务器

        sessionStorage
            仅在当前浏览器窗口关闭之前有效
        localStorage
            始终有效，窗口或浏览器关闭也一直保存，因此用作持久数据
        cookie
            只在设置的cookie过期时间之前有效，即使窗口关闭或浏览器关闭
            如果不设置过期时间，关闭浏览器窗口，cookie就会消失

（34）防抖

    如果短时间内大量触发同一事件，只会执行一次函数。

    在第一次触发事件时，不立即执行函数，而是给出一个期限值比如200ms
    如果在200ms内没有再次触发滚动事件，那么就执行函数
    如果在200ms内再次触发滚动事件，那么当前的计时取消，重新开始计时

（35）节流

    如果短时间内大量触发同一事件，那么在函数执行一次之后，该函数在指定的时间期限内不再工作，直至过了这段时间才重新生效。

（36）箭头函数

    更简短的函数并且不绑定this

    没有arguments，使用rest参数，剩余参数

    不能使用new操作符

    没有prototype属性

（37）执行上下文

    函数执行前进行的准备工作

    运行JavaScript代码时，当代码执行进入一个环境时，就会为该环境创建一个执行上下文，它会在你运行代码前做一些准备工作，如确定作用域，创建局部变量对象等。

    全局执行上下文
    函数执行上下文
    eval函数执行上下文

（38）作用域链

    一般情况下，变量取值到 创建 这个变量 的函数的作用域中取值。

　　但是如果在当前作用域中没有查到值，就会向上级作用域去查，直到查到全局作用域，这么一个查找过程形成的链条就叫做作用域链。

（39）HTTPS和HTTP的区别主要如下：

    1、https协议需要到ca申请证书，一般免费证书较少，因而需要一定费用。

    2、http是超文本传输协议，信息是明文传输，https则是具有安全性的ssl加密传输协议。

    3、http和https使用的是完全不同的连接方式，用的端口也不一样，前者是80，后者是443。

    4、http的连接很简单，是无状态的；HTTPS协议是由SSL+HTTP协议构建的可进行加密传输、身份认证的网络协议，比http协议安全。