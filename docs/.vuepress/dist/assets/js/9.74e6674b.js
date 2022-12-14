(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{323:function(t,s,a){t.exports=a.p+"assets/img/jsec.0cf0743a.png"},351:function(t,s,a){"use strict";a.r(s);var i=a(6),v=Object(i.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://www.cnblogs.com/dreamingbaobei/p/9815962.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("https://www.cnblogs.com/dreamingbaobei/p/9815962.html"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"作用域-scope-和上下文-context"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域-scope-和上下文-context"}},[t._v("#")]),t._v(" 作用域（Scope）和上下文（Context）")]),t._v(" "),s("p",[t._v("函数的每次调用都有与之紧密相关的作用域和上下文。从根本上来说，作用域是基于函数的，而上下文是基于对象的。")]),t._v(" "),s("p",[t._v("换句话说，作用域涉及到所被调用函数中的变量访问，并且不同的调用场景是不一样的。")]),t._v(" "),s("p",[t._v("上下文始终是 this 关键字的值，它是拥有（控制）当前所执行代码的对象的引用。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("作用域和上下文异同")]),t._v(" "),s("ul",[s("li",[t._v("创建时间不同：全局作用域之外，每个函数都会创建自己的作用域，作用域在函数定义的时候就已经确定了(这也是闭包的原理)，而不是在函数调用时。\n"),s("ul",[s("li",[t._v("全局执行上下文环境是在全局作用域确定之后，JS代码马上执行之前创建。")]),t._v(" "),s("li",[t._v("函数执行上下文时在函数调用时，函数体代码执行之前创建。")])])]),t._v(" "),s("li",[t._v("状态不同： 作用域是静态的，只要函数定义好了就一直存在，不会再变。上下文环境是动态的，调用函数的时候创建，函数执行完毕上下文环境就会被释放。")])])]),t._v(" "),s("h2",{attrs:{id:"执行栈-execution-stack"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行栈-execution-stack"}},[t._v("#")]),t._v(" 执行栈(Execution Stack)")]),t._v(" "),s("p",[t._v("执行栈，也叫调用栈，具有 LIFO（后进先出）结构，用于存储在代码执行期间创建的所有执行上下文。")]),t._v(" "),s("p",[t._v("首次运行JS代码时，会创建一个全局执行上下文并 Push 到当前的执行栈中。 每当发生函数调用，引擎都会为该函数创建一个新的函数执行上下文并 Push 到当前执行栈的栈顶。")]),t._v(" "),s("p",[t._v("根据执行栈 LIFO 规则，当栈顶函数运行完成后，其对应的函数执行上下文将会从执行栈中 Pop 出， 上下文控制权将移到当前执行栈的下一个执行上下文。")]),t._v(" "),s("h2",{attrs:{id:"执行上下文-执行环境"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行上下文-执行环境"}},[t._v("#")]),t._v(" 执行上下文(执行环境)")]),t._v(" "),s("p",[t._v("执行环境可以分为两个阶段：")]),t._v(" "),s("ul",[s("li",[t._v("创建阶段(创建与初始化阶段)：解析器首先会创建一个VO，它由定义在EC中的变量、 函数声明和参数组成。在这个阶段，作用域链会被初始化，this的值也会被最终确定。")]),t._v(" "),s("li",[t._v("执行阶段：代码被解释执行。 每个执行环境都有一个与之关联的VO，环境中定义的所有变量和函数都保存在这个对象中。 需要知道，我们无法手动访问这个对象，只有解析器才能访问它。")])]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("执行上下文的类型")]),t._v(" "),s("ul",[s("li",[t._v("全局执行上下文：只有一个，浏览器中全局对象就是window对象，this指向这个全局对象。")]),t._v(" "),s("li",[t._v("函数执行上下文：存在无数个，只有在函数被调用的时候才会被创建，每次调用函数都会创建一个新的执行上下文。")])])]),t._v(" "),s("p",[t._v("EC的结构图：")]),t._v(" "),s("div",{staticClass:"center-container"},[s("p",[s("img",{attrs:{src:a(323),alt:"img"}})])]),s("h3",{attrs:{id:"变量对象-variable-object"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#变量对象-variable-object"}},[t._v("#")]),t._v(" 变量对象(Variable Object)")]),t._v(" "),s("p",[t._v("变量对象的创建，依次经历了以下几个过程：")]),t._v(" "),s("ol",[s("li",[t._v("建立arguments对象。检查当前上下文中的参数，建立该对象下的属性与属性值。")]),t._v(" "),s("li",[t._v("检查当前上下文的函数声明，也就是使用 function 关键字声明的函数。在变量对象中以函数名建立一个属性，属性值为指向该函数所在内存地址的引用。如果函数名的属性已经存在，那么该属性将会被新的引用所覆盖。")]),t._v(" "),s("li",[t._v("检查当前上下文中的变量声明，每找到一个变量声明，就在变量对象中建立一个属性，属性值为 undefined。如果该变量名的属性已经存在，为了防止同名的函数被修改为 undefined，则会直接跳过，原属性值不会被修改。")])]),t._v(" "),s("h3",{attrs:{id:"作用域链-scope-chain"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#作用域链-scope-chain"}},[t._v("#")]),t._v(" 作用域链(Scope Chain)")]),t._v(" "),s("p",[t._v("当代码在一个环境中执行时，会创建变量对象的一个作用域链（scope chain）。 作用域链的用途是保证对执行环境有权访问的所有变量和函数的有序访问。\n作用域链包含了在环境栈中的每个执行环境对应的变量对象。通过作用域链，可以决定变量的访问和标识符的解析。")]),t._v(" "),s("p",[t._v("注意：全局执行环境的变量对象始终都是作用域链的最后一个对象。")]),t._v(" "),s("h3",{attrs:{id:"thisarg"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#thisarg"}},[t._v("#")]),t._v(" thisArg")]),t._v(" "),s("p",[t._v("在一个函数执行上下文中，"),s("code",[t._v("this")]),t._v("由调用者提供，由调用函数的方式来决定。如果调用者函数被某一个对象所拥有，那么该函数在调用时，内部的 this 指向该对象。\n如果函数独立调用，那么该函数内部的 this，则指向 undefined。但是在非严格模式下，当 this 指向 undefined 时，它会自动指向全局对象。")]),t._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[t._v("拓展")]),t._v(" "),s("p",[t._v("箭头函数中 this 指向当前函数所在所在作用域内的 this，若箭头函数外没有函数包裹，则this指向最外层对象"),s("code",[t._v("window")]),t._v("。")])]),t._v(" "),s("h2",{attrs:{id:"闭包"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#闭包"}},[t._v("#")]),t._v(" 闭包")]),t._v(" "),s("p",[t._v("闭包是指有权访问另一个函数作用域中的变量的函数。代入ES中就是，上层的EC通过作用域链可以访问下层EC中VO。")])])}),[],!1,null,null,null);s.default=v.exports}}]);