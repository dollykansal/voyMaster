package com.ep360.controller.data;

import java.math.BigDecimal;
import java.util.Date;

public class PortRotationData {
	private int portRotId;
	private String cType;
	private String coord;
	private BigDecimal distEca;
	private BigDecimal wf;
	private BigDecimal spd;
	private BigDecimal sea;
	private BigDecimal ldrate;
	private BigDecimal idle;
	private BigDecimal work;
	private BigDecimal dem;
	private BigDecimal des;
	private Date arrival;
	private Date departure;
	public int getPortRotId() {
		return portRotId;
	}
	public void setPortRotId(int portRotId) {
		this.portRotId = portRotId;
	}
	public String getcType() {
		return cType;
	}
	public void setcType(String cType) {
		this.cType = cType;
	}
	public String getCoord() {
		return coord;
	}
	public void setCoord(String coord) {
		this.coord = coord;
	}
	public BigDecimal getDistEca() {
		return distEca;
	}
	public void setDistEca(BigDecimal distEca) {
		this.distEca = distEca;
	}
	public BigDecimal getWf() {
		return wf;
	}
	public void setWf(BigDecimal wf) {
		this.wf = wf;
	}
	public BigDecimal getSpd() {
		return spd;
	}
	public void setSpd(BigDecimal spd) {
		this.spd = spd;
	}
	public BigDecimal getSea() {
		return sea;
	}
	public void setSea(BigDecimal sea) {
		this.sea = sea;
	}
	public BigDecimal getLdrate() {
		return ldrate;
	}
	public void setLdrate(BigDecimal ldrate) {
		this.ldrate = ldrate;
	}
	public BigDecimal getIdle() {
		return idle;
	}
	public void setIdle(BigDecimal idle) {
		this.idle = idle;
	}
	public BigDecimal getWork() {
		return work;
	}
	public void setWork(BigDecimal work) {
		this.work = work;
	}
	public BigDecimal getDem() {
		return dem;
	}
	public void setDem(BigDecimal dem) {
		this.dem = dem;
	}
	public BigDecimal getDes() {
		return des;
	}
	public void setDes(BigDecimal des) {
		this.des = des;
	}
	public Date getArrival() {
		return arrival;
	}
	public void setArrival(Date arrival) {
		this.arrival = arrival;
	}
	public Date getDeparture() {
		return departure;
	}
	public void setDeparture(Date departure) {
		this.departure = departure;
	}
	
}
