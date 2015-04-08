package com.ep360.converters.vessel;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.VesselHoldCapacityData;
import com.ep360.data.models.VesselHoldCapacity;
import com.ep360.service.impl.AbstractConverter;

@Component("vesselHlCapConverter")
public class VesselHoldCapacityConverter extends
		AbstractConverter<VesselHoldCapacity, VesselHoldCapacityData> {

	@Override
	protected VesselHoldCapacityData createTarget() {
		return new VesselHoldCapacityData();
	}

	@Override
	public void populate(VesselHoldCapacity source,
			VesselHoldCapacityData target) {
		if (source != null) {
			target.setBale(source.getBale());
			target.setGrain(source.getGrain());
			target.setVesselHoldCapacityId(source.getVesselHoldCapacityId());
		}
	}

}
