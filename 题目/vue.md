（1）谈谈你对MVVM开发模式的理解

    MVVM分为 Model、View、ViewModel 三者。

    Model：
        代表数据模型，数据和业务逻辑都在Model层中定义。
    View：
        代表UI视图，负责数据的展示
    ViewModel：
        负责监听Model中数据的改变，并且控制视图的更新，处理用户交互操作

    Model和View并无直接关联，而是通过ViewModel来进行联系的。
    Model和ViewModel之间有着双向数据绑定的联系。
    这种模式实现了Model和View的数据自动同步，因为只需要对数据操作，不需要自己操作dom

（2）Vue有哪些指令

    v-html、v-show、v-if、v-for等等

（3）v-if 和 v-show 有什么区别？

    v-show:
        仅仅控制元素的显示方式，将display属性在block和none来回切换

    v-if:
        控制这个dom节点是否存在

（4）简述Vue的响应式原理

    当一个Vue实例创建时，vue会遍历data选项的属性，用Object.defineProperty将它们转为getter/setter，并且在内部追踪相关依赖，在属性被访问和修改时通知变化。
    每个组件实例都有相应的watcher程序实例，它会在组件渲染的过程中把属性记录为依赖，之后当依赖项的setter被调用时，会通知watcher重新计算，从而使它关联的组件得以更新。

（5）delete和Vue.delete删除数组的区别

    delete只是被删除的元素变成了 empty/undefined 其他的元素的键值还是不变。

    Vue.delete 直接删除了数组 改变了数组的键值。

（6）如何优化SPA应用的首屏加载速度慢的问题？

    将公有的JS通过script标签外部引入，减少app.bundle的大小。
    在配置路由的时候，页面和组件使用懒加载的方式引入
    加一个首页loading，提升用户体验

（7）网页从输入网址到渲染完成经历了哪些过程？

    1、发送到DNS服务器，并获取域名对应的web服务器对应的ip地址
    2、与web服务器建立TCP连接
    3、浏览器向web服务器发送http请求
    4、web服务器响应请求，并返回指定url的数据（或错误信息，或重定向的新的url地址）
    5、浏览器下载web服务器返回的数据及解析html源文件
    6、生成DOM树，解析css和js，渲染页面，直至显示完成

（8）mvvm和mvc区别？它和其它框架（jquery）的区别是什么？哪些场景适用？

    mvc中的controller演变成mvvm中的viewModel。
    mvvm主要解决了mvc中大量的dom操作，使页面渲染性能降低的问题。

    区别：vue数据驱动视图，通过数据来显示视图层而不是节点操作。

    场景：数据操作比较多、频繁的场景，更加便捷。

（9）<keep-alive> </keep-alive>的作用是什么?

    包裹动态组件时，会缓存不活动的组件实例，主要用于保留组件状态或避免重新渲染。

（10）vue路由传参的几种基本方式

    1、路由配置参数/:id
    2、params传参
    3、query传参，query传递的参数会显示在url后面

（11）vue-router有哪几种导航钩子

    1、全局导航钩子：beforeEach、afterEach

    2、组件内钩子
        组件内的导航钩子主要有三种。beforeRouteEnter、beforeRouteUpdate、beforeRouteLeave

        beforeRouteEnter 不能获取组件实例 this，因为当守卫执行前，组件实例被没有被创建出来，剩下两个钩子则可以正常获取组件实例 this
        
        解决方法：
        beforeRouteEnter(to, from, next) {
            next (vm => {
                // 这里通过 vm 来访问组件实例解决了没有 this 的问题
            })
        }

    3、单独路由独享组件
        在路由配置上直接定义 beforeEnter

（12）vue生命周期有哪些

    beforeCreate    
        在实例初始化之后，数据观测(data observer) 和 event/watcher 事件配置之前被调用
    created
        实例已经创建完成之后被调用。在这一步，实例已完成以下的配置：数据观测(data observer)，属性和方法的运算， watch/event 事件回调。然而，挂载阶段还没开始，$el 属性目前不可见。
    beforeMount
        在挂载开始之前被调用：相关的 render 函数（模板）首次被调用。
    Mounted
        el 被新创建的 vm.$el 替换，并挂载到实例上去之后调用该钩子。
    beforeUpdate
        数据更新时调用，发生在虚拟 DOM 重新渲染和打补丁之前。
    updated
        组件 DOM 已经更新
    beforeDestoryed
        实例销毁之前调用。在这一步，实例仍然完全可用。
    destoryed
        Vue 实例销毁后调用

（13）为什么避免 v-if 和 v-for 一起用？

    v-for优先级比v-if高，每次都会先循环再判断，造成性能浪费

