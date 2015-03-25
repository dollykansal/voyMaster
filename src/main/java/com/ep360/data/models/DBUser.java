package com.ep360.data.models;
// Generated Mar 20, 2015 10:37:57 PM by Hibernate Tools 4.3.1


import java.util.Collection;
import java.util.Date;

import javax.persistence.AttributeOverride;
import javax.persistence.AttributeOverrides;
import javax.persistence.Column;
import javax.persistence.EmbeddedId;
import javax.persistence.Entity;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;
import javax.persistence.Transient;

import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.userdetails.UserDetails;

/**
 * Users generated by hbm2java
 */
@Entity
@Table(name="users"
    ,catalog="voyage"
)
public class DBUser  implements java.io.Serializable, UserDetails {


     private UsersId id;
     private String fullName;
     private Date lastLoginTime;
     private Date lastLogoutTime;
     private String roleType;

    public DBUser() {
    }

	
    public DBUser(UsersId id) {
        this.id = id;
    }
    public DBUser(UsersId id, String fullName) {
		this.id = id;
		this.fullName = fullName;
	}
    public DBUser(UsersId id, String fullName, Date lastLoginTime, Date lastLogoutTime, String roleType) {
       this.id = id;
       this.fullName = fullName;
       this.lastLoginTime = lastLoginTime;
       this.lastLogoutTime = lastLogoutTime;
       this.roleType = roleType;
    }
   
     @EmbeddedId

    
    @AttributeOverrides( {
        @AttributeOverride(name="userName", column=@Column(name="user_name", nullable=false, length=50) ), 
        @AttributeOverride(name="password", column=@Column(name="password", nullable=false, length=50) ) } )
    public UsersId getId() {
        return this.id;
    }
    
    public void setId(UsersId id) {
        this.id = id;
    }

    
    @Column(name="full_name", length=50)
    public String getFullName() {
        return this.fullName;
    }
    
    public void setFullName(String fullName) {
        this.fullName = fullName;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="last_login_time", length=19)
    public Date getLastLoginTime() {
        return this.lastLoginTime;
    }
    
    public void setLastLoginTime(Date lastLoginTime) {
        this.lastLoginTime = lastLoginTime;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="last_logout_time", length=19)
    public Date getLastLogoutTime() {
        return this.lastLogoutTime;
    }
    
    public void setLastLogoutTime(Date lastLogoutTime) {
        this.lastLogoutTime = lastLogoutTime;
    }

    
    @Column(name="role_type", length=6)
    public String getRoleType() {
        return this.roleType;
    }
    
    public void setRoleType(String roleType) {
        this.roleType = roleType;
    }

    @Transient
	public String getUsername() {
		if (id != null) {
			return id.getUserName();
		}
		return null;
	}


	@Override
	@Transient
	public Collection<? extends GrantedAuthority> getAuthorities() {
		// TODO Auto-generated method stub
		return null;
	}


	@Override
	@Transient
	public String getPassword() {
		return id.getPassword();
	}
	
	@Override
	@Transient
	public boolean isAccountNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	@Transient
	public boolean isAccountNonLocked() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	@Transient
	public boolean isCredentialsNonExpired() {
		// TODO Auto-generated method stub
		return true;
	}


	@Override
	@Transient
	public boolean isEnabled() {
		// TODO Auto-generated method stub
		return true;
	}


}


