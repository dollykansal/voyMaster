package com.ep360.converters.vessel;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.VesselGearData;
import com.ep360.data.models.VesselGear;
import com.ep360.service.impl.AbstractConverter;

@Component("vesselGearConverter")
public class VesselGearConverter extends
		AbstractConverter<VesselGear, VesselGearData> {

	@Override
	protected VesselGearData createTarget() {
		return new VesselGearData();
	}

	@Override
	public void populate(VesselGear source, VesselGearData target) {
		if (source != null) {
			target.setGear(source.getGear());
			target.setGearType(source.getGearType());
			target.setVesselGearId(source.getVesselGearId());
			target.setWeightEa(source.getWeightEa());
			target.setWeightMt(source.getWeightMt());
		}
	}

}
