package com.ep360.data.models;
// Generated Mar 26, 2015 10:10:06 PM by Hibernate Tools 4.3.1


import java.util.Date;
import java.util.HashSet;
import java.util.Set;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;

import static javax.persistence.GenerationType.IDENTITY;

import javax.persistence.CascadeType;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;
import javax.persistence.Temporal;
import javax.persistence.TemporalType;

/**
 * VoyHeader generated by hbm2java
 */
@Entity
@Table(name="voy_header"
    ,catalog="voyage"
)
public class VoyHeader  implements java.io.Serializable {


     private Integer voyNo;
     private String tenantId;
     private String clientId;
     private String voyType;
     private Integer voyEstNo;
     private Integer vesselNo;
     private String tcOper;
     private String trader;
     private String voyOper;
     private String tradeId;
     private String voyStatus;
     private Boolean zeroProfInd;
     private double doCons;
     private double doExp;
     private double doPrice;
     private double foCons;
     private double foExp;
     private double foPrice;
     private double lsdoCons;
     private double lsdoExp;
     private double lsdoPrice;
     private Double lsfoCons;
     private double lsfoExp;
     private double lsfoPrice;
     private double totDemdes;
     private double totAdcomm;
     private double totBrok;
     private double totFrttax;
     private double totLinterm;
     private double totPortChrg;
     private double totBunkChrg;
     private double cbase;
     private double cev;
     private double ilohc;
     private double ballBonus;
     private double routServ;
     private int addcostitemNo;
     private double addcost;
     private double dailyHireCost;
     private double dailyHireAddcomm;
     private double totRev;
     private double operExp;
     private double operProfit;
     private double netHire;
     private double totHire;
     private double totExpense;
     private double totProfit;
     private Date createdOn;
     private String createdBy;
     private Date lastCreatedOn;
     private String lastCreatedBy;
     private Set<VoyageVessel> voyageVessels = new HashSet<VoyageVessel>(0);
     private Set<PortRotation> portRotations = new HashSet<PortRotation>(0);
     private Set<Cargo> cargos = new HashSet<Cargo>(0);

