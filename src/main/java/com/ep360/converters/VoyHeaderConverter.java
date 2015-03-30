package com.ep360.converters;

import org.springframework.stereotype.Component;

import com.ep360.controller.data.VoyHeaderData;
import com.ep360.data.models.VoyHeader;
import com.ep360.service.impl.AbstractConverter;

@Component("voyHeaderConverter")
public class VoyHeaderConverter extends AbstractConverter<VoyHeader, VoyHeaderData>{

	@Override
	protected VoyHeaderData createTarget() {
		return new VoyHeaderData();
	}

	@Override
	public void populate(VoyHeader source, VoyHeaderData target) {
		target.setaComm(source.getTotAdcomm());
		target.setBallbonus(source.getBallBonus());
		target.setBrkg(source.getTotBrok());
		target.setcBase(source.getCbase());
		target.setCev(source.getCev());
		target.setDemDes(source.getTotDemdes());
		target.setDoPrice(source.getDoPrice());
		target.setFoPrice(source.getFoPrice());
		target.setFrTax(source.getTotFrttax());
		target.setHirComm(source.getDailyHireAddcomm());
		target.setHirDay(source.getDailyHireCost());
		target.setIlohc(source.getIlohc());
		target.setLinTerm(source.getTotLinterm());
		target.setLsDoPrice(source.getLsdoPrice());
		target.setLsFoPrice(source.getLsfoPrice());
		target.setNetHire(source.getNetHire());
		target.setOpExp(source.getOperExp());
		target.setOpProfit(source.getOperProfit());
		target.setOthers(source.getAddcost());
		target.setPortCharg(source.getTotPortChrg());
		target.setRev(source.getTotRev());
		target.setRoutServ(source.getRoutServ());
		target.setSumBunkExp(source.getTotBunkChrg());
		target.setTotDoCons(source.getDoCons());
		target.setTotDoExpense(source.getDoExp());
		target.setTotExp(source.getTotExpense());
		target.setTotFoCons(source.getFoCons());
		target.setTotFoExpense(source.getFoExp());
		target.setTotHir(source.getTotHire());
		target.setTotLsDoCons(source.getLsdoCons());
		target.setTotLsDoExpense(source.getLsdoExp());
		target.setTotLsFoCons(source.getLsfoCons());
		target.setTotLsFoExpense(source.getLsfoExp());
		target.setTotProfit(source.getTotProfit());
		target.setVoyNo(source.getVoyNo());
	}
}
