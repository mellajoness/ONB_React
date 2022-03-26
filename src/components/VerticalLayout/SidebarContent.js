import React, { Component } from "react";

// MetisMenu
import MetisMenu from "metismenujs";
import { withRouter } from "react-router-dom";
import { Link } from "react-router-dom";

//i18n
import { withNamespaces } from 'react-i18next';

//icons 
import {ReactComponent as DashboardIcon} from "../../assets/images/dashboardicon.svg";
import {ReactComponent as TransferIcon} from "../../assets/images/transfericon.svg";
import {ReactComponent as TransactionHistoryIcon} from "../../assets/images/transactionhistoryicon.svg"; 
import {ReactComponent as AirtimeIcon} from "../../assets/images/airtimeicon.svg"; 
import {ReactComponent as BillsPaymentIcon} from "../../assets/images/billsandpaymenticon.svg"; 
import {ReactComponent as SelfServiceIcon} from "../../assets/images/selfserviceicon.svg"; 
import {ReactComponent as CardsAndChequesIcon} from "../../assets/images/cardandcheckicon.svg"; 
import {ReactComponent as BankStatementIcon} from "../../assets/images/bankstatementicon.svg"; 
import {ReactComponent as DoMoreIcon} from "../../assets/images/domoreicon.svg"; 
import {ReactComponent as MyAccountIcon} from "../../assets/images/myaccounticon.svg"; 
import {ReactComponent as SupportIcon} from "../../assets/images/supporticon.svg"; 
import {ReactComponent as LogOutIcon} from "../../assets/images/logouticon.svg"; 

import { connect } from "react-redux";
import {
    changeLayout,
    changeLayoutWidth,
    changeSidebarTheme,
    changeSidebarType,
    changePreloader
} from "../../store/actions";

class SidebarContent extends Component {

    constructor(props) {
        super(props);
        this.state = {

        };

    }

    componentDidMount() {
        this.initMenu();
    }

    componentDidUpdate(prevProps) {
        if (prevProps !== this.props) {

            if (this.props.type !== prevProps.type) {
                this.initMenu();
            }

        }
    }

    initMenu() {
        new MetisMenu("#side-menu");

        var matchingMenuItem = null;
        var ul = document.getElementById("side-menu");
        var items = ul.getElementsByTagName("a");
        for (var i = 0; i < items.length; ++i) {
            if (this.props.location.pathname === items[i].pathname) {
                matchingMenuItem = items[i];
                break;
            }
        }
        if (matchingMenuItem) {
            this.activateParentDropdown(matchingMenuItem);
        }
    }

    activateParentDropdown = item => {
        item.classList.add("active");
        const parent = item.parentElement;

        if (parent) {
            parent.classList.add("mm-active");
            const parent2 = parent.parentElement;

            if (parent2) {
                parent2.classList.add("mm-show");

                const parent3 = parent2.parentElement;

                if (parent3) {
                    parent3.classList.add("mm-active"); // li
                    parent3.childNodes[0].classList.add("mm-active"); //a
                    const parent4 = parent3.parentElement;
                    if (parent4) {
                        parent4.classList.add("mm-active");
                    }
                }
            }
            return false;
        }
        return false;
    };

    render() {
        return (
            <React.Fragment>
                <div id="sidebar-menu">

                    <ul className="metismenu list-unstyled" id="side-menu">
    
                        <li>
                            <Link to="/dashboard" className="waves-effect">
                                <DashboardIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Account Overview')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/transfer" className=" waves-effect">
                                <TransferIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Transfer')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/chat" className=" waves-effect">
                                <TransactionHistoryIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Transaction History')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/#" className="waves-effect">
                                <AirtimeIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Airtime')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/#" className="waves-effect">
                                <BillsPaymentIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Bills & Payment')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/kanban-board" className=" waves-effect">
                                <SelfServiceIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Self Service')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/kanban-board" className=" waves-effect">
                                <CardsAndChequesIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Cards & Cheques')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/kanban-board" className=" waves-effect">
                                <BankStatementIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Bank Statement')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/#" className="waves-effect">
                                <DoMoreIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Do More')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/#" className="waves-effect">
                                <MyAccountIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('My Account')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/#" className="waves-effect">
                                <SupportIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Support')}</span>
                            </Link>
                        </li>

                        <li>
                            <Link to="/login" className="waves-effect">
                                <LogOutIcon fill="inherit" height="17" width="17" className="icon" />{" "}
                                <span className="ms-1">{this.props.t('Log Out')}</span>
                            </Link>
                        </li>


                    </ul>
                </div>
            </React.Fragment>
        );
    }
}

const mapStatetoProps = state => {
    return { ...state.Layout };
};

export default withRouter(connect(mapStatetoProps, {
    changeLayout,
    changeSidebarTheme,
    changeSidebarType,
    changeLayoutWidth,
    changePreloader
})(withNamespaces()(SidebarContent)));
