package com.example.salon.util;



import java.security.Key;
import java.util.Date;
import java.util.HashMap;
import java.util.Map;
import java.util.function.Function;

import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.stereotype.Component;

import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import io.jsonwebtoken.io.Decoders;
import io.jsonwebtoken.security.Keys;

@Component
public class JwtUtil {
	    private String secretKey="404E635266556A586E3272357538782F413F4428472B4B6250645367566B5970";
	    private static final long EXPIRATION_TIME = 86400000;
	    public String extractUserEmail(String token) {
	        return extractClaim(token, Claims::getSubject); 
	    }
	    public <T> T extractClaim(String token, Function<Claims, T> claimsResolver) {
	        final Claims claims = extractAllClaims(token);
	        return claimsResolver.apply(claims);
	    }

	    private Claims extractAllClaims(String token) {
	        return Jwts
	                .parserBuilder()
	                .setSigningKey(getSigningKey())
	                .build()
	                .parseClaimsJws(token)
	                .getBody();
	    }

	    public String generateToken(UserDetails userDetails) {
	    	System.out.println(createToken(new HashMap<>(),userDetails));
	        return createToken(new HashMap<>(), userDetails);
	    }

	    public String createToken(Map<String, Object> extraClaims, UserDetails userDetails) {
	    	
	        return Jwts
	                .builder()
	                .setClaims(extraClaims)
	                .setSubject(userDetails.getUsername())
	                .setIssuedAt(new Date(System.currentTimeMillis()))
	                .setExpiration(new Date(System.currentTimeMillis() + 1 * 1 * 60 * 1000))
	                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
	                .compact();
	    }

	    private Key getSigningKey() {
	        byte[] keyBytes = Decoders.BASE64.decode(secretKey);
	        return Keys.hmacShaKeyFor(keyBytes);
	    }

	    public boolean isTokenValid(String token, UserDetails userDetails) {
	        final String email = extractUserEmail(token);
	        return (email.equals(userDetails.getUsername())) && !isTokenExpired(token);
	    }

	    public boolean isTokenExpired(String token) {
	        return extractExpiration(token).before(new Date());
	    }

	    private Date extractExpiration(String token) {
	        return extractClaim(token, Claims::getExpiration);
	    }
	    public String createTokenWithUserDetails(UserDetails userDetails) {
	        Map<String, Object> claims = new HashMap<>();
	        claims.put("email", userDetails.getUsername()); // Add email as a claim

	        return Jwts.builder()
	                .setClaims(claims)
	                .setSubject(userDetails.getUsername())
	                .setIssuedAt(new Date(System.currentTimeMillis()))
	                .setExpiration(new Date(System.currentTimeMillis() + EXPIRATION_TIME))
	                .signWith(getSigningKey(), SignatureAlgorithm.HS256)
	                .compact();
	    }

}
