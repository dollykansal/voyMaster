package com.ep360.converters;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.CargoData;
import com.ep360.data.models.Cargo;
import com.ep360.service.impl.AbstractConverter;

@Component("cargoConverter")
public class CargoConverter extends AbstractConverter<Cargo, CargoData>{

	@Override
	protected CargoData createTarget() {
		return new CargoData();
	}

	@Override
	public void populate(Cargo source, CargoData target) {
		target.setAccount(source.getAccount());
		target.setAddComm(source.getAddComm());
		target.setBrkge(source.getBrkg());
		target.setCargoId(source.getCargoId());
		target.setCargoNam(source.getCargoName());
		target.setDistPort(source.getDischargePort());
		target.setFrt(source.getFrt());
		target.setFrtTax(source.getFrtTax());
		target.setLinTerm(source.getLinerTerm());
		target.setLoadPort(source.getLoadingPort());
		target.setQty(source.getQuantity());
		target.setRev(source.getRevenue());
		target.setTerm(source.getTerm());
	}
}
