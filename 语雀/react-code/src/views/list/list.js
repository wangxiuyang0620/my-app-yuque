import React from 'react'
import { Table, Tag, Button } from 'antd';
class list extends React.Component {
    state = {
        list: [],
        columns: [{ title: 'ID', dataIndex: 'id', key: 'id' },
        { title: '标题', dataIndex: 'title', key: 'title' },
        { title: '作者', dataIndex: 'author', key: 'author' },
        { title: '时间', dataIndex: 'time', key: 'time' },
        {
            title: '操作', dataIndex: 'describe', key: 'describe', render: (value, item) => (
                <div>
                    <Tag >查看</Tag>
                    <Tag>删除</Tag>
                </div>
            )
        }]
    }
    componentWillMount = () => this.push = this.props.history.push
    render = () => (
        <div>
            <Button onClick={()=>{this.props.history.push('/home/addlist')}}>添加</Button>
            <Table rowKey={item => item.id} columns={this.state.columns} dataSource={this.state.list} style={{ marginTop: 15 }} />
        </div>
    )
    getIninData = async () => {
        let res = await this.$http('get', '/doc/list');
        if (res.data.code === 200) {
            this.setState({ list: res.data.data })
        }

    }
    componentDidMount = () => this.getIninData()
}
export default list














