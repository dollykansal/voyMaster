package com.ep360.converters.estimate;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ep360.controller.data.CargoData;
import com.ep360.controller.data.EstimateData;
import com.ep360.controller.data.PortRotationData;
import com.ep360.controller.data.VesselData;
import com.ep360.controller.data.VoyHeaderData;
import com.ep360.data.models.Cargo;
import com.ep360.data.models.PortRotation;
import com.ep360.data.models.VoyHeader;
import com.ep360.service.api.Converter;
import com.ep360.service.impl.AbstractConverter;

@Component("estimateConverter")
public class EstimateConverter extends AbstractConverter<VoyHeader, EstimateData>{

	@Autowired
	private Converter<Cargo, CargoData> cargoConverter;
	
	@Autowired
	private Converter<PortRotation, PortRotationData> portConverter;
	
	@Autowired
	private Converter<VoyHeader, VesselData> vesselConverter;
	
	@Autowired
	private Converter<VoyHeader, VoyHeaderData> voyHeaderConverter;
	
	@Override
	protected EstimateData createTarget() {
		return new EstimateData();
	}

	@Override
	public void populate(VoyHeader source, EstimateData target) {
		List<CargoData> cargoData = new ArrayList<CargoData>();
		List<PortRotationData> portData = new ArrayList<PortRotationData>();
		for(Cargo cargo:source.getCargos()){
			cargoData.add(cargoConverter.convert(cargo));
		}
		for(PortRotation port:source.getPortRotations()){
			portData.add(portConverter.convert(port));
		}
		target.setVesselData(vesselConverter.convert(source));
		target.setCargoData(cargoData);
		target.setPortData(portData);
		target.setVoyHeaderData(voyHeaderConverter.convert(source));
	}
}
