import React, { Component } from 'react'
import Bg from '../img/bg.PNG'
import md5 from 'js-md5'
class Login extends Component {
    state={
        username:'',
        password:''
    }
    render() {
        return (
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
                                    this.login()
                                }}>登录</button>
                            </p>
                            <p onClick={()=>{
                                this.props.history.push('/register')
                            }}>
                                没有账号，请注册
                            </p>
                        </div>

                    </div>
                </div>
            </div>
        )
    }
   async login(){
        let {username,password} = this.state
       let data = await this.$http('post','/login',{username,password:md5(password)})
       if(data.data.code === 200){
           alert(data.data.msg)
           localStorage.setItem('user',username)
           localStorage.setItem('token',data.data.data.token)
           this.props.history.push('/home')
           return
       }
       alert(data.data.msg)
    }
  
}
export default Login