package com.ep360.controller.data;

import java.math.BigDecimal;

public class CargoData {
	private int cargoId;
	private String account;
	private String cargoNam;
	private String loadPort;
	private String distPort;
	private BigDecimal qty;
	private BigDecimal frt;
	private BigDecimal rev;
	private BigDecimal term;
	private BigDecimal addComm;
	private BigDecimal brkge;
	private BigDecimal frtTax;
	private BigDecimal linTerm;
	public int getCargoId() {
		return cargoId;
	}
	public void setCargoId(int cargoId) {
		this.cargoId = cargoId;
	}
	public String getAccount() {
		return account;
	}
	public void setAccount(String account) {
		this.account = account;
	}
	public String getCargoNam() {
		return cargoNam;
	}
	public void setCargoNam(String cargoNam) {
		this.cargoNam = cargoNam;
	}
	public String getLoadPort() {
		return loadPort;
	}
	public void setLoadPort(String loadPort) {
		this.loadPort = loadPort;
	}
	public String getDistPort() {
		return distPort;
	}
	public void setDistPort(String distPort) {
		this.distPort = distPort;
	}
	public BigDecimal getQty() {
		return qty;
	}
	public void setQty(BigDecimal qty) {
		this.qty = qty;
	}
	public BigDecimal getFrt() {
		return frt;
	}
	public void setFrt(BigDecimal frt) {
		this.frt = frt;
	}
	public BigDecimal getRev() {
		return rev;
	}
	public void setRev(BigDecimal rev) {
		this.rev = rev;
	}
	public BigDecimal getTerm() {
		return term;
	}
	public void setTerm(BigDecimal term) {
		this.term = term;
	}
	public BigDecimal getAddComm() {
		return addComm;
	}
	public void setAddComm(BigDecimal addComm) {
		this.addComm = addComm;
	}
	public BigDecimal getBrkge() {
		return brkge;
	}
	public void setBrkge(BigDecimal brkge) {
		this.brkge = brkge;
	}
	public BigDecimal getFrtTax() {
		return frtTax;
	}
	public void setFrtTax(BigDecimal frtTax) {
		this.frtTax = frtTax;
	}
	public BigDecimal getLinTerm() {
		return linTerm;
	}
	public void setLinTerm(BigDecimal linTerm) {
		this.linTerm = linTerm;
	}
}
