import React,{Component} from 'react'
import Bg from '../img/bg.PNG'

class Register extends Component {
    state={
        username:'',
        password:''
    }
    render(){
        return(
            <div className='wrap'>
            <div className="login">
                <div className="login-content">
                    <div className="login-content-top">
                        <p className="login-content-top-img">
                            <img src={Bg} alt="" />
                        </p>
                        <div className='login-content-top-text'>
                            <h1>语雀</h1>
                            <p>专业的云端知识库</p>
                        </div>
                    </div>
                    <div className='login-content-bottom'>
                        <p >
                            <input type="text" placeholder='请输入用户名' onChange={(e)=>{
                               this.setState({
                                   username:e.target.value
                               })
                            }}/>
                        </p>
                        <p>
                            <input type="text" placeholder='请输入密码' onChange={(e)=>{
                                this.setState({
                                    password:e.target.value
                                })
                            }} />
                        </p>
                        <p>
                            <button onClick={()=>{
                                this.register()
                            }}>快速注册</button>
                        </p>
                        <p onClick={()=>{
                                this.props.history.push('/login')
                            }}>
                                已有账号，请登录
                            </p>
                    </div>

                </div>
            </div>
        </div>
        )
    }
   async register(){
        let {username,password} = this.state
        let registerres = await this.$http('post','/register',{username,password})
        if(registerres.data.code===200){
            alert (registerres.data.msg)
            this.props.history.push('/login')
            return
        }
        alert(registerres.data.msg)
    }
}
export default Register