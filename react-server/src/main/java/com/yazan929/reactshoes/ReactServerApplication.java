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
        this.shoeRepository.save(new Shoe("photos/Men5.jpg", "shoe5", "This shoe is cool"));
        this.shoeRepository.save(new Shoe("photos/Men6.jpg", "shoe6", "This shoe is xd"));
        this.shoeRepository.save(new Shoe("photos/women1.jpg", "shoe7", "This shoe is working"));
        this.shoeRepository.save(new Shoe("photos/women2.jpg", "shoe8", "This shoe is blalba"));
        this.shoeRepository.save(new Shoe("photos/women3.jpg", "shoe9", "This shoe is cool"));
        this.shoeRepository.save(new Shoe("photos/women4.jpg", "shoe10", "This shoe is xd"));
        this.shoeRepository.save(new Shoe("photos/women5.jpg", "shoe11", "This shoe is working"));
        this.shoeRepository.save(new Shoe("photos/women6.jpg", "shoe12", "This shoe is blalba"));
        this.shoeRepository.save(new Shoe("photos/Kids1.jpg", "shoe13", "This shoe is cool"));
        this.shoeRepository.save(new Shoe("photos/Kids2.jpg", "shoe14", "This shoe is xd"));
        this.shoeRepository.save(new Shoe("photos/Kids3.jpg", "shoe15", "This shoe is working"));
        this.shoeRepository.save(new Shoe("photos/Kids4.jpg", "shoe16", "This shoe is blalba"));
        this.shoeRepository.save(new Shoe("photos/Kids5.jpg", "shoe17", "This shoe is test"));
        this.shoeRepository.save(new Shoe("photos/Kids6.jpg", "shoe18", "This shoe is for kids"));

        
        
        
        
        
        
        
        
        
        
    }
}
	
	
	
	
	
	
	
	
	
	
	
	


