package com.ep360.converters;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import com.ep360.controller.data.CargoData;
import com.ep360.controller.data.PortRotationData;
import com.ep360.controller.data.VesselData;
import com.ep360.controller.data.VesselData1;
import com.ep360.controller.data.VesselData2;
import com.ep360.controller.data.VesselData3;
import com.ep360.controller.data.VesselData4;
import com.ep360.data.models.Cargo;
import com.ep360.data.models.PortRotation;
import com.ep360.data.models.VoyHeader;
import com.ep360.data.models.VoyageVessel;
import com.ep360.service.api.Converter;
import com.ep360.service.impl.AbstractConverter;

@Component("vesselConverter")
public class VesselConverter extends AbstractConverter<VoyHeader, VesselData>{
	
	@Override
	protected VesselData createTarget() {
		return new VesselData();
	}

	@Override
	public void populate(VoyHeader source, VesselData target) {
		VoyageVessel voyageVessel = source.getVoyageVessels().iterator().next();
		target.setData1(createData1(voyageVessel));
		target.setData2(createData2(voyageVessel));
		target.setData3(createData3(voyageVessel));
		target.setData4(createData4(voyageVessel));
		target.setId(voyageVessel.getVoyageVesselId());
	}

	private List<VesselData4> createData4(VoyageVessel voyageVessel) {
		List<VesselData4> data4 = new ArrayList<VesselData4>();
		data4.add(new VesselData4("FO",voyageVessel.getFoType(),voyageVessel.getFoBallast(),voyageVessel.getFoLaden(),voyageVessel.getFoIdle(),voyageVessel.getFoWork()));
		data4.add(new VesselData4("LSFO",voyageVessel.getLsfoType(),voyageVessel.getLsfoBallast(),voyageVessel.getLsfoLaden(),voyageVessel.getLsfoIdle(),voyageVessel.getLsfoWork()));
		return data4;
	}

	private List<VesselData3> createData3(VoyageVessel voyageVessel) {
		List<VesselData3> data3 = new ArrayList<VesselData3>();
		data3.add(new VesselData3("DO",voyageVessel.getDoDieselType(),voyageVessel.getDoSea(),voyageVessel.getDoIdle(),voyageVessel.getDoWork()));
		data3.add(new VesselData3("LSDO",voyageVessel.getLsdoDieselType(),voyageVessel.getLsdoSea(),voyageVessel.getLsdoIdle(),voyageVessel.getLsdoWork()));
		return data3;
	}

	private List<VesselData2> createData2(VoyageVessel voyageVessel) {
		List<VesselData2> data2List = new ArrayList<VesselData2>();
		VesselData2 data2 = new VesselData2(); 
		data2.setBallast(voyageVessel.getBallast());
		data2.setLaden(voyageVessel.getLaden());
		data2List.add(data2);
		return data2List;
	}

	private List<VesselData1> createData1(VoyageVessel voyageVessel) {
		List<VesselData1> data1List = new ArrayList<VesselData1>();
		VesselData1 data1 = new VesselData1();
		data1.setMv(voyageVessel.getVesselName());
		data1.setVesselType(voyageVessel.getVesselType());
		data1.setDwt(voyageVessel.getDwt());
		data1.setDraft(voyageVessel.getDraft());
		data1List.add(data1);
		return data1List;
	}

}
