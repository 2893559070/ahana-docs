# uniapp

[uniapp官网](https://uniapp.dcloud.io/quickstart-hx)

## 页面配置项 参考 微信小程序

## 网络数据请求
- 因为小程序中无法使用axios，而wx.request功能过于简单，所以下载加强版网络请求包 @escook/request-miniprogram
- main.js 入口文件中配置
    ```js
        import { $http } from '@escook/request-miniprogram'
        // 从网络请求包中引入$http请求对象
        uni.$http = $http
        // 因为在其他的页面或组件中也要使用，所以要将$http对象挂载到全局对象下，在uni-app中，uni是全局对象
        $http.baseUrl = 'https://www.baidu.com'
        // 请求拦截器 配置网络请求基础地址，因为uni.$http为$http的引用，所以可以直接修改$http对象下的属性
        $http.beforeRequest = function() {
            //配置发起网络请求前的拦截功能
            uni.showLoading({
                title: '加载中...'
            })
        }

        // 响应拦截器
        $http.afterRequest = function() {
            //配置网络请求完毕后的拦截功能
            uni.hideLoading()
        }

        // 封装请求失败提示信息
        uni.$showMsg = function(title='数据加载失败',duration=1500){
            uni.showToast({
                title,
                duration,
                icon:'none'
            })
        }

        // 使用网络
        async getFloorList(){
            const {data:{message,meta}} = await uni.$http.get('/api')
            if(meta.status !== 200) return uni.$showMsg()
            this.list= message
		},
    ```

## iso 图片兼容性
- webp 后缀文件在 iso 设备上无法正常显示