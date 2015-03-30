package com.ep360.controller.data;

public class VesselData3 {

	private String vesselName;
	
	private String dieselType;
	
	private double sea;
	
	private double idle;
	
	private double work;

	public VesselData3(String vesselName, String dieselType, double sea,
			double idle, double work) {
		super();
		this.vesselName = vesselName;
		this.dieselType = dieselType;
		this.sea = sea;
		this.idle = idle;
		this.work = work;
	}

	public String getVesselName() {
		return vesselName;
	}

	public void setVesselName(String vesselName) {
		this.vesselName = vesselName;
	}

	public String getDieselType() {
		return dieselType;
	}

	public void setDieselType(String dieselType) {
		this.dieselType = dieselType;
	}

	public double getSea() {
		return sea;
	}

	public void setSea(double sea) {
		this.sea = sea;
	}

	public double getIdle() {
		return idle;
	}

	public void setIdle(double idle) {
		this.idle = idle;
	}

	public double getWork() {
		return work;
	}

	public void setWork(double work) {
		this.work = work;
	}
}
