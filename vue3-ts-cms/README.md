# vue3-ts-cms 后台管理系统


## 登录用户账号
coderwhy 123456
coderdemo 123456




## 接口文档

**接口文档v1版本**
https://documenter.getpostman.com/view/12387168/TzsfmQvw

**baseUrl的值**
- http://123.207.32.32:5000
- http://codercba.com:5000

**设置全局token的方法**
```js
const res = pm.response.json()
pm.globals.set("token", res.data.token)
```

**接口文档v2版本(部分接口更新)**
https://documenter.getpostman.com/view/12387168/TzzDKb12





## 提交代码的约束工具
```bash
pnpm add commitizen -D 
npx commitizen init cz-conventional-changelog --save-dev --save-exact

# 提交代码命令
npx cz
## 第一步选择本次提交的类型
## 第二步选择本次提交修改的范围
## 第三步选择提交信息
## 第四步选择本次提交的详细描述
## 第五步是否是一次重大改变
## 第六步是否影响某个open issue
```




