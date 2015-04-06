package com.ep360.service.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.dao.support.DataAccessUtils;
import org.springframework.security.authentication.BadCredentialsException;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.authentication.dao.AbstractUserDetailsAuthenticationProvider;
import org.springframework.security.core.AuthenticationException;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import com.ep360.dao.api.DBDataService;
import com.ep360.data.models.DBUser;
import com.ep360.utils.ApplicationUtil;

@Component("authService")
public class AuthService extends AbstractUserDetailsAuthenticationProvider {

	@Autowired
	private DBDataService dataService;

	public DBDataService getDataService() {
		return dataService;
	}

	public void setDataService(DBDataService dataService) {
		this.dataService = dataService;
	}

	@Override
	protected void additionalAuthenticationChecks(UserDetails userDetails, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
		if (authentication.getCredentials().toString().length() > 0 && ((DBUser)userDetails).getId()!=null && ApplicationUtil.getUnSaltedPassword(userDetails.getPassword()).equals(authentication.getCredentials().toString())
				&& authenticate(userDetails.getUsername(), userDetails.getPassword())) {
		} else {
			throw new BadCredentialsException("Invalid user name / Pwd");
		}
	}

	private boolean authenticate(String username, String password) {
		boolean isAuthenticated = dataService.authenticate(username, password);
		if (isAuthenticated) {
			dataService.updateUser(username);
			return true;
		}
		return false;

	}

	@Override
	protected UserDetails retrieveUser(String username, UsernamePasswordAuthenticationToken authentication) throws AuthenticationException {
		DBUser user = getUserByUserName(username);
		if (user == null) {
			return new DBUser();
		}
		return user;
	}

	private DBUser getUserByUserName(String username) {
		List<DBUser> list = dataService.getUserCollection(username);
		if (list.size() > 0)
			return DataAccessUtils.objectResult(list, DBUser.class);
		else
			return null;
	}

}
