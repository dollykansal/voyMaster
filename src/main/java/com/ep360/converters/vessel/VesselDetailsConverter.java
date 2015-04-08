package com.ep360.converters.vessel;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.VesselMasterDatails;
import com.ep360.data.models.VesselData;
import com.ep360.service.impl.AbstractConverter;

@Component("vesselDetailsConverter")
public class VesselDetailsConverter extends
		AbstractConverter<VesselData, VesselMasterDatails> {

	@Override
	protected VesselMasterDatails createTarget() {
		return new VesselMasterDatails();
	}

	@Override
	public void populate(VesselData source, VesselMasterDatails target) {
		if (source != null) {
			target.setBaleCapacity(source.getBaleCapacity());
			target.setBeam(source.getBeam());
			target.setBuilt(source.getBuilt());
			target.setCallSign(source.getCallSign());
			target.setClass_(source.getClass_());
			target.setConstant(source.getConstant());
			target.setDepth(source.getDepth());
			target.setDraft(source.getDraft());
			target.setDwt(source.getDwt());
			target.setFlag(source.getFlag());
			target.setGrainCapacity(source.getGrainCapacity());
			target.setGrt(source.getGrt());
			target.setGt(source.getGt());
			target.setHatchCoverStrength(source.getHatchCoverStrength());
			target.setHoHa(source.getHoHa());
			target.setHoHaType(source.getHoHaType());
			target.setHullNo(source.getHullNo());
			target.setImoNo(source.getImoNo());
			target.setLightShip(source.getLightShip());
			target.setLoa(source.getLoa());
			target.setMv(source.getMv());
			target.setNrt(source.getNrt());
			target.setNt(source.getNt());
			target.setOwner(source.getOwner());
			target.setPcUms(source.getPcUms());
			target.setScnt(source.getScnt());
			target.setTankTopStrength(source.getTankTopStrength());
			target.setTpcmi(source.getTpcmi());
			target.setTpi(source.getTpi());
			target.setVesselCode(source.getVesselCode());
			target.setVesselDataId(source.getVesselDataId());
			target.setVesselKind(source.getVesselKind());
			target.setVesselType(source.getVesselType());
		}
	}

}
