package com.ep360.dao.impl;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.ep360.dao.api.DBDataService;
import com.ep360.data.models.Demand;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;

@Repository("dataService")
public class DBDataServiceImpl implements DBDataService{
	
	@Autowired
	private HibernateTemplate hibernateTemplate;

	public List<VoyHeader> getVoyageHeaderData() {
		List<VoyHeader> users = hibernateTemplate
				.find("from VoyHeader");
		if (users != null && users.size() > 0) {
			return users;
		}
		return null;
	}

	@Override
	public List<VesselMaster> getVesselMasterData() {
		List<VesselMaster> users = hibernateTemplate
				.find("from VesselMaster");
		if (users != null && users.size() > 0) {
			return users;
		}
		return null;
	}

	@Override
	public void saveData(VoyHeader voyHeader) {
		hibernateTemplate.saveOrUpdate(voyHeader);
	}
	
	@Override
	public void saveAllData(List<Object> entities) {
		hibernateTemplate.saveOrUpdateAll(entities);
	}

	@Override
	public List<Demand> getDemands() {
		List<Demand> demands = hibernateTemplate
				.find("from Demand");
		if (demands != null && demands.size() > 0) {
			return demands;
		}
		return null;
	}
}
