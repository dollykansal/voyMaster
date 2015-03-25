package com.ep360.service.api;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import com.ep360.data.models.DBUser;

public interface LoginService {
	
	public DBUser findUser(String username);
	
	public void addUser(String username, String firstName, String lastName, String saltedPassword);
	
	public void updateUser(String username, String password);
	
	public boolean authenticateUser(String username, String password);
	
	public void updateLogout(HttpServletRequest servletRequest, HttpServletResponse servletResponse);
}