    public VoyHeader() {
    }

	
    public VoyHeader(double doCons, double doExp, double doPrice, double foCons, double foExp, double foPrice, double lsdoCons, double lsdoExp, double lsdoPrice, double lsfoExp, double lsfoPrice, double totDemdes, double totAdcomm, double totBrok, double totFrttax, double totLinterm, double totPortChrg, double totBunkChrg, double cbase, double cev, double ilohc, double ballBonus, double routServ, int addcostitemNo, double addcost, double dailyHireCost, double dailyHireAddcomm, double totRev, double operExp, double operProfit, double netHire, double totHire, double totExpense, double totProfit, Date createdOn) {
        this.doCons = doCons;
        this.doExp = doExp;
        this.doPrice = doPrice;
        this.foCons = foCons;
        this.foExp = foExp;
        this.foPrice = foPrice;
        this.lsdoCons = lsdoCons;
        this.lsdoExp = lsdoExp;
        this.lsdoPrice = lsdoPrice;
        this.lsfoExp = lsfoExp;
        this.lsfoPrice = lsfoPrice;
        this.totDemdes = totDemdes;
        this.totAdcomm = totAdcomm;
        this.totBrok = totBrok;
        this.totFrttax = totFrttax;
        this.totLinterm = totLinterm;
        this.totPortChrg = totPortChrg;
        this.totBunkChrg = totBunkChrg;
        this.cbase = cbase;
        this.cev = cev;
        this.ilohc = ilohc;
        this.ballBonus = ballBonus;
        this.routServ = routServ;
        this.addcostitemNo = addcostitemNo;
        this.addcost = addcost;
        this.dailyHireCost = dailyHireCost;
        this.dailyHireAddcomm = dailyHireAddcomm;
        this.totRev = totRev;
        this.operExp = operExp;
        this.operProfit = operProfit;
        this.netHire = netHire;
        this.totHire = totHire;
        this.totExpense = totExpense;
        this.totProfit = totProfit;
        this.createdOn = createdOn;
    }
    public VoyHeader(String tenantId, String clientId, String voyType, Integer voyEstNo, Integer vesselNo, String tcOper, String trader, String voyOper, String tradeId, String voyStatus, Boolean zeroProfInd, double doCons, double doExp, double doPrice, double foCons, double foExp, double foPrice, double lsdoCons, double lsdoExp, double lsdoPrice, Double lsfoCons, double lsfoExp, double lsfoPrice, double totDemdes, double totAdcomm, double totBrok, double totFrttax, double totLinterm, double totPortChrg, double totBunkChrg, double cbase, double cev, double ilohc, double ballBonus, double routServ, int addcostitemNo, double addcost, double dailyHireCost, double dailyHireAddcomm, double totRev, double operExp, double operProfit, double netHire, double totHire, double totExpense, double totProfit, Date createdOn, String createdBy, Date lastCreatedOn, String lastCreatedBy, Set voyageVessels, Set portRotations, Set cargos) {
       this.tenantId = tenantId;
       this.clientId = clientId;
       this.voyType = voyType;
       this.voyEstNo = voyEstNo;
       this.vesselNo = vesselNo;
       this.tcOper = tcOper;
       this.trader = trader;
       this.voyOper = voyOper;
       this.tradeId = tradeId;
       this.voyStatus = voyStatus;
       this.zeroProfInd = zeroProfInd;
       this.doCons = doCons;
       this.doExp = doExp;
       this.doPrice = doPrice;
       this.foCons = foCons;
       this.foExp = foExp;
       this.foPrice = foPrice;
       this.lsdoCons = lsdoCons;
       this.lsdoExp = lsdoExp;
       this.lsdoPrice = lsdoPrice;
       this.lsfoCons = lsfoCons;
       this.lsfoExp = lsfoExp;
       this.lsfoPrice = lsfoPrice;
       this.totDemdes = totDemdes;
       this.totAdcomm = totAdcomm;
       this.totBrok = totBrok;
       this.totFrttax = totFrttax;
       this.totLinterm = totLinterm;
       this.totPortChrg = totPortChrg;
       this.totBunkChrg = totBunkChrg;
       this.cbase = cbase;
       this.cev = cev;
       this.ilohc = ilohc;
       this.ballBonus = ballBonus;
       this.routServ = routServ;
       this.addcostitemNo = addcostitemNo;
       this.addcost = addcost;
       this.dailyHireCost = dailyHireCost;
       this.dailyHireAddcomm = dailyHireAddcomm;
       this.totRev = totRev;
       this.operExp = operExp;
       this.operProfit = operProfit;
       this.netHire = netHire;
       this.totHire = totHire;
       this.totExpense = totExpense;
       this.totProfit = totProfit;
       this.createdOn = createdOn;
       this.createdBy = createdBy;
       this.lastCreatedOn = lastCreatedOn;
       this.lastCreatedBy = lastCreatedBy;
       this.voyageVessels = voyageVessels;
       this.portRotations = portRotations;
       this.cargos = cargos;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="voy_no", unique=true, nullable=false)
    public Integer getVoyNo() {
        return this.voyNo;
    }
    
    public void setVoyNo(Integer voyNo) {
        this.voyNo = voyNo;
    }

    
    @Column(name="tenant_id", length=36)
    public String getTenantId() {
        return this.tenantId;
    }
    
    public void setTenantId(String tenantId) {
        this.tenantId = tenantId;
    }

    
    @Column(name="client_id", length=10)
    public String getClientId() {
        return this.clientId;
    }
    
    public void setClientId(String clientId) {
        this.clientId = clientId;
    }

    
    @Column(name="voy_type", length=4)
    public String getVoyType() {
        return this.voyType;
    }
    
    public void setVoyType(String voyType) {
        this.voyType = voyType;
    }

    
    @Column(name="voy_est_no")
    public Integer getVoyEstNo() {
        return this.voyEstNo;
    }
    
