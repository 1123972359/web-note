# CSS
（1）css盒模型了解吗

    margin: 外边距
    border: 边框
    padding: 内边距
    content: 内容

（2）display:none 和 visibility:hidden 和 opacity 的区别

    display:none        将元素的显示设置为无，不占位置
    visibility: hidden  会渲染节点，只是隐藏，占位置
    opacity: 0          只是让元素的透明度变0，会渲染

（3）CSS 中 link 和@import 的区别是

    1.从属关系区别
        @import是 CSS 提供的语法规则，只有导入样式表的作用；
        link是HTML提供的标签，不仅可以加载 CSS 文件，还可以定义 RSS、rel 连接属性等。

    2.加载顺序区别
        加载页面时，link标签引入的 CSS 被同时加载；
        @import引入的 CSS 将在页面加载完毕后被加载。

    3.兼容性区别
        @import是 CSS2.1 才有的语法，故只可在 IE5+ 才能识别；
        link标签作为 HTML 元素，不存在兼容性问题。

    4.DOM可控性区别
        可以通过 JS 操作 DOM ，插入link标签来改变样式；
        由于 DOM 方法是基于文档的，无法使用@import的方式插入样式。

（4）css垂直居中，不使用css3特性

    margin: auto;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;

（5）行内元素  块级元素  行内块元素

    行内: a、span、img、i、b、em、strong、input
    块级: div、p、h1 ~ h6、ul、ol、li
    行内块元素: display: inline-block;

（6）继承元素有哪些

    1.不可继承的：display、margin、border、padding、background、height、min-height、max-height、width、min-width、max-width、overflow、position、left、right、top、bottom、z-index、float、clear、table-layout、vertical-align、page-break-after、 page-bread-before和unicode-bidi

    2.所有元素可继承：visibility和cursor

    3．内联元素可继承：letter-spacing、word-spacing、white-space、line-height、color、font、 font-family、font-size、font-style、font-variant、font-weight、text- decoration、text-transform、direction

    4.块状元素可继承：text-indent和text-align

    5.列表元素可继承：list-style、list-style-type、list-style-position、list-style-image

    6.表格元素可继承：border-collapse

（7）padding-left与padding-top百分比计算是怎样的

    相对最近父级块级元素的width

（8）绝对定位与相对定位有什么区别

    绝对定位
        相对于元素最近的已定位的祖先元素（即是设置了绝对定位或者相对定位的祖先元素）。
        如果元素没有已定位的祖先元素，那么它的位置则是相对于最初的包含块（body）

        ★元素使用绝对定位之后不占据原来的位置（脱标）

        ★元素使用绝对定位，位置是从浏览器出发。

        ★嵌套的盒子，父盒子没有使用定位，子盒子绝对定位，子盒子位置是从浏览器出发

        ★嵌套的盒子，父盒子使用定位，子盒子绝对定位，子盒子位置是从父元素位置出发。

        ★给行内元素使用绝对定位之后，转换为行内块。（不推荐使用，推荐使用display:inline-block;）

    相对定位
        相对于元素在文档中的初始位置

        ★使用相对定位，位置从自身出发。

        ★还占据原来的位置。

        ★子绝父相（父元素相对定位，子元素绝对定位）

        ★行内元素使用相对定位不能转行内块

（9）回流 重绘

    回流一定会触发重绘，而重绘不一定会回流

    回流
        计算节点的位置和几何信息，那么当页面布局和几何信息发生变化的时候，就需要回流

        1、添加或删除可见的DOM元素
        2、元素的位置发生变化
        3、元素的尺寸发生变化（包括外边距、内边框、边框大小、高度和宽度等）
        4、内容发生变化，比如文本变化或图片被另一个不同尺寸的图片所替代。
        5、页面一开始渲染的时候（这肯定避免不了）
        6、浏览器的窗口尺寸变化（因为回流是根据视口的大小来计算元素的位置和大小的）

    重绘
        当render tree中的一些元素需要更新属性，而这些属性只是影响元素的外观，风格，而不会影响布局的，比如background-color。则就叫称为重绘。

    最小化重绘和重排

        减少它的发生次数。为了减少发生次数，我们可以合并多次对DOM和样式的修改，然后一次处理掉

        批量修改DOM