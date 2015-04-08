package com.ep360.controller.data;


public class VesselHoldDimensionData {
	private int no;
	private Integer vesselHoldDimId;
    private Double length;
    private Double beam;
	public Integer getVesselHoldDimId() {
		return vesselHoldDimId;
	}
	public void setVesselHoldDimId(Integer vesselHoldDimId) {
		this.vesselHoldDimId = vesselHoldDimId;
	}
	public Double getLength() {
		return length;
	}
	public void setLength(Double length) {
		this.length = length;
	}
	public Double getBeam() {
		return beam;
	}
	public void setBeam(Double beam) {
		this.beam = beam;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
}
