package com.ep360.facades.voyage.impl;

import java.util.ArrayList;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ep360.controller.data.EstimateData;
import com.ep360.controller.data.VesselMasterData;
import com.ep360.controller.data.VoyageVesselData;
import com.ep360.converters.estimate.EstimateConverter;
import com.ep360.converters.vessel.VesselMasterConverter;
import com.ep360.converters.voyage.VoyageVesselConverter;
import com.ep360.data.models.Demand;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;
import com.ep360.facade.voyage.VoyageFacade;
import com.ep360.service.api.VoyageService;

@Component("vesselFacade")
public class VoyageFacadeImpl implements VoyageFacade{
	
	@Autowired
	private VoyageService voyageService;

	@Autowired
	private VoyageVesselConverter voyageVesselConverter;
	
	@Autowired
	private EstimateConverter estimateConverter;
	
	@Autowired
	private VesselMasterConverter vesselMasterConverter;
	
	public List<VoyageVesselData> getVoyageVesselList(){
		List<VoyHeader> voyageVesselList = voyageService.getVoyageHeaderData();	
		List<VoyageVesselData> dataList = new ArrayList<VoyageVesselData>();
		if(voyageVesselList!=null && voyageVesselList.size()>0){
			for(VoyHeader vessel:voyageVesselList){
				dataList.add(voyageVesselConverter.convert(vessel));
			}
		}
		return dataList;
	}

	@Override
	public List<VoyHeader> getVoyageHeaderData() {
		return voyageService.getVoyageHeaderData();
	}

	@Override
	public List<VesselMasterData> getVoyageMasterData() {
		List<VesselMaster> vesselMasterList = voyageService.getVesselMasterData();
		List<VesselMasterData> dataList = new ArrayList<VesselMasterData>();
		if(vesselMasterList!=null && vesselMasterList.size()>0){
			for(VesselMaster vesselMaster:vesselMasterList){
				dataList.add(vesselMasterConverter.convert(vesselMaster));
			}
		}
		return dataList;
	}

	@Override
	public Map<String, Object> saveData(Map<Object, Object> reqData,
			String username) {
		voyageService.saveData(reqData, username);
		return null;
	}

	@Override
	public Map<String, Object> saveVesselData(Map<Object, Object> reqData,
			String username) {
		voyageService.saveVesselData(reqData, username);
		return null;
	}

	@Override
	public List<Demand> getDemands() {
		return voyageService.getDemands();
	}

	@Override
	public EstimateData getVoyageMasterData(int voyNo) {
		VoyHeader voyHeader = voyageService.getVoyageHeaderData(voyNo);
		return estimateConverter.convert(voyHeader);
	}
}
