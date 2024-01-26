'use client'
import { usePathname } from 'next/navigation'
function ClientButton(props) {    
  const path = usePathname()  
  const {id,title,classlist} = props
  const scrollElementToView = (id) => {
    document.getElementById(id).scrollIntoView()    
  }
    return (
      <>
      {path == '/' || title=='Contact Us' ? <Link className={classlist} href={`#${id}`}>{title}</Link> :null}
      </>
    )
}

export default ClientButton