package com.ep360.controllers;

import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.Authentication;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ep360.data.models.DBUser;
import com.ep360.service.api.LoginService;
import com.ep360.utils.ApplicationUtil;
import com.ep360.utils.Password;

@Controller
public class LoginController {

	@Autowired
	private LoginService loginService;

	@RequestMapping("/changePassword")
	public ModelAndView changePassword() {
		ModelAndView modelAndView = new ModelAndView("passwordChange");
		return modelAndView;
	}

	@RequestMapping("/register")
	public ModelAndView register() {
		ModelAndView modelAndView = new ModelAndView("registration");
		return modelAndView;
	}

	@RequestMapping("/checkUser")
	public @ResponseBody
	String checkUser(@RequestParam("username") String username) {
		DBUser user = loginService.findUser(username);
		if (user != null) {
			return "Y";
		}
		return "N";
	}

	@RequestMapping("/add")
	public ModelAndView addUser(@RequestParam("username") String username, @RequestParam("firstName") String firstName, @RequestParam("lastName") String lastName,
			@RequestParam("password") String password) {
		ModelAndView modelAndView = new ModelAndView("login");
		String saltedPassword = ApplicationUtil.getSaltedPassword(password);
		loginService.addUser(username, firstName, lastName, saltedPassword);
		modelAndView.addObject("new", true);
		return modelAndView;
	}
	
	@RequestMapping("/reset")
	public ModelAndView reset(HttpServletRequest servletRequest, HttpServletResponse servletResponse,Authentication auth) {
		ModelAndView modelAndView = new ModelAndView("home");
		if(auth.isAuthenticated()){
			Map<Password, String> map = ApplicationUtil.getRandomPassowrd();
			loginService.updateUser(((DBUser)auth.getPrincipal()).getUsername(), map.get(Password.SALTED));
			modelAndView.addObject("password", map.get(Password.ORIGINAL));
			modelAndView.addObject("fullName", ((DBUser)auth.getPrincipal()).getFullName());
		}
		modelAndView.addObject("reset", true);
		modelAndView.addObject("firstLogin", false);
		return modelAndView;
	}

	@RequestMapping("/passwordChange")
	public ModelAndView changedPassword(@RequestParam("username") String username, @RequestParam("oldpassword") String oldpassword, @RequestParam("newpassword") String newpassword) {
		ModelAndView modelAndView = new ModelAndView("login");
		String oldPassword = ApplicationUtil.getUnSaltedPassword(oldpassword);
		String newPassword = ApplicationUtil.getUnSaltedPassword(newpassword);
		boolean isValidUser = loginService.authenticateUser(username, oldpassword);
		if (isValidUser) {
			loginService.updateUser(username, newpassword);
			modelAndView.addObject("changed", true);
			return modelAndView;
		} else {
			modelAndView = new ModelAndView("passwordChange");
		}
		return modelAndView;
	}

	@RequestMapping("/login")
	public ModelAndView getLogin() {
		ModelAndView modelAndView = new ModelAndView("login");
		return modelAndView;
	}

	@RequestMapping("/failedLogin")
	public ModelAndView getFailedLogin() {
		ModelAndView view = new ModelAndView("login");
		view.addObject("Failed", true);
		return view;
	}
	
	@RequestMapping("/updateLogout")
	public ModelAndView getTimeStampUpdatedForLogout(HttpServletRequest servletRequest, HttpServletResponse servletResponse, Authentication auth) {
//		loginService.updateLogout(servletRequest,servletResponse);
		ModelAndView view = new ModelAndView("redirect:login");
		return view;
	}
	
	@RequestMapping("/refresh")
	public @ResponseBody boolean refreshSession(HttpServletRequest servletRequest, HttpServletResponse servletResponse) {
		return true;
	}
}
