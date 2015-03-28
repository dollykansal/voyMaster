package com.ep360.controllers;

import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Scope;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;

import com.ep360.data.models.VesselMaster;
import com.ep360.data.models.VoyHeader;
import com.ep360.facade.voyage.VoyageFacade;
import com.google.gson.Gson;

@Controller
@Scope(value="prototype")
public class VoyageMaster {

	@Autowired
	private Gson gson;
	
	@Autowired
	private VoyageFacade vesselFacade;
	
	@RequestMapping(value = "/voyHeader", method = RequestMethod.GET)
	@ResponseBody
	public List<VoyHeader> getVoyageHeaderData(){
		return vesselFacade.getVoyageHeaderData();
	}
	
	@RequestMapping(value = "/vesselMaster", method = RequestMethod.GET)
	@ResponseBody
	public List<VesselMaster> getVoyageMasterData(){
		return vesselFacade.getVoyageMasterData();
	}
	
	@RequestMapping(value = "/")
	public ModelAndView getHomePage(){
		ModelAndView modelAndView = new ModelAndView("home");
		modelAndView.addObject("vesselMaster", gson.toJson(vesselFacade.getVoyageMasterData()));
		modelAndView.addObject("demands", gson.toJson(vesselFacade.getDemands()));
		
		modelAndView.addObject("estimates", gson.toJson(vesselFacade.getVoyageVesselList()));
		return modelAndView;
	}
	
	@RequestMapping(value = "/saveCalData")
	@ResponseBody
	public Map<String,String> saveData(@RequestBody Map<Object,Object> reqData){
		UserDetails auth = (UserDetails)SecurityContextHolder.getContext().getAuthentication().getPrincipal();
		Map<String,String> response = new HashMap<String, String>();
		response.put("result","success");
		if(reqData!=null){
			vesselFacade.saveData(reqData, auth.getUsername());
		}
		return response;
	}
}
