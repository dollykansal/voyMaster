package com.ep360.service.impl;

import com.ep360.exception.ConversionException;
import com.ep360.service.api.Converter;
import com.ep360.service.api.Populator;


public abstract class AbstractConverter<SOURCE, TARGET> implements Converter<SOURCE, TARGET>, Populator<SOURCE, TARGET>
{
	@Override
	public TARGET convert(final SOURCE source) throws ConversionException
	{
		return convert(source, createTarget());
	}

	@Override
	public TARGET convert(final SOURCE source, final TARGET prototype) throws ConversionException
	{
		populate(source, prototype);
		return prototype;
	}

	/**
	 * Override this method to create the instance of target type.
	 * 
	 * @return the new target instance
	 */
	protected abstract TARGET createTarget();

	/**
	 * Override this method to populate the target from the source
	 * 
	 * @param source
	 *           the source instance
	 * @param target
	 *           the target instance to fill
	 */
	@Override
	public abstract void populate(final SOURCE source, final TARGET target);
}
