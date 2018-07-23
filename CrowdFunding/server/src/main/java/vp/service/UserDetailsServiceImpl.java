package vp.service;

import java.util.Collections;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.core.GrantedAuthority;
import org.springframework.security.core.authority.SimpleGrantedAuthority;
import org.springframework.security.core.userdetails.User;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.core.userdetails.UsernameNotFoundException;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import vp.model.user.Register;
import vp.model.user.Role;
import vp.model.user.SecurityUser;
import vp.repository.UserRepository;

@Service
public class UserDetailsServiceImpl implements UserDetailsService {

    @Autowired
    private UserRepository repository;
    
	@Autowired
	PasswordEncoder passwordEncoder;
    
    public List<SecurityUser> findAll() {
    	return repository.findAll();
    }
    
    @Override
    @Transactional
    public UserDetails loadUserByUsername(final String username) throws UsernameNotFoundException {
        final SecurityUser user = repository.findByUsername(username)
                .orElseThrow(() -> new UsernameNotFoundException(String.format("No user found with username '%s'.", username)));
        final List<GrantedAuthority> grantedAuthorities = Collections.singletonList(new SimpleGrantedAuthority(user.getRole().name()));

        return new User(user.getUsername(), user.getPassword(), grantedAuthorities);
    }
    
	 public SecurityUser register(Register register) {
			if (repository.findByUsername(register.getUsername()) != null) {
				return null;
			} else {
				SecurityUser securityUser = new SecurityUser();
				securityUser.setEmail(register.getEmail());
				securityUser.setUsername(register.getUsername());
				securityUser.setPassword(passwordEncoder.encode(securityUser.getPassword()));
				securityUser.setRole(Role.USER);
				
				return repository.save(securityUser);
			}
	  }
    
}
