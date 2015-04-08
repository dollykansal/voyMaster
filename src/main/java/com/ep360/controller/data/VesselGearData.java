package com.ep360.controller.data;


public class VesselGearData {
	private int no;
	private Integer vesselGearId;
    private String gearName;
    private Double weightMt;
    private Double weightEa;
    private String gearType;
	public Integer getVesselGearId() {
		return vesselGearId;
	}
	public void setVesselGearId(Integer vesselGearId) {
		this.vesselGearId = vesselGearId;
	}
	public String getGear() {
		return gearName;
	}
	public void setGear(String gear) {
		this.gearName = gear;
	}
	public Double getWeightMt() {
		return weightMt;
	}
	public void setWeightMt(Double weightMt) {
		this.weightMt = weightMt;
	}
	public Double getWeightEa() {
		return weightEa;
	}
	public void setWeightEa(Double weightEa) {
		this.weightEa = weightEa;
	}
	public String getGearType() {
		return gearType;
	}
	public void setGearType(String gearType) {
		this.gearType = gearType;
	}
	public int getNo() {
		return no;
	}
	public void setNo(int no) {
		this.no = no;
	}
}
