package com.ep360.data.models;
// Generated Mar 16, 2015 10:37:31 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.Table;

/**
 * Demand generated by hbm2java
 */
@Entity
@Table(name="demand"
    ,catalog="voyage"
)
public class Demand  implements java.io.Serializable {


     /**
	 * 
	 */
	private static final long serialVersionUID = 4388155069285801175L;
	private Integer demandId;
     private String account;
     private String cargoName;
     private String loadingPort;
     private String dischargePort;

    public Demand() {
    }

    public Demand(String account, String cargoName, String loadingPort, String dischargePort) {
       this.account = account;
       this.cargoName = cargoName;
       this.loadingPort = loadingPort;
       this.dischargePort = dischargePort;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="demand_id", unique=true, nullable=false)
    public Integer getDemandId() {
        return this.demandId;
    }
    
    public void setDemandId(Integer demandId) {
        this.demandId = demandId;
    }

    
    @Column(name="account", length=300)
    public String getAccount() {
        return this.account;
    }
    
    public void setAccount(String account) {
        this.account = account;
    }

    
    @Column(name="cargo_name", length=300)
    public String getCargoName() {
        return this.cargoName;
    }
    
    public void setCargoName(String cargoName) {
        this.cargoName = cargoName;
    }

    
    @Column(name="loading_port", length=300)
    public String getLoadingPort() {
        return this.loadingPort;
    }
    
    public void setLoadingPort(String loadingPort) {
        this.loadingPort = loadingPort;
    }

    
    @Column(name="discharge_port", length=300)
    public String getDischargePort() {
        return this.dischargePort;
    }
    
    public void setDischargePort(String dischargePort) {
        this.dischargePort = dischargePort;
    }




}


