import React, { Component } from 'react'
export default class Looks extends Component{
    state  = this.props.location.state;
    render = () => (
        <div>
            {/* 标题 */}<div>{this.state.title}</div>
            {/* 内容 */}<div ref="ctx"></div>
            {/* 作者 */}<div>{this.state.author}</div>
            {/* 时间 */}<div>{this.format(this.state.time)}</div>
        </div>
    )
    componentDidMount = () => this.refs.ctx.innerHTML = this.state.content;
    format = timer =>{
        let time = JSON.stringify(new Date(parseInt(timer)));
            time = time.slice(1,11)+' '+time.slice(12,20);
        return time
    }
    
}