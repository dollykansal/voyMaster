package com.ep360.controller.data;

import java.util.List;

public class EstimateData {

	private VesselData vesselData;
	
	private List<CargoData> cargoData;

	private List<PortRotationData> portData;
	
	private VoyHeaderData voyHeaderData;

	public VesselData getVesselData() {
		return vesselData;
	}

	public void setVesselData(VesselData vesselData) {
		this.vesselData = vesselData;
	}

	public List<CargoData> getCargoData() {
		return cargoData;
	}

	public void setCargoData(List<CargoData> cargoData) {
		this.cargoData = cargoData;
	}

	public List<PortRotationData> getPortData() {
		return portData;
	}

	public void setPortData(List<PortRotationData> portData) {
		this.portData = portData;
	}

	public VoyHeaderData getVoyHeaderData() {
		return voyHeaderData;
	}

	public void setVoyHeaderData(VoyHeaderData voyHeaderData) {
		this.voyHeaderData = voyHeaderData;
	}
}
