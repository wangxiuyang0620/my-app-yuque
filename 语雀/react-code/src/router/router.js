import Login from '../views/login'
import Ind from '../views/ind'
import Home from '../views/home'
import Register from '../views/register'
import People from '../views/people/people'
import Addpeople from '../views/people/addpeople'
import Addknown from '../views/known/addknown'
import Addlist from '../views/list/addlist'
import List from '../views/list/list'
import Known from '../views/known/known'


const routerConfig =[
    {
        path:"/ind",
        component:Ind
    },{
        path:"/login",
        component:Login
    },{
        path:"/register",
        component:Register
    },{
        path:"/home",
        component:Home,
        children:[
            {
              path:"/home/list",
              component:List
            },{
                path:"/home/addlist",
                component:Addlist
            },{
                path:"/home/known",
                component:Known
            },{
                path:'/home/addknown',
                component:Addknown
            },{
                path:'/home/people',
                component:People
            },{
                path:'/home/addpeople',
                component:Addpeople
            },{
                from :'/home',
                to:"/home/list"
            }
        ]
    },,{
        from :'/',
        to:"/ind"
    }
]
 export default routerConfig 
