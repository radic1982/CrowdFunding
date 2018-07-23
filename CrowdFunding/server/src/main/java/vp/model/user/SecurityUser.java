package vp.model.user;

import java.util.ArrayList;
import java.util.List;

import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;
import javax.persistence.GeneratedValue;
import javax.persistence.Id;
import javax.persistence.OneToMany;
import javax.persistence.Table;

import vp.model.Project;

@Entity
@Table(catalog="crowdfunding", name="security_user")
public class SecurityUser {

	@Id
	@GeneratedValue
	private Long id;

	private String username;

	private String password;

	private String email;

	@Enumerated(EnumType.STRING)
	private Role role;
	
	@OneToMany()
	private List<Project> paidProjects = new ArrayList<>();
	
	@OneToMany()
	private List<Project> myProjects = new ArrayList<>();

	public SecurityUser() { }

	public SecurityUser(Long id, String username, String password, String email) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
	}

	public SecurityUser(Long id, String username, String password, String email, Role role, List<Project> paidProjects,
			List<Project> myProjects) {
		super();
		this.id = id;
		this.username = username;
		this.password = password;
		this.email = email;
		this.role = role;
		this.paidProjects = paidProjects;
		this.myProjects = myProjects;
	}

	public Long getId() {
		return id;
	}

	public void setId(Long id) {
		this.id = id;
	}

	public String getUsername() {
		return username;
	}

	public void setUsername(String username) {
		this.username = username;
	}

	public String getPassword() {
		return password;
	}

	public void setPassword(String password) {
		this.password = password;
	}

	public String getEmail() {
		return email;
	}

	public void setEmail(String email) {
		this.email = email;
	}

	public Role getRole() {
		return role;
	}

	public void setRole(Role role) {
		this.role = role;
	}

	public List<Project> getPaidProjects() {
		return paidProjects;
	}

	public void setPaidProjects(List<Project> paidProjects) {
		this.paidProjects = paidProjects;
	}

	public List<Project> getMyProjects() {
		return myProjects;
	}

	public void setMyProjects(List<Project> myProjects) {
		this.myProjects = myProjects;
	}

}
