package com.ep360.converters;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.VoyageVesselData;
import com.ep360.data.models.VoyHeader;
import com.ep360.data.models.VoyageVessel;
import com.ep360.service.impl.AbstractConverter;

@Component("voyageVesselConverter")
public class VoyageVesselConverter extends AbstractConverter<VoyHeader, VoyageVesselData>{

	@Override
	protected VoyageVesselData createTarget() {
		return new VoyageVesselData();
	}

	@Override
	public void populate(VoyHeader source, VoyageVesselData target) {
		target.setTotProfit(source.getTotProfit());
		VoyageVessel voyageVessel = source.getVoyageVessels().iterator().next();
		target.setVessel(voyageVessel.getVesselName());
		target.setTotDemDis(source.getTotDemdes());
		target.setTotPortCh(source.getTotPortChrg());
		target.setTotalFrtTax(source.getTotFrttax());
		target.setTotBunkExp(source.getTotBunkChrg());
		target.setOperExp(source.getOperExp());
		target.setTotRev(source.getTotRev());
	}
}
