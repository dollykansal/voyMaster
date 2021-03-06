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
 * VesselHoldDimension generated by hbm2java
 */
@Entity
@Table(name="vessel_hold_dimension"
    ,catalog="voyage"
    , uniqueConstraints = @UniqueConstraint(columnNames="vessel_master_id") 
)
public class VesselHoldDimension  implements java.io.Serializable {


     private Integer vesselHoldDimId;
     private VesselMaster vesselMaster;
     private Double length;
     private Double beam;

    public VesselHoldDimension() {
    }

    public VesselHoldDimension(VesselMaster vesselMaster, Double length, Double beam) {
       this.vesselMaster = vesselMaster;
       this.length = length;
       this.beam = beam;
    }
   
     @Id @GeneratedValue(strategy=IDENTITY)

    
    @Column(name="vessel_hold_dim_id", unique=true, nullable=false)
    public Integer getVesselHoldDimId() {
        return this.vesselHoldDimId;
    }
    
    public void setVesselHoldDimId(Integer vesselHoldDimId) {
        this.vesselHoldDimId = vesselHoldDimId;
    }

@ManyToOne(fetch=FetchType.LAZY)
    @JoinColumn(name="vessel_master_id", unique=true)
    public VesselMaster getVesselMaster() {
        return this.vesselMaster;
    }
    
    public void setVesselMaster(VesselMaster vesselMaster) {
        this.vesselMaster = vesselMaster;
    }

    
    @Column(name="length", precision=22, scale=0)
    public Double getLength() {
        return this.length;
    }
    
    public void setLength(Double length) {
        this.length = length;
    }

    
    @Column(name="beam", precision=22, scale=0)
    public Double getBeam() {
        return this.beam;
    }
    
    public void setBeam(Double beam) {
        this.beam = beam;
    }




}


