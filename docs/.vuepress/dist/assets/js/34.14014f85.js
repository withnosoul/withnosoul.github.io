(window.webpackJsonp=window.webpackJsonp||[]).push([[34],{359:function(t,s,a){"use strict";a.r(s);var r=a(6),n=Object(r.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[t._v("装饰器是一种特殊类型的声明，它能够被附加到类声明，方法，访问符，属性或参数上，可以修改类的行为。")]),t._v(" "),s("p",[t._v("装饰器使用"),s("code",[t._v("@expression")]),t._v("这种形式，expression 求值后必须为一个函数，他会在运行时被调用，被装饰的声明信息作为参数传入。")]),t._v(" "),s("h2",{attrs:{id:"装饰器的执行时机"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装饰器的执行时机"}},[t._v("#")]),t._v(" 装饰器的执行时机")]),t._v(" "),s("p",[t._v("装饰器对类的行为的改变，是代码编译时发生的（不是TypeScript编译，而是js在执行机中编译阶段），而不是在运行时。")]),t._v(" "),s("p",[t._v("这意味着，装饰器能在编译阶段运行代码。也就是说，装饰器本质就是编译时执行的函数。")]),t._v(" "),s("p",[t._v("在Node.JS环境中模块一加载时就会执行。")]),t._v(" "),s("h2",{attrs:{id:"函数柯里化解决参数问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#函数柯里化解决参数问题"}},[t._v("#")]),t._v(" 函数柯里化解决参数问题")]),t._v(" "),s("p",[t._v("但是在实际场景中，有时希望像装饰器传入一些参数，如下：")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token decorator"}},[s("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("path")])]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/hello"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v('"world"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("HelloService")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("p",[t._v("此时上面的装饰器方法就不满足了（VSCode编译报错），这时我们可以借助JavaScript中函数柯里化特性。")]),t._v(" "),s("div",{staticClass:"language-typescript line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-typescript"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("Path")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("p1"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" p2"),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("target"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("//  这才是真正装饰器")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// do something ")]),t._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br")])]),s("h2",{attrs:{id:"四种装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#四种装饰器"}},[t._v("#")]),t._v(" 四种装饰器")]),t._v(" "),s("h3",{attrs:{id:"_1-类装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-类装饰器"}},[t._v("#")]),t._v(" 1. 类装饰器")]),t._v(" "),s("p",[t._v("应用于类构造函数，其参数是类的构造函数。")]),t._v(" "),s("p",[t._v("注意： class并不是像Java那种强类型语言中的类，而是JavaScript构造函数的语法糖。")]),t._v(" "),s("h3",{attrs:{id:"_2-方法装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-方法装饰器"}},[t._v("#")]),t._v(" 2. 方法装饰器")]),t._v(" "),s("p",[t._v("它会被应用到方法的 属性描述符上，可以用来监视，修改或者替换方法定义。")]),t._v(" "),s("p",[t._v("方法装饰会在运行时传入下列3个参数：")]),t._v(" "),s("ol",[s("li",[t._v("对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象。")]),t._v(" "),s("li",[t._v("成员的名字。")]),t._v(" "),s("li",[t._v("成员的属性描述符。")])]),t._v(" "),s("h3",{attrs:{id:"_3-方法参数装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-方法参数装饰器"}},[t._v("#")]),t._v(" 3. 方法参数装饰器")]),t._v(" "),s("p",[t._v("参数装饰器表达式会在运行时当作函数被调用，传入下列3个参数：")]),t._v(" "),s("ol",[s("li",[t._v("对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象。")]),t._v(" "),s("li",[t._v("方法名。")]),t._v(" "),s("li",[t._v("参数在函数参数列表中的索引。")])]),t._v(" "),s("h3",{attrs:{id:"_4-属性装饰器"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-属性装饰器"}},[t._v("#")]),t._v(" 4. 属性装饰器")]),t._v(" "),s("p",[t._v("属性装饰器表达式会在运行时当作函数被调用，传入下列2个参数：")]),t._v(" "),s("ol",[s("li",[t._v("对于静态成员来说是类的构造函数，对于实例成员来说是类的原型对象。")]),t._v(" "),s("li",[t._v("成员的名字。")])]),t._v(" "),s("h3",{attrs:{id:"装饰器加载顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#装饰器加载顺序"}},[t._v("#")]),t._v(" 装饰器加载顺序")]),t._v(" "),s("ol",[s("li",[t._v("有多个参数装饰器时，从最后一个参数装饰器依次向前执行。")]),t._v(" "),s("li",[t._v("方法和方法参数中参数参数装饰器先执行。")]),t._v(" "),s("li",[t._v("类装饰器总是最后执行。")]),t._v(" "),s("li",[t._v("方法和属性装饰器，谁在前面说先执行。因为参数属于方法一部分，所以参数会一直紧紧挨着方法执行。")])]),t._v(" "),s("blockquote",[s("p",[t._v("第4点说明：如果属性在方法前面，那么执行顺序是：属性>参数>方法>类。\n如果方法在属性前面，那么执行顺序是：参数>方法>属性>类。")])]),t._v(" "),s("h2",{attrs:{id:"参考文档"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),s("ol",[s("li",[s("a",{attrs:{href:"https://www.cnblogs.com/winfred/p/8216650.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript装饰器（decorators）"),s("OutboundLink")],1)])])])}),[],!1,null,null,null);s.default=n.exports}}]);