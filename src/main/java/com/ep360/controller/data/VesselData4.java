package com.ep360.controller.data;

public class VesselData4 {

	private String vesselName;
	
	private double fuelType;
	
	private double ballast;
	
	private double laden;
	
	private double idle;
	
	private double work;

	public VesselData4(String vesselName, double fuelType, double ballast,
			double laden, double idle, double work) {
		super();
		this.vesselName = vesselName;
		this.fuelType = fuelType;
		this.ballast = ballast;
		this.laden = laden;
		this.idle = idle;
		this.work = work;
	}

	public String getVesselName() {
		return vesselName;
	}

	public void setVesselName(String vesselName) {
		this.vesselName = vesselName;
	}

	public double getFuelType() {
		return fuelType;
	}

	public void setFuelType(double fuelType) {
		this.fuelType = fuelType;
	}

	public double getBallast() {
		return ballast;
	}

	public void setBallast(double ballast) {
		this.ballast = ballast;
	}

	public double getLaden() {
		return laden;
	}

	public void setLaden(double laden) {
		this.laden = laden;
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
