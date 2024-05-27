package app.core.entity;

import java.util.List;

import javax.persistence.CascadeType;
import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import javax.persistence.OneToMany;

import com.fasterxml.jackson.annotation.JsonIgnore;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.NoArgsConstructor;
import lombok.ToString;

@Entity
@Data
@ToString(exclude = "coupons")
@AllArgsConstructor
@NoArgsConstructor
@EqualsAndHashCode(of="id")
public class Company {
	@Id
	@GeneratedValue(strategy = GenerationType.IDENTITY)
	private int id;
	private String name;
	private String email;
	private String password;
	@JsonIgnore
	@OneToMany(mappedBy = "company",cascade = CascadeType.ALL)
	private List<Coupon>coupons;
	
	public Company(String name, String email, String password) {

		this.id = 0;
		this.name = name;
		this.email = email;
		this.password = password;
		this.coupons = null;

	}
	
	
}
