import React, { Component } from 'react'
import Bg from '../img/bg.PNG'
class Ind extends Component {
    render() {
        return (
            <div className='wrap'>
                <header className="header-ind">
                    <span><img src={Bg} alt="" /> 语雀</span>
                    <p className='header-ind-center'>
                        <span>产品功能</span>
                        <span>数据安全</span>
                        <span>空间</span>
                        <span>发现</span>
                    </p>
                    <p className='header-ind-btn'>
                        
                        <button className='header-ind-btn-login' onClick={()=>{
                            this.loginIn('/login')
                        }}>登录</button>
                        <button className='header-ind-btn-register' onClick={()=>{
                            this.loginIn('/register')
                        }}>快速注册</button>
                    </p>
                </header>
                <main className="main-ind">
                    <div className="main-ind-top">
                        <h1>专业的云端知识库</h1>
                        <p>面向个人和团队,提供与众不同的知识管理,打造轻松流畅的工作协同</p>
                    </div>
                    <div className="main-ind-bottom"></div>
                </main>
            </div>
        )
    }
    loginIn(url){
        this.props.history.push(url)
    }
}
export default Ind