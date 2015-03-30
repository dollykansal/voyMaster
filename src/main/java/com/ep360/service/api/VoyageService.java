package com.ep360.service.api;

import java.util.List;
import java.util.Map;

import com.ep360.data.models.Demand;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;
import com.ep360.data.models.VoyageVessel;

public interface VoyageService {

	public List<VesselMaster> getVesselMasterData();

	public List<VoyHeader> getVoyageHeaderData();
	
	public VoyHeader getVoyageHeaderData(int voyNo);

	public void saveData(Map<Object, Object> reqData, String username);
	
	public List<Demand> getDemands();
}
