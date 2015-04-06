package com.ep360.service.impl;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.ep360.dao.api.DBDataService;
import com.ep360.data.models.DBUser;
import com.ep360.service.api.LoginService;
import com.ep360.utils.ApplicationUtil;

@Service("loginService")
public class LoginServiceImpl implements LoginService{

	@Autowired
	private DBDataService dataService;
	
	public DBUser findUser(String username) {
		return dataService.getUser(username);
	}

	public void addUser(String username, String firstName, String lastName,
			String saltedPassword) {
		dataService.addUser(username, firstName, lastName, saltedPassword);

	}

	public boolean authenticateUser(String username, String password) {
		return dataService.authenticate(username, password);
	}

	public void updateUser(String username, String password) {
		dataService.updateUser(username, password);
	}

	public void updateLogout(HttpServletRequest servletRequest,
			HttpServletResponse servletResponse) {
		String username = ApplicationUtil.getValueFromCookie(servletRequest,
				"username");
		dataService.updateLogout(username);
//		ApplicationUtil.deleteCookie("username", servletRequest,
//				servletResponse);
//		ApplicationUtil.deleteCookie("type", servletRequest, servletResponse);
//		String aa = ApplicationUtil.getValueFromCookie(servletRequest,
//				"username");
//		String bb = ApplicationUtil.getValueFromCookie(servletRequest, "type");
//		System.out.println("");
	}

}
