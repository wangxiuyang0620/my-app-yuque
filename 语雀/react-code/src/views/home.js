import React, { Component } from 'react'
import { Layout, Menu, Icon } from 'antd';
import MyView from '../router/routerView'
const { Header, Content, Footer, Sider } = Layout;
const { SubMenu } = Menu;

class Home extends Component {
    state = {
        collapsed: false,
        // tabList: [
        //     {
               
        //         key: "sub1",
        //         type: "file",
        //         title: "文档管理",
        //         children: [
        //             {
        //                 path: "/home/list",
        //                 title: "文档列表",
        //                 key: "1",
        //             }, {
        //                 path: "/home/addlist",
        //                 key: "2",
        //                 title: "添加文档",
        //             }
        //         ]
        //     }, {
        //         key: "sub2",
        //         type: "team",
        //         title: "知识库管理",
        //         children: [
        //             {
        //                 path: "/home/known",
        //                 title: "知识库列表",
        //                 key: "3",
        //             }, {
        //                 path: '/home/addknown',
        //                 title: "添加知识库",
        //                 key: "4",
        //             }
        //         ]
        //     }, {
        //         title: "角色管理",
        //         key: "sub3",
        //         type: "user",
        //         children: [
        //             {
        //                 path: "/home/people",
        //                 title: "角色列表",
        //                 key: "5",
        //             }
        //         ]
        //     }
        // ],
        list:[]
    }
    onCollapse = collapsed => {

        this.setState({ collapsed });
    }
    render() {
        return (
            <Layout style={{ minHeight: '100vh' }}>
                <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
                    <div className="logo" />
                    <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
                        {
                            this.state.list.map(item => {
                                return <SubMenu key={item.key} title={
                                    <span>
                                        <Icon type={item.type} />
                                        <span>{item.title}</span>
                                    </span>
                                }>
                           {
                               item.children.map(v=>{
                               return <Menu.Item key={v.key} onClick={()=>{
                                  this.props.history.push(v.path)
                               }}>{v.title}</Menu.Item>
                               })
                           }



                                </SubMenu>
                            })
                        }
                    </Menu>
                </Sider>
                <Layout>
                    <Header style={{ background: '#fff', padding: 0, textAlign: 'right' }} >
                        <span> {localStorage.user}   </span> | <span onClick={() => {
                            this.exeit()
                        }}>退出</span>
                    </Header>
                    <Content style={{ margin: '0 16px' }}>
                       <MyView routerlist = {this.props.children}{...this.props}/>
                    </Content>
                    <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
                </Layout>
            </Layout>
        )
    }
    exeit() {
        localStorage.clear()
        this.props.history.push('/login')
    }
    componentDidMount(){
      this.$http('get','/home').then(res=>{
         this.setState({
             list:res.data.list
         })
         return
      })
     
    }
}
export default Home


