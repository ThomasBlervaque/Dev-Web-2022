import React from 'react';
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';



function deconnexion(){
  sessionStorage.clear();
  window.location.assign("http://localhost:3000");
}

export default function ListeDeroulante(props) {
  return (
    <UncontrolledDropdown>
      <DropdownToggle caret>
          Mon profil
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem onClick={()=>{window.location.assign('http://localhost:3000/myticket')}}>Mes tickets</DropdownItem>
        <DropdownItem divider />
        <DropdownItem onClick={()=>{deconnexion()}}>Déconnexion</DropdownItem>
      </DropdownMenu>
    </UncontrolledDropdown>
  );
}