（14）vue组件通信

    1、props/$emit

    2、$emit/$on
        eventBus

    3、vuex

    4、$attrs/$listeners

        $attrs获取没有在props中定义的属性的对象
        $listeners里存放的是父组件中绑定的非原生事件。

    5、provide/inject

    6、$parent / $children
    
    7、ref

（15）<slots>是什么

    插槽
        父页面在组件标签内插入任意内容，子组件内插糟 slot 控制摆放位置

    1、匿名插槽 (也叫默认插槽): 没有命名，有且只有一个
    2、具名插槽：相对匿名插槽组件 slot 标签带 name 命名的
    3、作用域插槽：子组件内数据可以被父页面拿到 (解决了数据只能从父页面传递给子组件)
        v-slot="{ slotProps }"
        v-slot:todo="slotProps" // todo是插槽的名字

（16）props是什么

    父组件通过 props 向下传递数据给子组件

（17）mixins是什么

    混合 (mixins) 是一种分发 Vue 组件中可复用功能的非常灵活的方式。

    mixins则是在引入组件之后，则是将组件内部的内容如data等方法、method等属性与父组件相应内容进行合并。相当于在引入后，父组件的各种属性方法都被扩充了。

    定义相同生命周期钩子函数，在组件自身钩子之前先调用

    data的数据会在内部递归合并，相同属性名以组件优先

    methods、components、directives相同函数名的方法进行覆盖，组件优先级高过mixins

（18）组件mixins之后，可以调用mixins里面的属性吗

    mixin.data().name

（19）为什么data必须是一个函数

    一个组件的 data 选项必须是一个函数，因此每个实例可以维护一份被返回对象的独立的拷贝

（20）<meta name="viewport" content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=0">

    让当前viewport的宽度等于设备的宽度，同时不允许用户手动缩放。

    让viewport的宽度等于设备的宽度

（21）mutation为什么必须是同步

    任何在回调函数中进行的状态的改变都是不可追踪的

（22）Vue路由的实现

    hash模式 和 history模式


（23）动态路由如何实现，如何获取参数

    const User = {
        template: '<div>User</div>'
    }

    const router = new VueRouter({
        routes: [
            // 动态路径参数 以冒号开头
            { path: '/user/:id', component: User }
        ]
    })

    获取参数
        $route.params

（24）$nextTick的原理

    1) vue是异步执行dom更新的，一旦观察到数据变化，vue就会开启一个队列，然后把在同一事件循环当中观察到数据变化的watcher推送进这个队列，如果这个watcher被触发多次，只会被推送到队列一次，这种缓冲行为可以有效的去掉重复数据造成的不必要的计算和dom操作，这样可以提高渲染效率。
   
    2) 如果要获取更新后的dom元素，可以使用vue内置的$nextTick方法，参数是一个函数。它的作用类似setTimeout，进行执行异步的操作。

    vue中的nextTick主要用于处理数据动态变化后，DOM还未及时更新的问题，用nextTick可以获取数据更新后最新dom的变化。


（25）双向绑定的原理，发布订阅模式，发布者是谁，订阅者是谁

（26）diff算法

    比较只会在同层级进行, 不会跨层级比较

    找出本次DOM必须更新的节点来更新，其他的不更新

（27）工程化

（28）为什么使用$set，Object.defineProperty的不足

    1、无法检测到对象属性的新增或删除

    2、当你利用索引直接设置一个数组项时，例如：vm.items[indexOfItem] = newValue

    3、不能监听数组长度的变化（重写了push pop shift unshift splice sort reverse）

（29）能说下 vue-router 中常用的路由模式实现原理吗

    hash 模式

        1、location.hash的值实际就是URL中#后面的东西，它的特点在于：hash虽然出现在URL中，但不会被包含在HTTP请求中，对后端完全没有影响，因此改变hash不会重新加载页面。

        2、可以为hash的改变添加监听事件

    history 模式

        1、利用了HTML5 History Interface 中新增的pushState()和replaceState()方法

            这两个方法应用于浏览器的历史记录站，在当前已有的back、forward、go的基础之上，它们提供了对历史记录进行修改的功能。这两个方法有个共同的特点：当调用它们修改浏览器历史记录栈后，虽然当前URL改变了，但浏览器不会刷新页面，这就为单页应用前端路由“更新视图但不重新请求页面”提供了基础。

        2、刷新后会出现404需要后端进行配置

            如果 URL 匹配不到任何静态资源，则应该返回同一个 index.html 页面，这个页面就是你 app 依赖的页面

（30）路由传参

    1、如果提供了 path，params 会被忽略

（31）computed缓存怎么实现

    1、初始化時，lazy 是 true，value是undefined，说明它的值是惰性计算的，只有到真正在模板里去读取它的值后才会计算

    2、get函数里判断dirty的值，dirty为true菜重新求值，否则直接返回value值

    