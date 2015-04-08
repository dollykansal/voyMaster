package com.ep360.converters.vessel;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.VesselHoldDimensionData;
import com.ep360.data.models.VesselHoldDimension;
import com.ep360.service.impl.AbstractConverter;

@Component("vesselHoDimConverter")
public class VesselHoldDimensionsConverter extends
		AbstractConverter<VesselHoldDimension, VesselHoldDimensionData> {

	@Override
	protected VesselHoldDimensionData createTarget() {
		return new VesselHoldDimensionData();
	}

	@Override
	public void populate(VesselHoldDimension source,
			VesselHoldDimensionData target) {
		if (source != null) {
			target.setBeam(source.getBeam());
			target.setLength(source.getLength());
			target.setVesselHoldDimId(source.getVesselHoldDimId());
		}
	}

}
