package com.ep360.facade.voyage;

import java.util.List;
import java.util.Map;

import com.ep360.controller.data.EstimateData;
import com.ep360.controller.data.VesselMasterData;
import com.ep360.controller.data.VoyageVesselData;
import com.ep360.data.models.Demand;
import com.ep360.data.models.VoyHeader;

public interface VoyageFacade {

	public List<VoyageVesselData> getVoyageVesselList();
	
	public List<VoyHeader> getVoyageHeaderData();
	
	public List<VesselMasterData> getVoyageMasterData();
	
	public EstimateData getVoyageMasterData(int voyNo);
	
	public Map<String,Object> saveData(Map<Object,Object> reqData, String username);
	
	public Map<String,Object> saveVesselData(Map<Object,Object> reqData, String username);
	
	public List<Demand> getDemands();
}
