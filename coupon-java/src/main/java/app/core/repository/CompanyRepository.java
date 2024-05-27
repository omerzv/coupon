package app.core.repository;

import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;

import app.core.entity.Company;




public interface CompanyRepository extends JpaRepository<Company, Integer>{
	
	
	
	 boolean existsByEmail(String email);

	 boolean existsByName(String password);

	Optional<Company> findByEmailAndPassword(String email, String password);
	
	
}
