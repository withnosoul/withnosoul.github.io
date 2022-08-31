(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{366:function(e,s,t){"use strict";t.r(s);var n=t(6),a=Object(n.a)({},(function(){var e=this,s=e._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("ul",[s("li",[s("a",{attrs:{href:"https://docs.microsoft.com/zh-cn/windows-server/administration/windows-commands/windows-commands#a",target:"_blank",rel:"noopener noreferrer"}},[e._v("Windows 命令"),s("OutboundLink")],1)]),e._v(" "),s("li",[s("a",{attrs:{href:"https://www.runoob.com/linux/linux-command-manual.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("Linux 命令大全"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"bash-和-shell-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bash-和-shell-的区别"}},[e._v("#")]),e._v(" bash 和 shell 的区别")]),e._v(" "),s("p",[s("a",{attrs:{href:"https://blog.csdn.net/qq_51086532/article/details/121696902",target:"_blank",rel:"noopener noreferrer"}},[e._v("深入理解 shell/bash"),s("OutboundLink")],1)]),e._v(" "),s("h2",{attrs:{id:"powershell-和-cmd-的区别"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#powershell-和-cmd-的区别"}},[e._v("#")]),e._v(" powershell 和 cmd 的区别")]),e._v(" "),s("blockquote",[s("p",[e._v("命令提示符是在操作系统中，提示进行命令输入的一种工作提示符。在 Windows 环境下，命令行程序为 cmd.exe，是一个 32 位的命令行程序。\n输入一些命令，cmd.exe 可以执行。")]),e._v(" "),s("p",[e._v("PowerShell 是一种跨平台的任务自动化和配置管理框架，由命令行管理程序和脚本语言组成。")])]),e._v(" "),s("ol",[s("li",[e._v("CMD 写的 BAT 脚本我们看作是面向过程的，而 PowerShell 则是面向对象的。")]),e._v(" "),s("li",[e._v("CMD 是能执行基本的任务，本身并没有集成太多的功能，大多依赖于第三方的程序；PowerShell 因为是基于 "),s("code",[e._v(".net")]),e._v("\n面向对象的，而且本身就内置了非常多的命令；使得它不管从功能上还是性能上都要比 CMD 强大的多。")])]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("”运行“菜单")]),e._v(" "),s("ol",[s("li",[e._v("里边运行的命令实际上都是在 "),s("code",[e._v("Windows")]),e._v(" 目录和 "),s("code",[e._v("System32")]),e._v(" 目录下对应的小程序, 比如 "),s("code",[e._v("CMD")]),e._v(", "),s("code",[e._v("Telnet")]),e._v(" 等；")]),e._v(" "),s("li",[e._v("“运行”菜单相当于打开“我的电脑”时的地址栏一样, 可以在里边输入路径等，但是它还可以输入命令；\n因为它和系统环境变量关联起来的, 系统环境变量正好包括了 "),s("code",[e._v("Windows")]),e._v(" 目录和 "),s("code",[e._v("System32")]),e._v(" 目录,\n因此这两个目录下的程序都可以省略路径信息而直接在“运行”中输入程序名称就当命令使用了。")])]),e._v(" "),s("p",[e._v("用户变量 | 环境变量（"),s("code",[e._v("Windows")]),e._v(" 系统中的变量）")]),e._v(" "),s("p",[s("strong",[e._v("运行原理")])]),e._v(" "),s("p",[e._v("当我们在命令行窗口打开一个文件, 或调用一个程序时, 如果没有找到则会依次到环境变量 path 变量的路径中寻找, 直到找到为止, 如果没找到则报错。")]),e._v(" "),s("p",[e._v("默认系统变量："),s("code",[e._v("SystemRoot = C:\\Windows")])])]),e._v(" "),s("h2",{attrs:{id:"执行同名可执行文件的顺序"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#执行同名可执行文件的顺序"}},[e._v("#")]),e._v(" 执行同名可执行文件的顺序")]),e._v(" "),s("p",[e._v("命令的顺序取决于扩展存储在 "),s("code",[e._v("PATHEXT")]),e._v(" 环境变量中的顺序：")]),e._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("PATHEXT=.COM;.EXE;.BAT;.CMD;.VBS;.VBE;.JS;.JSE;.WSF;.WSH;.MSC\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br")])]),s("p",[s("strong",[e._v("排在左面的先执行")]),e._v("。")]),e._v(" "),s("h2",{attrs:{id:"【重点】标准命令行的组成格式"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#【重点】标准命令行的组成格式"}},[e._v("#")]),e._v(" 【重点】标准命令行的组成格式")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://www.jianshu.com/p/0a61481087dc",target:"_blank",rel:"noopener noreferrer"}},[e._v("一个符合GNU标准的命令行的组成格式"),s("OutboundLink")],1)])]),e._v(" "),s("h2",{attrs:{id:"写一个-cli"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#写一个-cli"}},[e._v("#")]),e._v(" 写一个 CLI")]),e._v(" "),s("blockquote",[s("p",[s("a",{attrs:{href:"https://blog.csdn.net/handsomexiaominge/article/details/108310821",target:"_blank",rel:"noopener noreferrer"}},[e._v("逐步剖析前端脚手架工具cli的基本原理"),s("OutboundLink")],1)])]),e._v(" "),s("p",[e._v("在 package.json 中配置：")]),e._v(" "),s("div",{staticClass:"language-json line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"bin"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"cli-name"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"./index.js"')]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])]),e._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[e._v("1")]),s("br"),s("span",{staticClass:"line-number"},[e._v("2")]),s("br"),s("span",{staticClass:"line-number"},[e._v("3")]),s("br"),s("span",{staticClass:"line-number"},[e._v("4")]),s("br"),s("span",{staticClass:"line-number"},[e._v("5")]),s("br")])]),s("p",[e._v("解释："),s("code",[e._v("#!/usr/bin/env node")])]),e._v(" "),s("p",[e._v("对于文件来说，"),s("code",[e._v("#!")]),e._v(" 这个符号代表此文件可以当作脚本运行，那么怎么运行呢，"),s("code",[e._v("/usr/bin/env node")]),e._v(" 这行的意思就是用 "),s("code",[e._v("node")]),e._v(" 来执行此文件，\nnode 怎么来的呢？就是用户 (usr) 的安装根目录 (bin) 下的 env 环境变量中去找，简单的说就是：如果在 Windows 上面，\n就去安装 node 的 bin 目录去找 node 的执行器， 一般我们都放在环境变量中。")]),e._v(" "),s("p",[e._v("解释："),s("code",[e._v("bin")])]),e._v(" "),s("p",[e._v("对于一个模块来说，如果是全局安装，则 npm 会为 bin 中配置的文件在 bin 目录下创建一个软链接 （对于 windows 系统，默认会在\n"),s("code",[e._v("C:\\Users\\username\\AppData\\Roaming\\npm")]),e._v(" 目录下），如果是局部安装，则会在项目内的 "),s("code",[e._v("./node_modules/.bin/")]),e._v(" 目录下创建一个软连接。")]),e._v(" "),s("h3",{attrs:{id:"命令行交互"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行交互"}},[e._v("#")]),e._v(" 命令行交互")]),e._v(" "),s("p",[s("strong",[e._v("inquirer")])]),e._v(" "),s("h3",{attrs:{id:"命令行-options"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#命令行-options"}},[e._v("#")]),e._v(" 命令行 Options")]),e._v(" "),s("p",[s("strong",[e._v("commander")])])])}),[],!1,null,null,null);s.default=a.exports}}]);