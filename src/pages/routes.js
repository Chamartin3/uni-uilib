
import Buttons from './ButonPage.jsx'
import Cards from './CardsPage'
import Dialogs from './DialogsPage'
import Fields from './FieldsPage'
import Text from './TypographyPage'
import Main from './MainPage'

const paths = [
  {
    name:'Home',
    component:Main,
    path:'/'
  },  
  {
    name:'Texto',
    component:Text,
    path:'/text'
  },
  {
    name:'Botones',
    component:Buttons,
    path:'/botones'
  },
  {
    name:'Cards',
    component:Cards,
    path:'/cards'
  },
  {
    name:'Dialogs',
    component:Dialogs,
    path:'/dialogs'
  },
  {
    name:'Fields',
    component:Fields,
    path:'/formularios'
  }  

]

export default paths