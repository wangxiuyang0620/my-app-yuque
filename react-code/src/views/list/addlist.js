import React from 'react'

class Addlist extends React.Component {
    state = {
        knownList: [],
        belong: '请选择'
    }
    render() {
        const { knownList, belong } = this.state
        return <div>
            <div>文档标题<Input type="text" ref="title" /></div>

            <div>文档内容</div>
            <div ref="editor"></div>

            <div>所属知识库</div>
            <Select ref="belong" value={belong} style={{ width: '100%' }} onChange={value => this.setState({ belong: value })}>
                {
                    knownList.map(item => {
                        return <Option key={item.id} value={item.id}>{item.name}</Option>
                    })
                }
            </Select>
            <Button onClick={() => this.submitData()}>提交</Button>
        </div>
    }

    componentDidMount() {
        this.ED();
        this.getInitData();
    }
    initED = () => {
        const ED = new wangEditor(this.refs.editor);
        ED.create();
    
        ED.customConfig.uploadImgShowBase64 = true;
 
        this.ED = ED;
    }
    getInitData = async () => {
        const { $http, $afterData } = this;
        let res = await $http('get', '/known/list')
        $afterData(res, () => this.setState({ knownList: res.data.data }))
    }

    submitData = async () => {

        let subData = {
            id: null,
            title: this.refs.title.input.value,
            content: this.ED.txt.html(),
            time: new Date().getTime(),
            belong: this.state.belong,
            author: localStorage.user
        }

        let res = await this.$http('post', '/doc/add', { subData })
        alert(res.data.msg)
    }
}
export default Addlist