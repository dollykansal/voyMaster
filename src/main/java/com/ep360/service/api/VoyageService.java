package com.ep360.service.api;

import java.util.List;
import java.util.Map;

import com.ep360.data.models.Demand;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;

public interface VoyageService {

	public List<VesselMaster> getVesselMasterData();

	public List<VoyHeader> getVoyageHeaderData();

	public void saveData(Map<Object, Object> reqData);
	
	public List<Demand> getDemands();
}
