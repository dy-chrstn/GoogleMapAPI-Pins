import { useState } from 'react'
import Header from '../../components/admin/header';
import Menu from '../../components/admin/Menu/menu';
import MiniMenu from '../../components/admin/Menu/miniMenu';
import EmailTemplateTable from '../../components/Dashboard/Tables/EmailTemplate/EmailTemplateTable';

const EmailTemplate: React.FC = () => {

    const [menuOpen, setMenuOpen] = useState(false)
    const openMenu = () => {
      if(!menuOpen){
        setMenuOpen(true)
      } else
      setMenuOpen(false)
    }

    
return (
    <div className='w-screen h-screen'>
        <Header title="Email Template" onClick = {openMenu}/> 
        <div className='flex flex-row'>
            <div className={`${menuOpen ?'w-[10%]' : 'w-[10%]'} `}>
              {menuOpen ? <Menu title={"Email Template"}/> : <MiniMenu title={"Email Template"}/> }
            </div>
          
            <div className='h-full w-[90%] mx-10  mt-5 '>
              <EmailTemplateTable/>
            </div>
             
          
        </div>

    </div>
  );

}


export default EmailTemplate;

