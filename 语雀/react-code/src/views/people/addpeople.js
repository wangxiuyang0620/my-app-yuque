import React from 'react'
import { Input, Button, Select } from 'antd'
import md5 from 'js-md5'
const { Option } = Select;

class Addpeople extends React.Component {
    isAdd = () => {
        let configPage = {}
        configPage.roleList = []
        configPage.url = '/add'
        configPage.unit = {
            id: null,
            username: '',
            password: "",
            role: '访客'
        }
        if(this.props.location.state !== undefined){
            configPage.url ='/home/addpeople'
            configPage.unit = this.props.location.state
        }
        return configPage
    }
    state=this.isAdd()
    initData = async ()=>{
        let res = await this.$http('get','/list')
        if(res.data.code===200){
          this.setState({
              roleList:res.data.data
          })
          return
        }
        alert(res.data.msg)
    }
    changeUnitItem =(val,key)=>{
        let {unit} = this.state;
        unit[key]  = val;
        this.setState({unit:{...unit}});
    }
    unitSubmit= async ()=>{
        let {url}       = this.state;
        let subData     = {...this.state.unit};
            subData.pwd = md5(subData.pwd);
        let res         = await this.$http('post',url,{unit:subData});
        alert(res.data.msg)
        

    }

    render() {
        const {unit,roleList} = this.state
        return <div>
                     {
                Object.keys(unit).map(item=>{
                    if(item === 'role'){
                        return <Select placeholder={item} key={item}  value={unit.role} style={{width:'100%'}} onChange={value=>this.changeUnitItem(value,item)}>
                                    {
                                        roleList.map(item=>{
                                        return <Option key={item.roleid} value={item.role}>{item.role}</Option>
                                        })
                                    }
                            </Select>
                        
                    }
                    else if(item === 'userid') return 
                    return <Input placeholder={item} key={item} type="text" value={unit[item]} onChange={e=>this.changeUnitItem(e.target.value,item)}/>
                })
            }
            <Button onClick={()=>this.unitSubmit()}>提交</Button>  
        </div>
    }
    componentDidMount =()=>this.initData();
}
export default Addpeople




