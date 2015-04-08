package com.ep360.controller.data;


public class VesselHoldCapacityData {
	private int no;
	private Integer vesselHoldCapacityId;
    private Double grain;
    private Double bale;
	public Integer getVesselHoldCapacityId() {
		return vesselHoldCapacityId;
	}
	public void setVesselHoldCapacityId(Integer vesselHoldCapacityId) {
		this.vesselHoldCapacityId = vesselHoldCapacityId;
	}
	public Double getGrain() {
		return grain;
	}
	public void setGrain(Double grain) {
		this.grain = grain;
	}
	public Double getBale() {
		return bale;
	}
	public void setBale(Double bale) {
		this.bale = bale;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
}
