// ESM 模块入口文件 - 展示多种导入方式

import md5 from 'md5'
console.log(' hello world md5加密后:', md5('Hello World'))

// 1. 导入默认导出
import m from './module.mjs'
console.log('默认导出:', m)

// 2. 导入命名导出
import { foo, bar } from './module.mjs'
console.log('命名导出 foo:', foo)
console.log('命名导出 bar:', bar)

// 3. 导入所有导出（命名空间导入）
import * as moduleExports from './module.mjs'
console.log('所有导出:', moduleExports)


// 6. 混合导入（从同一个模块导入默认和命名导出）
import defaultExport, { foo as renamedFoo } from './module.mjs'
console.log('混合导入 - 默认:', defaultExport)
console.log('混合导入 - 重命名:', renamedFoo)