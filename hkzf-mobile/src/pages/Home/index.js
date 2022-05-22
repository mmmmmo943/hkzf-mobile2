import React from 'react'
// 创建news子组件
// 在home组件中,添加一个Route作为子路由的出口
// 设置嵌套路由的path,格式以父路由path开头
// 路由导入
import {  Route } from 'react-router-dom'
// 页面组件导入
import News from '../News'
import Index from '../Index';
import HouseList from '../HouseList';
import Profile from '../Profile';
// TabBar导入
import { TabBar } from 'antd-mobile';
// 自身css文件导入
import './index.css'

// TabBar数据
const tabItems =[
  {
    title:'首页',
    icon:'icon-ind',
    path:'/home'
  },
  {
    title:'找房',
    icon:'icon-findHouse',
    path:'/home/list'
  },
  {
    title:'资讯',
    icon:'icon-infom',
    path:'/home/news'
  },
  {
    title:'我的',
    icon:'icon-my',
    path:'/home/profile'
  }
]
export default class Home extends React.Component{
    state = {
        // 默认选中tab菜单
        selectedTab: this.props.location.pathname,
        // 用于控制tabbar的展示和隐藏
        // hidden: false,
        // 全屏控制
        // fullScreen: true,
      }
      // 路由切换，菜单高亮
      componentDidUpdate(prevprops){
        if(prevprops.location.pathname !== this.props.location.pathname){
          this.setState({
            selectedTab:this.props.location.pathname
          })
        }

      }
        //   渲染每个tabbar.Item的内容
        renderTabBarItem(){
          return tabItems.map(item=><TabBar.Item
            title={item.title}
            key={item.title}
            icon={<i className={`iconfont ${item.icon}`}/>}
            selectedIcon={<i className={`iconfont ${item.icon}`}/>}
            selected={this.state.selectedTab===item.path}
            onPress={()=>{
              this.setState({
                selectedTab:item.path
              })
              // 路由切换
              this.props.history.push(item.path)
            }}
            />)
        }
  
        render(){
        return <div  className='home' >
            {/* 路由渲染 */}
            <Route  path='/home/news' component={News}/>
            <Route  exact path='/home' component={Index}/>
            <Route  path='/home/profile' component={Profile}/>
            <Route  path='/home/list' component={HouseList}/>

            {/* tabbar */}
           
              <TabBar
            
              tintColor="#21b97a"
              barTintColor="white"
              noRenderContent={true}
             
            >
             {this.renderTabBarItem()}
            </TabBar>
     

        </div>
    }
}