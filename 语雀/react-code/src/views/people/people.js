import React from 'react'
import { Table, Modal, Tag } from 'antd';
const { confirm } = Modal;
class People extends React.Component {
    state = {
        list: [],
        columns: [
            {
                title: '用户ID',
                dataIndex: 'id',
                key: 'id'
            }, {
                title: "用户名",
                dataIndex: 'username',
                key: "username"
            }, {
                title: "角色",
                dataIndex: 'role',
                key: 'role'
            }, {
                title: '操作',
                dataIndex: 'btn',
                key: "btn",
                render: (value,item,key) => {
                    return <div>
                        <Tag onClick={()=>{this.props.history.push({pathname:"/home/addpeople",state:item})}}>编辑</Tag>
                        <Tag onClick={()=>{this.detele(item.id)}}>删除</Tag>
                    </div>
                }
            }
        ]
    }
    render() {
        return (
            <div >
                <p className='box'>
                    <button className='people-btn' onClick={() => { this.toadd() }}>添加</button>
                </p>

                <Table rowKey={item => item.id} columns={this.state.columns} dataSource={this.state.list} />,
            </div>
        )
    }
    toadd() {
       
        this.props.history.push('/home/addpeople')
    }
    detele=(id)=>{
      
     confirm({
         title:'系统提示',
         content:'你确定要删除该用户吗?',
         okText:"是的",
         okType:'danger',
         cancelText:'不',
         onOk:async () =>{
             let res = await this.$http('delete' , '/user/detele' ,{id})
          alert(res.data.msg)
          if(res.data.code===200){
              this.setState({
                  list:res.data.list
              })
          }
         
         
            }
     })
    }
    componentDidMount() {
        this.$http('get', '/user/list').then(res => {
            if (res.data.code === 200) {
                this.setState({
                    list: res.data.data
                })
            }
        })
    }
}
export default People

