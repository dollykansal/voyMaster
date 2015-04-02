package com.ep360.data.models;
// Generated Apr 2, 2015 11:37:37 PM by Hibernate Tools 4.3.1


import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.FetchType;
import javax.persistence.GeneratedValue;
import static javax.persistence.GenerationType.IDENTITY;
import javax.persistence.Id;
import javax.persistence.JoinColumn;
import javax.persistence.ManyToOne;
import javax.persistence.Table;
import javax.persistence.UniqueConstraint;

/**
 * VesselData generated by hbm2java
 */
@Entity
@Table(name="vessel_data"
    ,catalog="voyage"
    , uniqueConstraints = @UniqueConstraint(columnNames="vessel_master_id") 
)
public class VesselData  implements java.io.Serializable {


     private Integer vesselDataId;
     private VesselMaster vesselMaster;
     private String mv;
     private String callSign;
     private String imoNo;
     private String vesselKind;
     private String vesselCode;
     private String vesselType;
     private String hullNo;
     private String owner;
     private String built;
     private String flag;
     private String class_;
     private Double loa;
     private Double beam;
     private Double draft;
     private Double depth;
     private Double gt;
     private Double nt;
     private Double grt;
     private Double nrt;
     private Double pcUms;
     private Double scnt;
     private Double lightShip;
     private Double dwt;
     private Double tpcmi;
     private Double tpi;
     private Double constant;
     private Double grainCapacity;
     private Double baleCapacity;
     private Double hoHa;
     private Double hoHaType;
     private Double tankTopStrength;
     private Double hatchCoverStrength;

    public VesselData() {
    }

	
    public VesselData(VesselMaster vesselMaster) {
        this.vesselMaster = vesselMaster;
    }
    public VesselData(VesselMaster vesselMaster, String mv, String callSign, String imoNo, String vesselKind, String vesselCode, String vesselType, String hullNo, String owner, String built, String flag, String class_, Double loa, Double beam, Double draft, Double depth, Double gt, Double nt, Double grt, Double nrt, Double pcUms, Double scnt, Double lightShip, Double dwt, Double tpcmi, Double tpi, Double constant, Double grainCapacity, Double baleCapacity, Double hoHa, Double hoHaType, Double tankTopStrength, Double hatchCoverStrength) {
       this.vesselMaster = vesselMaster;
       this.mv = mv;
       this.callSign = callSign;
       this.imoNo = imoNo;
       this.vesselKind = vesselKind;
       this.vesselCode = vesselCode;
       this.vesselType = vesselType;
       this.hullNo = hullNo;
       this.owner = owner;
       this.built = built;
       this.flag = flag;
       this.class_ = class_;
       this.loa = loa;
       this.beam = beam;
       this.draft = draft;
       this.depth = depth;
       this.gt = gt;
       this.nt = nt;
       this.grt = grt;
       this.nrt = nrt;
       this.pcUms = pcUms;
       this.scnt = scnt;
       this.lightShip = lightShip;
       this.dwt = dwt;
       this.tpcmi = tpcmi;
       this.tpi = tpi;
       this.constant = constant;
       this.grainCapacity = grainCapacity;
       this.baleCapacity = baleCapacity;
       this.hoHa = hoHa;
       this.hoHaType = hoHaType;
       this.tankTopStrength = tankTopStrength;
       this.hatchCoverStrength = hatchCoverStrength;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="vessel_data_id", unique=true, nullable=false)
    public Integer getVesselDataId() {
        return this.vesselDataId;
    }
    
    public void setVesselDataId(Integer vesselDataId) {
        this.vesselDataId = vesselDataId;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="vessel_master_id", unique=true, nullable=false)
    public VesselMaster getVesselMaster() {
        return this.vesselMaster;
    }
    
    public void setVesselMaster(VesselMaster vesselMaster) {
        this.vesselMaster = vesselMaster;
    }

    
    @Column(name="mv", length=100)
    public String getMv() {
        return this.mv;
    }
    
    public void setMv(String mv) {
        this.mv = mv;
    }

    
    @Column(name="call_sign", length=100)
    public String getCallSign() {
        return this.callSign;
    }
    
    public void setCallSign(String callSign) {
        this.callSign = callSign;
    }

    
    @Column(name="imo_no", length=100)
    public String getImoNo() {
        return this.imoNo;
    }
    
    public void setImoNo(String imoNo) {
        this.imoNo = imoNo;
    }

    
    @Column(name="vessel_kind", length=100)
    public String getVesselKind() {
        return this.vesselKind;
    }
    
    public void setVesselKind(String vesselKind) {
        this.vesselKind = vesselKind;
    }

    
    @Column(name="vessel_code", length=100)
    public String getVesselCode() {
        return this.vesselCode;
    }
    
    public void setVesselCode(String vesselCode) {
        this.vesselCode = vesselCode;
    }

    
    @Column(name="vessel_type", length=100)
    public String getVesselType() {
        return this.vesselType;
    }
    
    public void setVesselType(String vesselType) {
        this.vesselType = vesselType;
    }

    
    @Column(name="hull_no", length=100)
    public String getHullNo() {
        return this.hullNo;
    }
    
