package com.ep360.facade.voyage;

import java.util.List;
import java.util.Map;

import com.ep360.controller.data.VoyageVesselData;
import com.ep360.data.models.Demand;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;

public interface VoyageFacade {

	public List<VoyageVesselData> getVoyageVesselList();
	
	public List<VoyHeader> getVoyageHeaderData();
	
	public List<VesselMaster> getVoyageMasterData();
	
	public Map<String,Object> saveData(Map<Object,Object> reqData, String username);
	
	public List<Demand> getDemands();
}
