package vp.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.authentication.AuthenticationManager;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.Authentication;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import vp.model.user.Login;
import vp.model.user.Register;
import vp.model.user.SecurityUser;
import vp.model.user.Token;
import vp.security.TokenUtils;
import vp.service.UserDetailsServiceImpl;

@RestController
public class UserController {
	
	@Autowired
	AuthenticationManager authenticationManager;

	@Autowired
	private UserDetailsServiceImpl service;

	@Autowired
	TokenUtils tokenUtils;
	
    @PostMapping(value = "/api/login")
    public ResponseEntity<Token> login(@RequestBody Login login) {
        try {
            final UsernamePasswordAuthenticationToken token = new UsernamePasswordAuthenticationToken(login.getUsername(), login.getPassword());
            final Authentication authentication = authenticationManager.authenticate(token);
            SecurityContextHolder.getContext().setAuthentication(authentication);
            final UserDetails details = service.loadUserByUsername(login.getUsername());
            final String genToken = tokenUtils.generateToken(details);
            Token retVal = new Token();
            retVal.setToken(genToken);
            return new ResponseEntity<>(retVal, HttpStatus.OK);
        } catch (Exception ex) {
            return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
        }
    }
    
    @PostMapping(value = "/api/register")
    public ResponseEntity<Void> register(@RequestBody Register register) {
    	SecurityUser user = new SecurityUser();
    	user = service.register(register);

		if (user != null) {
			return new ResponseEntity<>(HttpStatus.CREATED);
		} else {
			return new ResponseEntity<>(HttpStatus.BAD_REQUEST);
		}
    }

}