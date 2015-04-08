package com.ep360.converters.vessel;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ep360.controller.data.VesselGearData;
import com.ep360.controller.data.VesselHatchDimensionData;
import com.ep360.controller.data.VesselHoldCapacityData;
import com.ep360.controller.data.VesselHoldDimensionData;
import com.ep360.controller.data.VesselMasterData;
import com.ep360.controller.data.VesselMasterDatails;
import com.ep360.data.models.VesselData;
import com.ep360.data.models.VesselGear;
import com.ep360.data.models.VesselHatchDimension;
import com.ep360.data.models.VesselHoldCapacity;
import com.ep360.data.models.VesselHoldDimension;
import com.ep360.data.models.VesselMaster;
import com.ep360.service.api.Converter;
import com.ep360.service.impl.AbstractConverter;

@Component("vesselMasterConverter")
public class VesselMasterConverter extends AbstractConverter<VesselMaster, VesselMasterData>{

	@Autowired
	private Converter<VesselData, VesselMasterDatails> vesselDetailsConverter;
	
	@Autowired
	private Converter<VesselHoldDimension, VesselHoldDimensionData> vesselHoDimConverter;
	
	@Autowired
	private Converter<VesselHatchDimension, VesselHatchDimensionData> vesselHaDimConverter;
	
	@Autowired
	private Converter<VesselGear, VesselGearData> vesselGearConverter;
	
	@Autowired
	private Converter<VesselHoldCapacity, VesselHoldCapacityData> vesselHlCapConverter;
	
	@Override
	protected VesselMasterData createTarget() {
		return new VesselMasterData();
	}

	@Override
	public void populate(VesselMaster source, VesselMasterData target) {
		target.setBallast(source.getBallast());
		target.setDoDieselType(source.getDoDieselType());
		target.setDoIdle(source.getDoIdle());
		target.setDoSea(source.getDoSea());
		target.setDoWork(source.getDoWork());
		target.setDraft(source.getDraft());
		target.setDwt(source.getDwt());
		target.setFoBallast(source.getFoBallast());
		target.setFoIdle(source.getFoIdle());
		target.setFoLaden(source.getFoLaden());
		target.setFoType(source.getFoType());
		target.setFoWork(source.getFoWork());
		target.setLaden(source.getLaden());
		target.setLaycan(source.getLaycan());
		target.setLsdoDieselType(source.getLsdoDieselType());
		target.setLsdoIdle(source.getLsdoIdle());
		target.setLsdoSea(source.getLsdoSea());
		target.setLsdoWork(source.getLsfoWork());
		target.setLsfoBallast(source.getLsfoBallast());
		target.setLsfoIdle(source.getLsfoIdle());
		target.setLsfoLaden(source.getLsfoLaden());
		target.setLsfoType(source.getLsfoType());
		target.setLsfoWork(source.getLsfoWork());
		target.setVesselId(source.getVesselId());
		target.setVesselName(source.getVesselName());
		target.setVesselType(source.getVesselType());
		target.setVesselMasterDetails(vesselDetailsConverter.convert(source.getVesselDatas()));
		List<VesselGearData> gearDataList = new ArrayList<VesselGearData>();
		List<VesselHoldDimensionData> holdDimList = new ArrayList<VesselHoldDimensionData>();
		List<VesselHatchDimensionData> hatDimList = new ArrayList<VesselHatchDimensionData>();
		List<VesselHoldCapacityData> holdCapList = new ArrayList<VesselHoldCapacityData>();
		int i=1;
		for(VesselGear gear:source.getVesselGears()){
			VesselGearData data = vesselGearConverter.convert(gear);
			data.setNo(i);
			gearDataList.add(data);
			i++;
		}
		i=1;
		for(VesselHoldDimension holdDim:source.getVesselHoldDimensions()){
			VesselHoldDimensionData data = vesselHoDimConverter.convert(holdDim);
			data.setNo(i);
			holdDimList.add(data);
			i++;
		}
		i=1;
		for(VesselHatchDimension haDim:source.getVesselHatchDimensions()){
			VesselHatchDimensionData data = vesselHaDimConverter.convert(haDim);
			data.setNo(i);
			hatDimList.add(data);
			i++;
		}
		i=1;
		for(VesselHoldCapacity holdCap:source.getVesselHoldCapacities()){
			VesselHoldCapacityData data = vesselHlCapConverter.convert(holdCap);
			data.setNo(i);
			holdCapList.add(data);
			i++;
		}
		target.setVesselGears(gearDataList);
		target.setVesselHatchDimensions(hatDimList);
		target.setVesselHoldCapacities(holdCapList);
		target.setVesselHoldDimensions(holdDimList);
	}

}
