package app.core.service;

import org.springframework.beans.factory.annotation.Autowired;

import app.core.repository.CompanyRepository;
import app.core.repository.CouponRepository;
import app.core.repository.CustomerRepository;

public abstract class ClientService {
	@Autowired
	protected CompanyRepository companyRepository;
	@Autowired
	protected CustomerRepository customerRepository;
	@Autowired
	protected CouponRepository couponRepository;
	
	public abstract boolean login(String email,String password); 
 }
