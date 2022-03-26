import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

// Import menuDropdown
import ProfileMenu from "../CommonForBoth/TopbarDropdown/ProfileMenu";
import { Button } from "reactstrap";
//Import i18n
import { withNamespaces } from "react-i18next";

// Redux Store
import { toggleRightSidebar } from "../../store/actions";

//Import logo Images
import fidelitylogo from "../../assets/images/Logo.svg";
import fidelitylogoname from "../../assets/images/fidelitylogoname.svg";



class Header extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isSearch: false,
            isSocialPf: false
        };
        this.toggleMenu = this.toggleMenu.bind(this);
        this.toggleRightbar = this.toggleRightbar.bind(this);
        this.toggleFullscreen = this.toggleFullscreen.bind(this);
    }
    /**
     * Toggle sidebar
     */
    toggleMenu() {
        this.props.toggleMenuCallback();
    }

    /**
     * Toggles the sidebar
     */
    toggleRightbar() {
        this.props.toggleRightSidebar();
    }


    toggleFullscreen() {
        if (
            !document.fullscreenElement &&
      /* alternative standard method */ !document.mozFullScreenElement &&
            !document.webkitFullscreenElement
        ) {
            // current working methods
            if (document.documentElement.requestFullscreen) {
                document.documentElement.requestFullscreen();
            } else if (document.documentElement.mozRequestFullScreen) {
                document.documentElement.mozRequestFullScreen();
            } else if (document.documentElement.webkitRequestFullscreen) {
                document.documentElement.webkitRequestFullscreen(
                    Element.ALLOW_KEYBOARD_INPUT
                );
            }
        } else {
            if (document.cancelFullScreen) {
                document.cancelFullScreen();
            } else if (document.mozCancelFullScreen) {
                document.mozCancelFullScreen();
            } else if (document.webkitCancelFullScreen) {
                document.webkitCancelFullScreen();
            }
        }
    }

    render() {
        return (
            <React.Fragment>
                <header id="page-topbar">
                    <div className="navbar-header">
                        <div className="d-flex">

                            <div className="navbar-brand-box">
                                <Link to="#" className="logo logo-light">
                                    <span className="logo-sm">
                                        <img src={fidelitylogo}  alt="" height="22" />
                                    </span>
                                    <span className="logo-lg">
                                        <img src={fidelitylogoname} alt="" height="20" />
                                    </span>
                                </Link>

                            </div>

                            <Button size="sm" color="none" type="button" onClick={this.toggleMenu} className="px-3 font-size-24 header-item waves-effect" id="vertical-menu-btn">
                                <i className="ri-menu-2-line align-middle"></i>
                            </Button>
                            <div className="menuToggle" style={{display:'flex',alignItems:'center',paddingTop:'5px'}}>
                                <div style={{color:'#0D2565',fontSize:'1.1em',paddingTop:'5px'}}>Welcome back,</div> 
                                <div style={{color:'#0D2565',fontSize:'1.4em',paddingLeft:'0.3em',fontWeight:'bold',fontFamily:'lato'}}>Atinuoluwadide</div>
                            </div>

                          

                         
                        </div>

                        <div className="d-flex">
                         <ProfileMenu /> 
                        </div>
                    </div>
                </header>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    const { layoutType } = state.Layout;
    return { layoutType };
};

export default connect(mapStatetoProps, { toggleRightSidebar })(withNamespaces()(Header));
