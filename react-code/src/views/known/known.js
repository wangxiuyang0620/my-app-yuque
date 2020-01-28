import React, { Component } from 'react'
class Known extends Component{

    state={
        list:[],
        isShow:false
    }
    
    render(){
        const {list,isShow} = this.state
        return <div className="known_ctx">
                <button onClick={()=>this.setState({isShow:true})}>创建知识库</button>
                <div><span>ID</span><span>知识库名称</span><span>描述</span><span>操作</span></div>
                {
                    list.map(item=>{
                        return <div key={item.id}>
                                <span>{item.id}</span>
                                <span>{item.name}</span>
                                <span>{item.describe.length>10?item.describe.slice(0,10)+'...':item.describe}</span>
                                <button onClick={()=>this.deleteKnown(item.id)}>删除</button>
                        </div>
                    })
                }
                {
                    isShow?
                    <div className="model_self">
                        <div className="model_self_ctx">
                            <p>创建知识库 
                                <span onClick={()=>this.setState({isShow:false})}>关闭</span>
                            </p>
                            <div><input type="text" ref="knownName"/></div>
                            <div><textarea ref="knownDescribe"></textarea></div>
                            <button onClick={()=>this.createKnown()}>提交</button>
                        </div>
                    </div>:null
                }
                
            
        </div>
    }

 
    componentDidMount(){
        this.getInitData()
    }

 
    getInitData = async ()=>{
        const {$http,$afterData} = this;
        let res = await $http('get','/known/list')
        $afterData(res,()=>this.setState({list:res.data.data}))  
       
    }
   
    deleteKnown = async id=>{
        const {$http,$afterData,getInitData} = this;
        if(window.confirm('确定要删除人家嘛？')){
           let res = await $http('delete','/known/delete',{id})
           $afterData(res,()=>getInitData())  
        }
    }

    
    createKnown = async ()=>{
        const {$http,$afterData,getInitData,refs} = this;
        let subData = {
            name:refs.knownName.value,
            describe:refs.knownDescribe.value
        }

       
        let res = await $http('post','/known/add',subData)
        $afterData(res,()=>{
            this.setState({isShow:false});
            getInitData();
        })  
    }
        
        
    
}
export default Known