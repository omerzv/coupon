package app.core.service;

import java.util.List;
import java.util.Optional;

import javax.transaction.Transactional;

import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Service;

import app.core.entity.Company;
import app.core.entity.Customer;
import app.core.exception.CouponSystemException;

@Service
@Transactional
public class AdminService extends ClientService {
	@Value("${client.admin.email}")
	private String email;
	@Value("${client.admin.password}")
	private String password;
	
	
	@Override
	public boolean login(String email, String password) {
		
		return email.equals(this.email)&&password.equals(this.password);
	}
	
	
	/**
	 * @param company the company to add
	 * @throws CouponSystemException if company email and name exists
	 */
	public Company addCompany(Company company) {
		if(companyRepository.existsByEmail(company.getEmail())) {
			throw new CouponSystemException("the email is taken");
		}
		if(companyRepository.existsByName(company.getName())) {
			throw new CouponSystemException("the name is taken");
		}
		return companyRepository.save(company);
	}
	/**
	 * @param company the company to update
	 * @return 
	 * @throws CouponSystemException if the company not found
	 */
	public Company updateCompany(Company company) {
		Optional<Company> op=companyRepository.findById(company.getId());
		if(op.isPresent()) {
			Company updateCompany=op.get();
			updateCompany.setEmail(company.getEmail());
			updateCompany.setName(company.getName());
			if(company.getPassword()!=null) {
				updateCompany.setPassword(company.getPassword());
			}
			return companyRepository.save(updateCompany);
		}else {
			throw new CouponSystemException("the company not found");
		}
	}
	
	/**
	 * @param companyId the id of the company to delete
	 * @throws CouponSystemException if the company not found
	 */
	public void deleteCompany(int companyId) {
		if(companyRepository.existsById(companyId)) 
			this.companyRepository.deleteById(companyId);
		else
			throw new CouponSystemException("the company not found");
	}
	
	/**
	 * @return all the company in the system
	 */
	public List<Company>  getAllCompanies() {
		List<Company> comp=this.companyRepository.findAll();
		
		return comp;
	}
	
	/**
	 * @param companyId the id of the wanted company
	 * @return the wanted company
	 * @throws if the company not found
	 */
	public Company  getCompany(int companyId) {
		 Optional<Company> op=this.companyRepository.findById(companyId);
		if(op.isPresent()) {
			return op.get();
		}
		else
			throw new CouponSystemException("the company not found: "+companyId);
	}
	
	
	
	
	
	/**
	 * @param customer the customer to add
	 * @return 
	 * @throws CouponSystemException if customer email  exists
	 */
	public Customer addCustomer(Customer customer) {
		System.out.println(customer);
		if(this.customerRepository.existsByEmail(customer.getEmail())) {
			throw new CouponSystemException("the email is taken");
		}
		return this.customerRepository.save(customer);
	}
	/**
	 * @param customer the customer to update
	 * @return 
	 * @throws CouponSystemException if the customer not found
	 */
	public Customer updateCustomer(Customer customer) {
		
		Optional<Customer> op=this.customerRepository.findById(customer.getId());
		if(op.isPresent()) {
			Customer updateCustomer=op.get();
			if(customer.getPassword()!=null) {
				updateCustomer.setPassword(customer.getPassword());
			}
			updateCustomer.setEmail(customer.getEmail());
			updateCustomer.setFirstName(customer.getFirstName());
			updateCustomer.setLastName(customer.getLastName());
			return this.customerRepository.save(updateCustomer);
		}else {
			throw new CouponSystemException("the customer not found");
		}
	}
	
	/**
	 * @param customerId
	 * @throws CouponSystemException if the customer not found
	 */
	public void deleteCustomer(int customerId) {
		try{
			if(this.customerRepository.existsById(customerId)) 
				this.customerRepository.deleteById(customerId);
			else
				throw new CouponSystemException("the customer not found");
		}catch (Exception e) {
			System.out.println(e.getMessage());
		}
	}
	
	/**
	 * @return all the customer in the system
	 */
	public List<Customer>  getAllCustomers() {
		List<Customer> cust=this.customerRepository.findAll();
		
		return cust;
	}
	
	/**
	 * @param customerId the id of the wanted customer
	 * @return the wanted customer
	 * @throws if the customer not found
	 */
	public Customer  getCustomer(int customerId) {
		 Optional<Customer> op=this.customerRepository.findById(customerId);
			if(op.isPresent()) {
				return op.get();
			}
		else
			throw new CouponSystemException("the Customer not found: "+customerId);
	}
}
