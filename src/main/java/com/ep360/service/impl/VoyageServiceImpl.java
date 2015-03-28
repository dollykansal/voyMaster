package com.ep360.service.impl;

import java.math.BigDecimal;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.stereotype.Service;

import com.ep360.dao.api.DBDataService;
import com.ep360.data.models.Cargo;
import com.ep360.data.models.Demand;
import com.ep360.data.models.PortRotation;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VesselMasterId;
import com.ep360.data.models.VoyHeader;
import com.ep360.data.models.VoyageVessel;
import com.ep360.service.api.VoyageService;
import com.google.gson.Gson;

@Service(value="voyageService")
@Scope(value="prototype")
public class VoyageServiceImpl implements VoyageService {

	@Autowired
	private DBDataService dataService;
	
	@Autowired
	private Gson gson;
	
	@Override
	public List<VoyHeader> getVoyageHeaderData() {
		return dataService.getVoyageHeaderData();
	}
	
	@Override
	public List<VesselMaster> getVesselMasterData() {
		return dataService.getVesselMasterData();
	}

	@Override
	public List<Demand> getDemands() {
		return dataService.getDemands();
	}

	@Override
	public void saveData(Map<Object, Object> reqData, String username) {
		if(reqData.get("modelSum")!=null && reqData.get("cargo")!=null && reqData.get("port")!=null){
			List<Object> entities = new ArrayList<Object>();
			VoyHeader voyHeader = saveVoyageHeader((Map<Object,Object>)reqData.get("modelSum"));
			voyHeader.setCreatedBy(username);
			entities.add(voyHeader);
			entities.addAll(saveCargo((List<Map<Object, Object>>)reqData.get("cargo"),voyHeader));
			entities.addAll(savePortRotation((List<Map<Object, Object>>)reqData.get("port"),voyHeader));
			entities.add(saveVessel((Map<Object,Object>)reqData.get("vessel"),voyHeader));
			dataService.saveAllData(entities);
		}
	}

	private Object saveVessel(Map<Object, Object> reqData, VoyHeader voyHeader) {
		VoyageVessel voyageVessel = new VoyageVessel();
		voyageVessel.setVoyHeader(voyHeader);
		Map<Object,Object> id = (Map<Object, Object>) reqData.get("id");
		voyageVessel.setVesselName((String) id.get("vesselName"));
		voyageVessel.setLaycan(getValueFloat(reqData.get("laycan")));
		voyageVessel.setVesselType((String) id.get("vesselType"));
		voyageVessel.setDwt(getValueFloat(reqData.get("dwt")));
		voyageVessel.setDraft(reqData.get("draft")!=null?(String)reqData.get("draft"):null);
		voyageVessel.setBallast(getValueFloat(reqData.get("ballast")));
		voyageVessel.setLaden(getValueFloat(reqData.get("laden")));
		voyageVessel.setDoDieselType(reqData.get("doDieselType")!=null?(String)reqData.get("doDieselType"):null);
		voyageVessel.setDoSea(getValueFloat(reqData.get("doSea")));
		voyageVessel.setDoIdle(getValueFloat(reqData.get("doIdle")));
		voyageVessel.setDoWork(getValueFloat(reqData.get("doWork")));
		voyageVessel.setLsdoDieselType(reqData.get("lsdoDieselType")!=null?(String)reqData.get("lsdoDieselType"):null);
		voyageVessel.setLsdoSea(getValueFloat(reqData.get("lsdoSea")));
		voyageVessel.setLsdoIdle(getValueFloat(reqData.get("lsdoIdle")));
		voyageVessel.setLsdoWork(getValueFloat(reqData.get("lsdoWork")));
		voyageVessel.setFoType(getValueFloat(reqData.get("foType")));
		voyageVessel.setFoBallast(getValueFloat(reqData.get("foBallast")));
		voyageVessel.setFoLaden(getValueFloat(reqData.get("foLaden")));
		voyageVessel.setFoIdle(getValueFloat(reqData.get("foIdle")));
		voyageVessel.setFoWork(getValueFloat(reqData.get("foWork")));
		voyageVessel.setLsfoType(getValueFloat(reqData.get("lsfoType")));
		voyageVessel.setLsfoBallast(getValueFloat(reqData.get("lsfoBallast")));
		voyageVessel.setLsfoIdle(getValueFloat(reqData.get("lsfoIdle")));
		voyageVessel.setLsfoLaden(getValueFloat(reqData.get("lsfoLaden")));
		voyageVessel.setLsfoWork(getValueFloat(reqData.get("lsfoWork")));
		return voyageVessel;
	}
	
