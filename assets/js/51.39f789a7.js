(window.webpackJsonp=window.webpackJsonp||[]).push([[51],{379:function(t,a,s){"use strict";s.r(a);var n=s(6),e=Object(n.a)({},(function(){var t=this,a=t._self._c;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"知识点"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#知识点"}},[t._v("#")]),t._v(" 知识点")]),t._v(" "),a("h3",{attrs:{id:"基础语法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#基础语法"}},[t._v("#")]),t._v(" 基础语法")]),t._v(" "),a("ul",[a("li",[a("a",{attrs:{href:"https://angular.cn/guide/attribute-binding",target:"_blank",rel:"noopener noreferrer"}},[t._v("Attribute 绑定、类绑定和样式绑定"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://angular.cn/guide/template-typecheck#disabling-type-checking-using-any",target:"_blank",rel:"noopener noreferrer"}},[t._v("$any()"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://angular.cn/guide/structural-directives#structural-directive-shorthand",target:"_blank",rel:"noopener noreferrer"}},[t._v("结构型指令简写形式"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://angular.cn/guide/dynamic-component-loader#dynamic-component-loader",target:"_blank",rel:"noopener noreferrer"}},[t._v("动态组件加载"),a("OutboundLink")],1)]),t._v(" "),a("li",[a("a",{attrs:{href:"https://angular.cn/guide/typescript-configuration",target:"_blank",rel:"noopener noreferrer"}},[t._v("TypeScript配置"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"属性、类、样式相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#属性、类、样式相关"}},[t._v("#")]),t._v(" 属性、类、样式相关")]),t._v(" "),a("h4",{attrs:{id:"host-host-content-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#host-host-content-参考"}},[t._v("#")]),t._v(" :host / :host-content "),a("a",{attrs:{href:"https://angular.cn/guide/component-styles#host",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("strong",[t._v("语法：")]),t._v(" "),a("code",[t._v(":host(标识符)")])]),t._v(" "),a("p",[a("code",[t._v(":host")]),t._v(" 一个组件可能被多调用，这时我们如果需要设置不同样式怎么办呢？好，我们可以为宿主添加一些标识符。")]),t._v(" "),a("p",[a("strong",[t._v("语法：")]),a("code",[t._v(":host-content(标识符)")])]),t._v(" "),a("p",[a("code",[t._v(":host-content")]),t._v("这个与 "),a("code",[t._v(":host")]),t._v(" 功能类似，这个是依据宿主元素的父级元素的一些限制条件来设置样式。")]),t._v(" "),a("h4",{attrs:{id:"viewencapsulation-参考"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#viewencapsulation-参考"}},[t._v("#")]),t._v(" ViewEncapsulation "),a("a",{attrs:{href:"https://angular.cn/api/core/Component#encapsulation",target:"_blank",rel:"noopener noreferrer"}},[t._v("参考"),a("OutboundLink")],1)]),t._v(" "),a("ul",[a("li",[t._v("ViewEncapsulation.Emulated：只进不出，全局样式能进来，组件样式出不去。")]),t._v(" "),a("li",[t._v("ViewEncapsulation.None：能进能出，此时组件的样式是全局生效的，注意与其它组件发生样式冲突。")]),t._v(" "),a("li",[t._v("ViewEncapsulation.ShadowDom：不进不出，组件样式出不去，全局样式进不来。")])]),t._v(" "),a("h3",{attrs:{id:"di相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#di相关"}},[t._v("#")]),t._v(" DI相关")]),t._v(" "),a("p",[a("a",{attrs:{href:"https://angular.cn/guide/dependency-injection-navtree",target:"_blank",rel:"noopener noreferrer"}},[t._v("依赖注入"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("a",{attrs:{href:"https://angular.cn/guide/hierarchical-dependency-injection",target:"_blank",rel:"noopener noreferrer"}},[t._v("多级注入器"),a("OutboundLink")],1)]),t._v(" "),a("p",[a("code",[t._v("ModuleInjector")]),t._v(" 是采用单例模式。")]),t._v(" "),a("h3",{attrs:{id:"app-initializer"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#app-initializer"}},[t._v("#")]),t._v(" APP_INITIALIZER")]),t._v(" "),a("p",[t._v("有时我们希望在应用程序启动后立即运行某些代码，例如：加载一些设置以确定应用程序的各个部分的显示方式。")]),t._v(" "),a("p",[t._v("假设这额外设置是异步加载的，这可能会有问题，因为在异步请求还没有响应回来的时候，应用程序继续引导过程。")]),t._v(" "),a("p",[t._v("Angular 为我们提供了一个简单的解决方案。我们可以访问一个 "),a("code",[t._v("APP_INITIALIZER")]),t._v(" 令牌，")]),t._v(" "),a("p",[t._v("我们可以用它来添加作为应用初始化过程的一部分调用的函数。")]),t._v(" "),a("p",[t._v("这些函数可以返回一个 Promise，因此我们也可以将它们用于异步事件。")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("onInit")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("settingService"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" SettingService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("return")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=>")]),t._v(" settingservice"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getSetting")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token decorator"}},[a("span",{pre:!0,attrs:{class:"token at operator"}},[t._v("@")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("NgModule")])]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\tprovides"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("\n  \tSettingService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" provide"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token constant"}},[t._v("APP_INITIALIZER")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" useFactory"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" onInit"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" deps"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),t._v("SettingService"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" multi"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br")])]),a("h2",{attrs:{id:"使用-viewchild、-contentchild访问dom、组件和指令"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#使用-viewchild、-contentchild访问dom、组件和指令"}},[t._v("#")]),t._v(" 使用@ViewChild、@ContentChild访问DOM、组件和指令")]),t._v(" "),a("blockquote",[a("p",[t._v("1、 "),a("a",{attrs:{href:"https://angular.cn/api/core/ViewChild#description",target:"_blank",rel:"noopener noreferrer"}},[t._v("官网相关参数说明"),a("OutboundLink")],1),t._v("\n2、 "),a("a",{attrs:{href:"https://www.jianshu.com/p/ac5366abfa74",target:"_blank",rel:"noopener noreferrer"}},[t._v("Angular 正确使用 @ViewChild、@ViewChildren 访问 DOM、组件、指令"),a("OutboundLink")],1)])]),t._v(" "),a("h3",{attrs:{id:"selector"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#selector"}},[t._v("#")]),t._v(" selector")]),t._v(" "),a("p",[a("strong",[t._v("用于查询的指令类型或名字。")])]),t._v(" "),a("p",[t._v("支持的选择器有：")]),t._v(" "),a("ul",[a("li",[t._v("任何带有 "),a("code",[t._v("@Component")]),t._v(" 或 "),a("code",[t._v("@Directive")]),t._v(" 装饰器的类")]),t._v(" "),a("li",[t._v("字符串形式的模板引用变量（比如可以使用 "),a("code",[t._v("@ViewChild('cmp')")]),t._v(" 来查询 "),a("code",[t._v("<my-component #cmp></my-component>")]),t._v("）")]),t._v(" "),a("li",[t._v("组件树中任何当前组件的子组件所定义的提供者（比如 "),a("code",[t._v("@ViewChild(SomeService) someService: SomeService")]),t._v("）")]),t._v(" "),a("li",[t._v("【模糊】任何通过字符串令牌定义的提供者（比如 "),a("code",[t._v("@ViewChild('someToken') someTokenVal: any")]),t._v("）")]),t._v(" "),a("li",[t._v("TemplateRef（比如可以用 "),a("code",[t._v("@ViewChild(TemplateRef) template;")]),t._v(" 来查询 "),a("code",[t._v("<ng-template></ng-template>")]),t._v("）")])]),t._v(" "),a("h3",{attrs:{id:"read"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#read"}},[t._v("#")]),t._v(" read")]),t._v(" "),a("p",[a("strong",[t._v("从查询到的元素中读取另一个令牌。")])]),t._v(" "),a("p",[t._v("read 支持的类型有：")]),t._v(" "),a("ul",[a("li",[t._v("任何带有 "),a("code",[t._v("@Component")]),t._v(" 或 "),a("code",[t._v("@Directive")]),t._v(" 装饰器的类")]),t._v(" "),a("li",[t._v("被 selector 匹配的组件内的所有 provider")]),t._v(" "),a("li",[t._v("【模糊】任何通过 string token 注入的 provider")]),t._v(" "),a("li",[t._v("TemplateRef、ElementRef 和 ViewContainerRef（这里非常主要，与动态组件有很大关联）")])]),t._v(" "),a("div",{staticClass:"custom-block warning"},[a("p",{staticClass:"custom-block-title"},[t._v("说明")]),t._v(" "),a("p",[t._v("上述两个【模糊】地方的内容，经测试，也就是子组件内的 provider，只不过是通过 string token 提供的。")]),t._v(" "),a("p",[t._v("暂时不知道是否还有其它情况。")])]),t._v(" "),a("h2",{attrs:{id:"表单相关"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#表单相关"}},[t._v("#")]),t._v(" 表单相关")]),t._v(" "),a("p",[t._v("下面是 FormControl 继承 AbstractControl 后，重写的 setValue：")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("value"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    onltSelf"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前操作只会影响空间本身的验证状态，不会影响父节点。默认为false")]),t._v("\n    emitEvent"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前操作会发送一个valuesChanges事件。默认为true（它受updateValueAndValidity影响）。")]),t._v("\n    emitModelToViewChange"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 当前操作会发送onChange事件通知视图。默认为true。")]),t._v("\n    emitViewToModel"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 会触发ngModelChange事件更新模型。默认为true。")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br")])]),a("p",[t._v("FormBuilder.group() 的一种写法")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" formGroup "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("new")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Formbuilder")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    formControlName"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("[")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("null")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" validators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" asyncValidators"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("]")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 一种写法，我在官网没找到")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br")])]),a("h2",{attrs:{id:"ng动画"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#ng动画"}},[t._v("#")]),t._v(" NG动画")]),t._v(" "),a("p",[t._v("动画：是从一个状态到另一个状态的过渡效果。")]),t._v(" "),a("p",[t._v("这个过渡效果和CSS动画属性差不多。")]),t._v(" "),a("p",[t._v("官网动画部分："),a("a",{attrs:{href:"https://angular.cn/guide/animations",target:"_blank",rel:"noopener noreferrer"}},[t._v("动画"),a("OutboundLink")],1)]),t._v(" "),a("h3",{attrs:{id:"动画相关api"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#动画相关api"}},[t._v("#")]),t._v(" 动画相关API")]),t._v(" "),a("div",{staticClass:"language-typescript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-typescript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("trigger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个动画")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("state")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一种状态")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("style")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置一种样式")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("transition")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义两个状态之间的过渡效果")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("animate")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 设置过渡效果属性")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("keyframes")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 关键帧动画")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("group")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于并行执行多个动画步骤")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("query")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 匹配CSS选择器，只为匹配到的元素使用动画")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sequence")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于逐个顺序执行多个动画步骤（不使用这个，就直接按顺序写动画，好像效果一样）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("stagger")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 用于为多元素动画应用级联延迟")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("animation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 定义一个可复用的动画（可传参去变更属性的动画）")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("useAnimation")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 使用一个可复用的动画")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("animateChild")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 允许")]),t._v("\n")])]),t._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[t._v("1")]),a("br"),a("span",{staticClass:"line-number"},[t._v("2")]),a("br"),a("span",{staticClass:"line-number"},[t._v("3")]),a("br"),a("span",{staticClass:"line-number"},[t._v("4")]),a("br"),a("span",{staticClass:"line-number"},[t._v("5")]),a("br"),a("span",{staticClass:"line-number"},[t._v("6")]),a("br"),a("span",{staticClass:"line-number"},[t._v("7")]),a("br"),a("span",{staticClass:"line-number"},[t._v("8")]),a("br"),a("span",{staticClass:"line-number"},[t._v("9")]),a("br"),a("span",{staticClass:"line-number"},[t._v("10")]),a("br"),a("span",{staticClass:"line-number"},[t._v("11")]),a("br"),a("span",{staticClass:"line-number"},[t._v("12")]),a("br"),a("span",{staticClass:"line-number"},[t._v("13")]),a("br"),a("span",{staticClass:"line-number"},[t._v("14")]),a("br")])]),a("p",[t._v("转场中几种特殊状态：")]),t._v(" "),a("ul",[a("li",[a("code",[t._v(":enter | void => *")])]),t._v(" "),a("li",[a("code",[t._v(":leave | * => void")])]),t._v(" "),a("li",[a("code",[t._v(":increment")])]),t._v(" "),a("li",[a("code",[t._v(":decrement")])])]),t._v(" "),a("h2",{attrs:{id:"参考文档"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#参考文档"}},[t._v("#")]),t._v(" 参考文档")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"https://blog.csdn.net/rockan007/article/details/90716237",target:"_blank",rel:"noopener noreferrer"}},[t._v("了解Angular Ivy: Incremental DOM 和 Virtual DOM"),a("OutboundLink")],1)])])])}),[],!1,null,null,null);a.default=e.exports}}]);