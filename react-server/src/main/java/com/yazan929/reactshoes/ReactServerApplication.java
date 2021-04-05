package com.yazan929.reactshoes;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.CommandLineRunner;
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

import com.yazan929.reactshoes.modal.Shoe;
import com.yazan929.reactshoes.repository.ShoeRepository;


@SpringBootApplication
public class ReactServerApplication implements CommandLineRunner {

	public static void main(String[] args) {
		SpringApplication.run(ReactServerApplication.class, args);

	}
	
	
	
	@Autowired
    private ShoeRepository shoeRepository;

    @Override

    public void run(String...args) throws Exception {
        this.shoeRepository.save(new Shoe("photos/Men1.jpg", "shoe1", "This shoe is cool"));
        this.shoeRepository.save(new Shoe("photos/Men2.jpg", "shoe2", "This shoe is xd"));
        this.shoeRepository.save(new Shoe("photos/Men3.jpg", "shoe3", "This shoe is working"));
        this.shoeRepository.save(new Shoe("photos/Men4.jpg", "shoe4", "This shoe is blalba"));
    }
}
	
	
	
	
	
	
	
	
	
	
	
	


