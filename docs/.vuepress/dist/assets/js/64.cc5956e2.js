(window.webpackJsonp=window.webpackJsonp||[]).push([[64],{395:function(t,s,a){"use strict";a.r(s);var e=a(6),n=Object(e.a)({},(function(){var t=this,s=t._self._c;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("p",[s("a",{attrs:{href:"https://www.runoob.com/sql/sql-quickref.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("SQL快速参考"),s("OutboundLink")],1)]),t._v(" "),s("h2",{attrs:{id:"约束-constraint"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#约束-constraint"}},[t._v("#")]),t._v(" 约束 constraint")]),t._v(" "),s("ul",[s("li",[s("code",[t._v("NOT NULL")]),t._v(" - 指示某列不能存储NULL值。")]),t._v(" "),s("li",[s("code",[t._v("UNIQUE")]),t._v(" - 保证某列的每行必须有唯一的值。")]),t._v(" "),s("li",[s("code",[t._v("PRIMARY KEY")]),t._v(" - NOT NULL 和 UNIQUE 的结合。确保某列（或两个列多个列的结合）有唯一的标识，有助于更容易更快速地找到表中的一个特定的记录。")]),t._v(" "),s("li",[s("code",[t._v("FOREIGN KEY")]),t._v(" - 保证一个表中的数据匹配另一个表中的值的参照完整性。")]),t._v(" "),s("li",[s("code",[t._v("CHECK")]),t._v(" - 保证列中的值符合指定的条件。")]),t._v(" "),s("li",[s("code",[t._v("DEFAULT")]),t._v(" - 规定没有给列赋值时的默认值。")])]),t._v(" "),s("h2",{attrs:{id:"事务"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#事务"}},[t._v("#")]),t._v(" 事务")]),t._v(" "),s("p",[t._v("一般来说，事务是必须满足4个条件（ACID）：原子性（Atomicity，或称不可分割性）、\n一致性（Consistency）、隔离性（Isolation，又称独立性）、持久性（Durability）。")]),t._v(" "),s("ul",[s("li",[t._v("原子性：一个事务中的所有操作，要么全部完成，要么全部不完成，不会结束在中间某个环节。事务在执行过程中发生错误，会被回滚（Rollback）到事务开始前的状态，就像这个事务从来没有执行过一样。")]),t._v(" "),s("li",[t._v("一致性：在事务开始之前和事务结束之后，数据库的完整性没有被破坏。这表示写入的资料必须完全符合所有的预设规则，这包含资料的精确度、串联性以及后续数据库可以自发性地完成预定的工作。")]),t._v(" "),s("li",[t._v("隔离性：数据允许多个并发事务同时对其数据进行读写和修改的能力，隔离性可以防止多个事务并发执行时由于交叉执行而导致数据的不一致。事务隔离分为不同级别，包括读未提交（Read uncommitted）、读提交（Read committed）、可重复读（Repeatable read）和串行化（Serializable）。")]),t._v(" "),s("li",[t._v("持久性：事务处理结束后，对数据的修改就是永久的，即便系统故障也不会丢失。")])]),t._v(" "),s("h2",{attrs:{id:"临时表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#临时表"}},[t._v("#")]),t._v(" 临时表")]),t._v(" "),s("p",[t._v("MySQL临时表在我们需要保存一些临时数据时是非常有用的。临时表只在当前连接可见，当关闭连接时，MySQL会自动删除表并释放所有空间。")]),t._v(" "),s("p",[t._v("复制表")]),t._v(" "),s("p",[t._v("元数据")]),t._v(" "),s("p",[t._v("序列")]),t._v(" "),s("p",[t._v("处理重复数据")]),t._v(" "),s("p",[t._v("SQL注入")]),t._v(" "),s("p",[t._v("join：用于把来自两个或多个表的行结合起来； union：合并连个或多个SELECT语句的结果；")]),t._v(" "),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SELECT TOP 5\nSELECT TOP 5 PERCENT\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br")])]),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("// 限制结果为前两条\nlimit 2\n// 从第2行开始，查询3条记录，起始值为第0行\nlimit 2, 3\n// 查询2条记录，从第3行开始，起始值为第0行\nlimit 2 offset 3\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br"),s("span",{staticClass:"line-number"},[t._v("2")]),s("br"),s("span",{staticClass:"line-number"},[t._v("3")]),s("br"),s("span",{staticClass:"line-number"},[t._v("4")]),s("br"),s("span",{staticClass:"line-number"},[t._v("5")]),s("br"),s("span",{staticClass:"line-number"},[t._v("6")]),s("br")])]),s("div",{staticClass:"language-text line-numbers-mode"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v("SELECT TOP 5 PERCENT *\n")])]),t._v(" "),s("div",{staticClass:"line-numbers-wrapper"},[s("span",{staticClass:"line-number"},[t._v("1")]),s("br")])]),s("p",[t._v("感觉SQL有点复杂，语法没有一个统一的格式。")]),t._v(" "),s("p",[t._v("目前来说，日常使用最频繁的有：复制表、临时表和连接。")])])}),[],!1,null,null,null);s.default=n.exports}}]);