import React from 'react'
import './footer.css'

function Footer() {
    return (
        <div className="footer">
            <div className="footer__note">
                Made with <img src={require("../../assets/heart.gif").default} alt=""/> from India.
            </div>
            <div className="footer__image">
                <img src={require("../../assets/foot.jpg").default} alt=""/>
            </div>
        </div>
    )
}

export default Footer