    public void setHullNo(String hullNo) {
        this.hullNo = hullNo;
    }

    
    @Column(name="owner", length=100)
    public String getOwner() {
        return this.owner;
    }
    
    public void setOwner(String owner) {
        this.owner = owner;
    }

    
    @Column(name="built", length=100)
    public String getBuilt() {
        return this.built;
    }
    
    public void setBuilt(String built) {
        this.built = built;
    }

    
    @Column(name="flag", length=10)
    public String getFlag() {
        return this.flag;
    }
    
    public void setFlag(String flag) {
        this.flag = flag;
    }

    
    @Column(name="class", length=100)
    public String getClass_() {
        return this.class_;
    }
    
    public void setClass_(String class_) {
        this.class_ = class_;
    }

    
    @Column(name="loa", precision=22, scale=0)
    public Double getLoa() {
        return this.loa;
    }
    
    public void setLoa(Double loa) {
        this.loa = loa;
    }

    
    @Column(name="beam", precision=22, scale=0)
    public Double getBeam() {
        return this.beam;
    }
    
    public void setBeam(Double beam) {
        this.beam = beam;
    }

    
    @Column(name="draft", precision=22, scale=0)
    public Double getDraft() {
        return this.draft;
    }
    
    public void setDraft(Double draft) {
        this.draft = draft;
    }

    
    @Column(name="depth", precision=22, scale=0)
    public Double getDepth() {
        return this.depth;
    }
    
    public void setDepth(Double depth) {
        this.depth = depth;
    }

    
    @Column(name="gt", precision=22, scale=0)
    public Double getGt() {
        return this.gt;
    }
    
    public void setGt(Double gt) {
        this.gt = gt;
    }

    
    @Column(name="nt", precision=22, scale=0)
    public Double getNt() {
        return this.nt;
    }
    
    public void setNt(Double nt) {
        this.nt = nt;
    }

    
    @Column(name="grt", precision=22, scale=0)
    public Double getGrt() {
        return this.grt;
    }
    
    public void setGrt(Double grt) {
        this.grt = grt;
    }

    
    @Column(name="nrt", precision=22, scale=0)
    public Double getNrt() {
        return this.nrt;
    }
    
    public void setNrt(Double nrt) {
        this.nrt = nrt;
    }

    
    @Column(name="pc_ums", precision=22, scale=0)
    public Double getPcUms() {
        return this.pcUms;
    }
    
    public void setPcUms(Double pcUms) {
        this.pcUms = pcUms;
    }

    
    @Column(name="scnt", precision=22, scale=0)
    public Double getScnt() {
        return this.scnt;
    }
    
    public void setScnt(Double scnt) {
        this.scnt = scnt;
    }

    
    @Column(name="light_ship", precision=22, scale=0)
    public Double getLightShip() {
        return this.lightShip;
    }
    
    public void setLightShip(Double lightShip) {
        this.lightShip = lightShip;
    }

    
    @Column(name="dwt", precision=22, scale=0)
    public Double getDwt() {
        return this.dwt;
    }
    
    public void setDwt(Double dwt) {
        this.dwt = dwt;
    }

    
    @Column(name="tpcmi", precision=22, scale=0)
    public Double getTpcmi() {
        return this.tpcmi;
    }
    
    public void setTpcmi(Double tpcmi) {
        this.tpcmi = tpcmi;
    }

    
    @Column(name="tpi", precision=22, scale=0)
    public Double getTpi() {
        return this.tpi;
    }
    
    public void setTpi(Double tpi) {
        this.tpi = tpi;
    }

    
    @Column(name="constant", precision=22, scale=0)
    public Double getConstant() {
        return this.constant;
    }
    
    public void setConstant(Double constant) {
        this.constant = constant;
    }

    
    @Column(name="grain_capacity", precision=22, scale=0)
    public Double getGrainCapacity() {
        return this.grainCapacity;
    }
    
    public void setGrainCapacity(Double grainCapacity) {
        this.grainCapacity = grainCapacity;
    }

    
    @Column(name="bale_capacity", precision=22, scale=0)
    public Double getBaleCapacity() {
        return this.baleCapacity;
    }
    
    public void setBaleCapacity(Double baleCapacity) {
        this.baleCapacity = baleCapacity;
    }

    
    @Column(name="ho_ha", precision=22, scale=0)
    public Double getHoHa() {
        return this.hoHa;
    }
    
    public void setHoHa(Double hoHa) {
        this.hoHa = hoHa;
    }

    
    @Column(name="ho_ha_type", precision=22, scale=0)
    public Double getHoHaType() {
        return this.hoHaType;
    }
    
    public void setHoHaType(Double hoHaType) {
        this.hoHaType = hoHaType;
    }

    
    @Column(name="tank_top_strength", precision=22, scale=0)
    public Double getTankTopStrength() {
        return this.tankTopStrength;
    }
    
    public void setTankTopStrength(Double tankTopStrength) {
        this.tankTopStrength = tankTopStrength;
    }

    
    @Column(name="hatch_cover_strength", precision=22, scale=0)
    public Double getHatchCoverStrength() {
        return this.hatchCoverStrength;
    }
    
    public void setHatchCoverStrength(Double hatchCoverStrength) {
        this.hatchCoverStrength = hatchCoverStrength;
    }




}


