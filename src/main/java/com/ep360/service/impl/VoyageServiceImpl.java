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

import com.ep360.controller.data.VesselData1;
import com.ep360.controller.data.VesselData2;
import com.ep360.controller.data.VesselData3;
import com.ep360.controller.data.VesselData4;
import com.ep360.dao.api.DBDataService;
import com.ep360.data.models.Cargo;
import com.ep360.data.models.Demand;
import com.ep360.data.models.PortRotation;
import com.ep360.data.models.VesselMaster;
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
	public VoyHeader getVoyageHeaderData(int voyNo) {
		return dataService.getVoyageHeaderData(voyNo);
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
		if(reqData.get("id")!=null){
			int voyageVesselId = (Integer) reqData.get("id");
			voyageVessel.setVoyageVesselId(voyageVesselId);
		}
		List<Map<Object, Object>> data1List = (List<Map<Object, Object>>)reqData.get("data1");
		Map<Object, Object> data1 = data1List.iterator().next();
		List<Map<Object, Object>> data2List = (List<Map<Object, Object>>)reqData.get("data2");
		Map<Object, Object> data2 = data2List.iterator().next();
		List<Map<Object, Object>> data3List = (List<Map<Object, Object>>)reqData.get("data3");
		List<Map<Object, Object>> data4List = (List<Map<Object, Object>>)reqData.get("data4");
		voyageVessel.setVesselName((String)data1.get("mv"));
		voyageVessel.setVesselType((String)data1.get("vesselType"));
		voyageVessel.setDwt(getValue(data1.get("dwt")));
		voyageVessel.setDraft((String)data1.get("draft"));
		voyageVessel.setBallast(getValue(data2.get("ballast")));
		voyageVessel.setLaden(getValue(data2.get("laden")));
		for(Map<Object, Object> data:data3List){
			if(((String)data.get("vesselName")).equalsIgnoreCase("DO")){
				voyageVessel.setDoDieselType((String)data.get("dieselType"));
				voyageVessel.setDoSea(getValue(data.get("sea")));
				voyageVessel.setDoIdle(getValue(data.get("idle")));
				voyageVessel.setDoWork(getValue(data.get("work")));
			}else{
				voyageVessel.setLsdoDieselType((String)data.get("dieselType"));
				voyageVessel.setLsdoSea(getValue(data.get("sea")));
				voyageVessel.setLsdoIdle(getValue(data.get("idle")));
				voyageVessel.setLsdoWork(getValue(data.get("work")));
			}
		}
		for(Map<Object, Object> data:data4List){
			if(((String)data.get("vesselName")).equalsIgnoreCase("FO")){
				voyageVessel.setFoType(getValue(data.get("fuelType")));
				voyageVessel.setFoBallast(getValue(data.get("ballast")));
				voyageVessel.setFoLaden(getValue(data.get("laden")));
				voyageVessel.setFoIdle(getValue(data.get("idle")));
				voyageVessel.setFoWork(getValue(data.get("work")));
			}else{
				voyageVessel.setLsfoType(getValue(data.get("fuelType")));
				voyageVessel.setLsfoBallast(getValue(data.get("ballast")));
				voyageVessel.setLsfoIdle(getValue(data.get("laden")));
				voyageVessel.setLsfoLaden(getValue(data.get("idle")));
				voyageVessel.setLsfoWork(getValue(data.get("work")));
			}
		}
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
				if(reqData.get("portRotId")!=null){
					port.setPortRotationId((Integer)reqData.get("portRotId"));
				}
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
				if(reqData.get("cargoId")!=null){
					cargo.setCargoId((Integer)reqData.get("cargoId"));
				}
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
		if(reqData.get("voyNo")!=null){
			voyHeader.setVoyNo((Integer)reqData.get("voyNo"));
		}
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
