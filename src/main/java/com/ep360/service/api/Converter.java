package com.ep360.service.api;

import com.ep360.exception.ConversionException;

public interface Converter<SOURCE,TARGET> {

	TARGET convert(SOURCE source) throws ConversionException;
	
	TARGET convert(SOURCE source, TARGET prototype) throws ConversionException;
}