	private Date getDate(String date){
		SimpleDateFormat sdf = new SimpleDateFormat("MMM dd, yyyy");
		Date retDate = null;
		try {
			retDate = sdf.parse(date);
		} catch (ParseException e) {
			e.printStackTrace();
		}
		return retDate;
	}

	private List<PortRotation> savePortRotation(List<Map<Object, Object>> map, VoyHeader voyHeader) {
		List<PortRotation> portList = new ArrayList<PortRotation>();
		if(map!=null&& map.size()>0){
			for(Map<Object, Object> reqData:map){
				PortRotation port = new PortRotation();
				port.setType(reqData.get("cType")!=null?(String)reqData.get("cType"):null);
				port.setPortName(reqData.get("coord")!=null?(String)reqData.get("coord"):null);
				port.setDistance(getBigDecimalValue(reqData.get("distEca")));
				port.setWf(getBigDecimalValue(reqData.get("wf")));
				port.setSpeed(getBigDecimalValue(reqData.get("spd")));
				port.setSea(getBigDecimalValue(reqData.get("sea")));
				port.setLoadRate(getBigDecimalValue(reqData.get("ldrate")));
				port.setPortIdleDays(getBigDecimalValue(reqData.get("idle")));
				port.setPortWorkingDays(getBigDecimalValue(reqData.get("work")));
				port.setDemerages(getBigDecimalValue(reqData.get("dem")));
				port.setPortCharge(getBigDecimalValue(reqData.get("des")));
				port.setVoyHeader(voyHeader);
				if(reqData.get("arrival")!=null){
					port.setArrivaleDate(getDate((String)reqData.get("arrival")));
				}
				if(reqData.get("departure")!=null){
					port.setDepartureDate(getDate((String)reqData.get("departure")));
				}
				portList.add(port);
			}
		}
		return portList;
	}

	private List<Cargo> saveCargo(List<Map<Object, Object>> map, VoyHeader voyHeader) {
		List<Cargo> cargoList = new ArrayList<Cargo>();
		if(map!=null&& map.size()>0){
			for(Map<Object, Object> reqData:map){
				Cargo cargo = new Cargo();
				cargo.setAccount(reqData.get("account")!=null?(String)reqData.get("account"):null);
				cargo.setCargoName(reqData.get("cargoNam")!=null?(String)reqData.get("cargoNam"):null);
				cargo.setLoadingPort(reqData.get("loadPort")!=null?(String)reqData.get("loadPort"):null);
				cargo.setDischargePort(reqData.get("distPort")!=null?(String)reqData.get("distPort"):null);
				cargo.setQuantity(getBigDecimalValue(reqData.get("qty")));
				cargo.setFrt(getBigDecimalValue(reqData.get("frt")));
				cargo.setTerm(getBigDecimalValue(reqData.get("rev")));
				cargo.setRevenue(getBigDecimalValue(reqData.get("term")));
				cargo.setAddComm(getBigDecimalValue(reqData.get("addComm")));
				cargo.setBrkg(getBigDecimalValue(reqData.get("brkge")));
				cargo.setFrtTax(getBigDecimalValue(reqData.get("frtTax")));
				cargo.setLinerTerm(getBigDecimalValue(reqData.get("linTerm")));
				cargo.setVoyHeader(voyHeader);
				cargoList.add(cargo);
			}
		}
		return cargoList;
	}

