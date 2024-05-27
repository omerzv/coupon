package app.core.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import app.core.entity.Customer;



public interface CustomerRepository extends JpaRepository<Customer, Integer>{
	 boolean existsByEmail(String email);
	 Optional<Customer> findByEmailAndPassword(String email, String password);
	 
	 
}
