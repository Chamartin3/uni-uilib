
import Buttons from './ButonPage.jsx'
import Cards from './CardsPage.jsx'
import Dialogs from './DialogsPage.jsx'
import Fields from './FieldsPage.jsx'
import Text from './TypographyPage.jsx'
import Main from './MainPage.jsx'

const paths = [
  {
    name:'Home',
    path:'',
    component:Main
  },  
  {
    name:'Texto',
    path:'/parrafos',
    component:Text
  },
  {
    name:'Botones',
    path:'/botones',
    component:Buttons
  },
  {
    name:'Tarjetas',
    path:'/tarjetas',
    component:Cards
  },
  {
    name:'Ventanas y Notificaciones',
    path:'/notifiaciones',
    component:Dialogs
  },
  // {
  //   name:'Formularios',
  //   path:'/formularios',
  //   component:Fields
  // }  

]

export default paths