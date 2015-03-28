package com.ep360.dao.impl;

import java.sql.SQLException;
import java.util.Date;
import java.util.List;

import org.hibernate.HibernateException;
import org.hibernate.Query;
import org.hibernate.Session;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate3.HibernateCallback;
import org.springframework.orm.hibernate3.HibernateTemplate;
import org.springframework.stereotype.Repository;

import com.ep360.dao.api.DBDataService;
import com.ep360.data.models.DBUser;
import com.ep360.data.models.Demand;
import com.ep360.data.models.UsersId;
import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;
import com.ep360.data.models.VoyageVessel;

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
	public List<VoyageVessel> getEstimates() {
		List<VoyageVessel> estimates = hibernateTemplate
				.find("from VoyageVessel");
		if (estimates != null && estimates.size() > 0) {
			return estimates;
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
	
	public DBUser getUser(String username) {
		List<DBUser> users = hibernateTemplate
				.find("from DBUser where id.userName='" + username + "'");
		if (users != null && users.size() > 0) {
			return users.get(0);
		}
		return null;
	}
	
	public boolean authenticate(String username, String password) {
		List<DBUser> list = hibernateTemplate
				.find("from DBUser where id.userName='" + username
						+ "' and id.password = '" + password + "'");
		if (list != null && list.size() > 0) {
			DBUser user = list.get(0);
			if (user.getId().getUserName().equals(username)) {
				return true;
			}
		}
		return false;
	}

	@Override
	public boolean updateUser(final String userName, final String password) {
		hibernateTemplate.execute(new HibernateCallback<Boolean>() {
			public Boolean doInHibernate(Session session)
					throws HibernateException, SQLException {
				Query query = session
						.createQuery("update DBUser set id.password=:password,lastLogoutTime=:logouttime where id.userName=:username");
				query.setString("password", password);
				query.setDate("logouttime", new Date());
				query.setString("username", userName);
				query.executeUpdate();
				return true;
			}

		});
		return false;
	}

	@Override
	public void addUser(String username, String firstName, String lastName,
			String password) {
		UsersId id = new UsersId(username, password);
		DBUser user = new DBUser(id, (firstName + " " + lastName));
		hibernateTemplate.save(user);
	}

	@Override
	public void updateLogout(String username) {
		DBUser dbUser = getUser(username);
		dbUser.setLastLogoutTime(new Date());
		hibernateTemplate.saveOrUpdate(dbUser);		
	}
	
	public void updateUser(String username) {
		DBUser dbUser = getUser(username);
		dbUser.setLastLoginTime(new Date());
		hibernateTemplate.saveOrUpdate(dbUser);
	}
	
	public List<DBUser> getUserCollection(String username) {
		return hibernateTemplate.find("from DBUser where id.userName='"
				+ username + "'");
	}
}
