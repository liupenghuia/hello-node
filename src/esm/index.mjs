// ESM 模块入口文件 - 展示多种导入方式

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

// 4. 导入工具函数模块
import { formatDate, capitalize, VERSION } from './utils.mjs'
console.log('工具函数测试:')
console.log('格式化日期:', formatDate(new Date()))
console.log('首字母大写:', capitalize('hello world'))
console.log('版本号:', VERSION)

// 5. 导入常量模块
import { API_BASE_URL, COLORS } from './constants.mjs'
console.log('API 地址:', API_BASE_URL)
console.log('主题颜色:', COLORS)

// 6. 混合导入（从同一个模块导入默认和命名导出）
import defaultExport, { foo as renamedFoo } from './module.mjs'
console.log('混合导入 - 默认:', defaultExport)
console.log('混合导入 - 重命名:', renamedFoo)
