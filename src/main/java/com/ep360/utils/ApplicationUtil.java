package com.ep360.utils;

import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.Cookie;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.apache.commons.lang.RandomStringUtils;
import org.springframework.security.crypto.codec.Base64;

public class ApplicationUtil {

	public static String getEncoded(String id) {
		return new String(Base64.encode(id.getBytes()));
	}

	public static String getEncoded(int id) {
		return getEncoded(String.valueOf(id));
	}

	public static String getDecoded(String key) {
		return new String(Base64.decode(key.getBytes()));
	}

	public static String getSaltedPassword(String password) {
		String salt = getRandomString();
		return getEncoded(salt.substring(0, 5) + password + salt.substring(5, 10));
	}

	private static String getRandomString() {
		String abc = "abcdefghijklmnopqrstuvwxyz";
		RandomStringUtils util = new RandomStringUtils();
		String salt = util.random(10, abc.toCharArray());
		return salt;
	}

	public static void main(String[] args) {
		System.out.println(getUnSaltedPassword(getSaltedPassword("rahul")));
	}

	public static String getUnSaltedPassword(String newpassword) {
		String password = getDecoded(newpassword);
		String unSaltedPassword = password.substring(5, password.length() - 5);
		return unSaltedPassword;
	}

	public static Map<Password, String> getRandomPassowrd() {
		Map<Password, String> passwordMap = new HashMap<Password, String>();
		String randomString = getRandomString();
		String password = getSaltedPassword(randomString);
		passwordMap.put(Password.ORIGINAL, randomString);
		passwordMap.put(Password.SALTED, password);
		return passwordMap;
	}

	public static String getValueFromCookie(HttpServletRequest request, String cookieName) {
		String cookieValue = "";
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (int k = 0; k < cookies.length; k++) {
				if (cookies[k].getName().equals(cookieName)) {
					cookieValue = cookies[k].getValue();
					break;
				}
			}
		}
		return ("undefined".equals(cookieValue) || "".equals(cookieValue) || null == cookieValue) ? null : cookieValue;
	}
	
	public static void deleteCookie(String cookieName,HttpServletRequest request, HttpServletResponse response){
		Cookie[] cookies = request.getCookies();
		if (cookies != null) {
			for (int k = 0; k < cookies.length; k++) {
				if (cookies[k].getName().equals(cookieName)) {
					cookies[k].setValue("");
					cookies[k].setPath("/");
					cookies[k].setSecure(false);
					cookies[k].setMaxAge(-1);
					response.addCookie(cookies[k]);
				}
			}
		}
	}

	public static void setCookie(HttpServletRequest request, HttpServletResponse response, String cookieName, String cookieValue) {
		int i = 0;
		int COOKIE_EXPIRY_TIME = 2592000;
		Cookie[] cookies1 = request.getCookies();
		if (cookies1 != null) {
			for (int k = 0; k < cookies1.length; k++) {
				if (cookies1[k].getName().equals(cookieName)) {
					cookies1[k].setValue(cookieValue);
					cookies1[k].setPath("/");
					cookies1[k].setSecure(false);
					cookies1[k].setMaxAge(COOKIE_EXPIRY_TIME);
					i = k;
				}
			}
			Cookie cookie = new Cookie(cookieName, cookieValue);
			if (i == 0) {
				cookie.setPath("/");
				cookie.setSecure(false);
				cookie.setMaxAge(COOKIE_EXPIRY_TIME);
				response.addCookie(cookie);
			}
		}
		if (i > 0) {
			response.addCookie(cookies1[i]);
		}
	}
}