    public void setVoyEstNo(Integer voyEstNo) {
        this.voyEstNo = voyEstNo;
    }

    
    @Column(name="vessel_no")
    public Integer getVesselNo() {
        return this.vesselNo;
    }
    
    public void setVesselNo(Integer vesselNo) {
        this.vesselNo = vesselNo;
    }

    
    @Column(name="tc_oper", length=12)
    public String getTcOper() {
        return this.tcOper;
    }
    
    public void setTcOper(String tcOper) {
        this.tcOper = tcOper;
    }

    
    @Column(name="trader", length=12)
    public String getTrader() {
        return this.trader;
    }
    
    public void setTrader(String trader) {
        this.trader = trader;
    }

    
    @Column(name="voy_oper", length=12)
    public String getVoyOper() {
        return this.voyOper;
    }
    
    public void setVoyOper(String voyOper) {
        this.voyOper = voyOper;
    }

    
    @Column(name="trade_id", length=6)
    public String getTradeId() {
        return this.tradeId;
    }
    
    public void setTradeId(String tradeId) {
        this.tradeId = tradeId;
    }

    
    @Column(name="voy_status", length=10)
    public String getVoyStatus() {
        return this.voyStatus;
    }
    
    public void setVoyStatus(String voyStatus) {
        this.voyStatus = voyStatus;
    }

    
    @Column(name="zero_prof_ind")
    public Boolean getZeroProfInd() {
        return this.zeroProfInd;
    }
    
    public void setZeroProfInd(Boolean zeroProfInd) {
        this.zeroProfInd = zeroProfInd;
    }

    
    @Column(name="do_cons", nullable=false, precision=22, scale=0)
    public double getDoCons() {
        return this.doCons;
    }
    
    public void setDoCons(double doCons) {
        this.doCons = doCons;
    }

    
    @Column(name="do_exp", nullable=false, precision=22, scale=0)
    public double getDoExp() {
        return this.doExp;
    }
    
    public void setDoExp(double doExp) {
        this.doExp = doExp;
    }

    
    @Column(name="do_price", nullable=false, precision=22, scale=0)
    public double getDoPrice() {
        return this.doPrice;
    }
    
    public void setDoPrice(double doPrice) {
        this.doPrice = doPrice;
    }

    
    @Column(name="fo_cons", nullable=false, precision=22, scale=0)
    public double getFoCons() {
        return this.foCons;
    }
    
    public void setFoCons(double foCons) {
        this.foCons = foCons;
    }

    
    @Column(name="fo_exp", nullable=false, precision=22, scale=0)
    public double getFoExp() {
        return this.foExp;
    }
    
    public void setFoExp(double foExp) {
        this.foExp = foExp;
    }

    
    @Column(name="fo_price", nullable=false, precision=22, scale=0)
    public double getFoPrice() {
        return this.foPrice;
    }
    
    public void setFoPrice(double foPrice) {
        this.foPrice = foPrice;
    }

    
    @Column(name="lsdo_cons", nullable=false, precision=22, scale=0)
    public double getLsdoCons() {
        return this.lsdoCons;
    }
    
    public void setLsdoCons(double lsdoCons) {
        this.lsdoCons = lsdoCons;
    }

    
    @Column(name="lsdo_exp", nullable=false, precision=22, scale=0)
    public double getLsdoExp() {
        return this.lsdoExp;
    }
    
    public void setLsdoExp(double lsdoExp) {
        this.lsdoExp = lsdoExp;
    }

    
    @Column(name="lsdo_price", nullable=false, precision=22, scale=0)
    public double getLsdoPrice() {
        return this.lsdoPrice;
    }
    
    public void setLsdoPrice(double lsdoPrice) {
        this.lsdoPrice = lsdoPrice;
    }

    
    @Column(name="lsfo_cons", precision=22, scale=0)
    public Double getLsfoCons() {
        return this.lsfoCons;
    }
    
