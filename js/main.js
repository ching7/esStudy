// 模块化 
// 模块化就是把代码进行拆分，方便重复利用。类似java对导包：要使用一个包需要先导入包。js中对应就是 `模块`
// 主要两个命令构成
// `export`命令用于规定模块对外接口
// `import`命令用于导入其他模块提供对功能
import util from './hello.js'
import { name, add } from './user.js'

console.log(util.sum(1, 2))
console.log(name)