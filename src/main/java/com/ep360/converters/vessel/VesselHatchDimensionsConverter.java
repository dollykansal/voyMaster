package com.ep360.converters.vessel;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.VesselHatchDimensionData;
import com.ep360.data.models.VesselHatchDimension;
import com.ep360.service.impl.AbstractConverter;

@Component("vesselHaDimConverter")
public class VesselHatchDimensionsConverter extends
		AbstractConverter<VesselHatchDimension, VesselHatchDimensionData> {

	@Override
	protected VesselHatchDimensionData createTarget() {
		return new VesselHatchDimensionData();
	}

	@Override
	public void populate(VesselHatchDimension source,
			VesselHatchDimensionData target) {
		if (source != null) {
			target.setBeam(source.getBeam());
			target.setLength(source.getLength());
			target.setVesselHatchDimId(source.getVesselHatchDimId());
		}
	}

}
