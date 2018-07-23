package vp.model;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(catalog="crowdfunding", name="project")
public class Project {
	
	@Id
	@GeneratedValue
	private Long id;

	private String name;

	private String username;

	private String description;

	private Double paidPrice;
	
	private Double wantedPrice;

	public Project() {}

	public Project(Long id, String name, String username, String description, Double paidPrice, Double wantedPrice) {
		super();
		this.id = id;
		this.name = name;
		this.username = username;
		this.description = description;
		this.paidPrice = paidPrice;
		this.wantedPrice = wantedPrice;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getName() {
		return name;
	}

	public void setName(String name) {
		this.name = name;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getDescription() {
		return description;
	}

	public void setDescription(String description) {
		this.description = description;
	}

	public Double getPaidPrice() {
		return paidPrice;
	}

	public void setPaidPrice(Double paidPrice) {
		this.paidPrice = paidPrice;
	}

	public Double getWantedPrice() {
		return wantedPrice;
	}

	public void setWantedPrice(Double wantedPrice) {
		this.wantedPrice = wantedPrice;
	}
	
}
