"use client";

require("../polyfill");

import { useState, useEffect } from "react";

import "./login.css";

import BotIcon from "../icons/bot.svg";
import LoadingIcon from "../icons/three-dots.svg";

import { getCSSVar, useMobileScreen } from "../utils";

import dynamic from "next/dynamic";
import { Path, SlotID } from "../constant";
import { ErrorBoundary } from "./error";

import {
  HashRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import { SideBar } from "./sidebar";
import { useAppConfig } from "../store/config";
import { Dashboard } from "./dashboard";
import { ContentManagement } from "./contentManagement";
import { UserManagement } from "./userManagement";
import {MyButtonProps} from "./home";

export const Login: React.FC<MyButtonProps> = ({onSubmit}) => {

  
  return (
    
    <div className="container">
    <div className="forms">
      <div className="form login">
        <span className="title">Login</span>
        <form onSubmit={onSubmit}>
          <div className="input-field">
            <input type="text" name="username" placeholder="username" />
            <i className="uil uil-envelope icon" />
          </div>
          <div className="input-field">
            <input
              type="password"
              name="password"
              className="password"
              placeholder="password"
              
            />
            <i className="uil uil-lock icon" />
            <i className="uil uil-eye-slash showHidePw" />
          </div>
          <div className="checkbox-text">
            <div className="checkbox-content">
              <input type="checkbox" id="logCheck" />
              <label htmlFor="logCheck" className="text">
                Remember me
              </label>
            </div>
            <a href="#" className="text">
              Forgot password?
            </a>
          </div>
          <div className="input-field button">
            <button className="button" type="submit">Login</button>
          </div>
        </form>
        
      </div>
      
    </div>
  </div>
  
  ); 
}