	private VoyHeader saveVoyageHeader(Map<Object, Object> reqData) {
		VoyHeader voyHeader = new VoyHeader();
		voyHeader.setDoCons(getValue(reqData.get("totDoCons")));
		voyHeader.setDoExp(getValue(reqData.get("totDoExpense")));
		voyHeader.setDoPrice(getValue(reqData.get("DoPrice")));
		voyHeader.setFoCons(getValue(reqData.get("totFoCons")));
		voyHeader.setFoExp(getValue(reqData.get("totFoExpense")));
		voyHeader.setFoPrice(getValue(reqData.get("FoPrice")));
		voyHeader.setTotAdcomm(getValue(reqData.get("aComm")));
		voyHeader.setBallBonus(getValue(reqData.get("ballbonus")));
		voyHeader.setTotBrok(getValue(reqData.get("brkg")));
		voyHeader.setCbase(getValue(reqData.get("cBase")));
		voyHeader.setCev(getValue(reqData.get("cev")));
		voyHeader.setTotDemdes(getValue(reqData.get("demDes")));
		voyHeader.setTotFrttax(getValue(reqData.get("frTax")));
		voyHeader.setDailyHireCost(getValue(reqData.get("hirComm")));
		voyHeader.setDailyHireAddcomm(getValue(reqData.get("hirDay")));
		voyHeader.setIlohc(getValue(reqData.get("ilohc")));
		voyHeader.setTotLinterm(getValue(reqData.get("linTerm")));
		voyHeader.setLsdoCons(getValue(reqData.get("totLsDoCons")));
		voyHeader.setLsdoExp(getValue(reqData.get("totLsDoExpense")));
		voyHeader.setLsdoPrice(getValue(reqData.get("lsDoPrice")));
		voyHeader.setLsfoCons(getValue(reqData.get("totLsFoCons")));
		voyHeader.setLsfoExp(getValue(reqData.get("totLsFoExpense")));
		voyHeader.setLsfoPrice(getValue(reqData.get("lsFoPrice")));
		voyHeader.setNetHire(getValue(reqData.get("netHire")));
		voyHeader.setOperExp(getValue(reqData.get("opExp")));
		voyHeader.setOperProfit(getValue(reqData.get("opProfit")));
		voyHeader.setAddcost(getValue(reqData.get("others")));
		voyHeader.setTotPortChrg(getValue(reqData.get("portCharg")));
		voyHeader.setTotRev(getValue(reqData.get("rev")));
		voyHeader.setRoutServ(getValue(reqData.get("routServ")));
		voyHeader.setTotBunkChrg(getValue(reqData.get("sumBunkExp")));
		voyHeader.setTotExpense(getValue(reqData.get("totExp")));
		voyHeader.setTotHire(getValue(reqData.get("totHir")));
		voyHeader.setTotProfit(getValue(reqData.get("totProfit")));
		return voyHeader;
	}
	
	private double getValue(Object data){
		double retValue = 0;
		if(data!=null){
			try{
				retValue = Double.parseDouble(String.valueOf(data));
			}catch(Exception ex){
				ex.printStackTrace();
			}
		}
		return retValue;
	}
	
	private float getValueFloat(Object data){
		float retValue = 0;
		if(data!=null){
			try{
				retValue = Float.parseFloat(String.valueOf(data));
			}catch(Exception ex){
				ex.printStackTrace();
			}
		}
		return retValue;
	}
	
	private BigDecimal getBigDecimalValue(Object data){
		BigDecimal retValue = BigDecimal.ZERO;
		if(data!=null){
			try{
				retValue = BigDecimal.valueOf(Double.parseDouble((String.valueOf(data))));
			}catch(Exception ex){
				ex.printStackTrace();
			}
		}
		return retValue;
	}
}
