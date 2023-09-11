import React from "react";

import finki_icon from "../../images/finki_icon.png"

const FooterComponent = () => {
    return(
        <div>
            <footer>
                <span>Петар Костадиновски  |  Веб програмирање ФИНКИ</span>
                <img src={finki_icon} style={{"height":"30px","width":"30px", "borderRadius":"50%","marginLeft":"5px"}}/>
            </footer>
        </div>
    )
}

export default FooterComponent