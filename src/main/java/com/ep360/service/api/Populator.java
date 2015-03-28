package com.ep360.service.api;

import com.ep360.exception.ConversionException;

public interface Populator<SOURCE,TARGET> {

	void populate(SOURCE source, TARGET target) throws ConversionException;
}
