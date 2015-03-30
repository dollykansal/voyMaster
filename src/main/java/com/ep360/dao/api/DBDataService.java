package com.ep360.dao.api;

import java.util.List;

import com.ep360.data.models.DBUser;
import com.ep360.data.models.Demand;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;
import com.ep360.data.models.VoyageVessel;

public interface DBDataService {

	public List<VoyHeader> getVoyageHeaderData();
	
	public List<VesselMaster> getVesselMasterData();

	public void saveData(VoyHeader voyHeader);
	
	public List<Demand> getDemands();
	
	public void saveAllData(List<Object> entities);
	
	public boolean authenticate(String username, String password);
	
	public DBUser getUser(String username);
	
	public boolean updateUser(String userName, String password);
	
	public void addUser(String username,String firstName,String lastName,String password);
	
	public void updateLogout(String username);
	
	public void updateUser(String username);
	
	public List<DBUser> getUserCollection(String username);

	public List<VoyageVessel> getEstimates();

	public VoyHeader getVoyageHeaderData(int voyNo);
}
