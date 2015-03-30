package com.ep360.converters;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.PortRotationData;
import com.ep360.data.models.PortRotation;
import com.ep360.service.impl.AbstractConverter;

@Component("portConverter")
public class PortRotationConverter extends AbstractConverter<PortRotation, PortRotationData>{

	@Override
	protected PortRotationData createTarget() {
		return new PortRotationData();
	}

	@Override
	public void populate(PortRotation source, PortRotationData target) {
		target.setArrival(source.getArrivaleDate());
		target.setCoord(source.getPortName());
		target.setcType(source.getType());
		target.setDem(source.getDemerages());
		target.setDeparture(source.getDepartureDate());
		target.setDes(source.getDespatches());
		target.setDistEca(source.getDistance());
		target.setIdle(source.getPortIdleDays());
		target.setLdrate(source.getLoadRate());
		target.setPortRotId(source.getPortRotationId());
		target.setSea(source.getSea());
		target.setSpd(source.getSpeed());
		target.setWf(source.getWf());
		target.setWork(source.getPortWorkingDays());
	}
}