    public void setLsfoCons(Double lsfoCons) {
        this.lsfoCons = lsfoCons;
    }

    
    @Column(name="lsfo_exp", nullable=false, precision=22, scale=0)
    public double getLsfoExp() {
        return this.lsfoExp;
    }
    
    public void setLsfoExp(double lsfoExp) {
        this.lsfoExp = lsfoExp;
    }

    
    @Column(name="lsfo_price", nullable=false, precision=22, scale=0)
    public double getLsfoPrice() {
        return this.lsfoPrice;
    }
    
    public void setLsfoPrice(double lsfoPrice) {
        this.lsfoPrice = lsfoPrice;
    }

    
    @Column(name="tot_demdes", nullable=false, precision=22, scale=0)
    public double getTotDemdes() {
        return this.totDemdes;
    }
    
    public void setTotDemdes(double totDemdes) {
        this.totDemdes = totDemdes;
    }

    
    @Column(name="tot_adcomm", nullable=false, precision=22, scale=0)
    public double getTotAdcomm() {
        return this.totAdcomm;
    }
    
    public void setTotAdcomm(double totAdcomm) {
        this.totAdcomm = totAdcomm;
    }

    
    @Column(name="tot_brok", nullable=false, precision=22, scale=0)
    public double getTotBrok() {
        return this.totBrok;
    }
    
    public void setTotBrok(double totBrok) {
        this.totBrok = totBrok;
    }

    
    @Column(name="tot_frttax", nullable=false, precision=22, scale=0)
    public double getTotFrttax() {
        return this.totFrttax;
    }
    
    public void setTotFrttax(double totFrttax) {
        this.totFrttax = totFrttax;
    }

    
    @Column(name="tot_linterm", nullable=false, precision=22, scale=0)
    public double getTotLinterm() {
        return this.totLinterm;
    }
    
    public void setTotLinterm(double totLinterm) {
        this.totLinterm = totLinterm;
    }

    
    @Column(name="tot_port_chrg", nullable=false, precision=22, scale=0)
    public double getTotPortChrg() {
        return this.totPortChrg;
    }
    
    public void setTotPortChrg(double totPortChrg) {
        this.totPortChrg = totPortChrg;
    }

    
    @Column(name="tot_bunk_chrg", nullable=false, precision=22, scale=0)
    public double getTotBunkChrg() {
        return this.totBunkChrg;
    }
    
    public void setTotBunkChrg(double totBunkChrg) {
        this.totBunkChrg = totBunkChrg;
    }

    
    @Column(name="cbase", nullable=false, precision=22, scale=0)
    public double getCbase() {
        return this.cbase;
    }
    
    public void setCbase(double cbase) {
        this.cbase = cbase;
    }

    
    @Column(name="cev", nullable=false, precision=22, scale=0)
    public double getCev() {
        return this.cev;
    }
    
    public void setCev(double cev) {
        this.cev = cev;
    }

    
    @Column(name="ilohc", nullable=false, precision=22, scale=0)
    public double getIlohc() {
        return this.ilohc;
    }
    
    public void setIlohc(double ilohc) {
        this.ilohc = ilohc;
    }

    
    @Column(name="ball_bonus", nullable=false, precision=22, scale=0)
    public double getBallBonus() {
        return this.ballBonus;
    }
    
    public void setBallBonus(double ballBonus) {
        this.ballBonus = ballBonus;
    }

    
    @Column(name="rout_serv", nullable=false, precision=22, scale=0)
    public double getRoutServ() {
        return this.routServ;
    }
    
    public void setRoutServ(double routServ) {
        this.routServ = routServ;
    }

    
    @Column(name="addcostitem_no", nullable=false)
    public int getAddcostitemNo() {
        return this.addcostitemNo;
    }
    
    public void setAddcostitemNo(int addcostitemNo) {
        this.addcostitemNo = addcostitemNo;
    }

    
    @Column(name="addcost", nullable=false, precision=22, scale=0)
    public double getAddcost() {
        return this.addcost;
    }
    
    public void setAddcost(double addcost) {
        this.addcost = addcost;
    }

    
    @Column(name="daily_hire_cost", nullable=false, precision=22, scale=0)
    public double getDailyHireCost() {
        return this.dailyHireCost;
    }
    
    public void setDailyHireCost(double dailyHireCost) {
        this.dailyHireCost = dailyHireCost;
    }

    
    @Column(name="daily_hire_addcomm", nullable=false, precision=22, scale=0)
    public double getDailyHireAddcomm() {
        return this.dailyHireAddcomm;
    }
    
    public void setDailyHireAddcomm(double dailyHireAddcomm) {
        this.dailyHireAddcomm = dailyHireAddcomm;
    }

    
    @Column(name="tot_rev", nullable=false, precision=22, scale=0)
    public double getTotRev() {
        return this.totRev;
    }
    
    public void setTotRev(double totRev) {
        this.totRev = totRev;
    }

    
    @Column(name="oper_exp", nullable=false, precision=22, scale=0)
    public double getOperExp() {
        return this.operExp;
    }
    
    public void setOperExp(double operExp) {
        this.operExp = operExp;
    }

    
    @Column(name="oper_profit", nullable=false, precision=22, scale=0)
    public double getOperProfit() {
        return this.operProfit;
    }
    
    public void setOperProfit(double operProfit) {
        this.operProfit = operProfit;
    }

    
    @Column(name="net_hire", nullable=false, precision=22, scale=0)
    public double getNetHire() {
        return this.netHire;
    }
    
    public void setNetHire(double netHire) {
        this.netHire = netHire;
    }

    
    @Column(name="tot_hire", nullable=false, precision=22, scale=0)
    public double getTotHire() {
        return this.totHire;
    }
    
    public void setTotHire(double totHire) {
        this.totHire = totHire;
    }

    
    @Column(name="tot_expense", nullable=false, precision=22, scale=0)
    public double getTotExpense() {
        return this.totExpense;
    }
    
    public void setTotExpense(double totExpense) {
        this.totExpense = totExpense;
    }

    
    @Column(name="tot_profit", nullable=false, precision=22, scale=0)
    public double getTotProfit() {
        return this.totProfit;
    }
    
    public void setTotProfit(double totProfit) {
        this.totProfit = totProfit;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="created_on", insertable=false, length=19, updatable=false)
    public Date getCreatedOn() {
        return this.createdOn;
    }
    
    public void setCreatedOn(Date createdOn) {
        this.createdOn = createdOn;
    }

    
    @Column(name="created_by", length=12)
    public String getCreatedBy() {
        return this.createdBy;
    }
    
    public void setCreatedBy(String createdBy) {
        this.createdBy = createdBy;
    }

    @Temporal(TemporalType.TIMESTAMP)
    @Column(name="last_created_on", length=19)
    public Date getLastCreatedOn() {
        return this.lastCreatedOn;
    }
    
    public void setLastCreatedOn(Date lastCreatedOn) {
        this.lastCreatedOn = lastCreatedOn;
    }

    
    @Column(name="last_created_by", length=12)
    public String getLastCreatedBy() {
        return this.lastCreatedBy;
    }
    
    public void setLastCreatedBy(String lastCreatedBy) {
        this.lastCreatedBy = lastCreatedBy;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="voyHeader", cascade=CascadeType.PERSIST)
    public Set<VoyageVessel> getVoyageVessels() {
        return this.voyageVessels;
    }
    
    public void setVoyageVessels(Set voyageVessels) {
        this.voyageVessels = voyageVessels;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="voyHeader", cascade=CascadeType.PERSIST)
    public Set<PortRotation> getPortRotations() {
        return this.portRotations;
    }
    
    public void setPortRotations(Set portRotations) {
        this.portRotations = portRotations;
    }

@OneToMany(fetch=FetchType.LAZY, mappedBy="voyHeader", cascade=CascadeType.PERSIST)
    public Set<Cargo> getCargos() {
        return this.cargos;
    }
    
    public void setCargos(Set cargos) {
        this.cargos = cargos;
    }




}


